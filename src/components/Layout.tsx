import { Outlet, useNavigate } from "react-router-dom";
import "../styles/layout.css";
import { useState } from "react";

const Layout = () => {
  const navigate = useNavigate();
  const [path, setPath] = useState<string>("/");

  const goTo = (e: string) => {
    navigate(e);
    setPath(e);
  };

  return (
    <div>
      <button
        disabled={path === "/"}
        onClick={() => goTo("/")}
        className="button"
      >
        Tebak Angka
      </button>
      <button
        disabled={path === "/gallery"}
        onClick={() => goTo("/gallery")}
        className="button"
      >
        Gallery
      </button>
      <div className="outlet-container">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
