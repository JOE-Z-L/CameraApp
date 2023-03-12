import { Grid, GridItem } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

// components
import Navbar from "../components/Navbar";
export default function RootLayout() {
  return (
    <Grid templateColumns="repeat(6, 1fr)" bg="gray.100">
      <GridItem as="main" colSpan={6} p="40px" height="120vh">
        <Navbar />
        <Outlet />
      </GridItem>
    </Grid>
  );
}
