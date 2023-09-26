import React from 'react';
import { StyleSheet, Text } from 'react-native';
import RegularText from './RegularText';

const HeaderText = ({ children }) => {
	return (
		<RegularText>
			<Text style={styles.header}>{children}</Text>
		</RegularText>
	);
};

export default HeaderText;

const styles = StyleSheet.create({
	header: {
        fontSize: 32,
        color: 'black'
	},
});
