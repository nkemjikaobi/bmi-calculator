import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import HeaderText from './components/HeaderText';
import { useState } from 'react';
import StandardMeasurement from './components/StandardMeasurement';
import ImperialMeasurement from './components/ImperialMeasurement';

export default function App() {
	const [height, onChangeHeight] = useState('');
	const [weight, onChangeWeight] = useState('');
	const [inches, onChangeInches] = useState('');
	const [isStandard, setIsStandard] = useState(false);

	const onCalculateBMI = () => {
		if (!height || !weight)
			return Alert.alert(
				'Form Error',
				'Please input your weight and height',
				[]
			);
	};

	return (
		<View style={styles.container}>
			<HeaderText>BMI Calculator</HeaderText>
			{/* <StandardMeasurement
				onChangeHeight={onChangeHeight}
				onChangeWeight={onChangeWeight}
				height={height}
				weight={weight}
			/> */}
			<ImperialMeasurement
				onChangeHeight={onChangeHeight}
				onChangeWeight={onChangeWeight}
				onChangeInches={onChangeInches}
				height={height}
				weight={weight}
				inches={inches}
			/>
			<View>
				<TouchableOpacity style={styles.bmiBtn} onPress={onCalculateBMI}>
					<Text style={{ color: 'white' }}>Calculate BMI</Text>
				</TouchableOpacity>
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
	bmiBtn: {
		backgroundColor: 'black',
		alignItems: 'center',
		padding: 10,
		borderRadius: 5,
	},
});
