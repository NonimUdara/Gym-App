import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';

import axios from "axios";
import { Formik } from 'formik';
import * as yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import api from "../UrlData";


const ComeandLeave = () => {

    const [state, setState] = useState(false);

    const handleSubmit = (values) => {
        const url = api.baseUrl + "/arrival/save";
        setState(false);

        const dataToSend = { ...values };
        console.log(dataToSend);
        axios.post(url, dataToSend)
            .then(res => {
                console.log('response from db', res.data);
                setState(false);
                toast('Sign Up is successful..!', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                //navigate to sign in form
            })
            .catch(err => {
                console.log(err.response.data.message);
                setState(true);
                toast.error("Error Notification !", {
                    position: toast.POSITION.TOP_LEFT
                });
            });
    };

    const loginValidationSchema = yup.object().shape({
        email: yup
            .string()
            .email("Please enter valid email")
            .required('Email Address is Required'),
        name: yup
            .string()
            .required('Name Address is Required'),
        date: yup
            .string()
            .required('Date is Required'),
        come: yup
            .string()
            .required('Coming time is Required'),
        leave: yup
            .string()
            .required('Leaving time is Required'),
    })

    return (
        <View style={styles.mainView}>
            <KeyboardAvoidingView style={styles.BottomView} behavior={Platform.OS === "ios" ? "padding" : "height"} keyboardVerticalOffset={Platform.OS === "ios" ? 64 : -60} >
                <ScrollView>
                    <Text style={styles.Heading}>
                        A+ Fitness
                    </Text>
                    <Text numberOfLines={1} style={styles.line}>
                        ___________________________________
                    </Text>
                    <Text style={styles.Heading2}>
                        Come & Leave
                    </Text>

                    <Formik
                        initialValues={{
                            name: '',
                            email: '',
                            date: '',
                            come: '',
                            leave: '',
                        }}
                        validationSchema={loginValidationSchema}
                        onSubmit={handleSubmit}
                    >
                        {({ handleChange, handleBlur, handleSubmit, errors, isValid, values, touched }) => (
                            <View style={styles.FormView}>
                                <Text style={styles.txt1}>Name</Text>
                                <TextInput
                                    onChangeText={handleChange('name')}
                                    placeholder={"Your Full Name"}
                                    placeholderTextColor={"#a1a1a1"}
                                    onBlur={handleBlur('name')}
                                    value={values.name}
                                    style={styles.TextInput}
                                />
                                {errors.name && touched.name &&
                                    <Text style={{ fontSize: 10, color: 'red' }}>{errors.name}</Text>
                                }
                                <Text style={styles.txt1}>Email</Text>
                                <TextInput
                                    onChangeText={handleChange('email')}
                                    placeholder={"Your Email"}
                                    placeholderTextColor={"#a1a1a1"}
                                    onBlur={handleBlur('email')}
                                    value={values.email}
                                    style={styles.TextInput}
                                />
                                {errors.email && touched.email &&
                                    <Text style={{ fontSize: 10, color: 'red' }}>{errors.email}</Text>
                                }
                                <Text style={styles.txt1}>Date</Text>
                                <TextInput
                                    onChangeText={handleChange('date')}
                                    placeholder={"Your Date"}
                                    placeholderTextColor={"#a1a1a1"}
                                    onBlur={handleBlur('date')}
                                    value={values.date}
                                    style={styles.TextInput}
                                />
                                {errors.date && touched.date &&
                                    <Text style={{ fontSize: 10, color: 'red' }}>{errors.date}</Text>
                                }
                                <Text style={styles.txt1}>Come</Text>
                                <TextInput
                                    onChangeText={handleChange('come')}
                                    placeholder={"Your Coming Time"}
                                    placeholderTextColor={"#a1a1a1"}
                                    onBlur={handleBlur('come')}
                                    value={values.come}
                                    style={styles.TextInput}
                                />
                                {errors.come && touched.come &&
                                    <Text style={{ fontSize: 10, color: 'red' }}>{errors.come}</Text>
                                }
                                <Text style={styles.txt1}>Leave</Text>
                                <TextInput
                                    onChangeText={handleChange('leave')}
                                    placeholder={"Your Leaving Time"}
                                    placeholderTextColor={"#a1a1a1"}
                                    onBlur={handleBlur('leave')}
                                    value={values.leave}
                                    style={styles.TextInput}
                                />
                                {errors.leave && touched.leave &&
                                    <Text style={{ fontSize: 10, color: 'red' }}>{errors.leave}</Text>
                                }
                                <TouchableOpacity style={!isValid ? styles.ButtonDisabled : styles.Button} onPress={handleSubmit} disabled={!isValid}>
                                    <Text style={styles.ButtonText}>
                                        Submit
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        )}
                    </Formik>
                </ScrollView>
            </KeyboardAvoidingView>


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
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        fontStyle: 'italic',
        marginBottom: 10
    },
    txt1: {
        marginRight: 310,
        marginTop: 10,
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
    TextInput: {
        width: '90%',
        borderWidth: 1,
        borderColor: '#F3F3F3',
        height: 52,
        borderRadius: 10,
        paddingLeft: 5,
        marginTop: 10,
        color: '#000',
        backgroundColor: '#F3F3F3'
    },
    Button: {
        width: '90%',
        color: '#fff',
        height: 52,
        backgroundColor: '#11A9FF',
        borderRadius: 15,
        marginTop: 16,
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


export default ComeandLeave;