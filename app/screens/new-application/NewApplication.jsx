import {
	Image,
	ScrollView,
	Text,
	TextInput,
	TouchableOpacity,
	View
} from 'react-native'
import BackComponent from '../CommonScreens/back/Back'
import TakePhoto from './../../../assets/new-application/camera.svg'
import Gallery from './../../../assets/new-application/gallery.svg'
import * as ImagePicker from 'expo-image-picker'
import React, { useEffect, useState } from 'react'
import FirstTypeOfSparePart from './../../../assets/new-application/first-spare-part-type.svg'
import SecondTypeOfSparePart from './../../../assets/new-application/second-spare-part-type.svg'
import ThirdTypeOfSparePart from './../../../assets/new-application/third-spare-part-type.svg'
import FourthTypeOfSparePart from './../../../assets/new-application/fourth-spare-part-type.svg'
import FifthTypeOfSparePart from './../../../assets/new-application/fifth-spare-part-type.svg'

const NewApplication = ({ navigation }) => {
	useEffect(() => {
		;(async () => {
			const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync()
			if (status !== 'granted') {
				alert('Sorry, we need camera roll permissions to make this work!')
			}
		})()
	}, [])

	const [currentMake, setCurrentMake] = useState('')
	const [currentGearBox, setCurrentGearBox] = useState('')
	const [currentDriveUnit, setCurrentDriveUnit] = useState('')
	const [currentFuel, setCurrentFuel] = useState('')
	const [currentSteeringWheel, setCurrentSteeringWheel] = useState('')
	const [selectedImage, setSelectedImage] = useState([])
	const [activeTypeOfSparePart, setActiveTypeOfSparePart] = useState(null)

	const saveImage = async image => {
		try {
			setSelectedImage(prevImg => [image, ...prevImg])
		} catch (err) {
			throw err
		}
	}

	const handleTakePhoto = async mode => {
		try {
			let result = {}
			if (mode === 'gallery') {
				await ImagePicker.requestMediaLibraryPermissionsAsync()
				result = await ImagePicker.launchImageLibraryAsync({
					mediaTypes: ImagePicker.MediaTypeOptions.Images,
					allowsEditing: true,
					aspect: [1, 1],
					quality: 1
				})
			} else {
				await ImagePicker.requestCameraPermissionsAsync()
				result = await ImagePicker.launchCameraAsync({
					cameraType: ImagePicker.CameraType.front,
					allowsEditing: true,
					aspect: [1, 1],
					quality: 1
				})

				if (!result.canceled) {
					await saveImage(result.assets[0].uri)
				}
			}
		} catch (err) {
			alert('Error uploading image: ' + err.message)
		}
	}

	const handleChooseFromGallery = async () => {
		let result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.Images,
			allowsEditing: true,
			aspect: [4, 3],
			quality: 1
		})

		if (!result.cancelled) {
			await saveImage(result.assets[0].uri)
		}
	}

	return (
		<View className='bg-black flex-1 w-full p-5 pb-20'>
			<ScrollView
				showsHorizontalScrollIndicator={false}
				showsVerticalScrollIndicator={false}
			>
				<View className='flex-row w-full justify-between'>
					<BackComponent isCloseImage={true} navigation={navigation} />
					<Text className='font-roboto-medium text-base text-white mt-8'>
						Новая заявка
					</Text>
					<Text>fmkml</Text>
				</View>
				<View className='w-full mt-6'>
					<Text className='text-white font-roboto-bold text-sm w-full'>
						Фото запчасти
					</Text>
					<View className='w-full flex-row gap-2 mt-0 flex-wrap'>
						<TouchableOpacity
							onPress={() => handleTakePhoto('camera')}
							className='bg-white p-6 rounded-lg overflow-hidden'
						>
							<TakePhoto />
						</TouchableOpacity>
						<TouchableOpacity
							onPress={() => handleChooseFromGallery('gallery')}
							className='bg-white p-6 rounded-lg overflow-hidden'
						>
							<Gallery />
						</TouchableOpacity>
						{selectedImage &&
							selectedImage.map((imageUri, index) => (
								<View
									key={index}
									className='rounded-lg w-70px h-70px overflow-hidden'
								>
									<Image source={{ uri: imageUri }} className='w-full h-full' />
								</View>
							))}
					</View>
				</View>
				<View className='mt-5'>
					<Text className='text-white font-roboto-bold text-sm w-full'>
						Тип запчасти
					</Text>
					<View className='flex-row align-middle items-center gap-2 mt-1 flex-wrap'>
						<TouchableOpacity
							className={`${activeTypeOfSparePart === 1 ? 'bg-[#616161]' : 'bg-[#EEEEEE]'} p-4 rounded-lg overflow-hidden`}
							onPress={() => setActiveTypeOfSparePart(1)}
						>
							<FirstTypeOfSparePart />
						</TouchableOpacity>
						<TouchableOpacity
							className={`${activeTypeOfSparePart === 2 ? 'bg-[#616161]' : 'bg-[#EEEEEE]'} p-2 rounded-lg overflow-hidden`}
							onPress={() => setActiveTypeOfSparePart(2)}
						>
							<SecondTypeOfSparePart />
						</TouchableOpacity>
						<TouchableOpacity
							className={`${activeTypeOfSparePart === 3 ? 'bg-[#616161]' : 'bg-[#EEEEEE]'} p-2 rounded-lg overflow-hidden`}
							onPress={() => setActiveTypeOfSparePart(3)}
						>
							<ThirdTypeOfSparePart />
						</TouchableOpacity>
						<TouchableOpacity
							className={`${activeTypeOfSparePart === 4 ? 'bg-[#616161]' : 'bg-[#EEEEEE]'} p-2 rounded-lg overflow-hidden`}
							onPress={() => setActiveTypeOfSparePart(4)}
						>
							<FourthTypeOfSparePart />
						</TouchableOpacity>
						<TouchableOpacity
							className={`${activeTypeOfSparePart === 5 ? 'bg-[#616161]' : 'bg-[#EEEEEE]'} p-2 rounded-lg overflow-hidden`}
							onPress={() => setActiveTypeOfSparePart(5)}
						>
							<FifthTypeOfSparePart />
						</TouchableOpacity>
					</View>
				</View>
				<View className='mt-5'>
					<Text className='text-white font-roboto-bold text-sm w-full'>
						Какую запчасть ищете?
					</Text>
					<TextInput
						placeholder='Напишите название и описание запчасти'
						placeholderTextColor={'#000'}
						className='py-3 px-4 bg-white rounded-lg mt-2'
					/>
				</View>
				<View className='mt-5'>
					<Text className='text-white font-roboto-bold text-sm w-full'>
						Информация про ваш автомобиль
					</Text>
					<View className='bg-white rounded-lg mt-2'>
						<TouchableOpacity
							className='pb-3 py-3 px-4 border-b border-b-[#E2E2E2]'
							onPress={() => navigation.navigate('makes', { setCurrentMake })}
						>
							<View className='flex-row items-center justify-between gap-2'>
								<Text>Марка</Text>
								<Text>{currentMake}</Text>
							</View>
						</TouchableOpacity>
						<View className='px-4'>
							<View className='flex-row justify-between gap-2'>
								<Text className='py-3'>Модель</Text>
								<TextInput className='py-3 flex-1 text-right' />
							</View>
						</View>
					</View>
					<View className='bg-white rounded-lg mt-3'>
						<View className='px-4 border-b border-b-[#E2E2E2]'>
							<View className='flex-row justify-between gap-2'>
								<Text className='py-3'>Объем</Text>
								<TextInput
									className='flex-1 text-right py-3'
									keyboardType='decimal-pad'
								/>
							</View>
						</View>
						<TouchableOpacity
							className='pb-3 py-3 px-4 border-b border-b-[#E2E2E2]'
							onPress={() =>
								navigation.navigate('choose-characteristic', {
									setItem: setCurrentGearBox,
									items: ['Автомат', 'Механическая', 'Вариатор', 'Робот'],
									title: 'Коробка',
									choosedItem: currentGearBox
								})
							}
						>
							<View className='flex-row items-center justify-between gap-2'>
								<Text>Коробка</Text>
								<Text>{currentGearBox}</Text>
							</View>
						</TouchableOpacity>
						<TouchableOpacity
							className='pb-3 py-3 px-4 border-b border-b-[#E2E2E2]'
							onPress={() =>
								navigation.navigate('choose-characteristic', {
									setItem: setCurrentDriveUnit,
									items: ['Полный', 'Задний', 'Передний'],
									title: 'Привод',
									choosedItem: currentDriveUnit
								})
							}
						>
							<View className='flex-row items-center justify-between gap-2'>
								<Text>Привод</Text>
								<Text>{currentDriveUnit}</Text>
							</View>
						</TouchableOpacity>
						<TouchableOpacity
							className='pb-3 py-3 px-4 border-b border-b-[#E2E2E2]'
							onPress={() =>
								navigation.navigate('choose-characteristic', {
									setItem: setCurrentFuel,
									items: ['Бензин', 'Дизель'],
									title: 'Топливо',
									choosedItem: currentFuel
								})
							}
						>
							<View className='flex-row items-center justify-between gap-2'>
								<Text>Топливо</Text>
								<Text>{currentFuel}</Text>
							</View>
						</TouchableOpacity>
						<TouchableOpacity
							className='pb-3 py-3 px-4'
							onPress={() =>
								navigation.navigate('choose-characteristic', {
									setItem: setCurrentSteeringWheel,
									items: ['Левый', 'Правый'],
									title: 'Руль',
									choosedItem: currentSteeringWheel
								})
							}
						>
							<View className='flex-row items-center justify-between gap-2'>
								<Text>Руль</Text>
								<Text>{currentSteeringWheel}</Text>
							</View>
						</TouchableOpacity>
					</View>
					<View className='mt-4'>
						<TouchableOpacity
							className='w-full items-center'
							onPress={() => navigation.navigate('my-announcements')}
						>
							<View className='bg-[#006180] w-4/5 rounded-xl py-3'>
								<Text className='text-white text-center'>Добавить</Text>
							</View>
						</TouchableOpacity>
					</View>
				</View>
			</ScrollView>
		</View>
	)
}

export default NewApplication
