import React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import { connect } from 'react-redux';
import {
    primaryColor
} from "../../utils/Colors";
import { actionLoadStation } from '../../redux/actions';
import StationHeader from './StationHeader';
class StationList extends React.Component {
    componentWillMount(){
        this.props.loadStation();
    }
    render() {
        const { data } = this.props;
        var stations = [];
        console.log(data);
        if (data !== null && data.data !== null) {
            stations = data.data;
        }
        return (
        <View style={ styles.button_submit }>
            <FlatList style={{flex: 1}}
                data={stations}
                renderItem={({item, index}) => <StationHeader index={index} value={ item } />}
                keyExtractor={ (item) => item.MaDiem }
                />
        </View>
        );
    }   
}

const styles = StyleSheet.create({
    button_submit: {
        flex: 1,
        alignItems: 'stretch',
        // backgroundColor: primaryColor,
        justifyContent: 'center'
    },
    text_submit: {

    }
});
const mapDispatchToProps = (dispatch) => {
    return {
    loadStation: (username, password) => {
            dispatch(actionLoadStation);
      }
    }
  }
function mapStateToProps(state) {
    return {
        data: state.stations.stations
    };
  }
export default connect(mapStateToProps, mapDispatchToProps)(StationList);