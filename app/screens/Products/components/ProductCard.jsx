import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from "react-native";
import React, { useContext, useState } from "react";
import CartContext from "../../../context/Cartcontext";
import { useNavigation } from "@react-navigation/native";

const ProductCard = ({ item }) => {
  const { cart, setCart } = useContext(CartContext);
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);

  const existingItem = cart.find((cartItem) => cartItem.id === item.id);

  const handlePress = () => {
    if (existingItem) {
      navigation.navigate("cart");
    } else {
      setLoading(true);
      setTimeout(() => {
        setCart((prevCart) => [
          ...prevCart,
          { ...item, quantity: 1 },
        ]);
        setLoading(false);
      }, 1000);
    }
  };

  return (
    <View style={styles.product}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.ProductNametxt}>{item.name}</Text>
      <Text style={styles.text}>${item.price}</Text>

      <TouchableOpacity
        onPress={handlePress}
        style={styles.buttonContainer}
        disabled={loading}
      >
        {loading ? (
          <ActivityIndicator color="white" />
        ) : (
          <Text style={styles.buttonTxt}>
            {existingItem ? "Go to Cart" : "Add to Cart"}
          </Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  product: {
    width: "48%",
    alignItems: "center",
    paddingBottom: 6,
    marginVertical: 10,
    marginHorizontal: 4,
    backgroundColor: "#f8f8f8",
    borderRadius: 8,
    elevation: 2,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  ProductNametxt: {
    fontSize: 15,
    marginTop: 4,
  },
  text: {
    fontSize: 15,
  },
  image: {
    width: "100%",
    height: 150,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  buttonContainer: {
    backgroundColor: "#4A154B",
    width: "95%",
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonTxt: {
    textAlign: "center",
    color: "white",
    fontWeight: "600",
  },
});