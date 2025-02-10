import {useNavigate} from "react-router-dom";
import {useRef} from "react";
import "./Navbar.css";
import MenuIcon from "@mui/icons-material/Menu";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

function Navbar() {
  const navigate = useNavigate();
  const nav = useRef();
  const mobileOpenMenu = useRef();
  const mobileCloseMenu = useRef();
  const mobileNavbar = useRef();
  const navbar = useRef();
  const body = document.querySelector("body");

  const mobileOpenMenuF = () => {
    mobileOpenMenu.current.style.display = "none";
    mobileCloseMenu.current.style.display = "block";

    if (mobileCloseMenu.current.style.display == "block") {
      mobileNavbar.current.style.display = "flex";
      body.style.overflow = "hidden";
    } else {
      mobileNavbar.current.style.display = "none";
      body.style.overflow = "scroll";
    }
  };
  const mobileCloseMenuF = () => {
    mobileOpenMenu.current.style.display = "block";
    mobileCloseMenu.current.style.display = "none";

    if (mobileCloseMenu.current.style.display == "block") {
      mobileNavbar.current.style.display = "flex";
      body.style.overflow = "hidden";
    } else {
      mobileNavbar.current.style.display = "none";
      body.style.overflow = "scroll";
    }
  };
  const mobileNavbarTransparentAndUlClicked = () => {
    mobileNavbar.current.style.display = "none";
    mobileOpenMenu.current.style.display = "flex";
    body.style.overflow = "scroll";
  };

  return (
    <>
      <div
        ref={nav}
        className="navbar mx-auto px-6 sm:px-8 lg:px-16 xl:px-40 py-6"
      >
        <div className="max-w-8xl">
          <div className="navbar-container" ref={navbar}>
            <div className="navbar-left">
              <img
                className="logo-img"
                src="bas2.png"
                alt=""
                onClick={() => navigate("/")}
              />
            </div>
            <div className="navbar-right hidden md:block">
              <ul>
                <li onClick={() => navigate("/")}> Ana Sayfa</li>
                <li onClick={() => navigate("/about/")}> Hakkımızda</li>
                {/* <li onClick={() => navigate("/activities/")}>Activites</li> */}
                <li onClick={() => navigate("/contact/")}>İletişim</li>
              </ul>
            </div>
            <div
              className="mobile-open-menu md:hidden"
              ref={mobileOpenMenu}
              onClick={mobileOpenMenuF}
            >
              <MenuIcon fontSize="medium" />
            </div>
          </div>
          <div
            className="mobile-navbar text-start"
            id="mobile-navbar"
            // onClick={mobileNavbarClicked}
            ref={mobileNavbar}
          >
            <div
              onClick={mobileNavbarTransparentAndUlClicked}
              className="mobile-navbar-transparent"
            ></div>
            <div className="mobile-navbar-right p-7">
              <div
                className="mobile-close-menu mb-4 text-xl"
                ref={mobileCloseMenu}
                onClick={mobileCloseMenuF}
              >
                <CloseRoundedIcon fontSize="medium" />
              </div>
              <div onClick={mobileNavbarTransparentAndUlClicked}>
                <ul>
                  <li className="py-4 text-xl" onClick={() => navigate("/")}>
                    {" "}
                    Anasayfa
                  </li>
                  <li
                    className="py-4 text-xl"
                    onClick={() => navigate("/about/")}
                  >
                    {" "}
                    Hakkımızda
                  </li>
                  {/* <li
                    className="py-4 text-xl"
                    onClick={() => navigate("/activities/")}
                  >
                    Activites
                  </li> */}
                  <li
                    className="py-4 text-xl"
                    onClick={() => navigate("/contact/")}
                  >
                    İletişim
                  </li>
                  <li
                    className="py-4 text-xl"
                    onClick={() => navigate("#")}
                    // style={{fontSize: "18px", marginLeft: "5px"}}
                  >
                    Bizi Takip Edin <br />
                    <div className="flex gap-4 mt-8">
                      <a href="https://www.instagram.com/">
                        <InstagramIcon
                          color="white"
                          style={{fontSize: "28px"}}
                        />
                      </a>
                      <a href="https://www.facebook.com/?locale=tr_TR">
                        <FacebookIcon style={{fontSize: "28px"}} />
                      </a>
                      <a href="https://wa.me/+905352181545" target="_blank">
                        <WhatsAppIcon style={{fontSize: "28px"}} />
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
