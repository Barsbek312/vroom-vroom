import { Image, Text, View, TouchableOpacity } from 'react-native'

const Driver = () => {
	return (
		<View className='flex-1 w-full mt-5 flex-col justify-between'>
			<View>
				<View className='w-full mb-3'>
					{/* <MainPicture className='w-full h-auto' /> */}
					<Image
						source={require('./../../../../assets/choose-profile/first_picture.jpg')}
						className='rounded-xl w-full'
					/>
				</View>
				<View>
					<Text className='text-white font-roboto-medium leading-5 text-sm mb-2'>
						Я - водитель. Ищу определенную запчасть для своего авто.
					</Text>
					<Text className='text-white font-roboto-medium text-xs leading-4'>
						Дополнительный текст
					</Text>
				</View>
			</View>
			<View className='mt-10'>
				<TouchableOpacity className='w-full py-4 bg-[#01C2FF] rounded-xl'>
					<Text className='text-white text-center'>Я ищу запчасть</Text>
				</TouchableOpacity>
			</View>
		</View>
	)
}

export default Driver
