import { Text, Flex, Heading, HStack } from "@chakra-ui/react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Flex
      as="nav"
      p="10px"
      gap="10px"
      mb="40px"
      className="nav-container"
      justifyContent="center"
      alignItems="center"
    >
      <Heading mr="30px" as="h1">
        CW
      </Heading>
      <HStack spacing="20px" fontFamily="Helvetica">
        <NavLink to="/" className="navlink">
          <Text
            fontWeight="thin"
            borderBottom="2px solid transparent"
            _hover={{ borderBottom: "2px solid #FFB347" }}
          >
            Photos
          </Text>
        </NavLink>
        <NavLink to="/twocameras" className="navlink">
          <Text
            fontWeight="thin"
            borderBottom="2px solid transparent"
            _hover={{ borderBottom: "2px solid #FFB347" }}
          >
            Dual Cameras
          </Text>
        </NavLink>
        <NavLink to="/multicameras" className="navlink">
          <Text
            fontWeight="thin"
            borderBottom="2px solid transparent"
            _hover={{ borderBottom: "2px solid #FFB347" }}
          >
            Multi Camera
          </Text>
        </NavLink>
      </HStack>
    </Flex>
  );
};

export default Navbar;
