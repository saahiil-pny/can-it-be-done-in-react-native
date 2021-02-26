import React from "react";
import { StyleSheet } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";
import { mixColor } from "react-native-redash";

import Tabbar from "./Tabbar";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    paddingTop: 32,
    alignItems: "center",
  },
});
const Reflectly = () => {
  const open = useSharedValue(0);
  const style = useAnimatedStyle(() => {
    return {
      backgroundColor: "#F5F7FE", //mixColor(open.value, "#F5F7FE", "#BBC0CE"),
    };
  });
  return (
    <Animated.View style={[styles.container, style]}>
      <Tabbar open={open} />
    </Animated.View>
  );
};

export default Reflectly;
