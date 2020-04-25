import React from "react";
import { StyleSheet, View, Button, TextInput, Text, ImageBackground } from 'react-native';
import { globalStyles } from '../styles/global';
import { Formik } from 'formik';

export default function ReviewForm() {
    return (
        <View source={require('../assets/game_bg.png')} >
            <Formik
                initialValues={{ title: '', body: '', rating: '', }}
                onSubmit={(values) => {
                    console.log(values);
                }}
            >
                {props => (
                    <ImageBackground source={require('../assets/game_bg.png')}  style={styles.container} >
                        <Text style={styles.text}>Add new game</Text>
                        <Text style={globalStyles.titleText}>Input title</Text>
                        <TextInput
                            style={globalStyles.input}
                            placeholder='Review title'
                            onChangeText={props.handleChange('title')}
                            values={props.values.title}
                        />
                        <Text style={globalStyles.titleText}>Input body</Text>
                        <TextInput
                            multiline
                            style={globalStyles.input}
                            placeholder='Review body'
                            onChangeText={props.handleChange('body')}
                            values={props.values.body}
                        />
                        <Text style={globalStyles.titleText}>Input rating</Text>
                        <TextInput
                            style={{...globalStyles.input, ...styles.bottomInput}}
                            placeholder='Review rating (1-5)'
                            onChangeText={props.handleChange('rating')}
                            values={props.values.rating}
                        />
                        <Button title='submit' color='#333' onPress={props.handleSubmit}/>
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
    bottomInput: {
        marginBottom: 30,
    },
    text: {
        fontFamily: 'nunito-bold',
        fontSize: 38,
        color: '#333',
        alignSelf:'center',
        padding: 20,
        paddingBottom: 60,
    }
})