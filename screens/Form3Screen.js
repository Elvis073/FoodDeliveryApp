
import React, { useContext, useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import { FormContext } from '../contexts/FormContext';

const Form3Screen = ({ onSubmit }) => {
    const { formData, updateFormData } = useContext(FormContext);
    const [creditCard, setCreditCard] = useState(formData.creditCard);
    const [expirationDate, setExpirationDate] = useState(formData.expirationDate);
    const [cvv, setCvv] = useState(formData.cvv);

    const handleSubmit = () => {
        if (creditCard.length === 16 && expirationDate && cvv.length === 3) {
            updateFormData('creditCard', creditCard);
            updateFormData('expirationDate', expirationDate);
            updateFormData('cvv', cvv);
            onSubmit();
        } else {
            alert('Please fill out all fields correctly');
        }
    };

    return (
        <View style={styles.container}>
            <Text>Credit Card Number:</Text>
            <TextInput
                style={styles.input}
                value={creditCard}
                onChangeText={setCreditCard}
                keyboardType="number-pad"
                maxLength={16}
            />
            <Text>Expiration Date (MM/YY):</Text>
            <TextInput
                style={styles.input}
                value={expirationDate}
                onChangeText={setExpirationDate}
                keyboardType="number-pad"
            />
            <Text>CVV:</Text>
            <TextInput
                style={styles.input}
                value={cvv}
                onChangeText={setCvv}
                keyboardType="number-pad"
                maxLength={3}
            />
            <Button title="Submit" onPress={handleSubmit} />
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

export default Form3Screen;