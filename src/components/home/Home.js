import React from 'react';
import { ScrollView, TextInput, StyleSheet, Text, View, Button } from 'react-native';
import { useState } from 'react';
import AddNewToDo from './AddNewToDo';
const array = [1, 2, 3, 4, 5];
const Home = (props) => {
    const onPressAddButton = () => {
        // alert('You tapped the button!')
        setIsButtonClicked(true);
    }
    const onPressClearAllButton = () => {
        setToDos(['asd']);
    }
    const [toDos, setToDos] = useState([1, 2, 3, 4, 5]);
    const [isButtonClicked, setIsButtonClicked] = useState(false);
    if (isButtonClicked) {
        return (
            <AddNewToDo
                setIsButtonClicked={setIsButtonClicked}
                setToDos={setToDos}
                toDos={toDos}
            ></AddNewToDo>

        )
    };

    return (
        <View style={styles.container}>
            <View style={styles.button}>
                <Button title="Clear all" onPress={onPressClearAllButton}></Button>
                <Button title="Add" onPress={onPressAddButton}></Button>
            </View>
            <ScrollView >

                {toDos.map((data, index) => {
                    return (
                        <View >
                            <View style={styles.title}>
                            
                            <Text>
                                Todo:
                            </Text>
                        </View>
                        <View style={styles.children}>
                            
                            <Text>
                                {data}
                            </Text>
                        </View>
                        </View>

                    )
                })}

            </ScrollView>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        marginBottom: 30,
    },
    button: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 5,

    },
    title: {
        alignItems: 'center',

    },
    children: {
        padding: 10,
        marginBottom: 10,
        // borderWidth: 1,
        width: 350,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#87CEEB',
        borderRadius: 5,
    },
    textInput: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        fontSize: 20,

    }
});

export default Home;