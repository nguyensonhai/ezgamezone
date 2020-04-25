import React from "react";
import { View, Button, TextInput, Text } from 'react-native';
import { globalStyles } from '../styles/global';
import { Formik } from 'formik';

export default function ReviewForm() {
    return (
        <View>
            <Formik
                initialValues={{ title: '', body: '', rating: '', }}
                onSubmit={(values) => {
                    console.log(values);
                }}
            >
                {(props) => (
                    <View style={globalStyles.container}>
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
                            style={globalStyles.input}
                            placeholder='Review rating (1-5)'
                            onChangeText={props.handleChange('rating')}
                            values={props.values.rating}
                        />
                        <Button title='submit' color='#333' onPress={props.handleSubmit}/>
                    </View>
                )}
            </Formik>
        </View>
    )
}