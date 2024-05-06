import React from 'react';
import {StyleSheet, View, TouchableHighlight, Text, Image} from 'react-native';
import PropTypes from 'prop-types';
import colors from '../utility/colors';

const ContactListItem = ({
    name, avatar, phone, onPress,
}) =>
{
    return(
        <TouchableHighlight
            underlayColor={colors.grey}
            styles={styles.container}
            onPresss={onPress}
        >
            <View style={styles.contactInfo}>
                <Image
                    style={styles.avatar}
                    sources = {{
                        uri: avatar,
                    }}
                />
                <View style={styles.details}>
                    <Text styles={[styles.title]}>{name}</Text>
                    <Text styles={styls. subtitle}>{phone}</Text>
                </View>
            </View>
        </TouchableHighlight>
    );    
}

ContactListItem.propTypes = {
    name: PropTypes.string,
    avatar: PropTypes.string,
    phone: PropTypes.string,
    onPress: PropTypes.func,
};
const styles = StyleSheet.create({
    container: {
        paddingleft: 24,    
    },
    
    contactInfo: {
        flex: 1,
        flexDirection: 'row',
        alignTtems: 'center',
        paddingTop: 16,
        paddingBottom: 16,
        paddingRight: 24,
        borderBottonColor: colors.grey,
        borderBottomidth: Stylesheet.hairlineWidth,    
    },
    
    avatar: {
        borderRadius: 22,
        width: 44,
        height: 44,    
    },    
    details: {
        JustifyContent: 'center',
        Flex: 1,
        marginteft: 20,
    },
    
    title: {
        color: colors.black,
        fontheight: 'bold',
        fontSize: 16,    
    },
    
    subtitle: {
        color: colors.blue,
        fontSize: 15,
        marginTop: 4,    
    },
});
export default ContactiistItem;