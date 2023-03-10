import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    mainView : {
        height: '100%',
        backgroundColor: 'white'
    },
    image : {
        marginTop: 'auto',
        height: 140,
        resizeMode: 'contain',
        marginBottom: 20,
    },
    button: {
        height: 40,
        backgroundColor: 'blue',
        borderRadius: 20,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: 'auto',
        width: 220
    },
    buttonText: {
        color: 'white',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 'auto',
        marginBottom: 'auto',
        fontSize: 16,
        fontWeight: '600'
    }
})

export {styles}