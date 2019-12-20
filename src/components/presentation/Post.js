import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    Dimensions,
    TouchableOpacity
} from 'react-native';
import config from '../../config';

class Post extends Component {

    constructor() {
        super();
        this.state = {
            liked: false,
            screenWidth: Dimensions.get('window').width
        };
    }

    likeToggled() {
        this.setState({
            liked: !this.state.liked
        });
    }

    render() {
        const imageHeight = Math.floor(this.state.screenWidth * 1.1);
        const imageSelection = (this.props.item % 2 == 0) ?
            'https://lh3.googleusercontent.com/Rq1r9aA9OE4qqRS-QPicVmQ0pRcM56KbON1Esx-SHVHc10dsCxAtUdCIS8M0Ya0ynw30S3JNduJ0LOI7AO_4jI_gJEA' :
            'https://lh3.googleusercontent.com/qqN6N2__UHNS9bnobC0VvTnAsSZkRb6eswYAVIzgCrVrfeJ9_t6coaDgGgl2rWyJkhhA51ztznejPF4PEQ_ouRgO';
        const imageUri = `${imageSelection}=s${imageHeight}-c`;

        const heartIconSource = this.state.liked ?
            config.images.redHeartIcon :
            config.images.heartIcon;

        return (
            <View>
                <View style={styles.userBar}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image
                            style={styles.userPic}
                            source={{
                                uri: 'https://lh3.googleusercontent.com/Qbe0bB3klBASLhl1qy6OdiSwYCf75vcPwQ4-gP8YfJihpbTi99AzIVLtY1s5KL5Si-OfiFCPSP5_9Hvq_pxA35WoMQ'
                            }}
                        />
                        <Text style={{ marginLeft: 10, fontWeight: 'bold' }}>
                            ahribabyv_
                        </Text>
                    </View>
                    <View>
                        <Text style={{ fontSize: 28 }}>...</Text>
                    </View>
                </View>
                <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={() => { this.likeToggled() }}
                >
                    <Image
                        style={{ width: this.state.screenWidth, height: imageHeight }}
                        source={{ uri: imageUri }}
                    />
                </TouchableOpacity>
                <View style={styles.iconBar}>
                    <TouchableOpacity
                        activeOpacity={0.7}
                        onPress={() => { this.likeToggled() }}
                    >
                        <Image
                            style={[styles.icon, { height: 24, width: 24 }]}
                            source={heartIconSource}
                        />
                    </TouchableOpacity>
                    <Image
                        resizeMethod='resize'
                        style={[styles.icon, { height: 22, width: 24 }]}
                        source={config.images.commentIcon}
                    />
                    <Image
                        resizeMethod='scale'
                        style={[styles.icon, { height: 19, width: 17, position: 'relative', bottom: 1 }]}
                        source={config.images.shareIcon}
                    />
                </View>
                <View style={styles.likesBar}>
                    <Text>
                        Liked by
                        <Text style={{ fontWeight: 'bold' }}>
                            {" __extendo__"}
                        </Text>
                        {" and"}
                        <Text style={{ fontWeight: 'bold' }}>
                            {" others"}
                        </Text>
                    </Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    userBar: {
        width: '100%',
        height: config.styleConstants.rowHeight,
        backgroundColor: 'rgb(255,255,255)',
        flexDirection: 'row',
        paddingHorizontal: 10,
        justifyContent: 'space-between'
    },
    userPic: {
        width: 40,
        height: 40,
        borderRadius: 20
    },
    iconBar: {
        height: config.styleConstants.rowHeight,
        width: '100%',
        borderTopWidth: StyleSheet.hairlineWidth,
        borderBottomColor: 'rgb(233, 233, 233)',
        flexDirection: 'row',
        alignItems: 'center'
    },
    icon: {
        marginLeft: 20
    },
    likesBar: {
        width: '100%',
        height: config.styleConstants.rowHeight,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: 'rgb(233, 233, 233)',
        paddingLeft: 20
    }
});

export default Post;