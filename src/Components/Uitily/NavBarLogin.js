import React, { useEffect, useState } from "react";
import {
  Navbar,
  Container,
  FormControl,
  Nav,
  NavDropdown,
} from "react-bootstrap";
import icon from "../../images/icon.svg";
import person from "../../images/person.png";
import cartbag from "../../images/cartbag.svg";
import NavbarSearchHook from "./../../hook/search/navbar-search-hook";
import { useDispatch, useSelector } from "react-redux";
import { getLoggedUser } from "./../../redux/actions/authAction";
import GetAllUserCartHook from "./../../hook/cart/get-all-user-cart-hook";
const NavBarLogin = () => {
  //const dispatch = useDispatch()

  const [OnChangeSearch, searchWord] = NavbarSearchHook();
  let word = "";
  if (localStorage.getItem("searchWord") != null)
    word = localStorage.getItem("searchWord");

  const [user, setUser] = useState("");
  useEffect(() => {
    if (localStorage.getItem("user") != null)
      setUser(JSON.parse(localStorage.getItem("user")));
  }, []);

  const logOut = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser("");
  };

  const [itemsNum] = GetAllUserCartHook();

  return (
    <Navbar className="sticky-top" bg="light" variant="dark" expand="sm">
      <Container>
        <Navbar.Brand>
          <a href="/">
            <img src={icon} className="logo" />
          </a>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <FormControl
            value={word}
            onChange={OnChangeSearch}
            type="search"
            placeholder=" ابحث هنا"
            className="me-2 w-100 text-center"
            aria-label="Search"
          />
          <Nav className="me-auto">
            {user != "" ? (
              <NavDropdown
                title={<span style={{ color: "black" }}>{user.name}</span>}
                id="basic-nav-dropdown"
              >
                {user.role === "admin" ? (
                  <NavDropdown.Item href="/admin/allproducts">
                    لوحة التحكم
                  </NavDropdown.Item>
                ) : (
                  <NavDropdown.Item href="/user/profile">
                    الصفحه الشخصية
                  </NavDropdown.Item>
                )}
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={logOut} href="/">
                  تسجيل خروج
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <Nav.Link
                href="/login"
                className="nav-text d-flex mt-3 justify-content-center"
              >
                <img src={person} className="login-img" alt="sfvs" />
                <p style={{ color: "black" }}>دخول</p>
              </Nav.Link>
            )}

            <Nav.Link
              href="/cart"
              className="nav-text position-relative d-flex mt-3 justify-content-center"
              style={{ color: "white" }}
            >
              <img src={cartbag} className="login-img" alt="sfvs" />
              <p style={{ color: "black" }}>العربه</p>
              <span class="position-absolute top-10 start-0 translate-middle badge rounded-pill bg-danger">
                {itemsNum || 0}
              </span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBarLogin;
