import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import HeaderText from './components/HeaderText';
import { useState } from 'react';
import StandardMeasurement from './components/StandardMeasurement';
import ImperialMeasurement from './components/ImperialMeasurement';
import RegularText from './components/RegularText';

export default function App() {
	const [height, onChangeHeight] = useState('');
	const [weight, onChangeWeight] = useState('');
	const [inches, onChangeInches] = useState('');
	const [isStandard, setIsStandard] = useState(false);
	const [currentMeasurment, setCurrentMeasurement] = useState('Imperial');

	const onCalculateBMI = () => {
		if (!isStandard && !inches)
			return Alert.alert(
				'Form Error',
				'Please input your weight and height',
				[]
			);
		if (!height || !weight)
			return Alert.alert(
				'Form Error',
				'Please input your weight and height',
				[]
			);

		/**
		 * Body Mass Index (or BMI) is calculated as your weight
		 * (in kilograms) divided by the square of your height (in metres)
		 * or BMI = Kg/M2.
		 */
		let bmi;
		if (isStandard) {
			//Convert centimeteres to meters
			let heightInMeteres = height / 100;
			bmi = weight / (heightInMeteres * heightInMeteres);
		} else {
			// 			Convert 2 feet + 3 inches to centimeters:

			// d(cm) = 2ft × 30.48 + 3in × 2.54 = 68.58cm
			//Convert the feet value to cm
			const feetValue = height * 30.48;

			//Convert the inches value to cm
			const inchesValue = inches * 2.54;

			//Convert pounds to kg
			const finalWeight = weight * 0.45359237;

			//Get the final height in metres
			const finalHeight = (feetValue + inchesValue) / 100;
			bmi = finalWeight / (finalHeight * finalHeight);
		}

		let category;
		if (bmi < 18.5) {
			category = 'Underweight';
		} else if (bmi >= 18.5 && bmi <= 24.9) {
			category = 'Normal weight';
		} else if (bmi >= 25 && bmi <= 29.9) {
			category = 'Overweight';
		} else if (bmi > 30) {
			category = 'Obesity';
		}

		if (bmi) {
			return Alert.alert(
				`BMI Result is ${Number(bmi).toFixed(1)}`,
				`Category - ${category}`,
				[]
			);
		}
	};

	const onToggleMeasurements = (measurementName, status) => {
		setCurrentMeasurement(measurementName);
		setIsStandard(status);
	};

	return (
		<View style={styles.container}>
			<HeaderText>BMI Calculator</HeaderText>
			<View style={styles.wrapper}>
				<TouchableOpacity
					style={[styles.units, isStandard ? { borderRadius: 7 } : {}]}
					onPress={() => onToggleMeasurements('Standard', true)}
				>
					<Text
						style={[
							{ color: 'white' },
							isStandard ? styles.active : styles.inactive,
						]}
					>
						Standard unit
					</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={[styles.units, isStandard ? {} : { borderRadius: 7 }]}
					onPress={() => onToggleMeasurements('Imperial', false)}
				>
					<Text
						style={[
							{ color: 'white' },
							isStandard ? styles.inactive : styles.active,
						]}
					>
						Imperial
					</Text>
				</TouchableOpacity>
			</View>
			<View>
				<RegularText>CurrentMeasurement: {currentMeasurment}</RegularText>
			</View>
			{isStandard ? (
				<StandardMeasurement
					onChangeHeight={onChangeHeight}
					onChangeWeight={onChangeWeight}
					height={height}
					weight={weight}
				/>
			) : (
				<ImperialMeasurement
					onChangeHeight={onChangeHeight}
					onChangeWeight={onChangeWeight}
					onChangeInches={onChangeInches}
					height={height}
					weight={weight}
					inches={inches}
				/>
			)}

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
	units: {
		alignItems: 'center',
		padding: 10,
		borderRadius: 5,
		marginLeft: 5,
		marginRight: 5,
	},
	active: {
		backgroundColor: 'purple',
		borderColor: 'purple',
		borderWidth: 1,
		padding: 10,
	},
	inactive: {
		borderColor: 'purple',
		borderWidth: 1,
		borderRadius: 4,
		color: 'black',
		padding: 10,
	},
	wrapper: {
		display: 'flex',
		flexDirection: 'row',
		margin: 10,
	},
});
