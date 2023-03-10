import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Grid, GridItem } from "@chakra-ui/react";
import Sidebar from "./Sidebar";
import "./RootLayout.css";

export default function RootLayout() {
  return (
    <Grid templateColumns="repeat(6,1fr)" bg="gray.50" className="RootLayout">
      <GridItem as="main" colSpan={5} p="40px">
        <Navbar />
        <Outlet />
      </GridItem>
      <GridItem
        as="aside"
        colSpan={1}
        bg="#EDF2F7"
        minH={{ lg: "100vh" }}
        p={{ base: "20px", lg: "30px" }}
      >
        <Sidebar />
      </GridItem>
    </Grid>
  );
}
