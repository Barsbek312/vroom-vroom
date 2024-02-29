import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import BackComponent from '../CommonScreens/back/Back'
import MoreIcon from './../../../assets/more/more-icon.svg'
import ArrowRight from './../../../assets/more/arrow-right.svg'
import { useState } from 'react'
import DeleteApplication from '../CommonScreens/delete-application/DeleteApplication'

const More = ({ navigation }) => {
	const [isShowLogoutModalWindow, setIsShowLogoutModalWindow] = useState(false)
	return (
		<View className='flex-1 bg-black p-5 pb-20'>
			{isShowLogoutModalWindow && (
				<DeleteApplication
					title='Выйти с аккаунта?'
					description='Подтвердите выход с аккаунта'
					action='Выйти'
					setIsShowModalWindow={setIsShowLogoutModalWindow}
				/>
			)}
			<ScrollView>
				<View>
					<BackComponent navigation={navigation} />
				</View>
				<View className='mt-5'>
					<Text className='font-roboto text-2xl text-white'>Еще</Text>
				</View>
				<View className='bg-white py-3 px-4 rounded-xl mt-7'>
					<View className='flex-row items-center gap-3'>
						<MoreIcon />
						<Text className='font-roboto-medium text-sm text-[#757575]'>
							Мой профиль:
						</Text>
					</View>
					<View>
						<Text className='font-roboto text-22px mt-2'>JapanCars</Text>
					</View>
					<View>
						<Text className='font-roboto text-base text-[#757575] mt-1'>
							Ибраимова 123
						</Text>
					</View>
				</View>
				<View className='bg-white rounded-xl mt-7'>
					<TouchableOpacity
						onPress={() => navigation.navigate('change-profile')}
					>
						<View className='flex-row items-center justify-between px-4 py-4 border-b border-b-[#EEEEEE]'>
							<Text className='font-roboto text-sm'>Изменить профиль</Text>
							<ArrowRight />
						</View>
					</TouchableOpacity>
					<TouchableOpacity onPress={() => navigation.navigate('support')}>
						<View className='flex-row items-center justify-between px-4 py-4 border-b border-b-[#EEEEEE]'>
							<Text className='font-roboto text-sm'>Поддержка</Text>
							<ArrowRight />
						</View>
					</TouchableOpacity>
					<TouchableOpacity onPress={() => setIsShowLogoutModalWindow(true)}>
						<View className='px-4 py-4'>
							<Text className='font-roboto text-sm text-[#757575]'>Выйти</Text>
						</View>
					</TouchableOpacity>
				</View>
			</ScrollView>
		</View>
	)
}

export default More
