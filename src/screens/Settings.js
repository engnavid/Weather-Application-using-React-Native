import React from 'react'
import colors from '../assets/colors';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native'
import { useTheme, useThemeUpdate } from '../../src/components/ThemeContext';

EvilIcons.loadFont();


const Details = ({ navigation }) => {
    const darkTheme = useTheme();
    const { toggleIntoDarkTheme, toggleIntoLightTheme } = useThemeUpdate()

    return (
        <View style={[styles.container, darkTheme ? { backgroundColor: colors.textDark } : null]}>
            <SafeAreaView>
                <TouchableOpacity style={styles.headerWrapper} onPress={() => navigation.goBack()}>
                    <EvilIcons name='chevron-left' size={20} color={darkTheme ? colors.textWhite : null} />
                    <Text style={styles.headerText}>Settings</Text>
                </TouchableOpacity>
            </SafeAreaView>
            <View style={styles.middleWrapper}>
                <Text style={[styles.title, darkTheme ? { color: colors.textWhite } : null]}>Theme</Text>
                <TouchableOpacity onPress={() => toggleIntoDarkTheme()}>
                    <Text style={styles.detailsTitle}> Dark Theme </Text>
                    <Text style={styles.detailsText}> Join the Dark Side! </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => toggleIntoLightTheme()}>
                    <Text style={styles.detailsTitle}> Light Theme </Text>
                    <Text style={styles.detailsText}> Let There be Light! </Text>
                </TouchableOpacity>
                <Text style={[styles.title, darkTheme ? { color: colors.textWhite } : null]}> Feedback </Text>
                <Text style={styles.detailsTitle}> Dark Theme </Text>
                <Text style={styles.detailsText}> Join the Dark Side! </Text>
                <Text style={styles.detailsTitle}> Light Theme </Text>
                <Text style={styles.detailsText}> Let There be Light! </Text>
                <Text style={[styles.title, darkTheme ? { color: colors.textWhite } : null]}> About </Text>
                <Text style={styles.detailsTitle}> About Weather </Text>
                <Text style={styles.detailsText}> Read a bit more about app. </Text>
                <Text style={styles.detailsTitle}> The Team </Text>
                <Text style={styles.detailsText}> Get to know the team that made Weather a reality </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.appBackground,
    },
    headerWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: 70,
    },
    headerText: {
        fontSize: 18,
        color: colors.translucent,
    },

    middleWrapper: {
        paddingHorizontal: 30,
    },
    title: {
        paddingTop: 50,
        fontSize: 22,
    },
    detailsTitle: {
        fontSize: 16,
        color: colors.translucent,
        marginTop: 20,
    },
    detailsText: {
        fontSize: 9,
        marginTop: 5,
        color: colors.translucent,
    }
});

export default Details