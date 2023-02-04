import { useLocation } from "react-router-dom"
import { Container, Row, Col } from "reactstrap"
import Base from "../components/Base"
export default function ComparisonPage() {
    const {state} = useLocation()
    const {compareListings} = state || {}
    return (
        <Base>
           <Container className="text-center mt-3">
           <Row>
                <Col md={
                    {
                        size: 6
                    }
                }></Col>
                <Col>Car 2 desc</Col>
            </Row>
           </Container>

        </Base>
    )
}