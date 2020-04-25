import React from "react";
import { StyleSheet, View, Button, TextInput, Text, ImageBackground } from 'react-native';
import { globalStyles } from '../styles/global';
import { Formik } from 'formik';
import * as yup from 'yup';

const reviewSchema = yup.object({
    title: yup.string()
        .required()
        .min(5),
    body: yup.string()
        .required()
        .min(10),
    rating: yup.string()
        .required()
        .test('is-num-1-6', ' Rating must be a number 1 - 5', (val) => {
            return parseInt(val) < 6 && parseInt(val) > 0
        })
});

export default function ReviewForm({ addReview }) {
    return (
        <View source={require('../assets/game_bg.png')} >
            <Formik
                initialValues={{ title: '', body: '', rating: '', }}
                validationSchema={reviewSchema}
                onSubmit={(values) => {
                    addReview(values);
                }}
            >
                {props => (
                    <ImageBackground source={require('../assets/game_bg.png')} style={styles.container} >
                        <Text style={styles.text}>Add new game</Text>
                        <Text style={globalStyles.titleInput}>Enter the game title</Text>
                        <TextInput
                            style={globalStyles.input}
                            placeholder='Review title'
                            onChangeText={props.handleChange('title')}
                            values={props.values.title}
                            onBlur={props.handleBlur('title')}
                        />
                        <Text style={globalStyles.errorText}>{props.touched.title && props.errors.title}</Text>
                        <Text style={globalStyles.titleInput}>Enter the review body</Text>
                        <TextInput
                            multiline
                            style={globalStyles.input}
                            placeholder='Review body'
                            onChangeText={props.handleChange('body')}
                            values={props.values.body}
                            onBlur={props.handleBlur('body')}
                        />
                        <Text style={globalStyles.errorText}>{props.touched.body && props.errors.body}</Text>
                        <Text style={globalStyles.titleInput}>Choose the game rating</Text>
                        <TextInput
                            style={globalStyles.input}
                            placeholder='Rating (1-5)'
                            onChangeText={props.handleChange('rating')}
                            values={props.values.rating}
                            keyboardType="numeric"
                            onBlur={props.handleBlur('rating')}
                        />
                        <Text style={{ ...globalStyles.errorText, ...styles.bottom }}>{ props.touched.rating && props.errors.rating}</Text>
                        <Button title='submit' color='#333' onPress={props.handleSubmit} />
                    </ImageBackground>
                )}
            </Formik>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 30,
        height: '100%'
    },
    bottom: {
        marginBottom: 30,
    },
    text: {
        fontFamily: 'nunito-bold',
        fontSize: 38,
        color: '#333',
        alignSelf: 'center',
        padding: 20,
        paddingBottom: 60,
    }
})