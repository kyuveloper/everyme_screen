import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native"


const EmailSignUp = () => {

    const navigation = useNavigation();

    const [email, setEmail] = useState('');
    const [emailCheck, setEmailCheck] = useState('');
    const [password, setPassword] = useState('');
    const [passwordCheck, setPasswordCheck] = useState('');

    const [emailCheckResult, setEmailCheckResult] = useState('');
    const [passCheckResult, setPassCheckResult] = useState('');
    const [totalCheck, setTotalCheck] = useState(false);

    const emailChangeHandler = (text) => {
        setEmail(text);
    }
    const emailCheckChangeHandler = (text) => {
        setEmailCheck(text);
    }

    const passChangeHandler = (text) => {
        setPassword(text);
    }
    const passCheckChangeHandler = (text) => {
        setPasswordCheck(text);
    }

    const emailCheckBtnHandler = () => {
        console.log(email, emailCheck);

        if (email.length === 0 || email !== emailCheck) {
            setTotalCheck(false)
            setEmailCheckResult('아이디가 일치하지 않습니다')
        } else {
            setTotalCheck(true)
            setEmailCheckResult('아이디가 일치합니다')
        }
    }

    const passCheckBtnHandler = () => {
        console.log(password, passwordCheck);

        if (password.length === 0 || password !== passwordCheck) {
            setTotalCheck(false)
            setPassCheckResult('비밀번호가 일치하지 않습니다')
        } else {
            setTotalCheck(true)
            setPassCheckResult('비밀번호가 일치합니다')
        }
    }

    const submitBtnHandler = () => {

        console.log(email, password)

        const signupData = JSON.stringify({
            'userId': email,
            'userPass': password
        })

        if (totalCheck) {
            axios({
                method: 'POST',
                url: 'http://192.168.0.12:8080/signup',
                data: signupData,
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(response => {
                console.log(response.data);
                if (response.status === 200) {
                    navigation.navigate('MainPage');
                } else {
                    alert('아이디와 비밀번호를 확인해주세요');
                }
            }).catch(error => {
                console.log(error);
            })
        } else {
            alert('아이디와 비밀번호를 확인해주세요');
        }

        
    }

    
    return (
        <View style={styles.container}>
            <Text>emailSignUp</Text>
            <TextInput onChangeText={emailChangeHandler} blurOnSubmit={true} placeholder="아이디 입력" keyboardType="default" value={email} style={styles.textBox}/>
            <TextInput onChangeText={emailCheckChangeHandler} blurOnSubmit={true} placeholder="아이디 확인" keyboardType="default" value={emailCheck} style={styles.textBox}/>
            <Text>{emailCheckResult}</Text>
            <Button
                title='Check'
                onPress={emailCheckBtnHandler}
            />
            
            <TextInput onChangeText={passChangeHandler} blurOnSubmit={true} placeholder="비밀번호 입력" keyboardType="default" value={password} style={styles.textBox}/>
            <TextInput onChangeText={passCheckChangeHandler} blurOnSubmit={true} placeholder="비밀번호 확인" keyboardType="default" value={passwordCheck} style={styles.textBox}/>
            <Text>{passCheckResult}</Text>
            <Button
                title='Check'
                onPress={passCheckBtnHandler}
            />
            <Button
                title='Submit'
                onPress={submitBtnHandler}
            />
        </View>
    )
}

export default EmailSignUp;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textBox: {
        width: 300,
        height: 40,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        margin: 10,
    }
});