import React, { useContext } from "react";
import { View, Text, FlatList, StyleSheet, Image } from "react-native";
import CartContext from "../../context/Cartcontext";
import CartCard from "./components";
import { image } from "../../../assets";

const Cart = () => {
  const { cart } = useContext(CartContext);

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Shopping Cart</Text>
      {cart.length === 0 ? (
        <View style={styles.productContainer}>
          <Image source={image.NoOrder} style={styles.noProducts} />
          <Text style={styles.emptyText}>Cart is Empty</Text>
        </View>
      ) : (
        <FlatList
          data={cart}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <CartCard item={item} />}
        />
      )}
      <View style={styles.totalContainer}>
        <Text style={styles.total}>Total: ${totalPrice.toFixed(2)}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "white",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  emptyText: {
    fontSize: 18,
    textAlign: "center",
    marginTop: 20,
  },
  cartItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    marginVertical: 5,
    backgroundColor: "#e8e8e8",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  text: {
    fontSize: 18,
    flex: 1,
    marginLeft: 10,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 5,
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  button: {
    fontSize: 20,
    fontWeight: "bold",
    paddingHorizontal: 10,
    color: "blue",
  },
  quantity: {
    fontSize: 18,
    marginHorizontal: 10,
  },
  totalContainer: {
    position: "absolute",
    bottom: 90,
    left: 20,
    right: 20,
    backgroundColor: "white",
  },
  total: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "right",
    backgroundColor: "#f8f8f8",
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  productContainer: {
    flex: 0.8,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
  },
  noProducts: {
    height: 130,
    width: 200,
    objectFit: "contain",
  },
  emptyText: {
    fontWeight: "400",
    color: "#70727D",
    marginTop: 10,
  },
});

export default Cart;
