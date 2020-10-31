import React from 'react';
import { Text, View } from 'react-native';

interface TimerState {
    time: number
    seconds: number
    minutes: number
}

interface TimerProps {
    time: number
}

const Timer: React.FC<TimerProps> = ({ time }) => {
    const [state, setState] = React.useState<TimerState>({
        time,
        seconds: time - Math.floor((time - 1) / 60) * 60 - 1,
        minutes: Math.floor((time - 1) / 60),
    })

    React.useEffect(() => {
        setTimeout(() => {
            if (state.time === 0) {
                return
            }

            setState({
                time: state.time - 1,
                minutes: Math.floor((state.time - 1) / 60),
                seconds: state.time - Math.floor((state.time - 1) / 60) * 60 - 1,
            })
        }, 1000)
    }, [state.time])

    return <View>
        <Text>{`${state.minutes}:${state.seconds <= 10 ? `0${state.seconds}` : state.seconds}`}</Text>
    </View>
}

export default Timer