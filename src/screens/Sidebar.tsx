import { List, ListIcon, ListItem } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { AtSignIcon, CalendarIcon, EditIcon } from "@chakra-ui/icons";

const Sidebar = () => {
  return (
    <List color="white" fontSize="1.2em" spacing={4}>
      <ListItem>
        <ListIcon as={CalendarIcon} color="white" />

        <NavLink to="/">Dashboard</NavLink>
      </ListItem>
      <ListItem>
        <ListIcon as={EditIcon} color="white" />

        <NavLink to="/create"> Create</NavLink>
      </ListItem>
      <ListItem>
        <NavLink to="/profile">
          {" "}
          <ListIcon as={AtSignIcon} color="white" />
          Profile
        </NavLink>
      </ListItem>
    </List>
  );
};

export default Sidebar;
