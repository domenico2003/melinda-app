//import elementi di react-bootstrap
import { Offcanvas } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

//import link per la paginazione, funzionalità offerta da react-router
import { NavLink } from "react-router";

//importo il logo di melinda
import Logo from "./logo.png";

//dichiaro la funzione che contieniene il codice della navbar
function Nav() {
  //inserisco il codice nel return
  return (
    <>
      {/* apro il tag react bootstrap che contiene la navbar e la personalizzo con attributi e classi offerti dalla libreria bootstarp*/}
      <Navbar
        sticky="top"
        key={"md"}
        expand={"md"}
        data-bs-theme="dark"
        className="navbar"
      >
        {/*contenuto vero e proprio della navbar*/}
        <Container>
          <NavLink to="/">
            <img src={Logo} alt="logo melinda" className="" />
          </NavLink>
          {/*contenuto responsive della navbar che compare solo su dispositivi di medie dimensioni e superiori*/}
          <Container fluid className="d-none d-md-flex  justify-content-end ">
            <Container
              fluid
              className="d-flex m-0 linkNav justify-content-evenly "
            >
              <NavLink
                className="link-opacity-50-hover link-light link-underline link-underline-opacity-0"
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
          {/*contenuto responsive della navbar che compare su dispositii di dimensioni ineriori a quella media*/}
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-md`}
            aria-labelledby={`offcanvasNavbarLabel-expand-md`}
            placement="end"
          >
            <Offcanvas.Header closeButton className="navbar titolo ">
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
                MELINDA
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className="navbar d-flex align-items-start">
              <Container fluid className="d-flex align-items-start h-50 ">
                <Container
                  fluid
                  className="d-flex d-md-none flex-column justify-content-around h-75  align-items-center "
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
              <span className="align-self-end d-md-none">
                Progetto realizzato a scopo accademico
              </span>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

//esporto la navbar per utilizzarla in futuro
export default Nav;
