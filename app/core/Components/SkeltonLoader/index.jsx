import React, { useEffect, useRef } from "react";
import { Animated, StyleSheet, View, ViewStyle } from "react-native";



const SkeletonLoader = ({
  width = 100,
  height = 100,
  borderRadius = 8,
  style,
}) => {
  const shimmerAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const animation = Animated.loop(
      Animated.sequence([
        Animated.timing(shimmerAnim, {
          toValue: 1,
          duration: 1500,
          useNativeDriver: true,
        }),
        Animated.timing(shimmerAnim, {
          toValue: 0,
          duration: 1500,
          useNativeDriver: true,
        }),
      ])
    );
    animation.start();

    return () => animation.stop(); 
  }, [shimmerAnim]);

  return (
    <View
      style={[
        styles.skeletonContainer,
        { width, height, borderRadius },
        style, 
      ]}
    >
      <Animated.View
        style={[
          styles.shimmer,
          {
            opacity: shimmerAnim,
            borderRadius,
          },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  skeletonContainer: {
    backgroundColor: "#e0e0e0",
    overflow: "hidden",
    position: "relative",
  },
  shimmer: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "#f0f0f0",
  },
});

export default SkeletonLoader;
