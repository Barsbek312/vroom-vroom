import { View, TouchableOpacity, Text, Image } from 'react-native'

const Saler = ({ navigation }) => {
	return (
		<View className='flex-1 w-full mt-5 flex-col justify-between'>
			<View>
				<View className='w-full mb-3'>
					{/* <MainPicture className='w-full h-auto' /> */}
					<Image
						source={require('./../../../../assets/choose-profile/second_picture.jpg')}
						className='rounded-xl w-full'
					/>
				</View>
				<View>
					<Text className='text-white font-roboto-medium leading-5 text-sm mb-2'>
						Я продаю автомобильные запчасти.
					</Text>
					<Text className='text-white font-roboto-medium text-xs leading-4'>
						Дополнительный текст
					</Text>
				</View>
			</View>
			<View className='mt-10'>
				<TouchableOpacity
					className='w-full py-4 bg-[#01C2FF] rounded-xl'
					onPress={() => navigation.navigate('auth-saler')}
				>
					<Text className='text-white text-center'>Я продаю запчасти</Text>
				</TouchableOpacity>
			</View>
		</View>
	)
}

export default Saler
