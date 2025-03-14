import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useContext } from "react";
import CartContext from "../../../context/Cartcontext";
import { MaterialIcons } from "@expo/vector-icons";

const screenWidth = Dimensions.get("window").width / 1.8;

const CartCard = ({ item }) => {
  const { setCart } = useContext(CartContext);

  const updateQuantity = (id, delta) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id
            ? { ...item, quantity: Math.max(1, item.quantity + delta) }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };
  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };
  return (
    <View style={styles.cartItem}>
      <Image source={item.image} style={styles.image} />
      <View style={styles.contentContainer}>
        <View style={styles.headingContainer}>
          <Text style={styles.text}>{item.name}</Text>
          <Text style={styles.pricetxt}>${item.price}</Text>
        </View>
        <View style={styles.quantityContainer}>
          <TouchableOpacity onPress={() => updateQuantity(item.id, -1)}>
            <Text style={styles.button}>-</Text>
          </TouchableOpacity>
          <Text style={styles.quantity}>{item.quantity}</Text>
          <TouchableOpacity onPress={() => updateQuantity(item.id, 1)}>
            <Text style={styles.button}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => removeFromCart(item.id)}>
            <MaterialIcons
              style={{ marginLeft: 5 }}
              name="delete"
              size={24}
              color="#4A154B"
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CartCard;
const styles = StyleSheet.create({
  cartItem: {
    flexDirection: "row",
    marginVertical: 5,
    backgroundColor: "white",
    borderRadius: 5,
    borderWidth: 1,
    elevation: 3,
    borderColor: "#ddd",
    width: "100%",
  },
  contentContainer: {
    marginTop: 6,
    justifyContent: "space-between",
  },
  headingContainer: {
    flexDirection: "row",
    width: screenWidth,
    justifyContent: "space-between",
    alignItems: "center",
  },
  text: {
    fontSize: 15,
    flex: 1,
    marginLeft: 10,
    fontWeight: 600,
  },
  pricetxt: {
    fontSize: 15,
    color: "#4A154B",
    fontWeight: 600,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 5,
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    width: screenWidth,
    marginBottom: 10,
    marginLeft: 7,
  },
  button: {
    backgroundColor: "#4A154B",
    borderRadius: 1000,
    fontSize: 20,
    fontWeight: "bold",
    paddingHorizontal: 10,
    color: "white",
  },
  quantity: { fontSize: 18, marginHorizontal: 10 },
});
