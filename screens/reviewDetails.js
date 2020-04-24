import React from "react";
import { StyleSheet, View, Text, Button} from 'react-native';
import { globalStyles} from '../styles/global';

export default function ReviewDetails({navigation}) {

    // const pressHandler = () => {
    //     navigation.goBack();
    // }

    return(
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>{navigation.getParam('title')}</Text>
            <Text style={globalStyles.titleText}>rating :{navigation.getParam('rating')}</Text>
            <Text style={globalStyles.titleText}>{navigation.getParam('body')}</Text>
            {/* <Button title='back to home screen' onPress={pressHandler} color='#333'/> */}
        </View>
    )
}
