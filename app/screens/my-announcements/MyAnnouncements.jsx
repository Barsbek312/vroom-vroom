import {
	FlatList,
	ScrollView,
	Text,
	TouchableOpacity,
	View
} from 'react-native'
import BackComponent from '../CommonScreens/back/Back'
import React, { useState } from 'react'
import NoAnnouncements from './../../../assets/my-announcements/no-announcements.svg'
import ApplicationBlock from '../CommonScreens/application-block/ApplicationBlock'
import SteeringWheel from './../../../assets/my-announcements/steering-wheel.svg'
import Notification from '../CommonScreens/notification/Notification'

const MyAnnouncements = ({ navigation }) => {
	const [isAnnouncements, setIsAnnouncements] = useState(true)
	const [isShowAnnouncement, setIsShowAnnouncement] = useState(true)

	return (
		<View className='flex-1 bg-black p-5 pb-20'>
			<ScrollView className='w-full'>
				<View className='flex-row justify-between align-middle'>
					<View className='flex-row align-middle'>
						<BackComponent navigation={navigation} />
						<Text className='text-white font-roboto-medium text-2xl ml-5 mt-6'>
							Мои объявления
						</Text>
					</View>
					<TouchableOpacity className='flex-row gap-2 mt-7'>
						<View className='w-2 h-2 bg-white rounded-full'></View>
						<View className='w-2 h-2 bg-white rounded-full'></View>
						<View className='w-2 h-2 bg-white rounded-full'></View>
					</TouchableOpacity>
				</View>
				<View className='flex-row align-middle justify-around mt-4'>
					<TouchableOpacity
						className='w-1/2'
						onPress={() => setIsAnnouncements(true)}
					>
						<View className='w-full flex-row justify-center'>
							<View
								className={`${isAnnouncements && 'border-b-3 border-custom-blue'}`}
							>
								<Text
									className={`${isAnnouncements ? 'text-[#01C2FF]' : 'text-white'} font-roboto-medium text-sm text-center py-3`}
								>
									Заявки
								</Text>
							</View>
						</View>
					</TouchableOpacity>
					<TouchableOpacity
						className='w-1/2'
						onPress={() => setIsAnnouncements(false)}
					>
						<View className='w-full flex-row justify-center'>
							<View
								className={`${!isAnnouncements && 'border-b-3 border-custom-blue'}`}
							>
								<Text
									className={`${!isAnnouncements ? 'text-[#01C2FF]' : 'text-white'} font-roboto-medium text-sm text-center py-3`}
								>
									Архив
								</Text>
							</View>
						</View>
					</TouchableOpacity>
				</View>
				<View
					className={`${!isShowAnnouncement && 'justify-center'} flex-1 items-center align-middle`}
				>
					{!isShowAnnouncement ? (
						<View className='items-center mb-32 flex-col gap-2'>
							<NoAnnouncements />
							<Text className='text-center text-white font-roboto text-sm mb-2'>
								У вас нет заявок
							</Text>
							<TouchableOpacity
								className='py-3 px-7 bg-[#01C2FF] rounded-xl'
								onPress={() => navigation.navigate('new-application')}
							>
								<Text className='text-white font-roboto-medium text-center text-sm'>
									Создать заявку
								</Text>
							</TouchableOpacity>
						</View>
					) : (
						<View className='flex-col w-full mt-2'>
							<FlatList
								data={[1]}
								renderItem={({ item }) => (
									<TouchableOpacity
										onPress={() => navigation.navigate('announcement')}
									>
										<View className='mt-4'>
											<ApplicationBlock />
										</View>
									</TouchableOpacity>
								)}
							/>
						</View>
					)}
				</View>
				<View className='items-center w-full mt-8'>
					<View className='items-center'>
						<View className='mb-2'>
							<SteeringWheel />
						</View>
						<View>
							<Text className='text-white w-40 text-center leading-5'>
								У вас еще нет закрытых заявок
							</Text>
						</View>
					</View>
				</View>
			</ScrollView>
			<Notification />
		</View>
	)
}

export default MyAnnouncements
