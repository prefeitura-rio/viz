import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <div>
        <lu>
          <li>
            <Link to={process.env.PUBLIC_URL + "/"}> Home </Link>
          </li>
          <li>
            <Link to={process.env.PUBLIC_URL + "/especial-sppo"}> Especial SPPO </Link>
          </li>
        </lu>
      </div>
    </nav>
  );
}
