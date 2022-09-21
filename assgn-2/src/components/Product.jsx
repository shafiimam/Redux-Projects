import { Box, Text } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/cart/cartAction";

const applyValidation = (cartItems, product) => {
  const cartItem = cartItems.find((prod) => prod.id === product.id);

  if (!cartItem) return true;

  return product.qty > cartItem.qty;
};

const Product = ({ product }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  return (
    <Box padding={5} boxShadow="lg" my={5}>
      <Text fontSize={"2xl"} fontWeight="bold">
        <span>
          {product.title} - ({product.qty})
        </span>

        <span
          style={{
            display: "inline-block",
            marginLeft: "100px",
            cursor: "pointer",
            padding: "2px 10px",
            border: "1px solid pink",
            borderRadius: "100%",
            pointerEvents: !applyValidation(cartItems, product) && "none",
            opacity: !applyValidation(cartItems, product) && ".5",
          }}
          onClick={() =>
            applyValidation(cartItems, product) && dispatch(addToCart(product))
          }
        >
          +
        </span>
      </Text>

      <Text>{product.price}</Text>
    </Box>
  );
};

export default Product;
