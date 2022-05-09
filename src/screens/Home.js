import colors from '../assets/colors';
import React, { useContext, useState } from 'react';
import { WeatherContext } from '../../App';
import Feather from 'react-native-vector-icons/Feather'
import AntDesign from 'react-native-vector-icons/AntDesign'
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { useTheme } from '../../src/components/ThemeContext';
import Loading from '../components/Loading';
import { todayDate } from '../components/dateFormater';
import mSecToTime from '../components/mSecToTime';


Feather.loadFont();
EvilIcons.loadFont();
AntDesign.loadFont();
MaterialCommunityIcons.loadFont();




const Home = ({ navigation }) => {

    const data = useContext(WeatherContext);
    const darkTheme = useTheme();

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: darkTheme ? colors.textDark : colors.appBackground,
        },
        headerWrapper: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 30,
            paddingTop: 70,
        },
        locationTitle: {
            fontSize: 24,
        },
        locationSubTitle: {
            fontSize: 13,
            color: colors.translucent,
        },
        middleSectionWrapper: {
            flexDirection: 'column',
            alignItems: 'center',
            paddingTop: 50,
        },
        inSyncText: {
            fontSize: 10,
        },
        timeDate: {
            fontSize: 18,
            paddingTop: 30,
        },
        celsuis: {
            paddingTop: 20,
            flexDirection: 'row',
            alignItems: 'baseline',
        },
        celsuisText: {
            fontSize: 96,
        },
        celsuisFluctuatinWrapper: {
            marginTop: 20,
            flexDirection: 'row',
        },
        celsuisFluctuatLeft: {
            flexDirection: 'row',
            marginRight: 25,
            alignItems: 'baseline'
        },
        celsuisFluctuatRight: {
            flexDirection: 'row',
            alignItems: 'baseline'
        },
        celsuisUpText: {
            fontSize: 18,
            marginLeft: 8,
        },
        celsuisDownText: {
            fontSize: 18,
            marginLeft: 8,
        },
        icon: {
            paddingTop: 55,
        },
        iconText: {
            fontSize: 18,
            paddingTop: 25,
        },
        sunRiseandSetTextWrapper: {
            flexDirection: 'row',
            paddingTop: 50,
        },
        sunRise: {
            flexDirection: 'row',
            marginLeft: 14,
        },
        sunRiseSetText: {
            fontSize: 17,
            marginLeft: 9,
        },
        sunSet: {
            flexDirection: 'row',
            marginLeft: 14,
        },
    });

    if (!data)
        return <Loading />

    return (
        <View style={styles.container}>
            <SafeAreaView>
                <View style={styles.headerWrapper}>
                    <TouchableOpacity onPress={() => navigation.navigate('Location')}>
                        <Text style={[styles.locationTitle, darkTheme ? { color: colors.textWhite } : null]}>{data.name}</Text>
                        <Text style={styles.locationSubTitle}>Current Location</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
                        <EvilIcons name='gear' size={25} color={darkTheme ? colors.textWhite : colors.textDark} />
                    </TouchableOpacity>
                </View>
            </SafeAreaView>

            <View style={styles.middleSectionWrapper}>
                <Text style={[styles.inSyncText, darkTheme ? { color: colors.textWhite } : null]}>in Sync</Text>
                <Text style={[styles.timeDate, darkTheme ? { color: colors.textWhite } : null]}>{todayDate()}</Text>
                <View style={styles.celsuis}>
                    <Text style={[styles.celsuisText, darkTheme ? { color: colors.textWhite } : null]}>{parseInt(data.main.temp - 273.2)}</Text>
                    <MaterialCommunityIcons name='temperature-celsius' size={40} color={darkTheme ? colors.textWhite : null} />
                </View>

                <View style={styles.celsuisFluctuatinWrapper}>
                    <View style={styles.celsuisFluctuatLeft}>
                        <AntDesign name='arrowdown' size={15} color={darkTheme ? colors.textWhite : null} />
                        <Text style={[styles.celsuisUpText, darkTheme ? { color: colors.textWhite } : null]}>{parseInt(data.main.temp_min - 273.2)}</Text>
                        <MaterialCommunityIcons name='temperature-celsius' size={15} color={darkTheme ? colors.textWhite : null} />
                    </View>
                    <View style={styles.celsuisFluctuatRight}>
                        <AntDesign name='arrowup' size={16} color={darkTheme ? colors.textWhite : null} />
                        <Text style={[styles.celsuisDownText, darkTheme ? { color: colors.textWhite } : null]}>{parseInt(data.main.temp_max - 273.2)}</Text>
                        <MaterialCommunityIcons name='temperature-celsius' size={15} color={darkTheme ? colors.textWhite : null} />
                    </View>
                </View>

                <TouchableOpacity onPress={() => navigation.navigate('Details')}>
                    {
                        data.weather[0].main == 'Haze'
                            ? <Feather style={styles.icon} name='sun' size={120} color={darkTheme ? colors.textWhite : null} />
                            : <Feather style={styles.icon} name='cloud-snow' size={120} color={darkTheme ? colors.textWhite : null} />
                    }
                </TouchableOpacity>

                <Text style={[styles.iconText, darkTheme ? { color: colors.textWhite } : null]}>{data.weather[0].description}</Text>

                <View style={styles.sunRiseandSetTextWrapper}>
                    <View style={styles.sunRise}>
                        <Feather name='sunrise' size={20} color={darkTheme ? colors.textWhite : null} />
                        <Text style={[styles.sunRiseSetText, darkTheme ? { color: colors.textWhite } : null]}>{mSecToTime(1651244218334)} AM</Text>
                    </View>
                    <View style={styles.sunSet}>
                        <Feather name='sunset' size={20} color={darkTheme ? colors.textWhite : null} />
                        <Text style={[styles.sunRiseSetText, darkTheme ? { color: colors.textWhite } : null]}>{mSecToTime(data.sys.sunset)} PM</Text>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default Home;
