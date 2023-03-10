import { Grid, GridItem } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

// components
import Navbar from "../components/Navbar";
import Sidebar from "./Sidebar";
export default function RootLayout() {
  return (
    <Grid templateColumns="repeat(6, 1fr)" bg="gray.100">
      <GridItem as="main" colSpan={{ base: 6, md: 5, xl: 6 }} p="40px">
        <Navbar />
        <Outlet />
      </GridItem>
    </Grid>
  );
}
