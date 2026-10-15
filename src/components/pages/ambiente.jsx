/*import componenti react-bootstrap*/
import { Card, Col, Container, Row } from "react-bootstrap";

/*import icone react-icon*/
import { FaRegSnowflake } from "react-icons/fa";
import { FaLightbulb } from "react-icons/fa";

/*import immagini utilizzate nella pagina*/
import bannerAmbiente from "../img/banner-ambiente.jpg";
import raccoltaMele from "../img/comunità-raccolta-mele.jpg";
import ipogee from "../img/conservazione-mele.jpg";
import meleAcqua from "../img/mele-in-acqua.jpg";

/*Dichiarazione della funzione contenente la pagina ambiente*/
function Ambiente() {
  /*Return che contiene il codice della pagina ambiente e mi permette di esportarla*/
  return (
    <>
      {/*=======================
      SEZIONE BANNER AMBIENTE
      ==========================*/}
      <Container fluid className="introduzione-ambiente p-0">
        <img src={bannerAmbiente} alt="ambiente melinda" />
        <Container
          fluid
          className="container-testo-introAmbiente d-flex flex-column align-items-cente justify-content-center"
        >
          <Container className="ms-auto me-auto">
            <h1 className="introduzione-ambiente-titolo text-center ">
              AMBIENTE.
            </h1>
            <h3 className=" text-center  introduzione-ambiente-testo w-100 ">
              Coltivare oggi, preservare il domani.
            </h3>
            <p className="text-decoration-underline m-0 ">01 - L’AMBIENTE</p>
          </Container>
        </Container>
      </Container>

      {/*=======================
      SEZIONE MELETI
      ==========================*/}
      <Container fluid className="sezione-meleti pt-4 pb-4">
        <Container fluid className="meleti-titolo text-center">
          <p className="m-0 text-decoration-underline">
            02 - L’AMBIENTE NEI MELETI
          </p>
          <h1 className="mb-4 ">UN TERRITORIO DA PROTEGGERE.</h1>
        </Container>
        <Container fluid>
          <Row xs={1} lg={2} className="g-4 justify-content-center">
            <Col className="text-center d-flex flex-column justify-content-between ">
              <Container
                fluid
                className="mb-4 descrizione-img-meleti text-md-start"
              >
                <h2 className="m-0">87,7%</h2>
                <h4 className="m-0 fw-bold text-black-50">
                  del territorio è costituito da boschi,
                  <br /> aree a elevata integrità naturale e pascoli.
                </h4>
              </Container>
              <img
                src={raccoltaMele}
                alt="raccolta mele"
                className="ms-auto me-auto img-fluid img-meleti text-center rounded-5"
              />
            </Col>
            <Col className="d-flex flex-column justify-content-evenly text-center text-md-end">
              <Container fluid>
                <h2 className="m-0">UN PATRIMONIO DA PROTEGGERE</h2>
                <h4 className="m-0 ">
                  La{" "}
                  <span className="text-decoration-underline">
                    sostenibilità
                  </span>{" "}
                  di Melinda parte dal territorio.{" "}
                  <span className="text-decoration-underline">
                    Val di Non e Val di Sole
                  </span>{" "}
                  rappresentano l’ambiente in cui nascono le mele e dove
                  agricoltura, natura e comunità convivono.
                </h4>
                <p className="m-0 border-top border-2 border-black mt-2 pt-2">
                  IL{" "}
                  <span className="text-decoration-underline">TERRITORIO</span>{" "}
                  RAPPRESENTA UNA RISORSA FONDAMENTALE: LA PRESENZA DI BOSCHI,
                  PASCOLI, AREE NATURALI E COLTIVAZIONI CONTRIBUISCE A MANTENERE
                  UN EQUILIBRIO TRA ATTIVITÀ AGRICOLA E AMBIENTE. PER QUESTO LA
                  TUTELA DEL PAESAGGIO E DELLA BIODIVERSITÀ È PARTE INTEGRANTE
                  DEL PERCORSO DI SOSTENIBILITÀ DI{" "}
                  <span className="text-decoration-underline">MELINDA</span>.
                </p>
              </Container>
              <Container fluid>
                <h2 className="m-0">8,2%</h2>
                <h4 className="m-0 ">
                  superficie occupata da meleti e altre colture agricole
                </h4>
              </Container>
            </Col>
          </Row>
        </Container>
      </Container>

      {/*=======================
      SEZIONE CELLE IPOGEE
      ==========================*/}
      <Container fluid className="sezione-ipogeeAmbiente pt-4 pb-4 mt-3">
        <Container fluid className="ipogeeAmbiente-titolo text-center">
          <p className="m-0 text-decoration-underline">03 - CELLE IPOGEE</p>
          <h1 className="mb-4 ">
            LA TERRA LE FA CRESCERE, LA TERRA LE CONSERVA.
          </h1>
        </Container>
        <Container fluid>
          <Row xs={1} md={2} className="g-4 justify-content-center">
            <Col className="text-center d-flex align-items-center order-md-2">
              <img
                src={ipogee}
                alt="celle ipogee"
                className="ms-auto me-auto img-fluid img-ipogeeAmbiente text-center rounded-5"
              />
            </Col>
            <Col className="text-center text-md-start d-flex align-items-center order-md-1">
              <Container fluid className="ipogeeAmbiente-contenuto">
                <h2 className="m-0">NEL CUORE DELLA MONTAGNA</h2>
                <p className="m-0 ">
                  A circa 300 metri di profondità, nelle Dolomiti, Melinda
                  conserva parte delle proprie mele all'interno di celle
                  frigorifere realizzate nelle gallerie sotterranee. Una
                  soluzione innovativa che sfrutta le caratteristiche naturali
                  della montagna per ridurre il consumo energetico e l'impatto
                  sul territorio.
                </p>
              </Container>
            </Col>
          </Row>
        </Container>
      </Container>
      {/*==================================
      SEZIONE APPROFONDIMENTO CELLE IPOGEE
      =====================================*/}
      <Container
        fluid
        className="sezione-approfindimentoIpogee pt-4 pb-4  d-flex flex-column justify-content-center"
        id="persone"
      >
        <Container fluid className="d-flex justify-content-center ">
          <Container fluid className="mt-5 mt-md-0 mb-3 ">
            <h1 className="approfindimentoIpogee-titolo text-center text-white ">
              UNA SOLUZIONE NATURALE, <br />
              INNOVATIVA E SOSTENIBILE.
            </h1>
          </Container>
        </Container>
        <Container className="mb-5 mb-md-0 mt-4">
          <Row xs={1} sm={2} md={3} className="justify-content-center g-4">
            <Col>
              <Card className=" mt-3 mt-md-0 mb-3 mb-md-0 m-auto h-100 border-0  rounded-5 card-approfindimentoIpogee">
                <Card.Body className="d-flex align-items-center">
                  <Container fluid className="text-center  mt-md-5 mb-md-5">
                    <h1 className="card-approfindimentoIpogee-titolo border-bottom border-success border-4">
                      −30%
                    </h1>
                    <p className="text-secondary m-0">
                      DI ENERGIA RISPETTO ALLA CONSERVAZIONE TRADIZIONALE
                    </p>
                  </Container>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className=" mt-3 mt-md-0 mb-3 mb-md-0 m-auto h-100 border-0  rounded-5 card-approfindimentoIpogee">
                <Card.Body className="d-flex align-items-center">
                  <Container fluid className="text-center  mt-md-5 mb-md-5">
                    <h1 className="card-approfindimentoIpogee-titolo border-bottom border-success border-4">
                      40.000 T
                    </h1>
                    <p className="text-secondary m-0">
                      CAPACITÀ DELLE CELLE IPOGEE
                    </p>
                  </Container>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className=" mt-3 mt-md-0 mb-3 mb-md-0 m-auto h-100 border-0  rounded-5 card-approfindimentoIpogee">
                <Card.Body className="d-flex align-items-center">
                  <Container fluid className="text-center  mt-md-5 mb-md-5">
                    <h1 className="card-approfindimentoIpogee-titolo border-bottom border-success border-4">
                      12 GWH
                    </h1>
                    <p className="text-secondary m-0">
                      DI RISPARMIO ENERGETICO STIMATO ANNUALMENTE
                    </p>
                  </Container>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Container>

      {/*==================================
      SEZIONE ENERGIA AMBIENTE
      =====================================*/}
      <Container fluid className="sezione-energiaAmbiente pt-3 mt-2 mb-5">
        <Row xs={1}>
          <Col>
            <Container
              fluid
              className="energiaAmbiente-titolo text-center mb-4"
            >
              <p className="m-0 text-decoration-underline">04 - ENERGIA</p>
              <h1 className="m-0 ">MENO ENERGIA, PIÙ EFFICIENZA.</h1>
              <p className="m-0 text-black-50 fw-bold">
                Melinda interviene sui propri impianti per ridurre i consumi e
                migliorare l' efficienza energetica.
              </p>
            </Container>
          </Col>
          <Col>
            <Row xs={1} className="g-4">
              <Col>
                <Row xs={1} md={2}>
                  <Col>
                    <Container
                      fluid
                      className="pb-5 pb-md-0 h-100 approfondimento-energiaAmbiente text-center  d-flex flex-column justify-content-center"
                    >
                      <h2 className="m-0">90,29%</h2>
                      <h4 className="m-0 fw-bold text-black-50">
                        L’energia elettrica utilizzata proviene principalmente
                        da fonte idroelettrica.
                      </h4>
                    </Container>
                  </Col>
                  <Col>
                    <Container className="shadow-lg rounded-5 p-3 d-flex card-energiaAmbiente approfondimento-energiaAmbiente mb-4">
                      <Container
                        fluid
                        className="d-flex flex-column justify-content-evenly"
                      >
                        <h2 className="m-0 fs-3 d-flex justify-content-around">
                          <span className="pt-2 ">
                            REFRIGERAZIONE EFFICIENTE
                          </span>
                          <FaRegSnowflake className="text-primary-emphasis text-black mt-auto mb-auto ms-3 me-3 " />
                        </h2>
                        <h4 className="m-0 fs-6 fw-bold text-black-50">
                          LA SOSTITUZIONE DELLE LAMPADE TRADIZIONALI IN 21 SITI
                          PRODUTTIVI HA PERMESSO DI RISPARMIARE CIRCA 500.000
                          KWH ALL'ANNO.
                        </h4>
                      </Container>
                    </Container>
                  </Col>
                </Row>
              </Col>
              <Col>
                <Row xs={1} md={2}>
                  <Col>
                    <Container
                      fluid
                      className="pb-5 pb-md-0 h-100 approfondimento-energiaAmbiente text-center  d-flex flex-column justify-content-center"
                    >
                      <h2 className="m-0">9,71%</h2>
                      <h4 className="m-0 fw-bold text-black-50">
                        La quota restante dell’energia elettrica proviene da
                        impianti fotovoltaici.
                      </h4>
                    </Container>
                  </Col>
                  <Col>
                    <Container className="shadow-lg rounded-5 p-3 d-flex card-energiaAmbiente approfondimento-energiaAmbiente mb-4">
                      <Container
                        fluid
                        className="d-flex flex-column text-end justify-content-evenly"
                      >
                        <h4 className="m-0 fs-6 fw-bold text-black-50">
                          I SISTEMI A CONDENSAZIONE VARIABILE HANNO CONSENTITO
                          UN RISPARMIO DI CIRCA 1.000.000 KWH ALL'ANNO.
                        </h4>
                        <h2 className="m-0 fs-3 d-flex justify-content-around">
                          <FaLightbulb className="text-warning-emphasis text-black mt-auto mb-auto ms-3 me-3 " />
                          <span className="pt-2 ">ILLUMINAZIONE LED</span>
                        </h2>
                      </Container>
                    </Container>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>

      {/*==================================
      SEZIONE ACQUA
      =====================================*/}

      <Container fluid className="sezione-acqua pt-5 pb-5">
        <Container fluid className="acqua-titolo text-center mb-5">
          <p className="m-0 text-decoration-underline text-white-50">
            05 - L’ACQUA
          </p>
          <h1 className="m-0 text-white">OGNI GOCCIA CONTA.</h1>
          <p className="mb-0 fw-bold descrizione-img-acqua text-white-50">
            L'acqua è una risorsa fondamentale per l'agricoltura. Per questo
            Melinda lavora sulla riduzione dei consumi sia nei campi sia nelle
            attività di lavorazione.
          </p>
        </Container>
        <Container fluid>
          <Row xs={1} md={2} className="g-4 justify-content-center">
            <Col
              sm={8}
              md={6}
              className="d-flex flex-column justify-content-evenly text-center order-2 order-md-1"
            >
              <Container fluid className="approfondimento-acqua mb-4 mb-lg-0 ">
                <h4 className="m-0 text-white">60–90%</h4>
                <p className=" m-0 text-white-50">
                  riduzione dei consumi d'acqua ottenibile nei processi
                  attraverso trattamento e riciclo.
                </p>
              </Container>
              <Container fluid className="approfondimento-acqua ">
                <h4 className="m-0 text-white">−30%</h4>
                <p className=" m-0 text-white-50">
                  consumo d'acqua grazie all'irrigazione a goccia rispetto ai
                  metodi tradizionali.
                </p>
              </Container>
            </Col>
            <Col className="text-center d-flex align-items-center justify-content-center order-1 order-md-2">
              <img
                src={meleAcqua}
                alt="raccolta mele"
                className="img-fluid rounded-5 "
              />
            </Col>
          </Row>
        </Container>
      </Container>

      {/*=======================
      SEZIONE FUTURO
      ==========================*/}
      <Container fluid className="sezione-futuro pt-4 pb-4 mt-3">
        <Container fluid className="futuro-titolo text-center">
          <p className="m-0 text-decoration-underline">
            06 - INNOVARE OGGI PER PROTEGGERE IL FUTURO
          </p>
          <h1 className="mb-4 ">AGRICOLTURA SOSTENIBILE.</h1>
        </Container>
        <Container fluid>
          <Row xs={1} md={2}>
            <Col className="text-center text-sm-start ">
              <Container fluid className="futuro-descrizione">
                <p className="m-0 ">
                  Per Melinda, coltivare in modo sostenibile significa prendersi
                  cura del territorio senza rinunciare alla qualità delle
                  proprie mele. L’attenzione parte dai campi e coinvolge ogni
                  fase della produzione, con l’obiettivo di ridurre l’impatto
                  ambientale e preservare le risorse naturali.
                </p>
                <p className="m-0 mt-4">
                  L’irrigazione a goccia permette di utilizzare l’acqua in modo
                  più efficiente, mentre la tutela della biodiversità e del
                  suolo contribuisce a mantenere vivo l’equilibrio
                  dell’ecosistema agricolo. A questo si aggiunge la ricerca di
                  nuove soluzioni, come le varietà resistenti, che possono
                  contribuire a un’agricoltura sempre più attenta all’ambiente.
                </p>
              </Container>
            </Col>
            <Col className="  d-flex flex-column justify-content-between text-center text-sm-end ">
              <Container fluid className="futuro-contenuto mt-4 mt-md-0">
                <h2 className="m-0">BIODIVERSITÀ</h2>
                <p className="m-0 ">
                  Tutela del suolo, degli insetti utili e degli ecosistemi
                  naturali
                </p>
              </Container>
              <Container fluid className="futuro-contenuto mt-4 mt-md-0">
                <h2 className="m-0">UN IMPEGNO CHE PARTE DALLA TERRA</h2>
                <p className="m-0 ">
                  Ogni scelta fatta nei campi contribuisce a costruire un
                  modello agricolo più responsabile, capace di valorizzare il
                  territorio e guardare alle generazioni future
                </p>
              </Container>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}

/*esporto la funzione così da poter utilizzare il componente di codice contenuto nel return*/
export default Ambiente;
