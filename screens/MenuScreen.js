import React, { useContext } from 'react';
import { View, Text, Button, FlatList, Image, TouchableOpacity } from 'react-native';
import { CartContext } from '../contexts/CartContext';

export default function MenuScreen({ navigation }){

    const {addItemToCart} = useContext(CartContext);

    const foodItems = [
        { id: '1', name: 'Pizza', description: 'Delicious cheese pizza', price: 12.99, image: {uri:'https://www.allrecipes.com/thmb/0xH8n2D4cC97t7mcC7eT2SDZ0aE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/6776_Pizza-Dough_ddmfs_2x1_1725-fdaa76496da045b3bdaadcec6d4c5398.jpg'}},
        { id: '2', name: 'Burger', description: 'Juicy beef burger', price: 8.99, image: {uri: 'https://www.seriouseats.com/thmb/e16lLOoVEix_JZTv7iNyAuWkPn8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2014__09__20140918-jamie-olivers-comfort-food-insanity-burger-david-loftus-f7d9042bdc2a468fbbd50b10d467dafd.jpg'} },
        { id: '3', name: 'Sushi', description: 'Fresh sushi rolls', price: 15.99, image: {uri: 'https://www.fifteenspatulas.com/wp-content/uploads/2016/06/Homemade-Sushi-1-640x427.jpg'} },
        { id: '4', name: 'Pasta', description: 'Creamy Alfredo pasta', price: 10.99, image: {uri: 'https://www.budgetbytes.com/wp-content/uploads/2017/07/Lighter-Spinach-Alfredo-Pasta-finished.jpg'} },
        { id: '5', name: 'Salad', description: 'Healthy green salad', price: 7.99, image: {uri: 'https://insanelygoodrecipes.com/wp-content/uploads/2023/01/Healthy-Homemade-Green-Salad-with-Yellow-and-Red-Tomatoes.jpg'} },
        { id: '6', name: 'Steak', description: 'Grilled steak with sides', price: 18.99, image:{uri: 'https://tastesbetterfromscratch.com/wp-content/uploads/2020/07/How-to-Grill-Steak-6-500x375.jpg'}},
    ];

    const renderItem = ({ item }) =>(
        <View style={{ padding: 10, borderBottomWidth: 1, borderColor: '#ccc' }}>
            <Image source={item.image} style={{ width: '100%', height: 150 }} />
            <Text style={{ fontSize: 20 }}>{item.name}</Text>
            <Text>{item.description}</Text>
            <Text style={{ fontWeight: 'bold' }}>R{item.price}</Text>
            <Button title="Add to Cart" onPress={() => addItemToCart(item)} />
        </View>
    );

    return(
        <View style={{ flex: 1, padding: 20 }}>
            <FlatList
                data={foodItems}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
                <TouchableOpacity
                    style={{ backgroundColor: '#f08a5d', padding: 15, borderRadius: 5 }}
                    onPress={() => navigation('Profile')}
                >
                    <Text style={{ color: 'white', textAlign: 'center' }}>Go to Profile</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{ backgroundColor: '#b83b5e', padding: 15, borderRadius: 5 }}
                    onPress={() => navigation('Cart')}
                >
                    <Text style={{ color: 'white', textAlign: 'center' }}>Go to Cart</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}