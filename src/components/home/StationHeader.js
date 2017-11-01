import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
    primaryColor
} from "../../utils/Colors";
import { actionLoadStation, onExpand } from '../../redux/actions';
import StationCell from './StationCell';

class StationHeader extends React.Component {
    render() {
        const { TenDiem, DSThongSo, isOpen } = this.props.value;
        
        return (
        
            <View style={ styles.header}>
                <TouchableOpacity onPress={ () => this.onClickItem(this.props.index, isOpen)}>
                    <Text style={{ textAlign: 'left', fontSize: 17, fontWeight: 'bold', color: 'black' }}> {this.props.index+1}. {TenDiem} </Text>
                    <Text> Chua Hoat Dong </Text>
                </TouchableOpacity>
                <FlatList scrollEnabled={false} 
                    data={isOpen ? DSThongSo : []}
                    renderItem={({item, index}) => <StationCell value={item}/>} 
                    keyExtractor={ (item) => item.MaThongSo }
                />
                <View style={{ height: 0.5, backgroundColor: 'gray', marginTop: 5 }} />
            </View>
        
        );
    } 

    onClickItem = (index, isOpen) => {
        this.props.onExpand(index, isOpen);
    };
};

StationHeader.propTypes = {
    value: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
}

const styles = StyleSheet.create({
    header: {
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'center',
        paddingTop: 5,
        paddingLeft: 8,
        paddingRight: 8,
    },
    text_submit: {
        justifyContent: 'center'
    }
});
mapStateToProps = state => {
    return {
        data: state.stations
    };
}
mapDispatchToProps = dispatch => {
    return {
        onExpand: (inx, isOpen) => dispatch(onExpand(inx, isOpen))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(StationHeader);