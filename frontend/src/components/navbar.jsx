import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import NavList from "./navlist";
import mainIcon from "../assets/icons/main.svg";
import groupIcon from "../assets/icons/group.svg";
import { styles } from "../styles/styles";

 
export const NavbarSimple = () => {
  const [openNav, setOpenNav] = React.useState(false);
 
  const handleWindowResize = () =>
    window.innerWidth >= 760 && setOpenNav(false);
 
  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
 
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
 
  return (
    <Navbar className={`${styles.navbar}`}>
      <div className={`${styles.navbarContainer}`}>
        <div className={`${styles.navbarIconContainer}`}>
            <Typography
            as="a"
            href="#"
            className="mr-4 cursor-pointer py-1.5"
            >
            <img src={mainIcon} alt="start icon"/>
            </Typography>
        </div>
       <div className={`${styles.navbarLinksContainer}`}>
          <NavList />
        </div> 
        <IconButton
          variant="text"
          className={`${styles.navButton}`}
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          <img src={groupIcon} alt="group icon"/>
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </Navbar>
  );
}
