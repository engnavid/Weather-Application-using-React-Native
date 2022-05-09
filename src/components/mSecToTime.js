import { View, Text } from 'react-native'
import React from 'react'

const mSecToTime = (mSec) => {
    const time = new Date(mSec).toTimeString().substring(0, 5);
    var hours = parseInt(time.substring(0, 2))
    const minutes = parseInt(time.substring(3, 5))
    hours = hours > 12 ? hours - 12 : hours
    return hours + ":" + minutes
}

export default mSecToTime