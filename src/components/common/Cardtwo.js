import React from 'react';
import { View } from 'react-native';


const Cardtwo = (props) => {
    return (
        <View style={styles.containerStyle}>
            {props.children}

        </View>

    );
};

const styles = {
    containerStyle: {
        borderWidth: 1,
        borderRadius: 20,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 1,
        marginLeft: 40,
        marginRight: 40,
        marginTop: 20,
        marginBottom: 20,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }

};

export { Cardtwo };
