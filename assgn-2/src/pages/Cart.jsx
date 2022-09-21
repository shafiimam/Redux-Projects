import { Box } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <Box>
      <Box>
        {cartItems.map((prod) => (
          <CartItem key={prod.id} product={prod} />
        ))}
      </Box>

      <Box ml={"auto"} w="200px" textAlign={"center"} p={10} boxShadow="sm">
        <Box letterSpacing={"1px"} fontSize="xl">
          Total Items
        </Box>
        <Box fontWeight={"bold"} fontSize="6xl">
          {cartItems.reduce((prev, curr) => prev + curr.qty, 0)}
        </Box>
      </Box>
      <Box ml={"auto"} w="500px" textAlign={"center"} p={10} boxShadow="sm">
        <Box letterSpacing={"1px"} fontSize="xl">
          Total Price
        </Box>
        <Box fontWeight={"bold"} fontSize="3xl">
          {cartItems.reduce((prev, curr) => prev + curr.qty * curr.price, 0)}
        </Box>
      </Box>
    </Box>
  );
};

export default Cart;
