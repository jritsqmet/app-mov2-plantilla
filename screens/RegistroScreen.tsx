import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native'
import React, { useState } from 'react'


export default function RegistroScreen({ navigation }: any) {

    const [correo, setCorreo] = useState('')
    const [contrasenia, setContrasenia] = useState('')

    function registro() {
       
    }

    return (
        <View>
            <Text style={{ fontSize: 30 }}>REGISTRO</Text>

            <TextInput
                placeholder='Ingresa tu correo electrónico'
                onChangeText={(texto) => (setCorreo(texto))}
                keyboardType='email-address'
            />
            <TextInput
                placeholder='Ingresa contraseña'
                onChangeText={(texto) => (setContrasenia(texto))}
            />

            <Button title='Ingresar' onPress={() => registro()} />
        </View>
    )
}

const styles = StyleSheet.create({})