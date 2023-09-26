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
  const [result, setResult] = useState()

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
      let heightInMeteres = height / 100;
      bmi = weight / (heightInMeteres * heightInMeteres)
    }
    else {
      
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
