import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import NavList from "./navlist";
import mainIcon from "../assets/icons/main.svg";
import { styles } from "../styles/styles";

 
export const NavbarSimple = () => {
  const [openNav, setOpenNav] = React.useState(false);
 
  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);
 
  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
 
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
 
  return (
    <Navbar className={`${styles.navbar}`}>
      <div className={`${styles.navbarContainer}`}>
        <Typography
          as="a"
          href="#"
          className="mr-4 cursor-pointer py-1.5"
        >
          <img src={mainIcon} alt="start icon"/>
        </Typography>
       <div className="hidden lg:block">
          <NavList />
        </div> 
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
      
        </IconButton>
      </div>
      <Collapse>
        <NavList />
      </Collapse>
    </Navbar>
  );
}
