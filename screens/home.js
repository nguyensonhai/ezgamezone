import React, { useState } from "react";
import { StyleSheet, View, Text, FlatList, TouchableOpacity, ImageBackground, Modal, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { globalStyles } from '../styles/global';
import Card from '../shared/card';
import { MaterialIcons } from '@expo/vector-icons';
import ReviewForm from './reviewForm';

export default function Home({ navigation }) {

    const [modelOpen, setModelOpen] = useState(false);

    const [reviews, setReviews] = useState([
        { title: 'Zelda, Breath of Fresh Air', rating: 5, body: 'NERØ', key: '1' },
        { title: 'Gotta Catch Them All (again)', rating: 4, body: 'NERØ', key: '2' },
        { title: 'Not So "Final" Fantasy', rating: 3, body: 'NERØ', key: '3' }
    ]);

    const addReview = (review) => {
        review.key = Math.random().toString();
        setReviews((current) => {
            return [review, ...current]
        });
        setModelOpen(false);
    }

    return (
        <ImageBackground source={require('../assets/game_bg.png')} style={globalStyles.container}>
            <Modal visible={modelOpen} animationType='slide'>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.modelContent}>
                        <MaterialIcons
                            name='close'
                            size={24}
                            style={{ ...styles.modalToggle, ...styles.modelClose }}
                            onPress={() => setModelOpen(false)}
                        />
                        <ReviewForm addReview={addReview} />
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
            <MaterialIcons
                name='add'
                size={24}
                style={styles.modalToggle}
                onPress={() => setModelOpen(true)}
            />
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
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    modalToggle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#f2f2f2',
        padding: 10,
        borderRadius: 10,
        alignSelf: 'center',
    },
    modalClose: {
        marginTop: 20,
        marginBottom: 0,
    },
    modalContent: {
        flex: 1,
    }
})