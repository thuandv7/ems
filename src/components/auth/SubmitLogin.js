import React from 'react';
import {
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
import {
    primaryColor
} from "../../utils/Colors";
class SubmitLogin extends React.Component {
    render() {
        const color = this.props.isLogin ? 'red' : 'white';
        return (
        <TouchableOpacity style={ styles.button_submit } onPress={this.props.onPress} >
            <Text style={ [styles.text_submit, {color}] }> LOGIN </Text>
        </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    button_submit: {
        borderRadius: 3,
        marginTop: 12,
        height: 34,
        alignItems: 'center',
        backgroundColor: primaryColor,
        justifyContent: 'center'
    },
    text_submit: {

    }
});

export default SubmitLogin;