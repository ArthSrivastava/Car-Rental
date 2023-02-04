import { Container } from "reactstrap"
import Base from "../components/Base"
import Listing from "../components/Listing"
import { useEffect, useState } from "react"
import { collection, query, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";

export default function Dashboard() {

    //fetch the listings from the database
    const [listings, setListings] = useState([]);

    useEffect(
        () => {
            const q = query(collection(db, 'cars'));
            const unsubscribe = onSnapshot(q, (querySnapshot) => {
                let fetchedListings = [];
                querySnapshot.forEach((doc) => {
                    fetchedListings.push({ ...doc.data(), id: doc.id });
                });
                setListings(fetchedListings);
                console.log(listings);
            })
            return () => unsubscribe();
        }, []
    );

    return (
        <Base>
            <Container >
                <h1 className="ms-3 mt-3">Recent Listings</h1>
                {/* map over listings and pass the items to Listing.jsx component as props */
                    listings.map((listing,index) => (
                        <Listing listing={listing} key={index} />
                    ))
                }
            </Container>
        </Base>
    )
}