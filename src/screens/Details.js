import colors from '../assets/colors';
import React, { useContext } from 'react'
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import { useTheme } from '../../src/components/ThemeContext';
import { WeatherContextHourly, WeatherContext } from '../../App';
import { View, Text, Button, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native'


EvilIcons.loadFont();

const Details = ({ navigation }) => {

    const hourlyForecastData = useContext(WeatherContextHourly);
    const darkTheme = useTheme();
    const { name } = useContext(WeatherContext);

    return (
        <View style={[styles.container, darkTheme ? { backgroundColor: colors.textDark } : null]}>
            <SafeAreaView>
                <View style={styles.headerWrapper}>
                    <TouchableOpacity onPress={() => navigation.navigate('Location')}>
                        <Text style={[styles.locationTitle, darkTheme ? { color: colors.textWhite } : null]}>{name}</Text>
                        <Text style={styles.locationSubTitle}>Current Location</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
                        <EvilIcons name='gear' size={25} color={darkTheme ? colors.textWhite : colors.textDark} />
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
            <View style={styles.middleWrapper}>
                <Text style={[styles.detailsText, darkTheme ? { color: colors.textWhite } : null]}>Details</Text>
                <Text style={styles.detailsTitle}> Preciption </Text>
                <Text style={[styles.detailsText, darkTheme ? { color: colors.textWhite } : null]}> {hourlyForecastData[0].prec_amount} mm </Text>
                <Text style={styles.detailsTitle}> SE Wind </Text>
                <Text style={[styles.detailsText, darkTheme ? { color: colors.textWhite } : null]}> {hourlyForecastData[0].wind10m.speed} km/h </Text>
                <Text style={styles.detailsTitle}> Humidity </Text>
                <Text style={[styles.detailsText, darkTheme ? { color: colors.textWhite } : null]}> 56 % </Text>
                <Text style={styles.detailsTitle}> Visibility </Text>
                <Text style={[styles.detailsText, darkTheme ? { color: colors.textWhite } : null]}> 14.83 km </Text>
                <Text style={styles.detailsTitle}> UV </Text>
                <Text style={[styles.detailsText, darkTheme ? { color: colors.textWhite } : null]}> Lowest </Text>
                <Text style={styles.detailsTitle}> Pressure </Text>
                <Text style={[styles.detailsText, darkTheme ? { color: colors.textWhite } : null]}> {hourlyForecastData[0].msl_pressure} hPa </Text>
            </View>
            <Button title='Click for More Details' onPress={() => navigation.navigate('Forecast')} />
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
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 20,
        paddingRight: 30,
        paddingTop: 70,
    },
    locationTitle: {
        fontSize: 24,
    },
    locationSubTitle: {
        fontSize: 13,
        color: colors.translucent,
    },
    middleWrapper: {
        paddingTop: 50,
        paddingHorizontal: 30,
    },
    detailsText: {
        fontSize: 24,
    },
    detailsTitle: {
        fontSize: 12,
        color: colors.translucent,
        marginTop: 25,
    },
    detailsText: {
        fontSize: 16,
        marginTop: 5,
    }
});

export default Details