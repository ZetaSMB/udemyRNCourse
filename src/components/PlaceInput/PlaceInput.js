import React, { Component } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

class PlaceInput extends Component {
  state = {
    placeName: ""
  };

  componentDidMount() {
    
  }

  placeNameChangedHandler = val => {
    this.setState({
      placeName: val
    });
  };

  placeSubmitHandler = () => {
    if (this.state.placeName.trim() === "") {
      return;
    }
    console.log("place addded: " + this.state.placeName);
    this.props.onPlaceAdded(this.state.placeName);
    this.setState({
      placeName: ""
    });
  };

  render() {
    return (
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="An awesome place"
          value={this.state.placeName}
          onChangeText={this.placeNameChangedHandler}
          style={styles.placeInput}
        />
        <Button
          title="Add"
          style={styles.placeButton}
          onPress={this.placeSubmitHandler}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    // flex: 1,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    alignItems : "center"
  },
  placeInput: {
    width: "70%",
    marginLeft: 20
  },
  placeButton: {
    width: "30%",
    marginRight: 20
  }
});

export default PlaceInput;
