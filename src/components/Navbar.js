import { Link } from "react-router-dom";
import { providerAuth } from "../auth/authentication";

export default function Navbar() {

  let auth = providerAuth();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="#">Todo List</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse"
        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
        aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/tasks">Tâches</Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/" onClick={() => auth.signout()}>Déconnexion</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
