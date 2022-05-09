import colors from '../assets/colors';
import React, { useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { useTheme } from '../../src/components/ThemeContext';


const SplashScreen = ({ navigation }) => {
    const darkTheme = useTheme();

    useEffect(() => {
        setTimeout(() => navigation.navigate('Home'), 4000);
    });

    return (
        <View style={[styles.container, darkTheme ? { backgroundColor: colors.textDark } : null]}>
            <Text style={[styles.title, darkTheme ? { color: colors.textWhite } : null]}>Weather</Text>
            <Text style={[styles.subTitle, darkTheme ? { color: colors.textWhite } : null]}>A minimal weather app</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'stretch',
    },
    title: {
        alignSelf: 'center',
        fontSize: 40,
        color: colors.textDark,
    },
    subTitle: {
        alignSelf: 'center',
        color: colors.translucent,
        color: colors.textDark,
    }
})

export default SplashScreen