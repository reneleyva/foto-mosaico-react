import React from 'react';
import { View} from 'react-native';
import { StyleSheet, Dimensions } from 'react-native';

export default function Wrapper(props) {
        return (
            <View style={{flex: 1}}>
                <View style={styles.offset}></View>
                <View style={styles.preview}>
                    {props.children}
                </View>
                <View style={styles.menu}>
                    {props.menuButtons}
                </View>
            </View>
        );
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