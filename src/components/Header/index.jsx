import { Link } from "react-router-dom";
import SearchBar from "../SearchBar";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import { IoGitCompareSharp } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Tooltip } from "@mui/material";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

const Header = () => {
  return (
    <header>
      <div className="top-stripe py-2 border-t-[1px] border-gray-300 border-b-[1px] ">
        <div className="container">
          <div className="flex flex-row items-center justify-between">
            <div className="col1 w-[50%] text-[16px] font-light">
              Get up to 50% off new season styles, limited time only
            </div>
            <div className="col2 flex items-center justify-end">
              <ul className="flex items-center gap-3">
                <li className="list-none">
                  <Link
                    to="/help-center"
                    className="link font-light text-[16px]"
                  >
                    Help Center
                  </Link>
                </li>
                <li className="list-none">
                  <Link
                    to="/order-tracking"
                    className="link font-light text-[16px]"
                  >
                    Order Tracking
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="header py-5">
        <div className="container flex items-center justify-between">
          <div className="col1 w-[25%]">
            <Link to="/">
              <img src="public/logo.jpg" alt="Logo" />
            </Link>
          </div>
          <div className="col2 w-[50%]">
            <SearchBar />
          </div>
          <div className="col3 w-[25%]  flex items-center pl-7">
            <ul className="flex items-center gap-3 w-full justify-end">
              <li className="list-none">
                <Link
                  to="login"
                  className="link transition text-[15px] font-[500] "
                >
                  Login
                </Link>{" "}
                | &nbsp;
                <Link
                  to="register"
                  className="link transition text-[15px] font-[500] "
                >
                  Register
                </Link>
              </li>
              <li>
                <Tooltip title="Compare" arrow>
                  <IconButton aria-label="cart">
                    <StyledBadge badgeContent={3} color="secondary">
                      <IoGitCompareSharp />
                    </StyledBadge>
                  </IconButton>
                </Tooltip>
              </li>
              <li>
                <Tooltip title="Cart" arrow>
                  <IconButton aria-label="cart">
                    <StyledBadge badgeContent={4} color="secondary">
                      <AiOutlineShoppingCart />
                    </StyledBadge>
                  </IconButton>
                </Tooltip>
              </li>
              <li>
                <Tooltip title="Wishlist" arrow>
                  <IconButton aria-label="cart">
                    <StyledBadge badgeContent={2} color="secondary">
                      <FaRegHeart />
                    </StyledBadge>
                  </IconButton>
                </Tooltip>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
