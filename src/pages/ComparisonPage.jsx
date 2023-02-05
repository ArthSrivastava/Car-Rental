import { useLocation } from "react-router-dom";
import { Container, Row, Col, Card, CardBody, CardHeader } from "reactstrap";
import Base from "../components/Base";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { async } from "@firebase/util";
import { db } from "../firebase";
import { getCarComparison } from "../services/car-services";
export default function ComparisonPage() {
  const { state } = useLocation();
  const { compareListings } = state || {};
  const car1Id = compareListings[0];
  const car2Id = compareListings[1];
  const [carData, setCarData] = useState([])

  const [carComparisonData, setCarComparisonData] = useState("")

  const getCarData = async (carId) => {
    const docRef = doc(db, "cars", carId);
    const docSnap = await getDoc(docRef);
    return docSnap.data()
  };
  
  const getData = async() => {
    let info = []
    let car1Data = await getCarData(car1Id);
    info.push(car1Data)
    let car2Data = await getCarData(car2Id);
    info.push(car2Data)
    console.log(info)
    setCarData(info)
    
    let car1 = info[0].manufacturer
    let car2 = info[1].manufacturer
    let car1Model = info[0].model
    let car2Model = info[1].model
    getCarComparison(car1, car2, car1Model, car2Model).then(data => {
      console.log(data)
      setCarComparisonData(data)
    }).catch(error => {
      console.log(error)
    })
  }

  useEffect(() => {
    getData()
  }, []);


  return (
    <Base>
      <Container className="text-center mt-3">
        <Row>
          <Col
            md={{
              size: 6,
            }}
          >
            {console.log(carData)}
            <Card className="rounded-0">
              <CardHeader><h1>{carData[0] && carData[0].model}</h1></CardHeader>
              <CardBody>
                <p>
                  {carData[0] && carData[0].description}
                </p>
              </CardBody>
            </Card>
          </Col>
          <Col>
            <Card className="rounded-0">
              <CardHeader><h1>{carData[1] && carData[1].model}</h1></CardHeader>
              <CardBody>
                <p>
                  {carData[1] && carData[1].description}
                </p>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <hr />
        <Row className="mt-3">
            <Col>
                <Card className="rounded-0">
                    <CardHeader><h1>Comparison</h1></CardHeader>
                    <CardBody><p>{carComparisonData && carComparisonData.description}</p></CardBody>
                </Card>
            </Col>
        </Row>
        <Row className="mt-3">
          <Col
            md={{
              size: 6,
            }}
          >
            <Card className="rounded-0">
              <CardHeader>Car 1 Reviews Analysis</CardHeader>
              <CardBody>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Doloribus molestias cum perferendis suscipit commodi,
                  voluptatum repellat rem sed dignissimos atque recusandae
                  voluptas autem voluptatibus adipisci quos quo cumque aliquid?
                  Quidem expedita nihil ipsum quae?
                </p>
              </CardBody>
            </Card>
          </Col>
          <Col>
            <Card className="rounded-0">
              <CardHeader>Car 2 Reviews Analysis</CardHeader>
              <CardBody>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Doloribus molestias cum perferendis suscipit commodi,
                  voluptatum repellat rem sed dignissimos atque recusandae
                  voluptas autem voluptatibus adipisci quos quo cumque aliquid?
                  Quidem expedita nihil ipsum quae?
                </p>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Base>
  );
}
