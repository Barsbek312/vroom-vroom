import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import BackComponent from '../../CommonScreens/back/Back'
import React, { useState } from 'react'

const Support = ({ navigation }) => {
	const [supportText, setSupportText] = useState('')
	return (
		<View className='flex-1 bg-black p-5 pb-20'>
			<BackComponent navigation={navigation} />
			<View className='mt-5'>
				<Text className='font-roboto text-2xl text-white'>
					Письмо в поддержку
				</Text>
				<TextInput
					className='border border-white rounded-xl py-3 px-4 font-roboto text-white mt-3'
					placeholder='Опишите проблему или предложение'
					placeholderTextColor='#6B6B6B'
					value={supportText}
					onChangeText={setSupportText}
				/>
			</View>
			<View className='w-full flex-1 items-center justify-end'>
				<TouchableOpacity
					className='w-5/6 mt-5 py-4 bg-[#01C2FF] rounded-xl'
					onPress={() => navigation.goBack()}
				>
					<Text className='text-white text-center'>Отправить</Text>
				</TouchableOpacity>
			</View>
		</View>
	)
}

export default Support
