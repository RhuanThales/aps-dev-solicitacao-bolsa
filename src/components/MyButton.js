import React, { Component } from "react";
import { Button, View } from "react-native";

class MyButton extends Component {
  render() {
    return (
      <View>
        <Button
          style={{
            fontSize: this.props.btnFontSize,
            borderColor: this.props.btnBorderColor,
            color: this.props.btnColor,
            backgroundColor: this.props.btnBackgroundColor,
          }}
          title='Salvar'
        />
      </View>
    );
  }
}
export default MyButton;