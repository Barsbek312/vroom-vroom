import { View, Text } from 'react-native'
import MainPicture from './../../../../assets/product-info/second_picture.svg'

const SecondProductInfo = () => {
	return (
		<View className='flex-1 justify-center items-center'>
			<View className='h-60'>
				<MainPicture />
			</View>
			<View className='flex-row my-5 mt-10'>
				<View className='h-2 w-2 rounded-full bg-[#01C2FF] mx-1'></View>
				<View className='h-2 w-2 rounded-full bg-[#01C2FF] mx-1'></View>
				<View className='h-2 w-2 rounded-full bg-white mx-1'></View>
			</View>
			<View className='h-20'>
				<Text className='text-white font-roboto-medium text-2xl text-center'>
					Публикуйте объявления
				</Text>
			</View>
		</View>
	)
}

export default SecondProductInfo
