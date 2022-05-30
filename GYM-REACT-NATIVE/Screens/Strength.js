import React from "react";
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';


const Strength = () => {


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
                    Beginner gym workout for strength
                </Text>
                <View style={styles.FormView}>
                    <Text style={styles.txt1}>Barbell push press (6 reps x 4 sets)</Text>
                    <Text style={styles.txt1}>Goblet squat (6 reps x 4 sets)</Text>
                    <Text style={styles.txt1}>Dumbbell single arm row (6 reps x 4 sets)</Text>
                    <Text style={styles.txt1}>Shoulder lateral raise (6 reps x 4 sets)</Text>
                    <Text style={styles.txt1}>Bench press (6 reps x 4 sets)</Text>
                    <Text style={styles.txt1}>Pull ups/assisted pull ups (6 reps x 4 sets)</Text>
                    <Text style={styles.txt1}>Barbell bicep curls (8 reps x 4 sets)</Text>
                    <Text style={styles.txt1}>Cable overhead tricep extensions (8 reps x 4 sets)</Text>
                    <Text style={styles.txt1}>Rotating plank (30 secs x 4)</Text>
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
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 30,
        fontStyle: 'italic',
        marginBottom: 30
    },
    txt1: {
        marginTop: 10,
        fontStyle: 'italic',
        fontSize: 15,
        lineHeight: 30,
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
})


export default Strength;