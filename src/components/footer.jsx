//import elementi di react-bootstrap
import { Container } from "react-bootstrap";

//import link per la paginazione, funzionalità offerta da react-router
import { NavLink } from "react-router";

//importo il logo di melinda
import Logo from "./img/logo.png";

//dichiaro la funzione che contieniene il codice del footer
function Footer() {
  //inserisco il codice nel return
  return (
    <>
      {/* codice footer*/}
      <Container
        fluid
        className="  d-flex flex-column justify-content-between  footer"
      >
        {/* le tre sezioni footer*/}
        <Container fluid className="d-flex flex-column flex-fill flex-md-row ">
          {/*sezione logo*/}
          <Container
            fluid
            className="d-flex justify-content-center  justify-content-md-start"
          >
            <img src={Logo} alt="logo melinda" />
          </Container>
          {/*sezione pagine*/}
          <Container
            fluid
            className="d-flex flex-column justify-content-center  "
          >
            <Container
              fluid
              className="d-flex flex-column bordi-link justify-self-center justify-content-around h-50  align-items-center pt-3 pt-md-0 pb-3 pb-md-0 mt-4 mt-md-0 mb-4 mb-md-0 "
            >
              <NavLink
                className="link-opacity-50-hover link-light link-underline link-underline-opacity-0 d-inline"
                to="/chi-siamo"
              >
                Chi siamo
              </NavLink>
              <NavLink
                className="link-opacity-50-hover link-light link-underline link-underline-opacity-0"
                to="/ambiente"
              >
                Ambiente
              </NavLink>
              <NavLink
                className=" link-opacity-50-hover link-light link-underline link-underline-opacity-0"
                to="/persone"
              >
                Persone
              </NavLink>
              <NavLink
                className="link-opacity-50-hover link-light link-underline link-underline-opacity-0"
                to="/Report"
              >
                Report
              </NavLink>
            </Container>
          </Container>
          {/*sezione didascalia sostenibilità*/}
          <Container
            fluid
            className="d-flex  align-items-center justify-content-center mb-5"
          >
            <Container className="w-50 d-none d-sm-block d-md-none d-lg-block"></Container>
            <p className="introduzione mt-md-5 ">
              La capacità di equilibrare la sostenibilità sociale, quella
              economica e quella ambientale, argomentata in questo sito, porta
              con sé il senso stesso del concetto di sviluppo sostenibile,
              diventato centrale in ogni ambito in cui operiamo, ancor prima che
              la redazione del bilancio di sostenibilità diventi obbligatoria.
            </p>
            <Container className="w-50 d-none d-sm-block d-md-none d-lg-block"></Container>
          </Container>
        </Container>
        {/*copyright*/}
        <p className="d-block copy">
          Consorzio Melinda copyright 2026 P.IVA e CF 01567870223 - Fattura
          elettronica - Codice destinatario: M5UXCR1. Contributo dell’U.E. REG.
          1308/2013
        </p>
      </Container>
    </>
  );
}

//esporto il footer per utilizzarla in futuro
export default Footer;
