import { useNavigate } from "react-router-dom"

export default function CartBuyButton({title="Buy Now"}){
    const nav=useNavigate()
    const buy=()=>{
        if(window.confirm("Would You Like To Place Your Order?")){
            window.alert("Order Placed Successfully!")
            nav("/")
            window.location.reload()
        }
    }

    return (
        <button onClick={buy} className="btn btn-success d-block w-100 fw-bold mt-3">
            {title}
        </button>
    )
}