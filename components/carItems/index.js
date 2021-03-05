import React from "react";
import { View, Text, ImageBackground } from "react-native";
import StyledButton from "../styledButton";
import styles from "./styles";

const CarItem = (props) => {
  return (
    <View style={styles.carContainer}>
      <ImageBackground
        source={require("../../assets/images/ModelX.jpeg")}
        style={styles.image}
      ></ImageBackground>
      <View style={styles.titles}>
        <Text style={styles.mainTitle}>Model S</Text>
        <Text style={styles.subTitle}>Starting at $600000</Text>
      </View>

      <StyledButton
        type="primary"
        content={"custom order"}
        onPress={() => {
          console.warn("custom order was pressed");
        }}
      />

      <StyledButton
        type="secondary"
        content={"Existing Inventory"}
        onPress={() => {
          console.warn("Existing Inventory was pressed");
        }}
      />
    </View>
  );
};

export default CarItem;
