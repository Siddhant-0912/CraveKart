const Header = () => {
  return (
    <div className="header">
      <div className="image-container">
        <img className="logo" src={new URL("../assets/logo.png", import.meta.url).href} alt="Logo" />
      </div>

      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
