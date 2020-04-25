import React from "react";
import { StyleSheet, View, Text, ImageBackground} from 'react-native';
import { globalStyles} from '../styles/global';

export default function About() {
    return(
        <ImageBackground source={require('../assets/game_bg.png')} style={globalStyles.container}>
            <Text style={globalStyles.titleText}>About</Text>
        </ImageBackground>
    )
}
