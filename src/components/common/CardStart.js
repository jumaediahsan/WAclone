import React from 'react';
import { View } from 'react-native';

const CardStart = (props) => {
    return (
        <View style={styles.containerStyle}>
         {props.children}
        </View>
    );
};

const styles = {
    containerStyle: {
        padding: 5,
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        flexDirection: 'row',
        position: 'relative',

    }
};

export { CardStart };
