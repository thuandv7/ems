import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import {
    primaryColor
} from "../../utils/Colors";
class StationCell extends React.Component {
    render() {
        const { TenThongSo, GTMax } = this.props.value
        return (
        <TouchableOpacity onPress={ () => this.onClickItem(this.props.value)}>
            <View style={ styles.button_submit } onPress={this.props.onPress} >
                 <Text style={ [styles.text_submit, { fontWeight: 'bold' }] }> {TenThongSo} </Text>
                 <Text style={ [styles.text_submit, {}] }> {GTMax} </Text>
            </View>
        </TouchableOpacity>
        );
    }
    onClickItem = (item) => {
        Alert.alert('Thong So', item.TenThongSo, null, {cancelable: false})
    }
}

const styles = StyleSheet.create({
    button_submit: {
        flex: 1,
        borderRadius: 3,
        marginTop: 12,
        alignItems: 'center',        
        justifyContent: 'center',
        borderWidth: 1, borderColor: primaryColor, 
        padding: 5,
    },
    text_submit: {
        color:  primaryColor,
    }
});
  
export default StationCell;