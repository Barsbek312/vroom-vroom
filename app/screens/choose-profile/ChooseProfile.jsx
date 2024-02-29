import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import BackComponent from '../CommonScreens/back/Back'
import { useState } from 'react'
import Saler from './saler/Saler'
import Driver from './driver/Driver'

const ChooseProfile = ({ navigation }) => {
	const [isSaler, setIsSaler] = useState(null)
	return (
		<View className='flex-1 bg-black p-5'>
			<BackComponent navigation={navigation} />
			<View className='flex-1'>
				<ScrollView className='flex-1'>
					<Text className='text-white font-roboto-medium text-3xl mt-6'>
						Выберите профиль
					</Text>
					<View className='w-full bg-[#2F2F2F] flex-row rounded-xl mt-5 z-10'>
						<TouchableOpacity
							className={`${isSaler !== null && !isSaler && 'bg-[#9A9A9A]'} w-1/2 py-3 rounded-xl`}
							onPress={() => setIsSaler(false)}
						>
							<Text className='text-center text-[#01C2FF]'>Водитель</Text>
						</TouchableOpacity>
						<TouchableOpacity
							className={`${isSaler !== null && isSaler && 'bg-[#9A9A9A]'} w-1/2 py-3 rounded-xl`}
							onPress={() => setIsSaler(true)}
						>
							<Text className='text-center text-[#01C2FF]'>Продавец</Text>
						</TouchableOpacity>
					</View>
					{isSaler !== null &&
						(isSaler ? <Saler navigation={navigation} /> : <Driver />)}
				</ScrollView>
			</View>
		</View>
	)
}

export default ChooseProfile
