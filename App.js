//Just atleat a 50%, is what i cry for , atleast, if more than so ,also that is welcome
import React, { useState } from 'react';
import { View } from 'react-native';
import MenuScreen from './screens/MenuScreen';
import ProfileScreen from './screens/ProfileScreen';
import CartScreen from './screens/CartScreen';
import Form1Screen from './screens/Form1Screen';
import Form2Screen from './screens/Form2Screen';//Imports dont even need a comment , but here it is
import Form3Screen from './screens/Form3Screen';
import { FormProvider } from './contexts/FormContext';
import { ThemeProvider } from './contexts/ThemeContext';
import { CartProvider } from './contexts/CartContext';

export default function App(){
    const [currentScreen, setCurrentScreen] = useState('Form1');//We make currentScreen state to 'Form1', initially

    const handleNext = (nextScreen) => {
        setCurrentScreen(nextScreen);
    };

    const renderScreen = () => {
        switch (currentScreen) {
            case 'Form1':
                return <Form1Screen onNext={() => handleNext('Form2')} />;// If on Form1, render Form1Screen and pass a function to navigate to Form2
            case 'Form2':
                return <Form2Screen onNext={() => handleNext('Form3')} />;
            case 'Form3':
                return <Form3Screen onSubmit={() => handleNext('Menu')} />;
            case 'Profile':
                return <ProfileScreen navigation={setCurrentScreen} />;
            case 'Menu':
                return <MenuScreen navigation={setCurrentScreen} />;// If on Menu, render MenuScreen and pass the navigation function(s)
            case 'Cart':
                return <CartScreen navigation={setCurrentScreen} />;
            default:
                return <Form1Screen onNext={() => handleNext('Form2')} />;
        }
    };

    return (
        // Wraping the entire app with the FormProvider to manage form data across components
        // arfter that i Wrap the app with ThemeProvider to manage theme state across components
        // and then i  Wrap the app with CartProvider to manage cart state across components
        <FormProvider>
            <ThemeProvider>
                <CartProvider>
                    <View style={{ flex: 1 }}>
                        {renderScreen()}
                    </View>
                </CartProvider>
            </ThemeProvider>
        </FormProvider>
    );
}