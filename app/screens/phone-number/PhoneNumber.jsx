import React, { useState } from 'react'
import {
	View,
	TextInput,
	Button,
	TouchableOpacity,
	Text,
	TouchableWithoutFeedback,
	Keyboard
} from 'react-native'
// import BackComponent from '../CommonScreens/back/Back'
import BackComponent from '../CommonScreens/back/Back'

const PhoneNumber = ({ navigation }) => {
	const [phoneNumber, setPhoneNumber] = useState('')
	const isButtonDisabled = phoneNumber.length !== 10

	return (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
			<View className='flex-1 bg-black p-5'>
				<BackComponent navigation={navigation} />
				<View className='flex-1 justify-center items-center'>
					<TextInput
						className='text-white w-full border border-white rounded-xl py-3 px-4 mb-3'
						keyboardType='numeric'
						placeholder='Введите номер телефона'
						placeholderTextColor='gray'
						value={phoneNumber}
						onChangeText={number => setPhoneNumber(number)}
					/>
					<TouchableOpacity
						className={`${isButtonDisabled ? 'bg-[#00C2FF] opacity-50' : 'bg-[#01C2FF]'} w-full rounded-xl text-white`}
						disabled={isButtonDisabled}
						onPress={() => navigation.navigate('enter-code')}
					>
						<Text className='font-roboto-bold text-center text-white py-3'>
							Подтвердить
						</Text>
					</TouchableOpacity>
				</View>
			</View>
		</TouchableWithoutFeedback>
	)
}

export default PhoneNumber
