import Base from "../components/Base";
import { Row, Col, Container, Button } from "reactstrap";
import { NavLink as ReactLink } from "react-router-dom";
export default function Home() {
    return (
        <Base>
        <Container>
            <Row >
                <Col md={
                    {
                        size: 6,
                        offset: 1
                    }} className="home--content">
                    <h1>
                    You pick up the car and we will take care of rest.
                    </h1>
                    <p>Looking for a great deal on a new or used car near you? At Car.Rent we have a wide range of new and used cars for sale at great prices.</p>
                    <Button color="primary" className="mx-2"> 
                        Get Started
                    </Button>
                    <Button color="primary" className="mx-2" tag={ReactLink} to="/dashboard"> 
                        View Dashboard 
                    </Button>
                </Col>
                <Col className="home--content home--logo">
                
                </Col>
            </Row>

            </Container>
        </Base>

    )
}