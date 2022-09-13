import React from "react";
import { VscAdd } from "react-icons/vsc";

function Navbar(props) {
  return (
    <nav>
      <div class="heart" />
      <h1>ideate</h1>
      <div class="menu-container">
        <div class="list-wrapper" tabIndex="0">
          <ul className="nav-list">
            <li className="nav-item"></li>
            <li className="nav-item">
              <VscAdd />
            </li>
            <li className="nav-item">Contact</li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
