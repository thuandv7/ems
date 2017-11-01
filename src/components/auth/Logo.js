import React from 'react';
import {
Image,
StyleSheet,
View,
} from 'react-native';
import { ic_logo } from "../../imgs";

class Logo extends React.Component {
    render() {
        return (
        <View style={ styles.logo } >
            <Image source={ic_logo} style={styles.logo_img} />
        </View>
        );
    }
}

const styles = StyleSheet.create({
    logo: {
        marginBottom: 32,
        height: 120,
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo_img: {
        height: 120,
        width: 120,
    }
});

export default Logo;