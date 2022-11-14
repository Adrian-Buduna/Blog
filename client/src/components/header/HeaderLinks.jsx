import { Link } from "react-router-dom"

const HeaderLinks = () => {
  return (
    <div className="flex gap-10 uppercase">
        <Link to="/" className="hover:text-yellow-200 hover:scale-110 transition ease-in-out delay-150">Home</Link>
        <Link to="/articles" className="hover:text-yellow-200 hover:scale-110 transition ease-in-out delay-150">Articles</Link>
        <Link to="/logout" className="hover:text-yellow-200 hover:scale-110 transition ease-in-out delay-150">Logout</Link>
        {/* flag */}
        <Link to="/login" className="hover:text-yellow-200 hover:scale-110 transition ease-in-out delay-150">Login</Link>
        <Link to="/register" className="hover:text-yellow-200 hover:scale-110 transition ease-in-out delay-150">Register</Link>

    </div>
  )
}

export default HeaderLinks