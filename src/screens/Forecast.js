import React, { useContext } from 'react'
import colors from '../assets/colors';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign'
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { View, Text, FlatList, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native'
import { WeatherContextDaily, WeatherContextHourly, WeatherContext } from '../../App';
import { useTheme } from '../../src/components/ThemeContext';
import { dateFormater } from '../components/dateFormater';

Feather.loadFont();
AntDesign.loadFont();
EvilIcons.loadFont();
MaterialCommunityIcons.loadFont();

const Forecast = ({ navigation }) => {

    const dailyForecastData = useContext(WeatherContextDaily);
    const hourlyForecastData = useContext(WeatherContextHourly);
    const darkTheme = useTheme();
    const { name } = useContext(WeatherContext);

    const hourlyReport = ({ item }) => {
        return item.timepoint <= 24
            ? (
                <View style={[styles.flatlistWrapper]}>
                    <Text style={[styles.time, darkTheme ? { color: colors.textWhite } : null]}>{item.timepoint < 10 ? "0" + item.timepoint : item.timepoint}:00</Text>
                    {
                        item.cloudcover < 5
                            ? <Feather style={styles.icon} name='sun' size={20} color={darkTheme ? colors.textWhite : colors.translucent} />
                            : <Feather style={styles.icon} name='cloud-snow' size={20} color={darkTheme ? colors.textWhite : colors.translucent} />
                    }
                </View>
            )
            : null;
    }


    const dailyReport = ({ item }) => {
        return (
            <View style={styles.flatlistWrapper}>
                <Text style={[styles.time, darkTheme ? { color: colors.textWhite } : null]}>{dateFormater(item.date)}</Text>
                {
                    item.weather == 'clear'
                        ? <Feather style={styles.icon} name='sun' size={20} color={darkTheme ? colors.textWhite : null} />
                        : <Feather style={styles.icon} name='cloud-snow' size={20} color={darkTheme ? colors.textWhite : null} />
                }
                <View style={styles.celsuisFluctuatinWrapper}>
                    <AntDesign name='arrowup' size={11} color={darkTheme ? colors.textWhite : colors.translucent} />
                    <Text style={[styles.celsuisText, darkTheme ? { color: colors.textWhite } : null]}>{item.temp2m.max}</Text>
                    <MaterialCommunityIcons name='temperature-celsius' size={11} color={darkTheme ? colors.textWhite : colors.translucent} />
                </View>
                <View style={styles.celsuisFluctuatinWrapper}>
                    <AntDesign name='arrowdown' size={11} color={darkTheme ? colors.textWhite : colors.translucent} />
                    <Text style={[styles.celsuisText, darkTheme ? { color: colors.textWhite } : null]}>{item.temp2m.min}</Text>
                    <MaterialCommunityIcons name='temperature-celsius' size={12} color={darkTheme ? colors.textWhite : colors.translucent} />
                </View>
            </View>
        );
    }

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
                <Text style={[styles.text, darkTheme ? { color: colors.textWhite } : null]}>Forecast</Text>
                <Text style={styles.hourlyForecast}> Hourle Forecast </Text>
                <FlatList
                    data={hourlyForecastData}
                    renderItem={hourlyReport}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={item => item.date}
                />
                <Text style={styles.dailyForecast}> Daily Forecast </Text>
                <FlatList
                    data={dailyForecastData}
                    renderItem={dailyReport}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={item => item.date}
                />
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
    },
    hourlyForecast: {
        marginTop: 50,
        paddingHorizontal: 25,
        color: colors.translucent,
    },
    dailyForecast: {
        paddingTop: 55,
        paddingHorizontal: 25,
        color: colors.translucent,
    },
    text: {
        fontSize: 16,
        paddingHorizontal: 30,
    },
    flatlistWrapper: {
        paddingLeft: 30,
        marginTop: 20,
        alignItems: 'center',
    },
    time: {
        fontSize: 10,
    },
    icon: {
        paddingTop: 11,
    },
    celsuisFluctuatinWrapper: {
        marginTop: 11,
        flexDirection: 'row',
        alignItems: 'baseline',
    },
    celsuisText: {
        fontSize: 11,
        marginLeft: 8,
    },
});

export default Forecast