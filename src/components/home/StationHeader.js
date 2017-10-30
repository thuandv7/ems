import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { connect } from 'react-redux';
import {
    primaryColor
} from "../../utils/Colors";
import { actionLoadStation } from '../../redux/actions';
import StationCell from './StationCell';
class StationHeader extends React.Component {
    constructor(props){
        super(props)
        this.props = {
            value: null,
            index: 0
        }
        this.state = {
            isOpen: false
        }
    }

    render() {
        const { TenDiem, DSThongSo } = this.props.value;
        return (
        
            <View style={ styles.header}>
                <TouchableOpacity onPress={ () => this.onClickItem(this.props.value)}>
                    <Text style={{ textAlign: 'left', fontSize: 17, fontWeight: 'bold', color: 'black' }}> {this.props.index+1}. {TenDiem} </Text>
                    <Text> Chua Hoat Dong </Text>
                </TouchableOpacity>
                <FlatList scrollEnabled={false} 
                    data={this.state.isOpen ? DSThongSo : []}
                    renderItem={({item, index}) => <StationCell value={item}/>} 
                />
                <View style={{ height: 0.5, backgroundColor: 'gray', marginTop: 5 }} />
            </View>
        
        );
    } 

    onClickItem = (item) => {
        this.setState(()=> {
            return {
                isOpen: !this.state.isOpen
            }
        });
    }
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

export default StationHeader;