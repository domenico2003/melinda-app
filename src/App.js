/*Questo file è utilizzato per impostare le diverse pagine di cui il sito è composto.
 Questa funzionalità è resa possibile grazie alla libreria react-router-dom 
 i cui componenti sono importati di seguito */
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Di seguito importo i diversi fali jsx che poi diventeranno le vere e proprie paginedel sito
import { Home } from "./components/pages/home";
import { ChiSiamo } from "./components/pages/chiSiamo";
import { Ambiente } from "./components/pages/ambiente";
import { Persone } from "./components/pages/persone";
import { Report } from "./components/pages/report";

// Qui importo la navbar e il footer, elementi presenti in ogni pagina quindi li implemento direttamente in questo file
import { Navbar } from "./components/navbar";
import { Footer } from "./components/footer";

// infine importo il css per lo stile
import "./App.css";

function App() {
  return (
    //qui apro il browserrouter che permette di gestire le diverse rotte senza ricaricare la pagina
    <BrowserRouter>
      {/*qui inserisco la navbar da mostrare in tutte le pagine */}
      <Navbar />
      {/*di seguito indico tutte le rotte e ogni tag route indica la singola rotta*/}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chi-siamo" element={<ChiSiamo />} />
        <Route path="/ambiente" element={<Ambiente />} />
        <Route path="/persone" element={<Persone />} />
        <Route path="/Report" element={<Report />} />
      </Routes>
      {/*qui inserisco il footer da mostrare in tutte le pagine */}
      <Footer />
    </BrowserRouter>
  );
}

//qui esporto la funzione che mi contiene l'intera app per poi importarla su index.js
export default App;
