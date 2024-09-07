import PropTypes from 'prop-types';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { View } from 'react-native'
import { styles } from './InputStyles';

export default function Input(props) {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{props.label}</Text>
            <TextInput style={styles.input} placeholder = {props.placeholder} value = {props.value} onChangeText={props.onChangeText}/>
        </View>
    );
}

Input.propTypes = {
    label: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    onChangeText: PropTypes.func,
};
