//Atleast a 50% , more is welcome, but atleast.....50%^^^^^^^^^^
import React, { createContext, useState } from 'react';

export const FormContext = createContext();

export const FormProvider = ({ children })=>{
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        state: '',
        zip: '',
        creditCard: '',
        expirationDate: '',
        cvv: ''
    });

    const updateFormData = (field, value) => {
        setFormData({ ...formData, [field]: value });
    };

    return (
        <FormContext.Provider value={{ formData, updateFormData }}>
            {children}
        </FormContext.Provider>
    );
};