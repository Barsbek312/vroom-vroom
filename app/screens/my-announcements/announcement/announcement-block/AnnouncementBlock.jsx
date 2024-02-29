import { Text, TouchableOpacity, View } from 'react-native'
import ExampleCar from './../../../../../assets/application-block/example_car.svg'

const AnnouncementBlock = ({ setIsShowDeleteModalWindow }) => {
	return (
		<View className='py-3 px-4 bg-white rounded-3xl overflow-hidden'>
			<View>
				<Text className='font-roboto-bold text-base'>Мое объявление</Text>
			</View>
			<View className='flex-row items-center mt-3'>
				<View className='rounded overflow-hidden h-12 w-12 mr-2'>
					<ExampleCar className='h-full' />
				</View>
				<View className='flex-1'>
					<Text className='w-full font-inter-semibold text-sm'>
						Ищу бампер и левое крыло, Mercedes CL 2014
					</Text>
				</View>
			</View>
			<View className='flex-row justify-center gap-2 mt-2 w-full'>
				<TouchableOpacity
					className='py-2 flex-1 rounded-lg border border-[#D44333]'
					onPress={() => setIsShowDeleteModalWindow(true)}
				>
					<View>
						<Text className='text-[#D44333] text-center'>Удалить</Text>
					</View>
				</TouchableOpacity>
				<TouchableOpacity className='py-2 flex-1 rounded-lg border border-[#01C2FF]'>
					<View>
						<Text className='text-[#01C2FF] text-center'>Редактировать</Text>
					</View>
				</TouchableOpacity>
			</View>
		</View>
	)
}

export default AnnouncementBlock
