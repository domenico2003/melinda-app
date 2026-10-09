/*Import componenti react-bootstrap*/
import {
  Button,
  Card,
  Col,
  Container,
  ProgressBar,
  Row,
} from "react-bootstrap";

/*Import componente personalizzata per le card della sezione iniziative*/
import CardIniziative from "../cardIniziative";

/*Import icone da react-icon*/
import { FaDroplet } from "react-icons/fa6";
import { FaTree } from "react-icons/fa";
import { BiSolidZap } from "react-icons/bi";
import { FaRecycle } from "react-icons/fa";
import { GiBee } from "react-icons/gi";
import { FaHandshakeSimple } from "react-icons/fa6";

/*Import varie immaggini utilizzate  nel sito*/
import fotovoltaicoMelinda from "../img/fotovoltaicoMelinda.jpg";
import acquaMelinda from "../img/acquaMelinda.jpg";
import agricolturaBio from "../img/agricolturaBio.jpg";
import valDiNon from "../img/val-di-non.jpeg";

/*Dichiarazione funzione contenente la home page*/
function Home() {
  /* apertura return che mi ritorna la pagina quando richiamo la funzione*/
  return (
    <>
      {/*============
         SEZIONE HERO
         ============*/}
      <Container fluid className="p-0">
        <Row className=" contenuto-hero g-0">
          <Col md={6}>
            <Container
              fluid
              className="d-flex flex-column justify-content-center h-100 my-4 my-md-0 align-items-center align-items-md-start"
            >
              <p className="m-0">SOSTENIBILITÀ MELINDA</p>
              <h1 className="hero-titolo text-center text-md-start">
                La sostenibilità
                <br />
                <span>che nasce dal territorio.</span>
              </h1>
              <p className=" text-center text-md-start hero-testo">
                Innovazione, cura dell'ambiente, persone e territorio: scopri
                alcune delle attività messe in campo da Melinda per una
                produzione più sostenibile.
              </p>

              <Button
                variant="black"
                size="md"
                className="bottone-hero rounded-pill d-md-none d-lg-block"
                onClick={() => {
                  document.getElementById("iniziative").scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                Scopri le iniziative ↓
              </Button>
            </Container>
          </Col>
          <Col md={6} className="pe-0">
            <Card className="bg-dark text-white rounded-0 mt-4 mt-md-0">
              <Card.Img src={valDiNon} alt="val di non" className="rounded-0" />
              <Card.ImgOverlay className="rounded-0 h-100 w-100">
                <Container
                  fluid
                  className="d-flex flex-column h-100 justify-content-end align-items-start"
                >
                  <Card.Text className="sottotitolo-img mb-1 ">
                    VAL DI NON
                  </Card.Text>
                  <Card.Title className="fs-1 titolo-img">
                    Territorio & Sostenibilità
                  </Card.Title>
                </Container>
              </Card.ImgOverlay>
            </Card>
          </Col>
        </Row>
      </Container>

      {/*====================
         SEZIONE INTRODUZIONE
         ====================*/}
      <Container fluid className="intro mb-5">
        <Row xs={1} md={2} className="h-100">
          <Col>
            <Container
              fluid
              className=" h-100 d-flex flex-column justify-content-center my-4 my-md-0 align-items-center "
            >
              <Container
                fluid
                className="d-inline intro-contenuto  text-center text-md-start"
              >
                <p className="m-0 ">IL MONDO MELINDA</p>
                <h1 className="intro-titolo text-center text-md-start">
                  Una realtà agricola
                  <br /> legata al territorio.
                </h1>
              </Container>
            </Container>
          </Col>
          <Col className=" d-flex align-items-center justify-content-center">
            <p className=" text-center text-md-start intro-testo ">
              Melinda è un consorzio agricolo formato da{" "}
              <span className=" text-decoration-underline">16 cooperative</span>{" "}
              e da oltre{" "}
              <span className=" text-decoration-underline">3.800 famiglie</span>{" "}
              di agricoltori. Il suo percorso di sostenibilità riguarda la
              produzione, la tutela delle risorse, l'innovazione e il rapporto
              con il territorio
            </p>
          </Col>
        </Row>
      </Container>

      {/*=======================
         SEZIONE PRINCIPALI DATI
         =======================*/}
      <Container
        fluid
        className="sezione-dati mt-5 d-flex flex-column justify-content-center"
      >
        <Container fluid className="d-flex justify-content-center dati-header">
          <Container fluid className="mt-5 mt-md-0 mb-3 ">
            <p className="m-0 text-center text-white-50">IL MONDO MELINDA</p>
            <h1 className="dati-titolo text-center  ">
              Alcuni dati dal percorso <br /> di sostenibilità
            </h1>
          </Container>
        </Container>
        <Container className="mb-5 mb-md-0">
          <Row xs={1} sm={2} md={4}>
            <Col
              className="border border-top-0 border-start-0 border-end-0"
              id="famiglie"
            >
              <h1 className="dati-titolo text-center mt-3 ">3.800+</h1>
              <p className="m-0 text-center text-white-50 mb-3">
                famiglie di agricoltori
              </p>
            </Col>
            <Col
              className="border border-top-1 border-start-0 border-end-0"
              id="varieta"
            >
              <h1 className="dati-titolo text-center mt-3 ">99 ha</h1>
              <p className="m-0 text-center text-white-50 mb-3">
                di varietà resistenti nel 2021
              </p>
            </Col>
            <Col
              className="border border-bottom-1  border-start-0 border-end-0"
              id="biologica"
            >
              <h1 className="dati-titolo text-center mt-3 ">240+ ha</h1>
              <p className="m-0 text-center text-white-50 mb-3">
                di agricoltura biologica
              </p>
            </Col>
            <Col
              className="border border-bottom-0 border-start-0 border-end-0"
              id="idroelettrica"
            >
              <h1 className="dati-titolo text-center mt-3 ">90,29%</h1>
              <p className="m-0 text-center text-white-50 mb-3">
                energia idroelettrica nel 2021-22
              </p>
            </Col>
          </Row>
        </Container>
      </Container>

      {/*==================
         SEZIONE INIZIATIVE
         ==================*/}
      <Container fluid id="iniziative" className="mb-5 pb-5">
        <Container
          fluid
          className="d-flex flex-column justify-content-center h-100 my-4 my-md-0 align-items-center container-titolo-iniziative "
        >
          <p className="m-0 premessa ">SOSTENIBILITÀ</p>
          <h1 className="iniziative-titolo text-center mb-0">
            Le nostre iniziative
          </h1>
          <p className=" text-center text-dark">
            Una sintesi delle principali attività rivolte alla sostenibilità.
          </p>
        </Container>
        <Container fluid>
          <Container>
            <Row xs={1} sm={2} md={3} className="g-5 ">
              <Col>
                <CardIniziative
                  icona={<FaTree />}
                  titolo="Agricoltura sostenibile"
                  corpo="Produzione integrata, agricoltura biologica e sviluppo di varietà resistenti."
                  indirizzo="#agricoltura"
                  id="Agricoltura"
                />
              </Col>
              <Col>
                <CardIniziative
                  icona={<FaDroplet />}
                  titolo="Gestione dell'acqua"
                  corpo="Irrigazione a goccia, trattamento e riciclo dell'acqua
                      utilizzata nei processi."
                  indirizzo="#acqua"
                  id="Acqua"
                />
              </Col>
              <Col>
                <CardIniziative
                  icona={<BiSolidZap />}
                  titolo="Energia"
                  corpo="Utilizzo di fonti rinnovabili e interventi orientati alla riduzione dei consumi."
                  indirizzo="#energia"
                  id="Energia"
                />
              </Col>
              <Col>
                <CardIniziative
                  icona={<FaRecycle />}
                  titolo="Imballaggi"
                  corpo="Risparmio, riutilizzo e riciclo dei materiali di confezionamento."
                  indirizzo="#imballaggi"
                  id="Imballaggi"
                />
              </Col>
              <Col>
                <CardIniziative
                  icona={<GiBee />}
                  titolo="Biodiversità"
                  corpo="Tutela degli ecosistemi, api, monitoraggio dei suoli e tecniche di difesa a ridotto impatto."
                  indirizzo="#biodiversità"
                  id="Biodiversita"
                />
              </Col>
              <Col>
                <CardIniziative
                  icona={<FaHandshakeSimple />}
                  titolo="Persone e territorio"
                  corpo="Formazione, sicurezza, inclusione e sostegno alle iniziative della comunità."
                  indirizzo="#persone"
                  id="Persone"
                />
              </Col>
            </Row>
          </Container>
        </Container>
      </Container>

      {/*====================
         SEZIONE AMBIENTE
         ====================*/}
      <Container fluid className="sezioni-approfondimento">
        <Row xs={1} md={2} className="h-100">
          <Col className="d-flex flex-column justify-content-center">
            <Container fluid className="text-center text-md-start mt-5 mb-md-5">
              <p className="m-0 intro" id="agricoltura">
                01 · AGRICOLTURA
              </p>
              <h1 className="titolo ">
                Coltivare pensando <br />
                al futuro.
              </h1>
              <p className="sottotitolo">
                Melinda utilizza tecniche di produzione integrata e porta avanti
                un programma di agricoltura biologica. Il percorso comprende
                anche lo sviluppo di varietà resistenti, con l'obiettivo di
                ridurre la necessità di interventi fitosanitari.
              </p>
              <Container className="d-flex flex-column flex-md-row align-items-center">
                <h1 className=" text-center m-0 titolo">99 ha</h1>
                <p className="m-0 text-center sottotitolo ms-3">
                  di varietà resistenti nel 2021
                </p>
              </Container>
            </Container>
          </Col>
          <Col className="d-flex flex-column align-items-center justify-content-center ">
            <Card.Img
              src={agricolturaBio}
              alt="agricoltura bio"
              className="rounded-5"
            />
          </Col>
        </Row>
      </Container>

      {/*====================
         SEZIONE ACQUA
         ====================*/}
      <Container fluid className="sezioni-approfondimento bg-white" id="acqua">
        <Row xs={1} md={2} className="h-100 ">
          <Col className="d-flex flex-column align-items-center justify-content-center order-2 order-md-1 ">
            <Card.Img
              src={acquaMelinda}
              alt="agricoltura bio"
              className="rounded-5"
            />
          </Col>
          <Col className="d-flex flex-column justify-content-center order-1 order-md-2">
            <Container fluid className="text-center text-md-start mt-5 mb-md-5">
              <p className="m-0 intro">02 · ACQUA</p>
              <h1 className="titolo ">Ogni goccia conta.</h1>
              <p className="sottotitolo">
                L'irrigazione a goccia consente, secondo il documento
                analizzato, di ridurre i consumi di oltre il 30%. Nei processi
                di lavorazione sono inoltre presenti sistemi di trattamento e
                riciclo dell'acqua.
              </p>
              <Row className="mt-3 " xs={1} sm={2}>
                <Col className=" ">
                  <h1 className=" text-center text-sm-start m-0 titolo border-top border-success border-3 pt-2">
                    {">"}30%
                  </h1>
                  <p className="text-center text-sm-start m-0 sottotitolo ">
                    riduzione dei consumi con irrigazione a goccia
                  </p>
                </Col>

                <Col>
                  <h1 className="mt-3 mt-sm-0 text-center text-sm-start  m-0 titolo border-top border-success border-3 pt-2">
                    60–90%
                  </h1>
                  <p className="m-0 text-center text-sm-start  sottotitolo ">
                    riduzione indicata per il riciclo dell'acqua
                  </p>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>

      {/*====================
         SEZIONE ENERGIA
         ====================*/}
      <Container fluid className="sezioni-approfondimento">
        <Row xs={1} md={2} className="h-100">
          <Col className="d-flex flex-column justify-content-center">
            <Container fluid className="text-center text-md-start mt-5 mb-md-5">
              <p className="m-0 intro" id="energia">
                03 · ENERGIA
              </p>
              <h1 className="titolo ">
                Energia da fonti <br />
                rinnovabili.
              </h1>
              <p className="sottotitolo">
                Per le attività di lavorazione e conservazione vengono
                utilizzate fonti rinnovabili. Nel periodo 2021-2022 il documento
                indica un consumo energetico composto per il 90,29% da energia
                idroelettrica e per il 9,71% da fotovoltaico.
              </p>
              <Container className="mt-4">
                <ProgressBar>
                  <ProgressBar variant="info" now={90} key={1} />
                  <ProgressBar variant="success" now={10} key={2} />
                </ProgressBar>
                <Container className="d-flex justify-content-between p-0">
                  <span className="sottotitolo">90,29% idroelettrica</span>
                  <span className="sottotitolo">9,71% fotovoltaica</span>
                </Container>
              </Container>
            </Container>
          </Col>
          <Col className="d-flex flex-column align-items-center justify-content-center ">
            <Card.Img
              src={fotovoltaicoMelinda}
              alt="agricoltura bio"
              className="rounded-5"
            />
          </Col>
        </Row>
      </Container>

      {/*====================
         SEZIONE CELLE IPOGEE
         ====================*/}
      <Container
        fluid
        className="text-center text-sm-start sezione-ipogee d-flex flex-column justify-content-center align-item-center align-item-sm-start"
      >
        <Container fluid className=" mb-5 ">
          <p className="m-0  text-white-50">INNOVAZIONE</p>
          <h1 className="celle-titolo   ">Le Celle Ipogee</h1>
          <p className="m-auto m-sm-0 descrizione w-75">
            Una soluzione di conservazione realizzata in gallerie sotterranee.
            Risparmiando fino al 30% di energia rispetto alle celle
            tradizionali.
          </p>
        </Container>
        <Row>
          <Col className="d-flex flex-column flex-sm-row col-sm-12 col-md-9 col-lg-6">
            <Container fluid className="mb-4 mb-sm-0">
              <h1 className="text-center text-sm-start m-0 fw-bold lh-1 ">
                30%
              </h1>
              <p className="text-center text-sm-start m-0 text-white-50 lh-1">
                risparmio energetico
              </p>
            </Container>
            <Container fluid className="mb-4 mb-sm-0">
              <h1 className=" text-center text-sm-start m-0 fw-bold lh-1">
                40.000 t
              </h1>
              <p className="text-center text-sm-start m-0 text-white-50 lh-1">
                capacità
              </p>
            </Container>
            <Container fluid className="mb-4 mb-sm-0">
              <h1 className=" text-center text-sm-start m-0 fw-bold lh-1">
                12 GWh
              </h1>
              <p className="text-center text-sm-start m-0 text-white-50 lh-1">
                risparmio stimato
              </p>
            </Container>
          </Col>
          <Col className="d-none d-md-flex"></Col>
        </Row>
      </Container>

      {/*==================================
         SEZIONE IMBALLAGGI & BIODIVERSITA'
         ==================================*/}
      <Container
        fluid
        className="sezioni-approfondimento d-flex "
        id="imballaggiBiodiversita"
      >
        <Row xs={1} md={2}>
          <Col className="d-flex flex-column justify-content-center">
            <Card className=" mt-5 mt-md-0 mb-5 mb-md-0 m-auto border-0 shadow-lg rounded-5 card-imballaggiBiodiversita">
              <Card.Body>
                <Container
                  fluid
                  className="text-center text-md-start mt-md-5 mb-md-5"
                >
                  <p className="m-0 intro" id="imballaggi">
                    04 · IMBALLAGGI
                  </p>
                  <h1 className="titolo ">Le 3 R</h1>
                  <p className="sottotitolo">
                    Risparmio, riutilizzo e riciclo sono alla base
                    dell'approccio agli imballaggi. Il materiale analizzato
                    riporta inoltre l'utilizzo di cartone ondulato e plastica
                    riutilizzabile.
                  </p>
                </Container>
              </Card.Body>
            </Card>
          </Col>
          <Col className="d-flex flex-column align-items-center justify-content-center ">
            <Card className=" mt-5 mt-md-0 mb-5 mb-md-0 m-auto border-0 shadow-lg rounded-5 card-imballaggiBiodiversita">
              <Card.Body>
                <Container
                  fluid
                  className="text-center text-md-start mt-md-5 mb-md-5"
                >
                  <p className="m-0 intro" id="biodiversità">
                    05 · BIODIVERSITÀ
                  </p>
                  <h1 className="titolo ">Proteggere l'ecosistema.</h1>
                  <p className="sottotitolo">
                    Api, monitoraggio della qualità biologica del suolo,
                    confusione sessuale e antagonisti biologici sono tra le
                    pratiche descritte nel percorso di sostenibilità.
                  </p>
                </Container>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/*====================
         SEZIONE PERSONE
         ====================*/}
      <Container
        fluid
        className="sezione-persone mt-5 mb-5 d-flex flex-column justify-content-center"
        id="persone"
      >
        <Container fluid className="d-flex justify-content-center dati-header">
          <Container fluid className="mt-5 mt-md-0 mb-3 ">
            <p className="m-0 persone-intro text-center ">
              06 · PERSONE E TERRITORIO
            </p>
            <h1 className="persone-titolo text-center  ">
              La sostenibilità riguarda <br /> anche le persone.
            </h1>
            <p className="text-secondary text-center">
              Formazione, sicurezza, inclusione e sostegno alla comunità <br />
              fanno parte del percorso di sostenibilità di melinda .
            </p>
          </Container>
        </Container>
        <Container className="mb-5 mb-md-0 mt-4">
          <Row xs={1} sm={2} md={3} className="justify-content-center g-4">
            <Col>
              <Card className=" mt-3 mt-md-0 mb-3 mb-md-0 m-auto h-100 border-0  rounded-5 card-persone">
                <Card.Body className="d-flex align-items-center">
                  <Container fluid className="text-center  mt-md-5 mb-md-5">
                    <h1 className="card-persone-titolo ">100%</h1>
                    <p className="text-secondary m-0">
                      dei dipendenti riceve formazione
                    </p>
                  </Container>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className=" mt-3 mt-md-0 mb-3 mb-md-0 m-auto h-100 border-0  rounded-5 card-persone">
                <Card.Body className="d-flex align-items-center">
                  <Container fluid className="text-center  mt-md-5 mb-md-5">
                    <h1 className="card-persone-titolo ">98%</h1>
                    <p className="text-secondary m-0">
                      dei dipendenti ha ricevuto formazione sulla sicurezza
                    </p>
                  </Container>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className=" mt-3 mt-md-0 mb-3 mb-md-0 m-auto h-100 border-0  rounded-5 card-persone">
                <Card.Body className="d-flex align-items-center">
                  <Container fluid className="text-center  mt-md-5 mb-md-5">
                    <h1 className="card-persone-titolo ">€600.000+</h1>
                    <p className="text-secondary m-0">
                      destinati nel 2021-22 al sostegno del territorio e della
                      comunità
                    </p>
                  </Container>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}

/*Esporto il componente contenente della home page*/
export default Home;
