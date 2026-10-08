import { Col, Container, Row } from "react-bootstrap";

import reportMelinda from "../report-melinda.pdf";
function Report() {
  return (
    <Container fluid className="download-report d-flex">
      <Container
        fluid
        className="shadow bg-white border-0 rounded-5 min-h-50 mt-auto mb-auto pt-5 pb-5  card-report text-center text-lg-start
        "
      >
        <Row className=" g-4">
          <Col xs={12} lg={8}>
            <Container fluid className="mb-0 p-0 report-descrizione">
              <p className="m-0 report-intro   ">APPROFONDISCI</p>
              <h1 className="report-titolo   ">
                Consulta il report <br />
                di sostenibilità.
              </h1>
              <p className="text-secondary ">
                Scopri nel dettaglio il percorso di sostenibilità descritto da
                <br />
                Melinda e approfondisci dati, attività e risultati.
              </p>
            </Container>
          </Col>
          <Col xs={12} lg={4} className="d-flex ">
            <Container className="mb-0 p-0 ms-0  d-flex justify-content-center">
              <a
                class="download-button btn mt-auto mb-auto  rounded-pill"
                href={reportMelinda}
                download="Report_Sostenibilita_Melinda.pdf"
              >
                📄 Scarica il report
              </a>
            </Container>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Report;
