import PropTypes from 'prop-types';
import { styles } from "./CustomButtonStyles"
import { TouchableOpacity } from "react-native"

export default function CustomButton(props){
    return(
        <>
        <TouchableOpacity style={styles.button} onPress={props.onPress}>
            {props.children}
        </TouchableOpacity>
        </>
    )
}
CustomButton.propTypes ={
    children: PropTypes.node,
    onPress: PropTypes.func
}