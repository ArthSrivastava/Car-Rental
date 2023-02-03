import { Container } from "reactstrap"
import Base from "../components/Base"
import Listing from "../components/Listing"
import { useState } from "react"
export default function Dashboard() {

    //fetch the listings from the database
    const [listings, setListings] = useState([])
    return (
        <Base>
            <Container >
                <h1 className="ms-3 mt-3">Recent Listings</h1>
                {/* map over listings and pass the items to Listing.jsx component as props */}
                <Listing listings={listings} />
            </Container>
        </Base>
    )
}