import { addDoc,collection } from "firebase/firestore";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Alert, CardBody, Form, FormGroup, Container, Card, Row, Col, Label, Input, Button } from "reactstrap";
import Base from "../components/Base";
import {db,auth} from "../firebase";
export default function AddListing() {
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [manufacturer, setManufacturer] = useState("");
  const [description, setDescription] = useState("");
  const [fuelType, setFuelType] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const user = auth.currentUser;

  //create listing on firebase
  const createListing = async (e) => {
    e.preventDefault(e);
    setError("");
    // console.log(`${model} ${year} ${manufacturer} ${description} ${fuelType}`)
    if (model === undefined || year === '' || manufacturer === '' || description === '' || fuelType === '') {
      setError("Please complete the form to proceed");
      return;
    }
    await addDoc(collection(db,'cars'),{
      model:model,
      year:year,
      manufacturer:manufacturer,
      description:description,
      fuelType: fuelType,
      ownerUserId: user.uid,
      rented:false,
      rentedBy:null
    });

    navigate('/dashboard');
  }

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
            <h2>Listing Form</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <Card className="rounded-0 shadow-sm">
              <CardBody>
                <Form onSubmit={createListing}>
                  <FormGroup>
                    <Label for="model"><h4>Car Model</h4></Label>
                    <Input type="text" id="model" name="model" onChange={(e) => setModel(e.target.value)} />
                  </FormGroup>
                  <FormGroup>
                    <Label for="manufacturer"><h4>Manufacturer</h4></Label>
                    <Input type="text" id="manufacturer" name="manufacturer" onChange={(e) => setManufacturer(e.target.value)} />
                  </FormGroup>
                  <FormGroup>
                    <Label for="year"><h4>Year</h4></Label>
                    <Input type="text" id="year" name="year" onChange={(e) => setYear(e.target.value)} />
                  </FormGroup>
                  <FormGroup>
                    <Label for="description"><h4>Description</h4></Label>
                    <Input type="textarea" id="description" rows="5" name="description" onChange={(e) => setDescription(e.target.value)} />
                  </FormGroup>

                  <FormGroup>
                    <Label for="fuel"><h4>Fuel type</h4></Label>
                    <Input type="select" id="fuel" name="fuel" defaultValue="temp" onChange={(e) => setFuelType(e.target.value)}>
                      <option disabled value="temp">--Select type--</option>
                      <option value="Petrol">Petrol</option>
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
