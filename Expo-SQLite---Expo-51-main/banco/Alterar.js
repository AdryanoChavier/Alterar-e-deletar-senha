import * as SQLite from 'expo-sqlite';
import { create } from './Create.js';
import { Alert, View, TextInput, Button, KeyboardAvoidingView, SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { useState } from 'react';

export function Alterar() {
    const [senha, setSenha] = useState('');
    const [senha2, setSenha2] = useState('');

    const update = async () => {

        try{
            db = await create();
            let result = await db.runAsync(`UPDATE senhas SET senha = ? WHERE senha = ?;`, senha2,senha);
            if (result.changes > 0) {
                Alert.alert(
                    'Success',
                    'Senha Alterada',
                    [
                        {
                            text: 'Ok'
                        },
                    ],
                    { cancelable: false }
                );
            } else alert('Erro Alterar a senha');
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <View style={{ flex: 1, width: "80%" }}>
            <TextInput
                placeholder="Entre com a senha que deseja alterar"
                onChangeText={

                    senha => setSenha(senha)
                }
                style={{ padding: 2 }}
            />
            <TextInput
                placeholder="nova Senha"
                onChangeText={

                    senha2 => setSenha2(senha2)
                }
                style={{ padding: 2 }}
            />
            <Button title="Alterar Senha" onPress={() => update()} />
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