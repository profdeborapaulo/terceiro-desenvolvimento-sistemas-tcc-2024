import React from 'react';
import { CheckBox } from 'react-native-elements';
import { gstyle as styles, colors } from '../styles';
const CkBox = () => {
    const [isSelected, setSelection] = React.useState(false);

    return (
        <CheckBox
            checked={isSelected}
            onPress={() => setSelection(!isSelected)}
            checkedColor={colors.pcian}
            uncheckedColor={colors.pcian}
            containerStyle={[styles.ckBoxCont]}
            iconType="material"
            checkedIcon="check-circle"
            size={25}
            uncheckedIcon="radio-button-unchecked"
        />
    );
};

export default CkBox;