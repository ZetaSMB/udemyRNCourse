import React from "react";
import { Modal, View, Image, Text, Button, StyleSheet, SafeAreaView, TouchableOpacity } from "react-native";

import Icon from 'react-native-vector-icons/Ionicons';

const placeDetail = props => {
  let modalContent = null;

  if (props.selectedPlace) {
    modalContent = (
      <View style={{flex:1}}>
        <Image source={props.selectedPlace.image} style={styles.placeImage} />
        <Text style={styles.placeName}>{props.selectedPlace.name}</Text>
      </View>
    );
  }
  return (
    <Modal
      onRequestClose={props.onModalClosed}
      visible={props.selectedPlace !== null}
      animationType="slide"
    >
      <SafeAreaView style={styles.modalContainer}>
        {modalContent}
        <View style={{flex:1}}>
          <TouchableOpacity onPress={props.onItemDeleted}>
            <View style={styles.iconDelete}>
              <Icon size={30} name="ios-trash" color="red" />
            </View>
          </TouchableOpacity>
          <Button title="Close" onPress={props.onModalClosed} />
        </View>
      </SafeAreaView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    margin: 22,
    flex:1
  },
  placeImage: {
    width: "100%",
    height: 200
  },
  placeName: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 28
  },
  iconDelete : {
    alignItems: "center"
  }
});

export default placeDetail;