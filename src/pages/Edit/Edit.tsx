import { useEffect, useState } from "react";
import "../Admin/Admin.scss";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { editReq } from "../../redux/features/TodoSlice";
import { useNavigate, useParams } from "react-router-dom";

const Edit = ({ darkMode }: any) => {
  const navigate = useNavigate();
  const appDispatch = useAppDispatch();
  const appSelector = useAppSelector((s) => s.todo);

  const { id } = useParams();

  interface typeState {
    requirment: string;
    salary: number;
    plot: string;
  }

  const [data, setData] = useState<typeState>({
    requirment: "",
    salary: 0,
    plot: "",
  });

  function editProduct() {
    appSelector.filter((dashboard) => {
      if (dashboard._id == id) {
        setData(dashboard);
      }
    });
  }

  function addData(e: any) {
    setData({ ...data, [e.target.name]: e.target.value });
  }

  useEffect(() => {
    editProduct();
  }, []);
  return (
    <div className="admin">
      <div className="tema">
        <h1
          style={{
            color: darkMode ? "#17ff00" : "",
          }}
        >
          Изменить доску обьевлений
        </h1>
      </div>
      <input
        onChange={addData}
        name="requirment"
        type="text"
        placeholder="Сотрудник..."
        value={data.requirment}
      />
      <input
        onChange={addData}
        name="plot"
        type="text"
        placeholder="Описание..."
        value={data.plot}
      />
      <input
        onChange={addData}
        name="salary"
        type="number"
        placeholder="Зарплата..."
        value={data.salary == 0 ? "" : data.salary}
      />
      <button>
        <span
          className="button_top"
          onClick={() => {
            appDispatch(editReq(data));
            navigate("/");
          }}
        >
          Изменить доску
        </span>
      </button>
    </div>
  );
};

export default Edit;
