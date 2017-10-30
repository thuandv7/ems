import PropTypes from 'prop-types';
import React, {
    Component
} from 'react';
import {
    Image,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';
import { ic_eye } from "../../imgs";

class UserInput extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            value: this.props.value,
            secureTextEntry: this.props.secureTextEntry,
        };
    }

    onShowPass(){
        this.setState(() => {
            return {
                secureTextEntry: !this.state.secureTextEntry
            }
        });
    }

    render() {
        var isPass = false;
        if (this.props.secureTextEntry) {
            isPass = true;
        }
        return (
        <View style={styles.contentInput}>
            <Image source={this.props.source} style={styles.image}/> 
            <TextInput style={styles.input} 
                placeholder={this.props.placeholder} 
                autoCapitalize='none' 
                value={this.props.value}
                onChangeText={this.props.onChangeText}
                autoCorrect={this.props.autoCorrect}
                secureTextEntry={this.state.secureTextEntry}/>
                <TouchableOpacity onPress={ () => this.onShowPass()}>
                    <Image source={ic_eye} style={{
                        height: (isPass == true ? 24 : 0), 
                        width: 24, 
                        tintColor: '#cdcdcd',
                        opacity: this.state.secureTextEntry ? 0.4 : 1
                    }}/> 
                </TouchableOpacity>
        </View>
        );
    }
}

UserInput.propTypes = {
    value: PropTypes.string,
    placeholder: PropTypes.string.isRequired,
    autoCapitalize: PropTypes.string,
    secureTextEntry: PropTypes.bool,
    returnKeyType: PropTypes.string,
    autoCorrect: PropTypes.string,
    onChangeText: PropTypes.func,
}

const styles = StyleSheet.create({
    input: {
        flex: 1,
        height: 34,
        padding: 5
    },
    contentInput: {
        marginTop: 8,
        height: 34,
        flexDirection: 'row',
        alignItems: 'center'
    },
    image: {
        height: 26,
        width: 26,
        tintColor: '#cdcdcd',
        flexDirection: 'column'
    }, 
    eye: {
        
    }
});

export default UserInput;