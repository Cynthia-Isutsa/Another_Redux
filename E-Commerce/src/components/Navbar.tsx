import { Link } from "react-router-dom"
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";


const Navbar = () => {
  return (
    <nav>
        <div>
            <div>
                <Link to= "/">e-shop</Link>
            </div>
            <div>
                <form>
                    <input type='text' placeholder="search product"/>
                    <FaSearch />
                </form>
            </div>
            <div>
                <Link to='/cart'>
                <FaShoppingCart />
                </Link>
                <button>
                    LogIn | Register
                </button>
                <button>
                    <FaUser />
                </button>
            </div>
        </div>
    </nav>
  )
}

export default Navbar