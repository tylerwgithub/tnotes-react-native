import React from 'react';
import { ScrollView, TextInput, StyleSheet, Text, View, Button } from 'react-native';
import { useState } from 'react';
const AddNewToDo = (props) => {
    const [ input, setInput ] = useState();
    const onChangeTextInput = (e) => {
        setInput(e.nativeEvent.text);
        // console.log(e.nativeEvent.text);
    }
    const onPressButton = () => {
        props.setIsButtonClicked(false);
        props.setToDos([...props.toDos, input]);
    }
    return (
        <View style={styles.container}>
            <View style={styles.children}>
                <TextInput style={styles.textInput} onChange={onChangeTextInput}>{input}</TextInput>
            </View>

            <View style={styles.buttonView}>
                <Button title="Add" onPress={onPressButton}></Button>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        paddingTop: 100,
        backgroundColor: 'white',
    },
    buttonView: {
        padding: 30,
        alignItems: 'center',

    },
    button: {
        width: 30,
        height: 30,

    },
    children: {
        
        borderWidth: 1,
        width: 350,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textInput: {
        height: 80,
        width: 350,
        borderColor: 'gray',
        borderWidth: 1,
        textAlign: 'center',

    }
});


export default AddNewToDo;