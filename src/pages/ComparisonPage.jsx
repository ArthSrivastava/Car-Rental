import { useLocation } from "react-router-dom"
import Base from "../components/Base"
export default function ComparisonPage() {
    const {state} = useLocation()
    const {compareListings} = state || {}
    return (
        <Base>
            <h1>Comparison page</h1>
            
        </Base>
    )
}