import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <div>
        <lu>
          <li>
            <Link to="/"> Home </Link>
          </li>
          <li>
            <Link to="/especial-sppo"> Especial SPPO </Link>
          </li>
        </lu>
      </div>
    </nav>
  );
}
