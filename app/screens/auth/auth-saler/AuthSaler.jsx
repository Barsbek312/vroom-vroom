import {
	Text,
	TextInput,
	View,
	TouchableOpacity,
	TouchableWithoutFeedback,
	Keyboard,
	ScrollView
} from 'react-native'
import BackComponent from '../../CommonScreens/back/Back'
import React, { useContext, useState } from 'react'
import { useRoute } from '@react-navigation/native'

const AuthSaler = ({ navigation }) => {
	const route = useRoute()
	const handleClickShowBottomNavigator =
		route.params.handleClickShowBottomNavigator
	const [salerName, setSalerName] = useState('')
	const [address, setAddress] = useState('')
	const [numberPhones, setNumberPhones] = useState([''])

	const addPhoneInput = () => {
		setNumberPhones([...numberPhones, ''])
	}

	const updatePhone = (text, index) => {
		const newNumbers = [...numberPhones]
		newNumbers[index] = text
		setNumberPhones(newNumbers)
	}

	return (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
			<View className='flex-1 bg-black p-5'>
				<ScrollView>
					<BackComponent navigation={navigation} />
					<View className='flex-1'>
						<Text className='font-roboto-medium text-white text-3xl mt-3'>
							Заполните данные
						</Text>
						<Text className='font-roboto-medium text-white mt-3 text-sm'>
							Для продажи запчастей заполните поля
						</Text>
						<View className='flex-col gap-3 mt-4'>
							<TextInput
								className='border border-white rounded-xl py-3 px-4 font-roboto text-white'
								placeholder='Название продавца'
								placeholderTextColor='#ccc'
								value={salerName}
								onChangeText={setSalerName}
							/>
							<TextInput
								className='border border-white rounded-xl py-3 px-4 font-roboto text-white'
								placeholder='Адрес'
								placeholderTextColor='#ccc'
								value={address}
								onChangeText={setAddress}
							/>
							{numberPhones.map((number, index) => (
								<TextInput
									className='border border-white rounded-xl py-3 px-4 font-roboto text-white'
									key={index}
									placeholder={`Мобильный номер ${index + 1}`}
									placeholderTextColor='#ccc'
									keyboardType='numeric'
									value={number}
									onChangeText={text => updatePhone(text, index)}
								/>
							))}
							<TouchableOpacity onPress={addPhoneInput}>
								<Text className='text-custom-blue-less-transparent font-roboto text-sm'>
									+ добавить мобильный номер
								</Text>
							</TouchableOpacity>
						</View>
					</View>
					<View className='mt-5'>
						<TouchableOpacity
							className='bg-[#01C2FF] rounded-xl py-3 w-full'
							onPress={handleClickShowBottomNavigator}
						>
							<Text className='text-white font-roboto-medium text-center'>
								Зарегистрироваться
							</Text>
						</TouchableOpacity>
					</View>
				</ScrollView>
			</View>
		</TouchableWithoutFeedback>
	)
}

export default AuthSaler
