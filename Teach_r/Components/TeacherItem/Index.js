import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import StyleButton from '../StyleButtom/Index';
import styles from './styles';

const TeachItem = (props) => {


    const {name, tagline, image} = props;

    return(
        <View style={styles.teachcontainer}>

            <ImageBackground source={require('../../assets/images/SolarRoof.jpeg')}
            style={styles.image}/>
            
            <View style={styles.headline}>
            <Text style={styles.title}>Teach'r</Text>
            <Text style={styles.subtitle}>Learning Start Now</Text>
            </View>

            
            <View style={styles.buttonsContainer}>
                <StyleButton type="primary" content={"Custom"} 
                onPress ={() => {
                    console.warn( data= 'Custom press');
                }} 
                />

                <StyleButton type="secondary" content={"inventory"} 
                onPress ={() => {
                    console.warn( data= "inventory press");
                }} 
                />
            </View>

        </View>
    );
};

export default TeachItem; 