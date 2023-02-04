import { useParams,useNavigate } from "react-router-dom";
import { Card, CardBody, CardHeader, Container, Row, Col,Button } from "reactstrap";
import Base from "../components/Base";
import { auth } from "../firebase";
import {doc, getDoc,setDoc,updateDoc } from "firebase/firestore";
import { db } from "../firebase";
import { useEffect, useState } from "react";

export default function ReadListing(props) {
  //fetch the particular listing by listing id
  const [data, setData] = useState([]);
  const { listingId } = useParams();
  const navigate = useNavigate();
  const user = auth.currentUser;
  const fetchData = async () => {

    const docRef = doc(db, "cars", listingId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists) {
      console.log("Document Data:", docSnap.data().listed);
      setData(docSnap.data());
    }
  }
  const listCar = async()=>{
    try{
    await setDoc(doc(db,"users",user.uid),{
      listedCarId: listingId
    })
    await updateDoc(doc(db,"cars",listingId),{
      listed:true
    })
    alert(`Rented successfully`)
    navigate('/dashboard')
  }catch(e){
    alert(`error occured ${e}`)
  }
  }
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Base>
      <Container className="mt-3">
        <Card className="rounded-0 shadow-sm">
          <CardHeader>
            <h1>Vehicle name</h1>
          </CardHeader>
          <CardBody>
            <Row>
              <Col
                md={{
                  size: 3,
                }}
              >
                <img
                  src="/src/assets/courage.jpg"
                  alt="vehicle-image"
                  style={{
                    maxWidth: "300px",
                  }}
                  className="ms-3"
                />
              </Col>
              <Col className="ms-2">
                <h1>Description</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum recusandae praesentium voluptate totam, culpa sit mollitia atque sapiente earum. Veniam illo modi vel voluptates. Quia, accusantium quo corrupti eveniet magnam quisquam sint nulla ipsum labore consequatur reprehenderit placeat qui ratione dignissimos amet repudiandae ipsam, nobis consequuntur cupiditate. Temporibus impedit distinctio illo, atque accusantium inventore? Explicabo odio dicta aut laborum accusantium eos ducimus alias, deserunt vel quasi, reiciendis est dignissimos sequi ipsa accusamus magnam mollitia nostrum? Possimus est velit dolorem neque accusamus repellat corrupti provident praesentium commodi rem? Ad omnis obcaecati excepturi quidem earum cum ab sint iusto debitis illum! Nemo consequatur at quasi nobis fuga perspiciatis libero magni, corporis ipsam accusantium eos explicabo laudantium sunt nam dolor animi! Rerum excepturi delectus dolor porro ipsam deserunt. Sunt, quos culpa? Commodi nulla dolorem sit, qui enim, repellat minima voluptate eius, magni labore unde adipisci. Animi esse praesentium fuga aperiam libero minus optio est nemo quia itaque, dolorem eos doloremque nesciunt et voluptas laborum molestias ratione cum deserunt repellendus quisquam amet corrupti doloribus. Eum, sapiente. Blanditiis at voluptates, eligendi in, aliquam a illum corporis ut temporibus accusamus, mollitia ratione quisquam voluptas veniam incidunt. Ut id mollitia rerum doloribus, impedit ipsum dolores nihil porro earum minus illum optio ex voluptatibus nostrum repellat, fugiat ratione sed explicabo veritatis culpa dolor magnam quas hic? Veritatis reiciendis cumque aliquam, beatae ipsa vel tempore est, nobis enim ex laboriosam esse ea culpa placeat nemo qui iure, nihil odio doloribus eum unde consequatur! Aut architecto consequatur ullam illum!</p>
              </Col>  
              {data.ownerUserId != user.uid && !(data.listed) &&
              <Button onClick={listCar}>
                List Car
              </Button>}
            </Row>
          </CardBody>
        </Card>
      </Container>
    </Base>
  );
}
