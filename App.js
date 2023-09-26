import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import HeaderText from './components/HeaderText';
import RegularText from './components/RegularText';
import { useState } from 'react';

export default function App() {
	const [height, onChangeHeight] = useState('');
	const [weight, onChangeWeight] = useState('');

	return (
		<View style={styles.container}>
			<HeaderText>BMI Calculator</HeaderText>
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
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
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
		borderRadius: 10,
	},
});
