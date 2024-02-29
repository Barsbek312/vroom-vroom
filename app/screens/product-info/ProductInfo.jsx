import React from 'react'
import { Image, View, Text, TouchableOpacity } from 'react-native'
import FirstProductInfo from './first-product-info/FirstProductInfo'
import SecondProductInfo from './second-product-info/SecondProductInfo'
import ThirdProductInfo from './third-product-info/ThirdProductInfo'
import Back from './../../../assets/common/back.svg'

const ProductInfo = ({ navigation }) => {
	const [activeProductInfo, setActiveProductInfo] = React.useState(1)

	React.useEffect(() => {
		if (activeProductInfo <= 0) {
			setActiveProductInfo(1)
		} else if (activeProductInfo >= 4) {
			navigation.navigate('start')
		}
	}, [activeProductInfo])

	return (
		<View className='flex-1 bg-black p-5'>
			<View className='mt-7 z-10'>
				{activeProductInfo != 1 && (
					<TouchableOpacity
						onPress={() => {
							setActiveProductInfo(prev => prev - 1)
						}}
					>
						<Back />
					</TouchableOpacity>
				)}
			</View>

			<View className='flex-1'>
				{activeProductInfo == 1 && <FirstProductInfo />}
				{activeProductInfo == 2 && <SecondProductInfo />}
				{activeProductInfo == 3 && <ThirdProductInfo />}
			</View>
			<View className='w-full'>
				<TouchableOpacity
					className='w-full bg-[#01C2FF] rounded-xl p-4'
					onPress={() => {
						setActiveProductInfo(prev => prev + 1)
					}}
				>
					<Text className='text-white text-center font-roboto-bold text-base'>
						Далее
					</Text>
				</TouchableOpacity>
				<TouchableOpacity
					className='w-full p-4 mt-2 mb-5'
					onPress={() => navigation.navigate('start')}
				>
					<Text
						className={`${activeProductInfo != 3 ? 'text-white' : 'text-[#01C2FF]'} text-center font-roboto-bold text-base`}
					>
						Пропустить
					</Text>
				</TouchableOpacity>
			</View>
		</View>
	)
}

export default ProductInfo
