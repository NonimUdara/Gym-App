import React from "react";
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';


const Shedules = ({ navigation }) => {

    function navigatemales() {
        navigation.navigate('Males');
    }
    function navigatefemales() {
        navigation.navigate('Females');
    }
    function navigatestrength() {
        navigation.navigate('Strength');
    }
    function navigatecardio() {
        navigation.navigate('Cardio');
    }
    function navigatecircuit() {
        navigation.navigate('Circuit');
    }

    return (
        <View style={styles.mainView}>
            <View style={styles.BottomView}>
                <Text style={styles.Heading}>
                    A+ Fitness
                </Text>
                <Text numberOfLines={1} style={styles.line}>
                    ___________________________________
                </Text>
                <Text style={styles.Heading2}>
                    Gym workouts for beginners
                </Text>
                <View style={styles.FormView}>
                    <TouchableOpacity style={styles.Button} onPress={navigatemales}>
                        <Text style={styles.ButtonText}>
                            For Males
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.Button} onPress={navigatefemales}>
                        <Text style={styles.ButtonText}>
                            For Females
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.Button} onPress={navigatestrength}>
                        <Text style={styles.ButtonText}>
                            For Strength
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.Button} onPress={navigatecardio}>
                        <Text style={styles.ButtonText}>
                            For Cardio Equipment
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.Button} onPress={navigatecircuit}>
                        <Text style={styles.ButtonText}>
                            Circuit Programe
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    BottomView: {
        width: '100%',
        height: '100%',
        backgroundColor: '#fff'
    },
    Heading: {
        color: '#11A9FF',
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 10,
    },
    Heading2: {
        color: '#000',
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 30,
        fontStyle: 'italic',
        marginBottom: 30
    },
    line: {
        textAlign: 'center',
        marginTop: -10,
        color: '#000',
        marginBottom: 30
    },
    FormView: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    Button: {
        width: '90%',
        color: '#fff',
        height: 52,
        backgroundColor: '#11A9FF',
        borderRadius: 15,
        marginTop: 30,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    ButtonText: {
        fontWeight: 'bold',
        fontSize: 18,
        color: '#fff'
    }
})


export default Shedules;