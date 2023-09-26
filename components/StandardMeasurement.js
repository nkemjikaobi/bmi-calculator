import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import RegularText from './RegularText';

const StandardMeasurement = ({
	onChangeWeight,
	onChangeHeight,
	height,
	weight,
}) => {
	return (
		<View style={styles.inputWrapper}>
			<View>
				<RegularText>Your Height</RegularText>
				<TextInput
					style={styles.input}
					onChangeText={onChangeHeight}
					value={height}
					placeholder='Enter your height'
					keyboardType='number'
				/>
			</View>
			<View>
				<RegularText>Your Weight</RegularText>
				<TextInput
					style={styles.input}
					onChangeText={onChangeWeight}
					value={weight}
					placeholder='Enter your weight'
					keyboardType='number'
				/>
			</View>
		</View>
	);
};

export default StandardMeasurement;

const styles = StyleSheet.create({
	inputWrapper: {
		marginTop: 40,
	},
	input: {
		height: 40,
		width: 200,
		marginTop: 12,
		marginBottom: 30,
		borderWidth: 1,
		padding: 10,
		borderColor: '#0047AB',
		borderRadius: 7,
	},
});
