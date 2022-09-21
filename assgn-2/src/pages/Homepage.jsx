import { Box, SimpleGrid } from "@chakra-ui/react";
import Products from "../components/Products";
import Cart from "./Cart";

const Homepage = () => {
  return (
    <SimpleGrid columns={2} spacing={10} m={10}>
      <Box>
        <Products />
      </Box>

      <Box>
        <Cart />
      </Box>
    </SimpleGrid>
  );
};

export default Homepage;
