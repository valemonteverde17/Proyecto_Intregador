import React from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import Footer from "../Footer";
import { Grid, GridItem } from "@chakra-ui/react";

function GeneralLayout({ children }) {
  return (
    <Grid
      templateAreas={`"header header"
                  "nav main"
                  "footer footer"`}
      gridTemplateRows={"50px 100% 80px"}
      gridTemplateColumns={"150px 1fr"}
      height="76.8vh"
      gap="4"
    >
      <GridItem area={"header"}>
        <Navbar />
      </GridItem>
      <GridItem pl="2" area={"nav center"}>
        <Sidebar />
      </GridItem>
      <GridItem pl="2" area={"main"}>
        {children}
      </GridItem>
      <GridItem pl="2" bg="blue.300" area={"footer"}>
        <Footer />
      </GridItem>
    </Grid>
  );
}

export default GeneralLayout;
