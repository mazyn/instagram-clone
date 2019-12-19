import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';

class InstaClone extends Component {

    constructor() {
        super();
        this.state = {
            screenWidth: Dimensions.get('window').width
        };
    }

    render() {
        const imageHeight = Math.floor(this.state.screenWidth * 1.1);
        const imageUri = 'https://lh3.googleusercontent.com/qqN6N2__UHNS9bnobC0VvTnAsSZkRb6eswYAVIzgCrVrfeJ9_t6coaDgGgl2rWyJkhhA51ztznejPF4PEQ_ouRgO' +
            '=s' +
            imageHeight +
            '-c';
        return (
            <View style={{ flex: 1, width: '100%', height: '100%' }}>
                <View style={styles.tempNav}>
                    <Text>Instagram</Text>
                </View>
                <View style={styles.userBar}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image
                            style={styles.userPic}
                            source={{
                                uri: 'https://lh3.googleusercontent.com/Qbe0bB3klBASLhl1qy6OdiSwYCf75vcPwQ4-gP8YfJihpbTi99AzIVLtY1s5KL5Si-OfiFCPSP5_9Hvq_pxA35WoMQ'
                            }}
                        />
                        <Text style={{ marginLeft: 10 }}>ahribabyv_</Text>
                    </View>
                    <View>
                        <Text style={{ fontSize: 28 }}>...</Text>
                    </View>
                </View>
                <Image
                    style={{ width: this.state.screenWidth, height: imageHeight }}
                    source={{ uri: imageUri }}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    tempNav: {
        width: '100%',
        height: 55,
        marginTop: 20,
        backgroundColor: 'rgb(250, 250, 250)',
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: 'rgb(233, 233, 233)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    userBar: {
        width: '100%',
        height: 50,
        backgroundColor: 'rgb(255,255,255)',
        flexDirection: 'row',
        paddingHorizontal: 10,
        justifyContent: 'space-between'
    },
    userPic: {
        width: 40,
        height: 40,
        borderRadius: 20
    }
});

export default InstaClone;