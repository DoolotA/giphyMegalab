import { Link } from "react-router-dom"
import "../../index"

function Header() {
    return(
        <div className="head" style={{display: 'flex', justifyContent: 'space-around',backgroundColor:"orange",}}>
            <h1><Link to={'/'}>Trands</Link></h1>
            <h1><Link to={'/random'}>Random</Link></h1>
        </div>
    )
}

export default Header