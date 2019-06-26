import React, { Component } from 'react';
import { SafeAreaView, Text } from 'react-native';
import { connect } from 'react-redux';
import { Navigation } from "react-native-navigation";

import PlaceInput from '../../components/PlaceInput/PlaceInput';
import { addPlace } from '../../store/actions/index';
// import console = require('console');

class SharePlaceScreen extends Component {
    constructor(props) {
        super(props);        
        console.log("constructor");
        this.navigationEventListener = Navigation.events().bindComponent(this);
    }
    
    static options() {
        return {
          topBar: {
            title: {
              text: 'Share Places'
            }
          }
        };
      }
    //TODO: migrate to rnn-wix 2.0
    // onNavigatorEvent = event => {
    //     if (event.type === "NavBarButtonPress") {
    //         if (event.id === "sideDrawerToggle") {
    //             this.props.navigator.toggleDrawer({
    //                 side: "left"
    //             });
    //         } 
    //     }  
    // }

    placeAddedHandler = placeName => {
        this.props.onAddPlace(placeName);
    }

    render () {
        return (
            <SafeAreaView>
                <PlaceInput onPlaceAdded={this.placeAddedHandler}/>
            </SafeAreaView>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddPlace: (placeName) => dispatch(addPlace(placeName))
    };
};

export default connect(null, mapDispatchToProps)(SharePlaceScreen);