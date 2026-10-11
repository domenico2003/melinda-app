/*import dei componenti react-bootsrap*/
import { Card, Container } from "react-bootstrap";

/*dichiarazione della funzione che contiene il componente card e definizione degli attributi*/
function cardValori({ icona, titolo, corpo, id }) {
  /* return contenente il codice interattivo*/
  return (
    <>
      <Card className="card-valori rounded-5 shadow-lg border border-0">
        <Card.Body className="d-flex flex-column justify-content-center ">
          <Container fluid>
            <p className="mb-0  fs-1" id={id}>
              {icona}
            </p>
          </Container>

          <Container fluid className="mt-4">
            <Card.Title className="mb-0  fs-4 fw-bold titolo">
              {titolo}
            </Card.Title>

            <Card.Subtitle className="mb-0 mt-2 sottotitolo">
              {corpo}
            </Card.Subtitle>
          </Container>
        </Card.Body>
      </Card>
    </>
  );
}

/*esporto il componente*/
export default cardValori;
