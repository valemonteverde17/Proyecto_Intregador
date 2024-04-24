import React from "react";
import Navbar from "./Navbar";
import { Grid, GridItem } from "@chakra-ui/react";

function GeneralLayout({ children }) {
  return (
    <Grid
      templateAreas={`"header header"
                  "nav main"
                  "footer footer"`}
      gridTemplateRows={"50px 390px 80px"}
      gridTemplateColumns={"150px 1fr"}
      h="200px"
      gap="4"
    >
      <GridItem area={"header"}>
        <Navbar />
      </GridItem>
      <GridItem pl="2" bg="pink.300" area={"nav"}>
        Sidebar Colocar aqui el componente sidebar cuando este terminado
      </GridItem>
      <GridItem pl="2" area={"main"}>
        {children}
      </GridItem>
      <GridItem pl="2" bg="blue.300" area={"footer"}>
        Colocar aqui el Footer
      </GridItem>
    </Grid>
  );
}

export default GeneralLayout;
