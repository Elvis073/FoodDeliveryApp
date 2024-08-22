import React, { useContext, useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import { FormContext } from '../contexts/FormContext';

const Form2Screen = ({ onNext })=>{
    const { formData, updateFormData } = useContext(FormContext);
    const [address, setAddress] = useState(formData.address);
    const [city, setCity] = useState(formData.city);
    const [state, setState] = useState(formData.state);
    const [zip, setZip] = useState(formData.zip);

    const handleNext = () => {
        if (address && city && state && zip) {
            updateFormData('address', address);
            updateFormData('city', city);
            updateFormData('state', state);
            updateFormData('zip', zip);
            onNext();
        } else {
            alert('Please fill out all fields');
        }
    };

    return(
        <View style={styles.container}>
            <Text>Address:</Text>
            <TextInput
                style={styles.input}
                value={address}
                onChangeText={setAddress}
            />
            <Text>City:</Text>
            <TextInput
                style={styles.input}
                value={city}
                onChangeText={setCity}
            />
            <Text>State:</Text>
            <TextInput
                style={styles.input}
                value={state}
                onChangeText={setState}
            />
            <Text>Zip Code:</Text>
            <TextInput
                style={styles.input}
                value={zip}
                onChangeText={setZip}
                keyboardType="number-pad"
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

export default Form2Screen;