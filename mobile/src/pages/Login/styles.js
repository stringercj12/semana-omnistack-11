import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20,
    },

    title: {
        fontSize: 30,
        marginBottom: 16,
        marginTop: 48,
        color: '#13131a',
        fontWeight: 'bold',
        justifyContent: 'center',
        alignItems: 'center'
    },
    box: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#FFF',
        marginTop: 108,
    },
    boxLabel: {
        fontSize: 30,
        marginBottom: 16,
        color: '#13131a',
        fontWeight: 'bold'
    },
    boxInput: {
        color: '#737380',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#737380',
        borderRadius: 8,
        marginBottom: 16,
        marginTop: 16,
    },
    boxActions: {
        marginTop: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    boxAction: {
        backgroundColor: '#e02041',
        borderRadius: 8,
        height: 50,
        width: '48%',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'row'
    },

    boxText: {
        color: '#FFF',
        fontSize: 15,
        fontWeight: 'bold'
    }
});