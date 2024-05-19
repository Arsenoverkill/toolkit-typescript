import { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "../../redux/store";
import { delReq, getReq } from "../../redux/features/TodoSlice";
import "./Home.scss";
import { NavLink } from "react-router-dom";

const Home = ({ darkMode }: any) => {
  const dispatch = useAppDispatch();
  const {todo,isLoading} = useAppSelector((s) => s);
  const [change, setChange] = useState<boolean>(false);

  useEffect(() => {
    dispatch(getReq());
  }, []);

  return isLoading ? (
    <div className="loading">
      <div className="dot-spinner">
        <div className="dot-spinner__dot"></div>
        <div className="dot-spinner__dot"></div>
        <div className="dot-spinner__dot"></div>
        <div className="dot-spinner__dot"></div>
        <div className="dot-spinner__dot"></div>
        <div className="dot-spinner__dot"></div>
        <div className="dot-spinner__dot"></div>
        <div className="dot-spinner__dot"></div>
      </div>
    </div>
  ) : (
    <div id="home">
      <button
        style={{
          background: darkMode ? "transparent" : "",
          border: darkMode ? "2px solid #00dd00" : "",
          boxShadow: darkMode ? "0 0 3px .5px #00dd00" : "",
          color: darkMode ? "#00dd00" : "",
        }}
        onClick={() => setChange(!change)}
        className="change"
      >
        Изменить
      </button>
      <div className="container">
        <div className="home_blocks">
          {todo.map((dashboard) => (
            <div className="home">
              <h2
                style={{
                  color: darkMode ? "white" : "black",
                }}
              >
                Требуеться: {dashboard.requirment}
              </h2>
              <h4
                style={{
                  color: darkMode ? "white" : "black",
                }}
              >
                Зарплата: ${dashboard.salary}
              </h4>
              <p
                style={{
                  color: darkMode ? "white" : "",
                }}
              >
                {dashboard.plot.length > 90
                  ? dashboard.plot.slice(0, 90).concat("...")
                  : dashboard.plot}
              </p>
              <div
                style={{
                  display: change ? "flex" : "none",
                }}
                className="edit_delet"
              >
                <NavLink to={`/edit/${dashboard._id}`}>
                  <button
                    style={{
                      background: darkMode ? "transparent" : "",
                      border: darkMode ? "2px solid #00dd00" : "",
                      boxShadow: darkMode ? "0 0 3px .5px #00dd00" : "",
                      color: darkMode ? "#00dd00" : "",
                    }}
                    className="edit"
                  >
                    изменить
                  </button>
                </NavLink>
                <button
                  style={{
                    background: darkMode ? "transparent" : "",
                    border: darkMode ? "2px solid red" : "",
                    boxShadow: darkMode ? "0 0 3px .5px red" : "",
                    color: darkMode ? "red" : "",
                  }}
                  onClick={() => dispatch(delReq(dashboard._id))}
                  className="delete"
                >
                  удалить
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
// arsen