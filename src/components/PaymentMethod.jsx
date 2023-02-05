import '../../styles/PaymentMethod.css';
import { Form,FormGroup } from 'reactstrap';
const PaymentMethod = () => {
    const submitHandler = (event) => {
        event.preventDefault();
    };
    <>
        <Form onSubmit={submitHandler}>
            <div className="payment">
                <label htmlFor="" className="d-flex align-items-center gap-2">
                    <input type="radio" /> Direct Bank Transfer
                </label>
            </div>
            <div className="payment">
                <label htmlFor="" className="d-flex align-items-center gap-2">
                    <input type="radio" /> Cheque Payment
                </label>
            </div>
            <div className="payment">
                <label htmlFor="" className="d-flex align-items-center gap-2">
                    <input type="radio" /> Master Card
                </label>
                <img src="mastercard.jpg" alt="masterCard.img" />
            </div>
            <div className="payment">
                <label htmlFor="" className="d-flex align-items-center gap-2">
                    <input type="radio" />Paypal
                </label>
                <img src="masterCard.jpg" alt="masterCard.img" />
            </div>
            <div className="payment text-end mt-5">
                <button>Reserve Now</button>
            </div>
        </Form>
    </>
}

export default PaymentMethod;