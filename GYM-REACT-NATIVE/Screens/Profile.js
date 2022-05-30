import React from "react";
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';


const Profile = ({route}) => {
    const {params: user} = route;
    console.log("Profile", user);
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
                    Profile
                </Text>
                <View style={styles.FormView}>
                    <View style={styles.Button}>
                        <Text style={styles.ButtonText}>
                            Name : {user.name}
                        </Text>
                    </View>
                    <View style={styles.Button}>
                        <Text style={styles.ButtonText}>
                            Email : {user.email}
                        </Text>
                    </View>
                    <View style={styles.Button}>
                        <Text style={styles.ButtonText}>
                            Address : {user.address}
                        </Text>
                    </View>
                    <View style={styles.Button}>
                        <Text style={styles.ButtonText}>
                            Age : {user.age}
                        </Text>
                    </View>
                    <View style={styles.Button}>
                        <Text style={styles.ButtonText}>
                            Height : {user.height}
                        </Text>
                    </View>
                    <View style={styles.Button}>
                        <Text style={styles.ButtonText}>
                            Weight : {user.weight}
                        </Text>
                    </View>
                    <View style={styles.Button}>
                        <Text style={styles.ButtonText}>
                            Payment Status : {user.payment_status}
                        </Text>
                    </View>
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
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 10,
    },
    Heading2: {
        color: '#000',
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
        fontStyle: 'italic',
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
        marginTop: 20,
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


export default Profile;