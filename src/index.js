//di seguito importo due elementi della libreria react router dom che mi permettono di usufruire della paginazione
import { BrowserRouter } from "react-router";
import ReactDOM from "react-dom/client";

//importo il css
import "./index.css";

//infine importo il file app.js che contiene l'intera applicazione
import App from "./App";

/*di seguito in una costante mi salvo il punto dell'html selezionato tramite id
 su cui poi far girare la mia applicazione react */
const root = ReactDOM.createRoot(document.getElementById("root"));

//utilizzo render per far apparire il tutto sulla pagina nel browser utilizzato per far girare l'applicazione
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
