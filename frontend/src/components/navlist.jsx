import {Typography} from "@material-tailwind/react";
import { navlist } from "../constants/navbar";
import { styles } from "../styles/styles";
  
const  NavList = () => {
  return (
    <ul className={`${styles.navlist}`}>
    {
        navlist.map(link => (<Typography
            as="li"
            variant="small"
            color="white"
            className={`${styles.navlink}`}>
            <a href={link.path} className="flex items-center hover:text-blue-500 transition-colors">
              {link.display}
            </a>
          </Typography>))           
    }
    </ul>
  );
}

export default NavList;