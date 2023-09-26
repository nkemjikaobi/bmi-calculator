import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import HeaderText from './components/HeaderText';
import RegularText from './components/RegularText';

export default function App() {
	return (
		<View style={styles.container}>
			<HeaderText>BMI Calculator</HeaderText>
			<View style={styles.inputWrapper}>
				<View>
					<RegularText>Your Height</RegularText>
					<TextInput
						style={styles.input}
						onChangeText={onChangeFirstName}
						value={firstName}
						placeholder='Enter your height'
					/>
				</View>
				<View>
					<RegularText>Your Weight</RegularText>
					<TextInput
						style={styles.input}
						onChangeText={onChangeLastName}
						value={lastName}
						placeholder='Enter your weight'
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
});
