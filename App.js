import {
  NavigationContainer,
} from "@react-navigation/native";
import React from "react";
import Layout from "./app/layout";
import TabNavigator from "./app/navigation/TabNavigation";
import CartContext from "./app/context/Cartcontext";

export default function App() {
  const [cart, setCart] = React.useState([]);

  return (
    <>
     <CartContext.Provider value={{ cart, setCart }}>
      {/* <ToastManager style={{ width: "100%", height: 70 }} /> */}
      <Layout>
        <NavigationContainer
        ><TabNavigator/>
        </NavigationContainer>
      </Layout>
      </CartContext.Provider>
    </>
  );
}
