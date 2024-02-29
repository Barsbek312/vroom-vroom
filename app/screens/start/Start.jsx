import { Text, View, TouchableOpacity } from 'react-native'
import Start1 from './../../../assets/start/start-1.svg'
import Start2 from './../../../assets/start/start-2.svg'
import Start3 from './../../../assets/start/start-3.svg'
import Start4 from './../../../assets/start/start-4.svg'
import Start5 from './../../../assets/start/start-5.svg'

const Start = ({ navigation }) => {
	return (
		<View className='flex-1 bg-black p-5 pt-6'>
			<View className='flex-col gap-2 w-full items-center'>
				<View className='flex-row gap-3'>
					<Start1 />
					<Start2 />
				</View>
				<View className='flex-row gap-3'>
					<Start3 />
					<Start4 />
				</View>
				<View className='w-full items-center gap-3'>
					<Start5 className='flex-1 w-full' />
				</View>
			</View>
			<View className='flex-col gap-1 items-center mt-2'>
				<Text className='text-white font-moul text-center text-33px leading-70px tracking-wide'>
					VROOM-VROOM
				</Text>
				<Text className='text-white text-center w-52 leading-5 font-roboto mb-3'>
					Ищите и покупайте запчасти прямо в смартфоне
				</Text>
				<TouchableOpacity
					className='bg-[#01C2FF] px-12 rounded-xl pb-5 pt-2'
					onPress={() => navigation.navigate('phone-number')}
				>
					<Text className='text-white text-center mt-2 font-roboto-bold'>
						Начать
					</Text>
				</TouchableOpacity>
			</View>
		</View>
	)
}

export default Start
