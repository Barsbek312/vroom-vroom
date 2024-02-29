import {
	ScrollView,
	Text,
	TextInput,
	TouchableOpacity,
	View,
	RefreshControl
} from 'react-native'
import CloseImg from './../../../../assets/new-application/makes/x.svg'
import Toyota from './../../../../assets/new-application/makes/toyota.svg'
import Star from './../../../../assets/new-application/makes/star.svg'
import React, { useEffect, useState } from 'react'

const Makes = ({ route, navigation }) => {
	const { setCurrentMake } = route.params
	const [refreshing, setRefreshing] = useState(false)
	const onRefresh = React.useCallback(() => {
		setRefreshing(true)
		navigation.navigate('new-application')
		setRefreshing(false)
	}, [navigation])

	return (
		<View className='flex-1 bg-black p-5 pb-20'>
			<ScrollView
				showsHorizontalScrollIndicator={false}
				showsVerticalScrollIndicator={false}
				refreshControl={
					<RefreshControl refreshing={false} onRefresh={onRefresh} />
				}
			>
				<View className='w-full items-center mt-6'>
					<TouchableOpacity
						onPress={() => navigation.navigate('new-application')}
						className='p-2'
					>
						<CloseImg />
					</TouchableOpacity>
				</View>
				<View>
					<Text className='font-roboto-bold text-base text-white'>Марка</Text>
					<View>
						<TextInput
							placeholder='Поиск'
							placeholderTextColor={'#fff'}
							className='text-white font-inter text-sm py-3 pr-4'
						/>
					</View>
					<View>
						<Text className='font-roboto-bold text-base text-white mt-3'>
							Избранное
						</Text>
						<View>
							<TouchableOpacity
								onPress={() => {
									setCurrentMake('Toyota, Mark II 2004')
									navigation.goBack()
								}}
							>
								<View className='flex-row items-center justify-between mt-1'>
									<Toyota />
									<View className='flex-row items-center justify-between flex-1 border-b border-b-[#fff] ml-3 py-4'>
										<Text className='text-white font-roboto'>
											Toyota, Mark II 2004
										</Text>
										<Star />
									</View>
								</View>
							</TouchableOpacity>
						</View>
						<View>
							<Text className='font-roboto-bold text-base text-white mt-3'>
								Все авто
							</Text>
							<TouchableOpacity
								onPress={() => {
									setCurrentMake('Toyota, Mark II 2004')
									navigation.goBack()
								}}
							>
								<View className='flex-row items-center justify-between mt-1'>
									<Toyota />
									<View className='flex-row items-center justify-between flex-1 border-b border-b-[#fff] ml-3 py-4'>
										<Text className='text-white font-roboto'>
											Toyota, Mark II 2004
										</Text>
										<Star />
									</View>
								</View>
							</TouchableOpacity>
						</View>
					</View>
				</View>
			</ScrollView>
		</View>
	)
}

export default Makes
