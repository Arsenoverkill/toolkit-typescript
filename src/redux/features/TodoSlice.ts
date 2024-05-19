import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface initialStateType {
  todo: TodoData[];
  isLoading: boolean;
  error: string;
}
const initialState: initialStateType = {
  todo: [],
  isLoading: false,
  error: "",
};

const url = import.meta.env.VITE_URL;

export const getReq = createAsyncThunk("todo/get", async () => {
  try {
    const response = await axios(url);
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

export const postReq = createAsyncThunk(
  "todo/post",
  async (newData: TODO.postReq) => {
    try {
      const response = await axios.post(url, newData);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);
export const delReq = createAsyncThunk(
  "todo/delete",
  async (delData: TODO.delReq) => {
    try {
      const response = await axios.delete(`${url}/${delData}`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);
export const editReq = createAsyncThunk(
  "todo/edit",
  async (editData: TODO.editReq) => {
    try {
      const { _id, ...data }: any = editData;
      const response = await axios.patch(`${url}/${data._id}`, data);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);
export const TodoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // ! getReq
      .addCase(getReq.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getReq.fulfilled, (state, actions) => {
        state.todo = actions.payload;
        state.isLoading = false;
      })
      .addCase(getReq.rejected, (state, actions) => {
        state.isLoading = false;
        state.error = actions.error.message || "Invalid getReq";
      })
      // ! postReq
      .addCase(postReq.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(postReq.fulfilled, (state, actions) => {
        state.todo = actions.payload;
        state.isLoading = false;
      })
      .addCase(postReq.rejected, (state, actions) => {
        state.isLoading = false;
        state.error = actions.error.message || "Invalid postReq";
      })
      // ! delReq
      .addCase(delReq.fulfilled, (state, actions) => {
        state.todo = actions.payload;
      })
      .addCase(delReq.rejected, (state, actions) => {
        state.error = actions.error.message || "Invalid deleteReq";
      })
      // ! editReq
      .addCase(editReq.fulfilled, (state, actions) => {
        state.todo = actions.payload;
      })
      .addCase(editReq.rejected, (state, actions) => {
        state.error = actions.error.message || "Invalid deleteReq";
      });
  },
});

export default TodoSlice.reducer;
