/*=======================================================
Componente per card della sezione iniziative della home
=========================================================*/

/*questo componente react l'ho creato per risparmiare codice ripetitivo sulle card
e passando le componenti che cambiano da card a card attraverso gli attributi */

/*import del componebte react-bootsrap Card*/
import { Card } from "react-bootstrap";

/*import dell'icona freccia da react-icon*/
import { FaLongArrowAltRight } from "react-icons/fa";

/*dichiarazione della funzione che contiene il componente card e definizione degli attributi*/
function cardIniziative({ icona, titolo, corpo, indirizzo, id }) {
  /* return contenente il codice interattivo*/
  return (
    <>
      <Card className="card-iniziative rounded-5 shadow-lg border border-0">
        <Card.Body className="d-flex flex-column justify-content-evenly ">
          <p className="mb-0 mt-4 fs-1" id={id}>
            {icona}
          </p>
          <Card.Title className="mb-0 mt-4 fs-4 fw-bold titolo">
            {titolo}
          </Card.Title>

          <Card.Subtitle className="mb-0 mt-4 sottotitolo">
            {corpo}
          </Card.Subtitle>
          <a
            className="mb-0 mt-4 link-card link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
            href={indirizzo}
            aria-label={titolo}
          >
            Scopri di più <FaLongArrowAltRight />
          </a>
        </Card.Body>
      </Card>
    </>
  );
}

/*esporto il componente*/
export default cardIniziative;
