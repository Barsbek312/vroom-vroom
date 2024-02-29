import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import BackComponent from '../../CommonScreens/back/Back'
import AnnouncementBlock from './announcement-block/AnnouncementBlock'
import SteeringWheel from './../../../../assets/my-announcements/steering-wheel.svg'
import SalerOffer from '../saler-offer/SalerOffer'
import React, { useState } from 'react'
import DeleteApplication from '../../CommonScreens/delete-application/DeleteApplication'

const Announcement = ({ navigation }) => {
	const [isShowDeleteModalWindow, setIsShowDeleteModalWindow] = useState(false)
	return (
		<View className='flex-1 bg-black p-5 pb-20 px-2'>
			{isShowDeleteModalWindow && (
				<DeleteApplication
					setIsShowModalWindow={setIsShowDeleteModalWindow}
					title='Удалить заявку?'
					description='Подтвердите удаление вашей заявки'
					action='Удалить'
				/>
			)}
			<ScrollView
				showsHorizontalScrollIndicator={false}
				showsVerticalScrollIndicator={false}
			>
				<View className='flex-row justify-between items-center'>
					<BackComponent navigation={navigation} />
					<Text className='text-white mt-7'>Мое объявление</Text>
					<TouchableOpacity>
						<View className='gap-1 mt-6'>
							<View className='h-1 w-1 rounded-full bg-white'></View>
							<View className='h-1 w-1 rounded-full bg-white'></View>
							<View className='h-1 w-1 rounded-full bg-white'></View>
						</View>
					</TouchableOpacity>
				</View>
				<View>
					{[1].map(item => (
						<View className='mt-4'>
							<AnnouncementBlock
								setIsShowDeleteModalWindow={setIsShowDeleteModalWindow}
							/>
						</View>
					))}
				</View>
				<View className='mt-5'>
					<View>
						<Text className='ml-5 text-white font-roboto-bold text-base'>
							Предложения продавцов
						</Text>
					</View>
					<View className='w-full mt-7 items-center'>
						<SteeringWheel />
						<Text className='font-roboto text-white mt-3'>
							Здесь будут предложения продавцов
						</Text>
						<View className='w-full mt-3'>
							{[true, false].map(item => (
								<TouchableOpacity className='mt-3'>
									<View>
										<SalerOffer isHavePicture={item} />
									</View>
								</TouchableOpacity>
							))}
						</View>
					</View>
				</View>
			</ScrollView>
		</View>
	)
}

export default Announcement
