import { TouchableOpacity, View, Text } from 'react-native'
import Clock from './../../../../assets/application-block/clock.svg'
import ExampleCar from './../../../../assets/application-block/example_car.svg'

const ApplicationBlock = () => {
	return (
		<View className='p-3 bg-white w-full rounded-xl'>
			<View className='flex-row gap-2 align-middle w-full'>
				<TouchableOpacity className='bg-custom-blue-transparent-application flex-row items-center justify-center p-1 rounded gap-1 pt-0'>
					<Text className='text-[#01C2FF] mb-1px'>сегодня</Text>
					<Clock />
				</TouchableOpacity>
				<TouchableOpacity className='bg-custom-blue-transparent-application p-1 rounded'>
					<Text className='text-[#01C2FF]'>кузов</Text>
				</TouchableOpacity>
				<TouchableOpacity className='bg-custom-blue-transparent-application p-1 rounded'>
					<Text className='text-[#01C2FF]'>mercedesbenz</Text>
				</TouchableOpacity>
			</View>
			<View className='w-full mt-2'>
				<Text className='font-inter-600 text-sm leading-5'>
					Ищу бампер и левое крыло, Mercedes CL 2014
				</Text>
			</View>
			<View className='w-full flex justify-start flex-row gap-2 mt-1'>
				<View className='overflow-hidden rounded-lg'>
					<ExampleCar />
				</View>
				<View>
					<View className='flex-row'>
						<Text className='font-roboto text-xs text-[#757575]'>
							Марка, модель:
						</Text>
						<Text className='font-roboto text-xs text-black'>
							Mercedes CL 2014
						</Text>
					</View>
					<View className='flex-row'>
						<Text className='font-roboto text-xs text-[#757575]'>
							Тип запчасти:
						</Text>
						<Text className='font-roboto text-xs text-black'>Кузов/оптика</Text>
					</View>
					<View className='flex-row'>
						<Text className='font-roboto text-xs text-[#757575]'>
							Объем двигателя:
						</Text>
						<Text className='font-roboto text-xs text-black'>4.4</Text>
					</View>
					<View className='flex-row'>
						<Text className='font-roboto text-xs text-[#757575]'>Коробка:</Text>
						<Text className='font-roboto text-xs text-black'>Автомат</Text>
					</View>
					<View className='flex-row'>
						<Text className='font-roboto text-xs text-[#757575]'>Привод:</Text>
						<Text className='font-roboto text-xs text-black'>
							Полный привод
						</Text>
					</View>
				</View>
			</View>
		</View>
	)
}

export default ApplicationBlock
