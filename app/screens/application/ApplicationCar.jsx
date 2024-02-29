import {
	ScrollView,
	Text,
	TouchableOpacity,
	View,
	Dimensions,
	Image
} from 'react-native'
import BackComponent from '../CommonScreens/back/Back'
import React, { useState } from 'react'
import NoPicture from './../../../assets/applications/application/no-picture.svg'
import Clock from './../../../assets/application-block/clock.svg'
import Carousel from 'react-native-snap-carousel'
import ExampleCar from './../../../assets/application-block/example_car.svg'
import { StyleSheet } from 'react-native'

const { width: screenWidth } = Dimensions.get('window')

const ApplicationCar = ({ navigation }) => {
	const [isHavePicture, setIsHavePicture] = useState(true)
	const [activeIndex, setActiveIndex] = useState(0)

	const [images, setImages] = useState([1, 2, 3])

	const renderImages = ({ item, index }) => (
		<View
			style={
				(StyleSheet.absoluteFillObject,
				{ width: screenWidth, height: 200, position: 'relative' })
			}
		>
			<Image
				source={require('./../../../assets/applications/application/tokyoGettyImages-1031467664.webp')}
				// className={`w${} `}
				style={
					(StyleSheet.absoluteFillObject,
					{ width: screenWidth, height: '100%' })
				}
				resizeMode='cover'
			/>
			<View
				style={{
					position: 'absolute',
					bottom: 8,
					backgroundColor: '#C5C5C5',
					padding: 5,
					borderRadius: '6px',
					left: '43%',
					alignSelf: 'center',
					justifyContent: 'center'
				}}
			>
				<Text
					style={{
						color: 'white',
						textAlign: 'center'
					}}
				>{`${index + 1} из ${images.length}`}</Text>
			</View>
		</View>
	)

	return (
		<View className='flex-1 bg-black pb-20'>
			<ScrollView
				showsVerticalScrollIndicator={false}
				showsHorizontalScrollIndicator={false}
			>
				<View className='flex-row w-full items-center justify-between p-5 pb-0'>
					<BackComponent navigation={navigation} />
					<Text className='text-white mt-7 font-inter-medium text-sm'>
						Объявление
					</Text>
					<TouchableOpacity>
						<View className='gap-1 mt-6'>
							<View className='h-1 w-1 rounded-full bg-white'></View>
							<View className='h-1 w-1 rounded-full bg-white'></View>
							<View className='h-1 w-1 rounded-full bg-white'></View>
						</View>
					</TouchableOpacity>
				</View>
				<View className='mt-7'>
					{!isHavePicture ? (
						<View className='bg-[#D9D9D9] rounded-21px items-center py-10'>
							<NoPicture />
							<Text className='text-[#545454] font-roboto text-sm leading-5 mt-3 text-center w-44'>
								Покупатель не прикрепил фото
							</Text>
						</View>
					) : (
						<Carousel
							data={images}
							renderItem={renderImages}
							sliderWidth={screenWidth}
							itemWidth={screenWidth}
							onSnapToItem={index => setActiveIndex(index)}
						/>
					)}
				</View>
				<View className='mt-4 p-5 pt-0'>
					<Text className='text-white ml-3 font-roboto-bold text-base'>
						Описание объявления
					</Text>
					<View className='bg-white py-3 px-4 rounded-19px mt-2'>
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
						<View className='mt-3'>
							<Text className='font-roboto-medium text-base'>
								Ищу бампер и левое крыло, Mercedes CL 2014
							</Text>
						</View>
						<View className='mt-3'>
							<View className='border-b border-b-[#E2E2E2] flex-row items-center py-1 justify-between'>
								<Text className='font-roboto text-sm text-[#757575]'>
									Тип запчасти:
								</Text>
								<Text className='font-roboto text-sm'>Кузов/Оптика</Text>
							</View>
							<View className='border-b border-b-[#E2E2E2] flex-row items-center py-1 justify-between'>
								<Text className='font-roboto text-sm text-[#757575]'>
									Марка, Модель:
								</Text>
								<Text className='font-roboto text-sm'>Mercedes CL 2014</Text>
							</View>
							<View className='border-b border-b-[#E2E2E2] flex-row items-center py-1 justify-between'>
								<Text className='font-roboto text-sm text-[#757575]'>
									Объем двигателя:
								</Text>
								<Text className='font-roboto text-sm'>4.4</Text>
							</View>
							<View className='border-b border-b-[#E2E2E2] flex-row items-center py-1 justify-between'>
								<Text className='font-roboto text-sm text-[#757575]'>
									Коробка:
								</Text>
								<Text className='font-roboto text-sm'>Автомат</Text>
							</View>
							<View className='border-b border-b-[#E2E2E2] flex-row items-center py-1 justify-between'>
								<Text className='font-roboto text-sm text-[#757575]'>
									Привод:
								</Text>
								<Text className='font-roboto text-sm'>Полный привод</Text>
							</View>
							<View className='border-b border-b-[#E2E2E2] flex-row items-center py-1 justify-between'>
								<Text className='font-roboto text-sm text-[#757575]'>
									Топливо:
								</Text>
								<Text className='font-roboto text-sm'>Бензин</Text>
							</View>
							<View className='border-b border-b-[#E2E2E2] flex-row items-center py-1 justify-between'>
								<Text className='font-roboto text-sm text-[#757575]'>
									Руль:
								</Text>
								<Text className='font-roboto text-sm'>Левый</Text>
							</View>
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
			</ScrollView>
		</View>
	)
}

export default ApplicationCar
