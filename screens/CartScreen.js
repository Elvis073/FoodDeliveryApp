import React, { useContext } from 'react';
import { View, Text, Button, FlatList, Image } from 'react-native';
import { CartContext } from '../contexts/CartContext';

export default function CartScreen({ navigation }){
    const { cart, updateCartItemQuantity, removeItemFromCart, clearCart } = useContext(CartContext);

    const renderItem = ({ item })=>(
        <View style={{ padding: 10, borderBottomWidth: 1, borderColor: '#ccc' }}>
            <Image source={item.image} style={{ width: '100%', height: 150 }} />
            <Text style={{ fontSize: 20 }}>{item.name}</Text>
            <Text>Quantity: {item.quantity}</Text>
            <Text style={{ fontWeight: 'bold' }}>R{item.price * item.quantity}</Text>
            <Button title="Increase Quantity" onPress={() => updateCartItemQuantity(item.id, item.quantity + 1)} />
            <Button title="Decrease Quantity" onPress={() => updateCartItemQuantity(item.id, item.quantity - 1)} />
            <Button title="Remove Item" onPress={() => removeItemFromCart(item.id)} />
        </View>
    );

    const totalCost = cart.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <View style={{ flex: 1, padding: 20 }}>
            <FlatList
                data={cart}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
            <Text style={{ fontSize: 20, marginVertical: 20 }}>Total: R{totalCost.toFixed(2)}</Text>
            <Button title="Proceed to Checkout" onPress={() => { clearCart(); navigation('Menu'); }} />
            <Button title="Menu" onPress={()=>{navigation('Menu')}}/>
            <Button title="Go to Profile" onPress={() => navigation('Profile')} />
        </View>
    );
}