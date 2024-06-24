import * as SQLite from 'expo-sqlite';
import { create } from './Create.js';
import { Alert, View, TextInput, Button, KeyboardAvoidingView, SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { useState } from 'react';

export function Remove() {
    const [senha, setSenha] = useState('');

    const remove = async () => {

        try {
            db = await create();
            let result = await db.runAsync(`DELETE FROM senhas where senha = ?;`, senha);
            if (result.changes > 0) {
                Alert.alert(
                    'Success',
                    'Contact removed',
                    [
                        {
                            text: 'Ok'
                        },npm 
                    ],
                    { cancelable: false }
                );
            } else alert('Erro em remover a senha');
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <View style={{ flex: 1, width: "80%" }}>
            <TextInput
                placeholder="Entre com a Senha"
                onChangeText={
                    senha => setSenha(senha)
                }
                style={{ padding: 2 }}
            />
            <Button title="Delete" onPress={() => remove()} />
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
    },
});