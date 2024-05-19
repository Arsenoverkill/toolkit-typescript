import { useState } from "react";
import "./Admin.scss";
import { useAppDispatch } from "../../redux/store";
import { postReq } from "../../redux/features/TodoSlice";
import smile from "../../assets/2232238.webp";

const Admin = ({ darkMode }: any) => {
  const appDispatch = useAppDispatch();

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

  function addData(e: any) {
    setData({ ...data, [e.target.name]: e.target.value });
  }
  return (
    <div className={`admin ${darkMode ? 'admin-dark' : ''}`}>
      <div className="tema">
        <h1
          style={{
            color: darkMode ? "#17ff00" : "",
          }}
        >
          Создать доску обьевлений
        </h1>
        <p
          style={{
            color: darkMode ? "rgb(163 163 163)" : "",
          }}
        >
          Создайте свою доску обьевлений, чтобы найти <br /> подходящего
          сотрудника{" "}
          <img
            style={{
              filter: darkMode ? "brightness(700%)" : "",
            }}
            src={smile}
            alt=""
          />
        </p>
      </div>
      <input
        onChange={addData}
        name="requirment"
        type="text"
        placeholder="Сотрудник..."
        value={data.requirment}
        className="input-data"
      />
      <input
        onChange={addData}
        name="plot"
        type="text"
        placeholder="Описание..."
        value={data.plot}
        className="input-data"
      />
      <input
        onChange={addData}
        name="salary"
        type="number"
        placeholder="Зарплата..."
        value={data.salary == 0 ? "" : data.salary}
        className="input-data"
      />
      <button>
        <span
          className="button_top"
          onClick={() => {
            appDispatch(postReq(data));
            setData({
              requirment: "",
              salary: 0,
              plot: "",
            });
          }}
        >
          Создать доску
        </span>
      </button>
    </div>
  );
};

export default Admin;
