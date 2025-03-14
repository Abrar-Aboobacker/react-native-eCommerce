import React, { useContext } from "react";
import {
  View,
  Text,
  Button,
  FlatList,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import CartContext from "../../context/Cartcontext";

const Cart = () => {
  const { cart, setCart } = useContext(CartContext);

  const removeFromCart = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
  };

  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Shopping Cart</Text>

      {cart.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>Your cart is empty</Text>
        </View>
      ) : (
        <FlatList
          data={cart}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <View style={styles.cartItem}>
              <Text style={styles.text}>{item.name}</Text>
              <Text style={styles.text}>${item.price}</Text>
              <Button
                title="Remove"
                color="red"
                onPress={() => removeFromCart(index)}
              />
            </View>
          )}
          contentContainerStyle={styles.listContent}
        />
      )}

      <View style={styles.totalContainer}>
        <Text style={styles.total}>Total: ${totalPrice.toFixed(2)}</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  emptyContainer: {
    flex: 1,
  },
  emptyText: {
    fontSize: 18,
    textAlign: "center",
    marginTop: 20,
  },
  listContent: {
    paddingBottom: 10,
  },
  cartItem: {
    flexDirection: "row",
    justifyContent: "space-between",
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
  },
  totalContainer: {
    position: "absolute",
    bottom: 130,
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
});

export default Cart;
