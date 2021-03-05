import React from "react";
import { View, Text, Pressable } from "react-native";
import styles from "./styles";

const StyledButton = (props) => {
  //   const type = props.type;
  //   const content = props.content;
  //   const onPress = props.onPress;

  const { type, content, onPress } = props;

  const btnBgColor = type === "primary" ? "black" : "white";
  const btnTextColor = type === "primary" ? "white" : "black";

  return (
    <View style={styles.container}>
      <Pressable
        style={[styles.button, { backgroundColor: btnBgColor }]}
        onPress={() => onPress()}
      >
        <Text style={[styles.text, { color: btnTextColor }]}>{content}</Text>
      </Pressable>
    </View>
  );
};

export default StyledButton;
