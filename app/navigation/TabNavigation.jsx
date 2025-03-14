import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, StyleSheet, Image } from "react-native";
// import AuthNavigator from "./AuthNavigator"; // Authentication flow
// import { useAuth } from "app/hooks/useAuth"; // Authentication hook
// import Profile from "app/screens/Profile";
// import Cart from "app/screens/Cart";
// import Wishlist from "app/screens/Wishlist";
import Products from "../screens/Products";
import { image } from "../../assets";
import Cart from "../screens/Cart";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {


  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ size, focused }) => {
          let iconComponent;

          if (route.name === "product") {
            iconComponent = (
              <Image
                source={
                  focused
                    ? image.product
                    : image.productOutline
                }
                style={{ width: size, height: size }}
                resizeMode="contain"
              />
            );
          }  else if (route.name === "cart") {
            iconComponent = (
              <Image
                source={
                  focused
                    ? image.cart
                    : image.cartOutline
                }
                style={{ width: size, height: size }}
                resizeMode="contain"
              />
            );
          }

          return <View>{iconComponent}</View>;
        },
        // tabBarActiveTintColor: "#4B145B",
        tabBarInactiveTintColor: "gray",
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBarStyle,
      })}
    >
      <Tab.Screen
        name="product"
        options={{ headerShown: false }}
        component={Products}
      />
      <Tab.Screen
        name="cart"
        options={{ headerShown: false }}
        component={Cart}
      />
      {/* <Tab.Screen
        name="Wishlist"
        component={isAuthenticated ? Wishlist : AuthNavigator}
      />
      <Tab.Screen
        name="Cart"
        component={isAuthenticated ? Cart : AuthNavigator}
      />

      <Tab.Screen
        name="Profile"
        component={isAuthenticated ? Profile : AuthNavigator}
      /> */}
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarStyle: {
    position: "absolute",
    elevation: 5, // Shadow on Android
    backgroundColor: "#fff", // Tab bar background color
    height: 76, // Height of the tab bar
    shadowColor: "#000", // iOS shadow color
    shadowOpacity: 0.25, // iOS shadow opacity
    shadowOffset: { width: 0, height: 10 }, // iOS shadow offset
    shadowRadius: 20, // iOS shadow radius
    borderTopEndRadius: 40,
    borderTopStartRadius: 40,
  },
});

export default TabNavigator;
