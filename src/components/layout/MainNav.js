import { Link } from "react-router-dom";
import classes from './MainNav.module.css';

function MainNav() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}><Link to="/">React Images</Link></div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Images</Link>
          </li>
          <li>
            <Link to="/new-meetup">Add New Images</Link>
          </li>
          <li>
            {/* <Link to="/favorites">My Favorites</Link> */}
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNav;
