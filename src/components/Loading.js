import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import colors from '../assets/colors'

const Loading = () => {
    return (
        <View style={[styles.container, darkTheme ? { backgroundColor: colors.textDark } : null]}>
            <Text style={[styles.header, darkTheme ? { color: colors.textWhite } : null]}>Oops (-|-)</Text>
            <Text style={[styles.subHeader, darkTheme ? { color: colors.textWhite } : null]}>Check Your Internet Connection</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'stretch',
        backgroundColor: colors.appBackground,
    },
    header: {
        alignSelf: 'center',
        fontSize: 40,
        color: colors.textDark,
    },
    subHeader: {
        alignSelf: 'center',
        color: colors.translucent,
        color: colors.textDark,
    }
})

export default Loading