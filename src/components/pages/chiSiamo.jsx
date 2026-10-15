/*Import componenti react-bootstrap*/
import { Card, Col, Container, Row } from "react-bootstrap";

/*Import icone react-icon*/
import { FaHandsHelping, FaMountain } from "react-icons/fa";
import { FaPeopleGroup, FaScaleBalanced } from "react-icons/fa6";
import { GiShinyApple } from "react-icons/gi";
import { PiPlantFill } from "react-icons/pi";

/*Import componentpersonalizzato sulla card*/
import CardValori from "../cardValori";

/*Import immagini utilizzate nel componente*/
import raccoltaMele from "../img/raccolta-mele.jpg";
import territorioMelinda from "../img/territorio-melinda.jpg";

/*Dichiarazione funzione contenente la pagina chi siamo*/
function ChiSiamo() {
  /*Array di oggetti contenenti anno e descrizione degli eventi utilizzato per la realizazzione delle timeline */
  const eventi = [
    {
      anno: "1989",
      descrizione: "Nasce Melinda",
    },
    {
      anno: "1994",
      descrizione:
        "Centralizzazione delle vendite della frutta destinata alla trasformazione",
    },
    {
      anno: "1998",
      descrizione:
        "Centralizzazione della commercializzazione del 100% della produzione",
    },
    {
      anno: "2002",
      descrizione:
        "Centralizzazione delle strutture per la selezione, la conservazione e il confezionamento",
    },
    {
      anno: "2019",
      descrizione:
        "La commercializzazione di Melinda e La Trentina confluisce in APOT (Associazione Produttori Ortofrutticoli Trentini)",
    },
  ];

  /* apertura return che mi ritorna la pagina quando richiamo la funzione*/
  return (
    <>
      {/*=======================
      SEZIONE BANNER CHI SIAMO
      ==========================*/}
      <Container fluid className="introduzione-Chisiamo p-0">
        <img src={territorioMelinda} alt="territorio melinda" />
        <Container
          fluid
          className="container-testo-introChisiamo d-flex flex-column align-items-cente justify-content-center"
        >
          <h1 className="introduzione-chisiamo-titolo text-center ">
            CHI SIAMO.
          </h1>
          <p className=" text-center  introduzione-chisiamo-testo  ms-auto me-auto">
            Melinda è un consorzio di produttori di mele nato nel{" "}
            <span className="text-decoration-underline">1989</span> legato al
            territorio della{" "}
            <span className="text-decoration-underline">
              Val di Non e della Val di Sole
            </span>
            , in Trentino. Riunisce{" "}
            <span className="text-decoration-underline">
              oltre 3.800 famiglie di agricoltori
            </span>
            , organizzate in{" "}
            <span className="text-decoration-underline">16 cooperative</span>,
            che coltivano e producono mele di alta qualità.
          </p>
        </Container>
      </Container>
      {/*=======================
      SEZIONE LA NOSTRA STORIA
      ==========================*/}
      <Container fluid className="sezioneStoria d-flex">
        <Row xs={1} md={2} className="flex-grow-1">
          <Col className="text-start d-flex flex-column justify-content-center ">
            <div className="ms-md-auto me-md-auto">
              <span className="capitolo text-decoration-underline ">
                01 - LA NOSTRA STORIA
              </span>
              <h4 className="m-0 titolo">
                Una comunità di agricoltori,
                <br /> un territorio, una storia condivisa.
              </h4>
            </div>
          </Col>
          <Col className="text-end d-flex align-items-center justify-content-center">
            <p className="m-0 contenuto">
              La passione per la frutticoltura, la tradizione e l'attenzione
              alla sostenibilità sono alla base del lavoro di Melinda. Dalla
              coltivazione alla selezione, conservazione e confezionamento, il
              consorzio segue l'intera filiera per portare sulle tavole mele
              fresche e di qualità, valorizzando allo stesso tempo il territorio
              e le persone che lo coltivano.
            </p>
          </Col>
        </Row>
      </Container>
      {/*=======================
      SEZIONE EVOLUZIONE
      ==========================*/}
      <Container fluid className="sezione-evoluzione pt-5 pb-5">
        <Container fluid className="evoluzione">
          <Container fluid className="evoluzione-titolo text-md-center">
            <p className="m-0 text-decoration-underline">02 - L’EVOLUZIONE</p>
            <h1 className="mb-4 ">COME NASCE</h1>
          </Container>
          <Container fluid className="evoluzione-contenuto">
            {/*apro parentesi graffe "{" per poter utilizzare le potenzialità di javascript all'interno del codice jsx 
            e questo mi permette di fare un map dell'array dichiarato in precedenza e crearmi così l'aspetto desiderato della timeline
            aiutandomi anche col css*/}
            {eventi.map((evento) => (
              <div className="timeline-item" key={evento.anno}>
                <div className="timeline-dot"></div>

                <div className="timeline-content">
                  <h3>{evento.anno}</h3>
                  <p>{evento.descrizione}</p>
                </div>
              </div>
            ))}
          </Container>
        </Container>
      </Container>
      {/*=======================
      SEZIONE GRAFICI
      ==========================*/}
      <Container
        fluid
        className="sezione-grafici pt-4 pb-4  d-flex flex-column justify-content-center"
        id="persone"
      >
        <Container fluid className="d-flex justify-content-center ">
          <Container fluid className="mt-5 mt-md-0 mb-3 ">
            <p className="m-0 grafici-intro text-center text-white-50 ">
              03 - GRAFICI
            </p>
            <h1 className="grafici-titolo text-center text-white ">
              MELINDA IN NUMERI.
            </h1>
          </Container>
        </Container>
        <Container className="mb-5 mb-md-0 mt-4">
          <Row xs={1} sm={2} md={3} className="justify-content-center g-4">
            <Col>
              <Row xs={1}>
                <Col>
                  <Card className=" mt-3 mt-md-0 mb-3 mb-md-0 m-auto h-100 border-0  rounded-5 card-grafici">
                    <Card.Body className="d-flex align-items-center">
                      <Container fluid className="text-center  mt-md-5 mb-md-5">
                        <h1 className="card-grafici-titolo border-bottom border-success border-4">
                          +2
                        </h1>
                        <p className="text-secondary m-0">
                          Valli di produzione, Val di Non e Val di Sole, unite
                          dalla passione per la qualità.
                        </p>
                      </Container>
                    </Card.Body>
                  </Card>
                </Col>
                <Col>
                  <Container
                    fluid
                    className="approfondimento-card-grafici mt-4 mt-md-2"
                  >
                    <h1 className="m-0">100%</h1>
                    <p className=" m-0">
                      dei soci aderisce ai principi della produzione integrata
                    </p>
                  </Container>
                </Col>
              </Row>
            </Col>
            <Col>
              <Row xs={1}>
                <Col>
                  <Card className=" mt-3 mt-md-0 mb-3 mb-md-0 m-auto h-100 border-0  rounded-5 card-grafici">
                    <Card.Body className="d-flex align-items-center">
                      <Container fluid className="text-center  mt-md-5 mb-md-5">
                        <h1 className="card-grafici-titolo border-bottom border-success border-4">
                          +3.800
                        </h1>
                        <p className="text-secondary m-0">
                          Famiglie di agricoltori che coltivano mele e
                          custodiscono la tradizione del territorio.
                        </p>
                      </Container>
                    </Card.Body>
                  </Card>
                </Col>
                <Col>
                  <Container
                    fluid
                    className="approfondimento-card-grafici mt-4 mt-md-2"
                  >
                    <h1 className="m-0">90,29%</h1>
                    <p className=" m-0">
                      energia elettrica proveniente da fonte idroelettrica
                    </p>
                  </Container>
                </Col>
              </Row>
            </Col>
            <Col>
              <Row xs={1}>
                <Col>
                  <Card className=" mt-3 mt-md-0 mb-3 mb-md-0 m-auto h-100 border-0  rounded-5 card-grafici">
                    <Card.Body className="d-flex align-items-center">
                      <Container fluid className="text-center  mt-md-5 mb-md-5">
                        <h1 className="card-grafici-titolo border-bottom border-success border-4">
                          +16
                        </h1>
                        <p className="text-secondary m-0">
                          Cooperative agricole associate che collaborano per
                          valorizzare la produzione locale.
                        </p>
                      </Container>
                    </Card.Body>
                  </Card>
                </Col>
                <Col>
                  <Container
                    fluid
                    className="approfondimento-card-grafici mt-4 mt-md-2"
                  >
                    <h1 className="m-0">60–90%</h1>
                    <p className=" m-0">
                      riduzione dei consumi d’acqua grazie a trattamento e
                      riciclo
                    </p>
                  </Container>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Container>
      {/*=======================
      SEZIONE TERRITORIO
      ==========================*/}
      <Container fluid className="sezione-territorio pt-4 pb-4">
        <Container fluid className="territorio-titolo text-center">
          <p className="m-0 text-decoration-underline">
            04 - NEL CUORE DELLA VAL DI NON
          </p>
          <h1 className="mb-4 ">IL TERRITORIO.</h1>
        </Container>
        <Container fluid>
          <Row xs={1} md={2} className="g-4 justify-content-center">
            <Col className="text-center ">
              <p className="mb-4 fw-bold descrizione-img-territorio">
                Il territorio delle Valli del Noce, con il suo clima, la sua
                conformazione e le caratteristiche del terreno crea condizioni
                favorevoli alla coltivazione delle mele e rappresenta una parte
                fondamentale dell'identità di Melinda
              </p>
              <img
                src={raccoltaMele}
                alt="raccolta mele"
                className="ms-auto me-auto img-fluid text-center"
              />
            </Col>
            <Col
              sm={8}
              md={6}
              className="d-flex flex-column justify-content-evenly text-center text-md-start"
            >
              <Container
                fluid
                className="approfondimento-territorio  border-bottom border-4   pb-2 border-success"
              >
                <h4 className="m-0">TERRITORIO</h4>
                <p className=" m-0">
                  Val di Non e Val di Sole, un territorio alpino ricco di
                  natura, acqua e terreni favorevoli alla coltivazione delle
                  mele.
                </p>
              </Container>

              <Container
                fluid
                className="approfondimento-territorio  border-bottom border-4 pt-2  pb-2 border-success"
              >
                <h4 className="m-0">QUALITÀ</h4>
                <p className=" m-0">
                  Caratteristiche distintive delle mele, determinate dal
                  territorio, dal clima e dalla cura dei produttori.
                </p>
              </Container>

              <Container
                fluid
                className="approfondimento-territorio pt-2 pb-2 "
              >
                <h4 className="m-0">CLIMA</h4>
                <p className=" m-0">
                  Microclima favorevole alla frutticoltura, con sole, escursioni
                  termiche e temperature ideali.
                </p>
              </Container>
            </Col>
          </Row>
        </Container>
      </Container>

      {/*=======================
      SEZIONE VALORI
      ==========================*/}
      <Container
        fluid
        className="sezione-valori pt-4 pb-5 d-flex flex-column justify-content-center mt-5"
      >
        <Container fluid className="d-flex justify-content-center ">
          <Container fluid className="mt-5 mt-md-0 mb-3 ">
            <p className="m-0 valori-intro text-center text-white-50 ">
              05 - I NOSTRI VALORI
            </p>
            <h1 className="valori-titolo text-center text-white ">
              IL MONDO MELINDA.
            </h1>
          </Container>
        </Container>
        <Container fluid>
          <Row xs={1} sm={2} md={3} className="g-5 ">
            <Col>
              <CardValori
                titolo={"Mutualità e Solidarietà"}
                corpo={
                  "Collaborazione e sostegno reciproco tra produttori, famiglie e comunità."
                }
                icona={<FaPeopleGroup />}
                id={"mutualita"}
              />
            </Col>
            <Col>
              <CardValori
                titolo={"Reciprocità ed Eguaglianza"}
                corpo={
                  "Rapporti basati sul rispetto, sulla collaborazione e sulle pari opportunità"
                }
                icona={<FaHandsHelping />}
                id={"reciprocita"}
              />
            </Col>
            <Col>
              <CardValori
                titolo={"Equità"}
                corpo={
                  "Trasparenza e correttezza nei rapporti, garantendo attenzione e rispetto per tutti."
                }
                icona={<FaScaleBalanced />}
                id={"equita"}
              />
            </Col>
            <Col>
              <CardValori
                titolo={"Territorio"}
                corpo={
                  "Valorizzare la terra, le tradizioni e le risorse della Val di Non e della Val di Sole."
                }
                icona={<FaMountain />}
                id={"territorio"}
              />
            </Col>
            <Col>
              <CardValori
                titolo={"Democrazia coperativa"}
                corpo={
                  "Partecipazione e condivisione nelle decisioni, mettendo al centro gli interessi dei soci."
                }
                icona={<GiShinyApple />}
                id={"democrazia"}
              />
            </Col>
            <Col>
              <CardValori
                titolo={"Responsabilità Sociale"}
                corpo={
                  "Impegno verso le persone, l’ambiente e il benessere della comunità."
                }
                icona={<PiPlantFill />}
                id={"responsabilità"}
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}
/*Esporto il componente contenente la pagina chi siamo*/
export default ChiSiamo;
