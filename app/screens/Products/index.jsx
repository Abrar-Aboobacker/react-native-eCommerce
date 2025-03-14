import React, { useState, useEffect, useContext } from "react";
import { View, Text, Button, FlatList, StyleSheet } from "react-native";
import CartContext from "../../context/Cartcontext";


const Products = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const { cart, setCart } = useContext(CartContext);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };
  useEffect(() => {
    setTimeout(() => {
      setProducts([
        { name: "Product 1", price: 100 },
        { name: "Product 2", price: 200 },
        { name: "Product 3", price: 300 },
        { name: "Product 4", price: 560 },
        { name: "Product 5", price: 420 },
        { name: "Product 6", price: 320 },
      ]);
      setIsLoading(false);
    }, 2000);
  }, []);

  const renderSkeleton = () => (
    <View style={styles.skeletonItem}>
      <Text>Loading...</Text>
    </View>
  );
  return (
    <View style={styles.container}>
      {isLoading ? (
        <FlatList
          data={Array(6).fill({})}
          renderItem={renderSkeleton}
          keyExtractor={(_, index) => `skeleton-${index}`}
        />
      ) : products.length > 0 ? (
        <>
          <FlatList
            data={products}
            style={{marginBottom:20}}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <View style={styles.product}>
                <Text style={styles.text}>{item.name}</Text>
                <Text style={styles.text}>${item.price}</Text>
                <Button title="Add to Cart" onPress={() => addToCart(item)} />
              </View>
            )}
          />
          <Button
            title="Go to Cart"
            onPress={() => navigation.navigate("Cart")}
          />
        </>
      ) : (
        <Text>No Products Available</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  product: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: "#f8f8f8",
    borderRadius: 8,
  },
  text: { fontSize: 18 },
  skeletonText: {
    width: "80%",
    height: 20,
    borderRadius: 4,
    marginBottom: 10,
  },
  skeletonButton: {
    width: "50%",
    height: 30,
    borderRadius: 4,
  },
  skeletonItem: {
    backgroundColor: "#ddd",
    padding: 20,
    margin: 5,
    flex: 1,
  },
});

export default Products;
