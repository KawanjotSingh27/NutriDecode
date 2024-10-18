import { Link } from "react-router-dom";
import notif from './assets/notif.svg'
import account from './assets/account.svg'

function Navbar(){
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
                <p className="font-medium">Nutri</p><p className="text-white">Decode</p>
            </div>
            <div>
                <img className="size-8" src={notif} alt="notification"></img>
            </div>
            <div>
                <img className="size-8" src={account} alt="account"></img>
            </div>

            
        </div>
    )
}

export default Navbar;