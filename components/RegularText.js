import React from 'react';
import { StyleSheet, Text } from 'react-native';

const RegularText = ({ children }) => {
	return <Text style={styles.regular}>{children}</Text>;
};

export default RegularText;

const styles = StyleSheet.create({
	regular: {
		fontSize: 16,
		color: 'green',
	},
});
