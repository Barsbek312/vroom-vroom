import React from 'react'
import { Image, Text, View } from 'react-native'
import Logo from './../../../assets/logo.svg'

const Intro = ({ navigation }) => {
	React.useEffect(() => {
		const timeout = setTimeout(() => {
			navigation.replace('product-info')
		}, 1500)

		return () => clearTimeout(timeout)
	}, [navigation])

	return (
		<View className='flex-1 bg-black'>
			<View className='flex-1'>
				<View className='flex-1 justify-center align-middle'>
					<View className='justify-center align-middle m-auto'>
						<View className='m-auto'>
							<Logo />
						</View>
						<View className='mt-5'>
							<Text className='text-white text-5xl text-center'>VROOM</Text>
							<Text className='text-white text-5xl text-center'>VROOM</Text>
						</View>
					</View>
				</View>
			</View>
		</View>
	)
}

export default Intro
