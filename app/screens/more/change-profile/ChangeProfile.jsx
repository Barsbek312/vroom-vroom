import React, { useState } from 'react'
import {
	ScrollView,
	Text,
	TextInput,
	TouchableOpacity,
	View
} from 'react-native'

const ChangeProfile = ({ navigation }) => {
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
		<View className='flex-1 bg-black p-5 pb-20'>
			<ScrollView>
				<View className='mt-7'>
					<Text className='text-white font-roboto text-2xl'>
						Изменение данных
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
						<TouchableOpacity
							onPress={addPhoneInput}
							className='border border-[#01C2FF] rounded-xl py-3 px-4'
						>
							<Text className='text-[#01C2FF] font-roboto text-sm'>
								+ добавить мобильный номер
							</Text>
						</TouchableOpacity>
					</View>
					<View className='w-full flex-1 items-center'>
						<TouchableOpacity
							className='w-5/6 mt-5 py-4 bg-[#01C2FF] rounded-xl'
							onPress={() => navigation.goBack()}
						>
							<Text className='text-white text-center'>Сохранить</Text>
						</TouchableOpacity>
						<TouchableOpacity className='w-5/6 mt-10 py-4 bg-[#C41C0F] rounded-xl'>
							<Text className='text-white text-center'>Выйти с аккаунта</Text>
						</TouchableOpacity>
					</View>
				</View>
			</ScrollView>
		</View>
	)
}

export default ChangeProfile
