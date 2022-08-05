import {useSelector} from "react-redux"
import Price from "../extra/Price"
export default function CartNumbers(){

    const {cartNumbers}=useSelector(state=>state.cart)
    const rows=[
            {title:"Subtotal", price: cartNumbers.subtotal},
            {title:"GST", price:cartNumbers.shipping},
            {title:"Tax", price:cartNumbers.tax},
            {title:"Total (USD)", price:cartNumbers.total}
    ]

    return (
        <div id="cart-numbers">
            {rows.map(({title,price})=>(
                <li key={title} className="list-group-item d-flex justify-content-between ">
                <span>{title}</span>
                <span className="text-muted">
                    <Price value={price} decimal={2}/>
                </span>
            </li>
            ))}
        </div>
    )
}