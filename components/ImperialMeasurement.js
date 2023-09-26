import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import RegularText from './RegularText';

const ImperialMeasurement = ({
	onChangeWeight,
	onChangeHeight,
	height,
	weight,
	inches,
	onChangeInches,
}) => {
	return (
		<View style={styles.inputWrapper}>
			<View>
				<RegularText>Your Height (FT)</RegularText>
				<TextInput
					style={styles.input}
					onChangeText={onChangeHeight}
					value={height}
					placeholder='Enter your height in feet'
					keyboardType='number'
				/>
				<RegularText>Your Height (IN)</RegularText>
				<TextInput
					style={styles.input}
					onChangeText={onChangeInches}
					value={inches}
					placeholder='Enter the remainder in inches'
					keyboardType='number'
				/>
			</View>
			<View>
				<RegularText>Your Weight (LB)</RegularText>
				<TextInput
					style={styles.input}
					onChangeText={onChangeWeight}
					value={weight}
					placeholder='Enter your weight in pounds'
					keyboardType='number'
				/>
			</View>
		</View>
	);
};

export default ImperialMeasurement;

const styles = StyleSheet.create({
	inputWrapper: {
		marginTop: 40,
	},
	input: {
		height: 40,
		marginTop: 12,
		marginBottom: 30,
		borderWidth: 1,
		padding: 10,
		borderColor: '#0047AB',
		borderRadius: 7,
		width: 300,
	},
});
