import { Route, Routes } from "react-router-dom";
import Admin from "../pages/Admin/Admin";
import Home from "../pages/Home/Home";
import Edit from "../pages/Edit/Edit";

const MainRoutes = ({darkMode}:any) => {
  const PUBLIC = [
    { path: "/", element: <Home darkMode={darkMode}/> },
    { path: "/admin", element: <Admin darkMode={darkMode}/> },
    { path: "/edit/:id", element: <Edit darkMode={darkMode}/> },
  ];
  return (
    <div>
      <Routes>
        {PUBLIC.map((pages, index) => (
          <Route path={pages.path} element={pages.element} key={index} />
        ))}
      </Routes>
    </div>
  );
};

export default MainRoutes;
