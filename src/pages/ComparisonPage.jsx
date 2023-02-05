import { useLocation } from "react-router-dom";
import { Container, Row, Col, Card, CardBody, CardHeader } from "reactstrap";
import Base from "../components/Base";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { async } from "@firebase/util";
import { db } from "../firebase";
import { getCarComparison,getCarPollution } from "../services/car-services";
export default function ComparisonPage() {
  const { state } = useLocation();
  const { compareListings } = state || {};
  const car1Id = compareListings[0];
  const car2Id = compareListings[1];
  const [carData, setCarData] = useState([])
  const [carP1,setCarP1] = useState("");
  const [carP2,setCarP2] = useState("");
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
    getCarPollution(car1,car1Model).then(data =>{
      console.log("car poll1 data")
      console.log(data.data);
      setCarP1(data.data);
    }).catch(error => {
      console.log(error)
    })
    getCarPollution(car2,car2Model).then(data =>{
      console.log("car poll2 data")
      console.log(data.data);
      setCarP2(data.data);
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
              {carData[0] && <img src={carData[0].image} alt="" srcset="" style={
                {
                  maxHeight: "60vh",
                  width: "100%"
                }
              } />}
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
              {carData[1] && <img src={carData[1].image} alt="" srcset=""  style={
                {
                  maxHeight: "60vh",
                  width: "100%"
                }
              } />}
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
        { <Row className="mt-3">
          <Col
            md={{
              size: 6,
            }}
          >
            <Card className="rounded-0">
              <CardHeader>Car 1 Pollution Analysis by cohere</CardHeader>
              <CardBody>
                <p>
                  {
                    carP1.description
                  }
                </p>
              </CardBody>
            </Card>
          </Col>
          <Col>
            <Card className="rounded-0">
              <CardHeader>Car 2 Reviews Analysis by cohere</CardHeader>
              <CardBody>
                <p>
                  {
                    carP2.description
                  }
                </p>
              </CardBody>
            </Card>
          </Col>
        </Row> }
      </Container>
    </Base>
  );
}
