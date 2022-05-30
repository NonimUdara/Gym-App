import React from "react";
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';


const Males = () => {


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
                    Beginner gym workout for males
                </Text>
                <View style={styles.FormView}>
                    <Text style={styles.txt1}>Seated chest press (10 reps x 4 sets)</Text>
                    <Text style={styles.txt1}>Seated rows (10 reps x 4 sets)</Text>
                    <Text style={styles.txt1}>Wide grip lat pulldown (10 reps x 4 sets)</Text>
                    <Text style={styles.txt1}>Seated leg press (10 reps x 4 sets)</Text>
                    <Text style={styles.txt1}>Dumbbell seated shoulder press (10 reps x 4 sets)</Text>
                    <Text style={styles.txt1}>Dumbbell bicep curls (10 reps x 4 sets)</Text>
                    <Text style={styles.txt1}>Close grip tricep press ups (10 reps x 4 sets)</Text>
                    <Text style={styles.txt1}>Cable rotations/twists (10 reps x 4 sets)</Text>
                    <Text style={styles.txt1}>Reverse crunches (10 reps x 4 sets) </Text>
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


export default Males;