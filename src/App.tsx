//import PrimeReact, PrimeFlex and PrimeIcons
import { PrimeReactProvider } from "primereact/api";

//primeicons
import "primeicons/primeicons.css";

//default theme
import "primereact/resources/themes/lara-light-green/theme.css";

//primeflex
import "primeflex/primeflex.css";

/* Import Global CSS Styles */
import "./globals.scss";

/* Routes */
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/routes";

function App() {
  return (
    <PrimeReactProvider>
      <RouterProvider router={router} />
    </PrimeReactProvider>
  );
}

export default App;
