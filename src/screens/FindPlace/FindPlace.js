import React, { Component } from "react";
import { SafeAreaView, Text } from "react-native";
import { connect } from "react-redux";
import { Navigation } from "react-native-navigation";

import PlaceList from "../../components/PlaceList/PlaceList";

class FindPlaceScreen extends Component {
  constructor(props) {
    super(props);
  }

  static options() {
    return {
      topBar: {
        title: {
          text: 'Find Places'
        }
      }
    };
  }

  //TODO: migrate to rnn-wix2.0
  // onNavigatorEvent = event => {
  //   if (event.type === "NavBarButtonPress") {
  //     if (event.id === "sideDrawerToggle") {
  //       this.props.navigator.toggleDrawer({
  //         side: "left"
  //       });
  //     }
  //   }
  // };

  itemSelectedHandler = key => {
    const selPlace = this.props.places.find(place => {
      return place.key === key;
    });
    Navigation.push(this.props.componentId, {
      component: {
        name: "awesome-places.PlaceDetailScreen",        
        title: "Detail",
        passProps: {
          selectedPlace: selPlace
        }                
      }
    });    
  };

  render() {
    return (
      <SafeAreaView>
        <PlaceList
          places={this.props.places}
          onItemSelected={this.itemSelectedHandler}
        />
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => {
  return {
    places: state.places.places
  };
};

export default connect(mapStateToProps)(FindPlaceScreen);
