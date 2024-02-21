import { Link } from "react-router-dom";
import { useTheme } from "../hooks/useTheme.jsx";
import { useCart } from "../hooks/useCart.jsx";
import UserIcon from "../icons/UserIcon.svg";
import LikeIcon from "../icons/LikeIcon.svg";
import ThemeIcon from "../icons/ThemeIcon.svg";
import CartIcon from "../icons/CartIcon.svg";

// eslint-disable-next-line react/prop-types
function IconsList({ onClickCartIcon }) {
  const whiteIconStyle = { filter: "invert(100%)" };
  const { cartItems } = useCart();
  const { toggleTheme } = useTheme();

  const cartItemCount = cartItems?.length;

  return (
    <ul className="header-right">
      <Link to={"/login"}>
        <li className="icon">
          <img src={UserIcon} alt="" style={whiteIconStyle} />
        </li>
      </Link>
      <li className="icon">
        <img src={LikeIcon} alt="" style={whiteIconStyle} />
      </li>
      <li className="icon" onClick={() => toggleTheme()}>
        <img src={ThemeIcon} alt="" style={whiteIconStyle} />
      </li>
      <li className="cart-icon" onClick={onClickCartIcon}>
        <Link to={"/cart"}>
          <img src={CartIcon} alt="" style={whiteIconStyle} />
          {cartItemCount > 0 && (
            <span className="cart-count">{cartItemCount}</span>
          )}
        </Link>
      </li>
    </ul>
  );
}

export default IconsList;
