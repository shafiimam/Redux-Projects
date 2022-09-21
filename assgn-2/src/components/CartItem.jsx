import { Box, Text } from "@chakra-ui/react";

const CartItem = ({ product }) => {
  return (
    <Box p={5} my={2} boxShadow="md">
      <Text>
        {product.title} - {product.qty}
      </Text>
      <Text>{product.price}</Text>
    </Box>
  );
};

export default CartItem;
