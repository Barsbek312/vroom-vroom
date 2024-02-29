import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import BackComponent from '../CommonScreens/back/Back'
import SparePartExample from './../../../assets/applications/application/sparepart-example.svg'
import Gallery from './../../../assets/new-application/gallery.svg'
import TakePhoto from './../../../assets/new-application/camera.svg'
import { RadioButton } from 'react-native-paper'

const ApplicationSparePart = ({ navigation }) => {
	return (
		<View className='flex-1 bg-black pb-20'>
			<ScrollView>
				<View className='flex-row w-full items-center justify-between p-5 pb-0 mb-7'>
					<BackComponent navigation={navigation} />
					<Text className='text-white mt-7 font-inter-medium text-sm'>
						Новое объявление
					</Text>
					<TouchableOpacity>
						<View className='gap-1 mt-6'>
							<View className='h-1 w-1 rounded-full bg-white'></View>
							<View className='h-1 w-1 rounded-full bg-white'></View>
							<View className='h-1 w-1 rounded-full bg-white'></View>
						</View>
					</TouchableOpacity>
				</View>
				<View className='p-5 pt-0'>
					<View className='mb-4'>
						<Text className='text-white font-roboto-bold text-sm'>
							Объявление
						</Text>
						<View className='mt-2 bg-white rounded-xl flex-row flex-1 p-2 py-3'>
							<View className='rounded overflow-hidden mr-3'>
								<SparePartExample />
							</View>
							<Text className='flex-1'>
								Ищу бампер и левое крыло, Mercedes CL 2014
							</Text>
						</View>
					</View>
					<View className='mb-4'>
						<Text className='text-white font-roboto-medium font-sm'>Фото</Text>
						<View className='w-full flex-row gap-2 mt-0 flex-wrap'>
							<TouchableOpacity className='bg-white p-6 rounded-lg overflow-hidden'>
								<TakePhoto />
							</TouchableOpacity>
							<TouchableOpacity className='bg-white p-6 rounded-lg overflow-hidden'>
								<Gallery />
							</TouchableOpacity>
						</View>
					</View>
					<View className='w-full'>
						<Text className='font-roboto-medium font-sm text-white'>
							Описание запчасти
						</Text>
						<View className='w-full bg-white py-3 rounded-lg overflow-hidden px-4 mt-3'>
							<Text className='font-inter-medium text-sm'>5000</Text>
						</View>
						<View className='w-full bg-white py-3 rounded-lg overflow-hidden px-4 mt-2'>
							<Text className='font-inter-medium text-sm'>Идеал состояние</Text>
						</View>
						<View className='bg-white mt-2 rounded-lg'>
							<View className='flex-row justify-between items-center p-3'>
								<Text>Новый</Text>
								<RadioButton.Android
									value='Новый'
									status='checked'
									color='#01C2FF'
								/>
							</View>
							<View className='flex-row justify-between items-center p-3'>
								<Text>Б/У</Text>
								<RadioButton.Android
									value='Б/У'
									status='unchecked'
									color='#01C2FF'
								/>
							</View>
						</View>
						<View className='mt-6'>
							<TouchableOpacity className='bg-[#01C2FF] rounded-xl overflow-hidden py-4 width-5/6'>
								<Text className='text-white text-center font-roboto-medium text-base'>
									Предложить товар
								</Text>
							</TouchableOpacity>
						</View>
					</View>
				</View>
			</ScrollView>
		</View>
	)
}

export default ApplicationSparePart
