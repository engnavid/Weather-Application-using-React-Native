import colors from '../assets/colors';
import React, { useContext } from 'react';
import { WeatherContext } from '../../App';
import Feather from 'react-native-vector-icons/Feather'
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, FlatList } from 'react-native'
import { useTheme } from '../../src/components/ThemeContext';

EvilIcons.loadFont();
Feather.loadFont();
MaterialCommunityIcons.loadFont();

const LocationScreen = ({ navigation }) => {

    const { name, main: { temp }, weather } = useContext(WeatherContext);
    const darkTheme = useTheme();
    const data = [
        {
            name,
            temp,
            weather
        }
    ]

    const weatherInfo = ({ item }) => {
        return (
            <View style={styles.flatlistWrapper}>
                <View style={styles.leftListView}>
                    <Text style={[styles.cityName, darkTheme ? { color: colors.textWhite } : null]}>{item.name}</Text>
                    <View style={styles.tempWrapper}>
                        <Text style={[styles.celsius, darkTheme ? { color: colors.textWhite } : null]}>{parseInt(item.temp - 273.2)}</Text>
                        <MaterialCommunityIcons name='temperature-celsius' size={15} color={darkTheme ? colors.textWhite : colors.textDark} />
                    </View>
                    <Text style={darkTheme ? { color: colors.textWhite } : null}>{item.weather[0].description}</Text>
                </View>
                {
                    item.weather[0].description == 'haze'
                        ? <Feather style={styles.icon} name='sun' size={25} color={darkTheme ? colors.textWhite : colors.textDark} />
                        : <Feather style={styles.icon} name='cloud-snow' size={25} color={darkTheme ? colors.textWhite : colors.textDark} />
                }
            </View>
        );
    }


    return (
        <View style={[styles.container, darkTheme ? { backgroundColor: colors.textDark } : null]}>
            <SafeAreaView>
                <View style={styles.headerWrapper} >
                    <TouchableOpacity style={styles.leftHeaderWrapper} onPress={() => navigation.goBack()}>
                        <EvilIcons name='chevron-left' size={20} color={darkTheme ? colors.textWhite : colors.textDark} />
                        <Text style={[styles.headerText, darkTheme ? { color: colors.textWhite } : { color: colors.textDark }]}>Select City</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Feather style={styles.icon} name='plus' size={20} color={darkTheme ? colors.textWhite : colors.textDark} />
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
            <FlatList
                data={data}
                renderItem={weatherInfo}
                keyExtractor={item => item.id}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 30,
        paddingTop: 70,
    },
    leftHeaderWrapper: {
        flexDirection: 'row',
    },
    headerText: {
        fontSize: 13,
    },
    flatlistWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 30,
        marginTop: 50,
        alignItems: 'center',
    },
    cityName: {
        fontSize: 16,
    },
    tempWrapper: {
        flexDirection: 'row',
    },
});

export default LocationScreen