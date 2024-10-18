import { Link, useNavigate } from "react-router-dom";
import notif from './assets/notif.svg'
import account from './assets/account.svg'
import logo from './assets/logo.png'

function Navbar(){
    const navigate=useNavigate();

    function openProfile(){
        navigate("/profile")
    }

    return(
        <div className="flex max-w-full gap-8 w-screen p-4 size-10 text-xl bg-green-500 h-fit font-light">
            <div>
                <Link to="/" className="font-medium">Home</Link>
            </div>
            <div>
                <Link to="/explore">Explore</Link>
            </div>
            <div>
                <Link to="/compare">Compare</Link>
            </div>
            <div>
                <Link to="/about">About</Link>
            </div>
            <div className="flex ml-112 mr-auto">
                <img src={logo} alt="logo" className="size-10 -mt-3.5 w-14 -mr-1"></img>
                <p className="font-medium">Nutri</p><p className="text-white font-normal">Decode</p>
            </div>
            <div>
                <img className="size-8 cursor-pointer" src={notif} alt="notification"></img>
            </div>
            <div>
                <img className="size-8 cursor-pointer" src={account} alt="account" onClick={openProfile}></img>
            </div>

            
        </div>
    )
}

export default Navbar;