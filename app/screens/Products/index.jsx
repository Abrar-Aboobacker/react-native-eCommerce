import React, { useEffect, useState } from "react";
import { View, Text, Button, FlatList, StyleSheet, Image } from "react-native";
import ProductCard from "./components/ProductCard";
import { image, product } from "../../../assets";
import SkeletonLoader from "../../core/Components/SkeltonLoader";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setProducts([
        {
          id: 1,
          name: "Kurtha 1",
          price: 100,
          image: product.product1,
        },
        {
          id: 2,
          name: "Iphone 16",
          price: 200,
          image: product.product2,
        },
        {
          id: 3,
          name: "Charger",
          price: 300,
          image: product.product3,
        },
        {
          id: 4,
          name: "Kurtha 2",
          price: 800,
          image: product.product1,
        },
      ]);
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Products</Text>

      {loading ? (
        <FlatList
          data={Array(4).fill({})}
          keyExtractor={(_, index) => index.toString()}
          renderItem={() => (
            <SkeletonLoader
              width={150}
              height={200}
              borderRadius={10}
              style={styles.skeleton}
            />
          )}
          numColumns={2}
          columnWrapperStyle={{ justifyContent: "space-between" }}
          style={{ paddingBottom: 250 }}
        />
      ) : products.length > 0 ? (
        <FlatList
          data={products}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <ProductCard item={item} />}
          numColumns={2}
          columnWrapperStyle={{ justifyContent: "space-between" }}
        />
      ) : (
        <View style={styles.productContainer}>
          <Image source={image.NoProducts} style={styles.noProducts} />
          <Text style={styles.emptyText}>No Products Available</Text>
        </View>
      )}
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
  emptyMessage: {
    textAlign: "center",
    fontSize: 16,
    marginTop: 20,
    color: "gray",
  },
  skeleton: {
    marginBottom: 10,
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

export default Product;
