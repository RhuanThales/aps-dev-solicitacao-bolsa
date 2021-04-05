import React, { Component } from "react";
import { View, StyleSheet, Image } from "react-native";

class Header extends Component {
  render() {
    let img =
      "https://api-private.atlassian.com/users/b31462af96502c206343630bdeb3ac9d/avatar";
    return (
      <View style={styles.header_style}>
        <Image
          source={{ uri: img }}
          style={{ width: 35, height: 40, alignItems: "flex-start" }}
        ></Image>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  header_style: {
    backgroundColor: "blue",
    height: 50,
    width: 360,
  },
});

export default Header;