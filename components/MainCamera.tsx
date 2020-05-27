// src/camera.page.js file
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';
import * as Permissions from 'expo-permissions'
import { StyleSheet, Dimensions } from 'react-native';
import { Entypo } from '@expo/vector-icons'; 
import Wrapper from './Wrapper'; 

export default class MainCamera extends React.Component {
    camera = null;

    state = {
        hasCameraPermission: null,
    };

    async componentDidMount() {
        const { status } = await Camera.requestPermissionsAsync();
        this.setState({hasCameraPermission: status})
    };

    async takePicture() {
        if (this.camera) {
            const options = {quality: 1};
            const data = await this.camera.takePictureAsync(options);
            console.log(data)
        }
    };

    render() {
        const { hasCameraPermission } = this.state;

        if (hasCameraPermission === null) {
            return <View />;
        } else if (!hasCameraPermission) {
            return <Text>DAME PERMISO PERRO.</Text>;
        }

        const menuButtons = (
            <TouchableOpacity onPress={() => this.takePicture()}>
                <Entypo name="circle" size={60} color="white"/>
            </TouchableOpacity>
        ); 

        return (
            <Wrapper menuButtons={menuButtons}>
                <Camera style={{flex: 1}} ref={ref => { this.camera = ref }}/> 
            </Wrapper>
            // <View style={{flex: 1}}>
            //     <View style={styles.offset}></View>
            //     <View style={styles.preview}> 
            //       <Camera style={{flex: 1}} ref={ref => { this.camera = ref }}/> 
            //     </View>
            //     <View style={styles.menu}>
            //         <TouchableOpacity onPress={() => this.takePicture()}>
            //             <Entypo name="circle" size={60} color="white"/>
            //         </TouchableOpacity>
            //     </View>
            // </View>
        );
    };
};

const { width: winWidth, height: winHeight } = Dimensions.get('window');

const styles = StyleSheet.create({
    preview: {
        flex: 11, 
        width: winWidth,
    },
    offset: {
        backgroundColor: "black",
        flex: 2
    },
    menu: {
        flex: 3, 
        justifyContent: 'center',
        alignItems: 'center', 
        backgroundColor: "black"
    }, 
});