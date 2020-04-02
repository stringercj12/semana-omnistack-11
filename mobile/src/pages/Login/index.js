import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
// import AsyncStorage from '@react-native-community/async-storage';

import logoImg from '../../assets/logo.png';
import styles from './styles';

import api from './../../services/api';

export default function Login() {
    const [id, setId] = useState('');
    const navigation = useNavigation();

    async function authenticate() {
        try {
            const response = await api.post('sessions', { id });

            // AsyncStorage.setItem('ongId', id);
            // AsyncStorage.setItem('ongName', response.data.name);

            navigation.navigate('Incidents');

        } catch (err) {
            alert('Falha no login, tente novamente.');
        }
    }



    return (
        <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : null} enabled>
            <View style={styles.title}>
                <Image source={logoImg} />
            </View>
            <View style={styles.box}>
                <Text style={styles.boxLabel}>Faça seu Logon</Text>
                <TextInput
                    style={styles.boxInput}
                    placeholder="Digite seu ID"
                    placeholderTextColor="#737380"
                    autoCapitalize="none"
                    onChangeText={setId}
                />
                <View style={styles.boxActions}>
                    <TouchableOpacity style={styles.boxAction} onPress={authenticate}>
                        <Feather name="log-in" size={18} color="#fff" />
                        <Text style={styles.boxText}>Entrar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </KeyboardAvoidingView>
    );
}
