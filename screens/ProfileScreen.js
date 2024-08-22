import React, { useContext,useState } from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import { FormContext } from '../contexts/FormContext';
import { ThemeContext } from '../contexts/ThemeContext';

export default function ProfileScreen({ navigation }){
    const { formData } = useContext(FormContext);
    const { theme, setTheme } = useContext(ThemeContext);

    const textColors = ['#ff6347', '#ffffff', '#000000', '#32CD32', '#8A2BE2'];
    const backgroundColors = ['#f0e68c', '#add8e6', '#ffb6c1', '#98fb98', '#dda0dd'];

    const [textColorIndex, setTextColorIndex] = useState(0);
    const [backgroundColorIndex, setBackgroundColorIndex] = useState(0);

    const changeTextColor = () => {
        setTheme({ ...theme, textColor: textColors[textColorIndex] });
        setTextColorIndex((prevIndex) => (prevIndex + 1) % textColors.length);
    };

    const changeBackgroundColor = () => {
        setTheme({ ...theme, backgroundColor: backgroundColors[backgroundColorIndex] });
        setBackgroundColorIndex((prevIndex) => (prevIndex + 1) % backgroundColors.length);
    };


    return(
        <View style={{ flex: 1, padding: 20, backgroundColor: theme.backgroundColor }}>
            <Text style={{ fontSize: 24, color: theme.textColor }}>Profile Information</Text>
            
            <View style={{ marginVertical: 10 }}>
                <Text style={{ color: theme.textColor }}>Name: {formData.name}</Text>
                <Text style={{ color: theme.textColor }}>Email: {formData.email}</Text>
                <Text style={{ color: theme.textColor }}>Phone: {formData.phone}</Text>
            </View>

            <View style={{ marginVertical: 10 }}>
                <Text style={{ color: theme.textColor }}>Address: {formData.address}</Text>
                <Text style={{ color: theme.textColor }}>City: {formData.city}</Text>
                <Text style={{ color: theme.textColor }}>State: {formData.state}</Text>
                <Text style={{ color: theme.textColor }}>Zip Code: {formData.zipCode}</Text>
            </View>

            <View style={{ marginVertical: 10 }}>
                <Text style={{ color: theme.textColor }}>Card Number: {formData.cardNumber}</Text>
                <Text style={{ color: theme.textColor }}>Expiration Date: {formData.expirationDate}</Text>
                <Text style={{ color: theme.textColor }}>CVV: {formData.cvv}</Text>
            </View>

            <Text style={{ fontSize: 20, color: theme.textColor }}>Customize Theme</Text>
            <Button title="Change Text Color" onPress={changeTextColor} />
            <Button title="Change Background Color" onPress={changeBackgroundColor} />
            
            <Button title="Go to Menu" onPress={() => navigation('Menu')} />
        </View>
    );
}
