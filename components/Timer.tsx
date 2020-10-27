import React from 'react';
import { Text, View } from 'react-native';

interface State {
    time: number
    seconds: number
    minutes: number
}

const Timer = () => {
    const [state, setState] = React.useState<State>({
        time: 60,
        seconds: 0,
        minutes: 1,
    })
    return <View>
        <Text>{`${state.minutes}: ${state.seconds <= 10 ? `0${state.seconds}` : state.seconds}`}</Text>
    </View>
}

export default Timer