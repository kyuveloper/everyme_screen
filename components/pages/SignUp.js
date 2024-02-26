import { useNavigation } from "@react-navigation/native";
import { Button, StyleSheet, Text, View } from "react-native";


const SignUp = () => {

    const navigation = useNavigation();

    return (

        <View style={styles.container}>
            <Button
                title='kakaoSignUp'
                onPress={() => navigation.navigate('kakaoSignUp')}
            />
            <Button
                title='EmailSignUp'
                onPress={() => navigation.navigate('EmailSignUp')}
            />
        </View>
        
    )
}

export default SignUp;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
});