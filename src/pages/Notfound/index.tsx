/* 404 error page */
import "./index.scss";
import { Link } from "react-router-dom";
// @ts-expect-error ReactComponent is valid
import { ReactComponent as Page404 } from "@assets/svgs/404 Error-amico.svg";

//https://storyset.com/404
export const NotFound = () => {
  return (
    <div className="page_404">
      <div className="svg-container">
        <Page404 />
      </div>
      <div className="content">
        <h3>Hoppá! Ez az oldal nem létezik.</h3>
        <p>Elnézést kérünk, de a keresett oldal nem található.</p>
        <Link to="/">Vissza a kezdőlapra</Link>
      </div>
    </div>
  );
};
