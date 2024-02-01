function Navbar() {
  return (
    <div className="navbar">
      <nav>
        <ul>
          {/* <li>
            <img src="../assets/images/logo-withtext.png" />
          </li> */}
          <div className="nav-head">
            <li>
              <p>GENTLE MONSTER</p>
            </li>
          </div>
          <div className="nav-center">
            <li>
              <p>Sunglasses</p>
            </li>
            <li>
              <p>Glasses</p>
            </li>
            <li>
              <p>Collaboration</p>
            </li>
            <li>
              <p>Styles</p>
            </li>
            <li>
              <p>Stories</p>
            </li>
            <li>
              <p>Stores</p>
            </li>
            <li>
              <p>Services</p>
            </li>
          </div>
          <div className="nav-right">
            <li>
              <p>Shop in PH</p>
            </li>
            <li>
              <p>Login</p>
            </li>
          </div>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
