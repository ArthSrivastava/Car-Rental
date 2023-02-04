import { Card, Row, Col, CardBody } from "reactstrap";
import { Link } from "react-router-dom";
export default function Listing({listing}) {
  return (
    <Card
      className="shadow-sm mt-3 rounded-0"
      style={{
        width: "60vw",
        marginLeft: "15vw",
      }}
    >
      <CardBody>
        <Row>
          <Col
            className="mt-2"
            md={{
              size: 3,
            }}
          >
            <img
              src="src/assets/courage.jpg"
              alt="vehicle-image"
              style={{
                maxWidth: "200px",
                height: "200px",
              }}
            />
          </Col>
          <Col>
            <h2>{listing.make}</h2>
            <h2>{`${listing.model}  ${listing.year}`}</h2>
            <p>
              {listing.description}
            </p>
            <Row>
              <Col>
                <Link to="/dashboard">Glen Williams</Link>
              </Col>
              <Col
                md={{
                  size: 5,
                }}
              ></Col>
              <Col>
                {/* fix the url */}
                <Link to={"/listing/" + listing.id} docid={listing.id}>Read More...</Link>
              </Col>
            </Row>
          </Col>
          <Col
            md={{
              size: 1,
            }}
          >
            <p
              style={{
                fontSize: "11px",
                fontWeight: 400,
              }}
            >
              3 days ago
            </p>
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
}
