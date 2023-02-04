import { useLocation } from "react-router-dom";
import { Container, Row, Col, Card, CardBody, CardHeader } from "reactstrap";
import Base from "../components/Base";
import { doc, getDoc } from "firebase/firestore";
import { useEffect } from "react";
import { async } from "@firebase/util";
import { db } from "../firebase";
export default function ComparisonPage() {
  const { state } = useLocation();
  const { compareListings } = state || {};
  const car1Id = compareListings[0];
  const car2Id = compareListings[1];
    console.log(car1Id, car2Id)
  const getCarData = async (carId) => {
    const docRef = doc(db, "cars", carId);
    const docSnap = await getDoc(docRef);
    console.log(docSnap.data())
  };

  useEffect(() => {
    getCarData(car1Id);
    getCarData(car2Id);
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
            <Card className="rounded-0">
              <CardHeader>Car 1</CardHeader>
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
              <CardHeader>Car 2</CardHeader>
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
        <Row className="mt-3">
            <Col>
                <Card className="rounded-0">
                    <CardHeader>Comparison</CardHeader>
                    <CardBody>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur soluta eligendi reprehenderit nisi laudantium quo fugit. Perspiciatis, vel incidunt qui cupiditate odio mollitia suscipit possimus sunt amet placeat iure quae fugiat quo necessitatibus cum optio similique laborum, quidem consequatur. Praesentium totam sapiente doloribus quasi quo officia rerum nihil corrupti! A maiores ea cumque aliquid ipsa accusamus repudiandae asperiores quos. Ea facilis beatae praesentium repudiandae eaque laudantium in. Fugit explicabo aliquid numquam praesentium eveniet iure quo unde distinctio facere debitis. Eveniet possimus commodi dolorum perspiciatis magni accusamus dolore praesentium nesciunt. Maiores, minus et? Accusantium laboriosam voluptatum quod necessitatibus, repellendus illo. Minima quae illum iste exercitationem quo ipsum enim ut possimus, animi magni aspernatur eaque nam repellendus consequuntur fuga, eius distinctio vitae dicta ipsa atque! Ea quidem laborum earum aspernatur velit laboriosam tempore ducimus eveniet labore cumque accusantium consequatur inventore, quas amet harum illum autem reiciendis soluta? Ipsum, veritatis ea exercitationem eum laudantium quisquam laboriosam tenetur dicta ex. Possimus, necessitatibus id. Ducimus recusandae minima esse dolorem earum. Ducimus explicabo vel fugit facere! Dolorem est eum laborum impedit fugit aperiam minima architecto placeat cum mollitia, ratione, explicabo exercitationem expedita excepturi animi? Accusantium voluptates velit tempore temporibus tempora amet exercitationem voluptatem. Laborum, aliquam reprehenderit.</CardBody>
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
