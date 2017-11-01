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
    actionLogin, goHome
} from "../../redux/actions";

class FormLogin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            password: 'thuandv', 
            username: 'thuandv'
        };
    }
    
    render() {
        const { auth } = this.props;
        if (auth.data !== null && auth.data.status == true) { 
            this.props.goHome();
        }
        
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
                    //() => {}
                    (e) => {
                        e.preventDefault();
                        this.props.actionLogin(this.state.username, this.state.password);
                    }
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
        auth: state.auth
    };
  }
const mapDispatchToProps = (dispatch) => {
    return {
    actionLogin: (username, password) => {
            dispatch(actionLogin(username, password));
      },
      goHome: () => dispatch(goHome)
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(FormLogin);