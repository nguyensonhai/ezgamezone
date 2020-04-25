import React, { useState } from "react";
import { StyleSheet, View, Text, FlatList, TouchableOpacity, ImageBackground, Modal, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { globalStyles } from '../styles/global';
import Card from '../shared/card';
import { MaterialIcons } from '@expo/vector-icons';
import ReviewForm from './reviewForm';

export default function Home({ navigation }) {

    const [modelOpen, setModelOpen] = useState(false);

    const [reviews, setReviews] = useState([
        { title: 'Zelda, Breath of Fresh Air', rating: 5, body: ' Created by NERØ', key: '1' },
        { title: 'God of War', rating: 5, body: ' Created by NERØ', key: '2' },
        { title: 'Gotta Catch Them All (again)', rating: 4, body: 'Created by NERØ', key: '3' },
        { title: 'Not So "Final" Fantasy', rating: 3, body: ' Created byNERØ', key: '4' }
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
                            size={30}
                            style={styles.modalToggleClose}
                            onPress={() => setModelOpen(false)}
                        />
                        <ReviewForm addReview={addReview} />
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
            <MaterialIcons
                name='add'
                size={30}
                style={styles.modalToggleOpen}
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
    modalToggleClose: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 5,
        marginBottom: 0,
        padding: 10,
        alignSelf: 'flex-end',
    },
    modalToggleOpen: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 5,
        padding: 5,
        alignSelf: 'center',
    },
    modalContent: {
        flex: 1,
    }
})