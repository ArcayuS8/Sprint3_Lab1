import HeaderNavBar from "./HeaderNavBar";
import IconsList from "./IconsList";
import "../styles/Header.css";

function Header() {
  return (
    <header>
      <div className="header-container">
        <HeaderNavBar />
        <IconsList />
      </div>
    </header>
  );
}

export default Header;
