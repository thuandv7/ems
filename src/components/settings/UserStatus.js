import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import {
    primaryColor
} from "../../utils/Colors";
class UserStatus extends React.Component {
    render() {
        const color = primaryColor//this.props.isLogin ? 'red' : 'white';
        return (
        <View style={ styles.button_submit }>
            <Text style={ [styles.text_submit, {color}] }> {this.props.account.fullName} </Text>
        </View>
        );
    }   
}

const styles = StyleSheet.create({
    button_submit: {
        borderRadius: 3,
        marginTop: 12,
        height: 34,
        alignItems: 'center',
        // backgroundColor: primaryColor,
        justifyContent: 'center'
    },
    text_submit: {

    }
});

function mapStateToProps(state) {
    return {
        account: state.auth.data
    };
  }
export default connect(mapStateToProps)(UserStatus);