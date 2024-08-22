import React, { useContext, useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import { FormContext } from '../contexts/FormContext';

const Form1Screen = ({ onNext })=>{

    const { formData, updateFormData } = useContext(FormContext);
    const [name, setName] = useState(formData.name);
    const [email, setEmail] = useState(formData.email);
    const [phone, setPhone] = useState(formData.phone);

    const handleNext = () => {
        if (name && email && phone) {
            updateFormData('name', name);
            updateFormData('email', email);
            updateFormData('phone', phone);
            onNext();
        } else {
            alert('Please fill out all fields');
        }
    };

    return(
        <View style={styles.container}>
            <Text>Name:</Text>
            <TextInput
                style={styles.input}
                value={name}
                onChangeText={setName}
            />
            <Text>Email:</Text>
            <TextInput
                style={styles.input}
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
            />
            <Text>Phone:</Text>
            <TextInput
                style={styles.input}
                value={phone}
                onChangeText={setPhone}
                keyboardType="phone-pad"
            />
            <Button title="Next" onPress={handleNext} />
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 8,
        marginBottom: 16,
        borderRadius: 4,
    },
});

export default Form1Screen;