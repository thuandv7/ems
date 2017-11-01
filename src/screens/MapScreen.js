/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
  View,
} from 'react-native';
import { connect } from 'react-redux';
import MapView
, { PROVIDER_GOOGLE } 
from 'react-native-maps';

import { actionLoadStation } from '../redux/actions';
import { ic_pin }  from '../imgs';

class MapScreen extends Component {
  render() {
    const { data } = this.props;
    var stations = [];
    if (data !== null && data.stations !== null) {
        stations = data.stations;
    }
    var initRegion = {
      latitude: 21.010767,
      longitude: 105.805743,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    };
    if (stations.length > 0){
      initRegion.latitude = stations[0].ViDo,
      initRegion.longitude = stations[0].KinhDo
    }

    return (
      <View style={styles.container}>
        <MapView 
        provider={PROVIDER_GOOGLE} style={styles.map}
        showsUserLocation={true}
        followsUserLocation={true}
        loadingEnabled={true}
        showsIndoorLevelPicker={true}
        onRegionChange={this.onRegionChange}
        initialRegion={initRegion} > 
          {
            stations.map(station => (
            <MapView.Marker coordinate={
                {
                  latitude: station.ViDo,
                  longitude: station.KinhDo
                }}
                image={ic_pin}
                style={styles.marker}
                title={station.TenDiem}
              />
            ))
        }
        </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  map: {
    left: 0, 
    top: 0, 
    right: 0, 
    bottom: 0, 
    position:'absolute',
  },
  icon: {
    width: 24, height: 24, tintColor: 'red'
    
  },
});
mapState = state => {
  return {
    data: state.stations
  }
};
mapDispatch = dispatch => {
  return {
    onLoadMapView: () => dispatch(actionLoadStation)
  }
};
export default connect(mapState, mapDispatch)(MapScreen);
//export default MapScreen;


