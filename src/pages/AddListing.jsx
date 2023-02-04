import { CardBody, Form, FormGroup, Container, Card, Row, Col, Label, Input, Button } from "reactstrap";
import Base from "../components/Base";
export default function AddListing() {
  return (
    <Base>
      <Container className="mt-3">
        <Row>
            <Col md={
                {
                    size: 6,
                    offset: 3
                }
            }>
          <Card className="rounded-0 shadow-sm">
            <CardBody>
              <Form>
                <FormGroup>
                    <Label for="name"><h4>Name</h4></Label>
                    <Input type="text" id="name" name="name" />
                </FormGroup>
                <FormGroup>
                    <Label for="email"><h4>Email</h4></Label>
                    <Input type="email" id="email" name="email" />
                </FormGroup>
                <FormGroup>
                    <Label for="manufacturer"><h4>Manufacturer</h4></Label>
                    <Input type="text" id="manufacturer" name="manufacturer" />
                </FormGroup>
                <FormGroup>
                    <Label for="model"><h4>Model</h4></Label>
                    <Input type="text" id="model" name="model" />
                </FormGroup>
                <FormGroup>
                    <Label for="drive"><h4>Drive</h4></Label>
                    <Input type="text" id="drive" name="drive" />
                </FormGroup>
                <FormGroup>
                    <Label for="year"><h4>Year</h4></Label>
                    <Input type="text" id="year" name="year" />
                </FormGroup>
                <FormGroup>
                    <Label for="fuel"><h4>Fuel type</h4></Label>
                    <Input type="select" id="fuel" name="fuel" defaultValue="temp">
                        <option disabled value="temp">--Select type--</option>
                        <option value="gas">Petrol</option>
                        <option value="diesel">Diesel</option>
                        <option value="electric">Electric</option>
                    </Input>
                </FormGroup>
                <Container className="text-center">
                    <Button color="primary">Submit</Button>
                    <Button type="reset" color="warning" className="ms-2">Reset</Button>
                </Container>
                
              </Form>
            </CardBody>
          </Card>
          </Col>
        </Row>
      </Container>
    </Base>
  );
}
