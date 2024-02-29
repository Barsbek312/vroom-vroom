import { Text, View } from 'react-native'
import ExampleCar from './../../../../assets/application-block/example_car.svg'

const SalerOffer = ({ isHavePicture = true }) => {
	return (
		<View className='w-full p-4 bg-white rounded-3xl'>
			<View className='flex-row border-b border-b-[#EEEEEE] justify-between'>
				<View className='pb-3 flex-row gap-2'>
					<View
						className={`${!isHavePicture && 'bg-[#E2E2E2] items-center justify-center'} w-14 h-14 rounded-xl overflow-hidden`}
					>
						{isHavePicture ? (
							<ExampleCar />
						) : (
							<Text className='font-roboto text-8px'>Нет фото</Text>
						)}
					</View>
					<View>
						<Text className='mb-1 font-roboto-medium text-sm'>15 000 c</Text>
						<View className='flew-row'>
							<Text className='text-[#757575] font-roboto text-xs'>
								Предложено: <Text className='text-black'>12.06.2023</Text>
							</Text>
						</View>
					</View>
				</View>
				<View className='flex-row items-start'>
					<View className='flex-row items-center gap-1'>
						<Text className='text-[#048848]'>Новое</Text>
						<View className='h-3 w-3 bg-[#048848] rounded-full'></View>
					</View>
				</View>
			</View>
			<View>
				<View className='flex-row justify-between mt-2'>
					<Text className='text-[#757575] text-xs font-roboto mb-1'>
						Состояние: <Text className='text-black'>Новый</Text>
					</Text>
					<Text className='text-[#757575] text-xs font-roboto'>
						Наличие: <Text className='text-black'>На заказ</Text>
					</Text>
				</View>
				<View className='flex-row justify-between'>
					<Text className='text-[#757575] text-xs font-roboto mb-1'>
						Продавец: <Text className='text-black'>Japan Car</Text>
					</Text>
					<Text className='text-[#757575] text-xs font-roboto'>
						Описание: <Text className='text-black'>Japan Car</Text>
					</Text>
				</View>
			</View>
		</View>
	)
}

export default SalerOffer
