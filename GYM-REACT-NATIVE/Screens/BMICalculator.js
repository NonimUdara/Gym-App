import React,{Component} from 'react';
import {StyleSheet,View,TextInput,Button,TouchableOpacity,Text} from 'react-native';

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
        marginBottom: 30,
        fontStyle:'italic',
        marginBottom: 30
    },
    txt1: {
        marginRight:310,
        marginTop:10,
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

export default class BMICalculator extends Component
{
    constructor(props)
    {
        super(props);
        this.state={Num1:0,Num2:0}
    }
    Sum=()=>
    {
        var N1=parseFloat(this.state.Num1);
        var N2=parseFloat(this.state.Num2);

        var X=N2*N2;
        var value=N1/X

        value = value.toFixed(2);

        alert(value);
    }
    render()
    {
        return(
            <View style={styles.mainView}>
            <View style={styles.BottomView}>
            <Text style={styles.Heading}>
                    A+ Fitness
                </Text>
                <Text numberOfLines={1} style={styles.line}>
                    ___________________________________
                </Text>
                <Text style={styles.Heading2}>
                    BMI Calculator
                </Text>
                <View style={styles.FormView}>
                    <Text style={styles.txt1}>Weight</Text>
                    <TextInput placeholder={"Enter Your Weight  In  ' kg '"} placeholderTextColor={"#a1a1a1"} style={styles.TextInput} onChangeText={Num1=>this.setState({Num1})}/>
                    <Text style={styles.txt1}>Height</Text>
                    <TextInput placeholder={"Enter Your Height  In  ' m '"} placeholderTextColor={"#a1a1a1"} style={styles.TextInput} onChangeText={Num2=>this.setState({Num2})}/>
                    <Text style={{marginTop:30}}>* Please add weight in <Text style={{color:'#11A9FF'}}>kilo grams</Text> and add height in <Text style={{color:'#11A9FF'}}>meters</Text></Text>
                    <Text style={{marginTop:10,marginLeft:-8}}>* After add weight & height , your BMI value is in alert box</Text>
                    <TouchableOpacity style={styles.Button} title="Sum" onPress={this.Sum}>
                        <Text style={styles.ButtonText}>
                            Calculate
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
        )
    }
    
}