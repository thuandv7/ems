/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import { connect } from 'react-redux';
import MapView
, { PROVIDER_GOOGLE } 
from 'react-native-maps';

import { actionLoadStation } from '../redux/actions';
import { ic_map_pin }  from '../imgs';

class MapScreen extends Component {
  render() {
    // const { data } = this.props;
    // var stations = [];
    // if (data !== null && data.stations !== null) {
    //     stations = data.stations;
    // }
    return (
      <View style={styles.container}>
        <MapView 
        provider={PROVIDER_GOOGLE}
        style={styles.map} 
        showsUserLocation={true} > 
        {
          <MapView.Marker coordinate={
            {latitude: 21.010767,
            longitude: 105.805743}}
            image={ic_map_pin}
            title={'VASoft HN'}
          />
        }
        </MapView>
      </View>
    );
  }
}
// {stations.map(marker => (
//   <MapView.Marker
//     coordinate={{
//       latitude: marker.KinhDo,
//       longitude: marker.ViDo,
//     }}
//     title={marker.TenDiem}
//     description={marker.DiaChi}
//   />
// ))}
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
});

//export default connect(mapState, mapDispatch)(MapScreen);
export default MapScreen;

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
