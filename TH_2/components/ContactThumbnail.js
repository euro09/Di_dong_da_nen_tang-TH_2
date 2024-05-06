import React from "react";
import { StyleSheet, View, TouchableOpacity, Image, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';
import colors from "../utility/colors";

const ContactThumbnail = ({ name, phone, avatar, textColor, onPress }) => {
    const textStyle = {
        color: textColor,
    };

    const ImageComponent = onPress ? TouchableOpacity : View;

    return (
        <View style={styles.container}>
            <ImageComponent onPress={onPress}>
                <Image
                    source={{
                        uri: avatar,
                    }}
                    style={styles.avatar}
                />
            </ImageComponent>
            {name !== ' ' && <Text style={[styles.name, textStyle]}>{name}</Text>}
            {phone !== ' ' && (
                <View style={styles.phoneSection}>
                    <Icon name='phone' size={16} style={{ color: textColor }} />
                    <Text style={[styles.phone, textStyle]}> {phone} /</Text>
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 15,
        paddingVertical: 30,
        alignItems: 'center',
        justifyContent: ''
    },
    avatar: {
        width: 90,
        height: 90,
        borderRadius: 45,
        borderColor: 'white',
        borderWidth: 2,
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 24,
        marginBottom: 2,
    },
    phoneSection: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 24,
        fontWeight: 'bold',
    },
    phone: {
        marginLeft: 5,
        fontSize: 16,
        fontWeight: 'bold'
    },
});

ContactThumbnail.propTypes = {
    name: PropTypes.string,
    phone: PropTypes.string,
    avatar: PropTypes.string,
    textColor: PropTypes.string,
    onPress: PropTypes.func,
};

ContactThumbnail.defaultProps = {
    name: '',
    phone: '',
    textColor: 'white',
    onPress: null,
};

export default ContactThumbnail;
