import React from "react";
import { StyleSheet, View, Text, Image} from 'react-native';
import { globalStyles, images} from '../styles/global';
import Card from '../shared/card';

export default function ReviewDetails({navigation}) {

    // const pressHandler = () => {
    //     navigation.goBack();
    // }

    const rating = navigation.getParam('rating');

    return(
        <View style={globalStyles.container}>
            <Card>
            <Text style={globalStyles.titleText}>{navigation.getParam('title')}</Text>
            <Text style={globalStyles.titleText}>Created by: {navigation.getParam('body')}</Text>
            <View style={styles.rating}>
                <Text style={globalStyles.titleText}>Game rating: </Text>
                <Image source={images.ratings[rating]}/>
            </View>
            </Card>
            {/* <Button title='back to home screen' onPress={pressHandler} color='#333'/> */}
        </View>
    )
}

const styles = StyleSheet.create({
    rating: {
        flexDirection: 'row',
    }
})
