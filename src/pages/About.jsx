import {
  Card,
  CardBody,
  CardHeader,
  Container,
  Row,
  Col,
  List,
} from "reactstrap";
import Base from "../components/Base";
export default function About() {
  return (
    <Base>
      <Container className="text-center mt-3">
        <Card className="rounded-0">
          <CardHeader><h1>About us</h1></CardHeader>
          <CardBody>
            <List tag="ol">
              <li>
                <Row>
                  <Col
                    md={{
                      size: 3,
                    }}
                  >
                    IMAGE
                  </Col>
                  <Col>
                    <h4>Arth Srivastava</h4>
                    <h4>Worked On: React</h4>
                  </Col>
                </Row>
              </li>
              <li className="mt-3">
                <Row>
                  <Col
                    md={{
                      size: 3,
                    }}
                  >
                    IMAGE
                  </Col>
                  <Col>
                    <h4>Mihir Singh</h4>
                    <h4>Worked On: Node + React</h4>
                  </Col>
                </Row>
              </li>
              <li className="mt-3">
                <Row>
                  <Col
                    md={{
                      size: 3,
                    }}
                  >
                    IMAGE
                  </Col>
                  <Col>
                    <h4>Swapnil Saxena</h4>
                    <h4>Worked on: CSS + React</h4>
                  </Col>
                </Row>
              </li>
            </List>
          </CardBody>
        </Card>
      </Container>
    </Base>
  );
}
