import React, { useState } from "react";
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/global';
import Card from '../shared/card';

export default function Home({ navigation }) {

    // const pressHandler = () => {
    //     navigation.navigate('ReviewDetails');
    //     //navigation.push('ReviewDetails');
    // }

    const [reviews, setReviews] = useState([
        { title: 'Zelda, Breath of Fresh Air', rating: 5, body: 'NERØ', key: '1' },
        { title: 'Gotta Catch Them All (again)', rating: 4, body: 'NERØ', key: '2' },
        { title: 'Not So "Final" Fantasy', rating: 3, body: 'NERØ', key: '3' }
    ]);

    return (
        <View style={globalStyles.container}>
            {/* <Text style={globalStyles.titleText}>Home Screen</Text>
            <Button title='go to review dets' color='#333' onPress={pressHandler}/> */}
            <FlatList
                data={reviews}
                renderItem={({ item }) =>
                    <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item)}>
                        <Card>
                            <Text style={globalStyles.titleText}>{item.title}</Text>
                        </Card>
                    </TouchableOpacity>
                }
            />
        </View>
    )
}