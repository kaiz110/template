import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { INCREMENT, DECREMENT } from '../lib/redux/actions'

const HomeScreen = () => {
    const state = useSelector(state => state)
    const dispatch = useDispatch()

    return <View style={styles.container}>
        <Text style={styles.text}>{state}</Text>
        <Button
            title='increment'
            onPress={() => dispatch(INCREMENT())}
        />
        <Button
            title='decrement'
            onPress={() => dispatch(DECREMENT())}
        />
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 45,
        fontWeight: 'bold',
        marginBottom: 25
    }
})

export default HomeScreen