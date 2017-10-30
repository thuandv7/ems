import {
    Image,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from "react-native";

import Logo from './Logo';
import React from 'react';
import SubmitLogin from './SubmitLogin';
import UserInput from "./UserInput";
import { connect } from 'react-redux';
import { ic_user, ic_lock } from "../../imgs";
import {
    login
} from "../../redux/actions";

class FormLogin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            password: '', 
            username: ''
        };
    }
    
    render() {
        const { account } = this.props;
        return(
            <View style={styles.form}> 
                <Logo />
                <UserInput source={ ic_user } value={this.state.username} placeholder='UserName'
                onChangeText={ (text) => {
                    this.setState(() => {
                        return {
                            username: text
                        }
                    });
                }}/>
                
                <View style={styles.borderInput} />
                <UserInput value={this.state.password}  source={ic_lock} placeholder='Password' secureTextEntry={true} 
                onChangeText={ (text) => {
                    this.setState(() => {
                        return {
                            password: text
                        }
                    });
                }}/>
                <View style={styles.borderInput}/>
                <SubmitLogin isLogin={false} onPress={ 
                    () => {}
                    // () => this.props.onClickSubmit(this.state.username, this.state.password)
                    }/>
                <Text> {this.state.value} </Text>
                <View style={{ height: 50 }} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    form: {
        marginVertical: 10,
        flex: 1,
        flexDirection: 'column',
        alignItems: 'stretch', 
        justifyContent: 'center',        
        marginLeft: 40,
        marginRight: 40,
    },
    borderInput: {
        height: 1,
        backgroundColor: '#cdcdcd',
        alignItems: 'center',
        flexDirection: 'row'
    },
});

function mapStateToProps(state) {
    return {
        state: state
    };
  }
const mapDispatchToProps = (dispatch) => {
    return {
        onClickSubmit: (username, password) => {
            dispatch(login(username, password));
      }
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(FormLogin);