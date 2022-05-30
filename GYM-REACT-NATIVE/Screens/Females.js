import React from "react";
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';


const Females = () => {


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
                    Beginner gym workout for females
                </Text>
                <View style={styles.FormView}>
                    <Text style={styles.txt1}>Seated leg press (10 reps x 3 sets)</Text>
                    <Text style={styles.txt1}>Seated shoulder press (10 reps x 3 sets)</Text>
                    <Text style={styles.txt1}>MClose grip lat pulldown (10 reps x 3 sets)</Text>
                    <Text style={styles.txt1}>Bodyweight lunges (10 reps x 3 sets)</Text>
                    <Text style={styles.txt1}>Full/kneeling press ups (10 reps x 3 sets)</Text>
                    <Text style={styles.txt1}>Plank (30 secs x 3)</Text>
                    <Text style={styles.txt1}>Leg raises (10 reps x 3 sets)</Text>
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


export default Females;