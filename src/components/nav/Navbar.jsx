import {useNavigate,useLocation} from "react-router-dom"
import CategorySelector from "./CategorySelector"
import SearchBar from "./SearchBar"
import CartButton from "./CartButton"
import Condition from "../extra/Condition"

export default function Navbar(){
    const {pathname}=useLocation()
    const nav=useNavigate()
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top border-bottom">
            <div className="container-fluid px-md-5">
                <span onClick={()=>nav("/")} id="name" className="navbar-brand fw-bold pointer">
                    Get Your Next Property
                </span>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    <Condition test={(pathname==="/")} success={<><CategorySelector/><SearchBar/></>}/>
                    <CartButton/>
                    
                </div>
            </div>
        </nav>
    )
}