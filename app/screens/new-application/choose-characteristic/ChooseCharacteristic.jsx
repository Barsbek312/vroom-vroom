import {
	RefreshControl,
	ScrollView,
	Text,
	TouchableOpacity,
	View
} from 'react-native'
import Close from './../../../../assets/new-application/makes/x.svg'
import React, { useEffect, useState } from 'react'
import { RadioButton } from 'react-native-paper'

const ChooseCharacteristic = ({ route, navigation }) => {
	const { setItem, title, items, choosedItem } = route.params
	const [refreshing, setRefreshing] = useState(false)
	const [currentItem, setCurrentItem] = useState('')
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
				<View className='mt-6 flex-row justify-between'>
					<Text className='font-roboto-bold text-base text-white'>{title}</Text>
					<TouchableOpacity onPress={() => navigation.goBack()}>
						<Close />
					</TouchableOpacity>
				</View>
				<View className='mt-2'>
					{items &&
						items.map(item => (
							<TouchableOpacity onPress={() => setCurrentItem(item)}>
								<View className='flex-row items-center w-full border-b border-b-[#E2E2E2] py-2'>
									<RadioButton.Android
										value={item}
										onPress={() => setCurrentItem(item)}
										status={
											currentItem === item ||
											(choosedItem === item && currentItem === '')
												? 'checked'
												: 'unchecked'
										}
										color='#01C2FF'
									/>
									<Text className='text-white'>{item}</Text>
								</View>
							</TouchableOpacity>
						))}
				</View>
				<View className='w-full items-center mt-5'>
					<TouchableOpacity
						onPress={() => {
							setItem(currentItem)
							navigation.goBack()
						}}
						className='w-4/5 bg-[#01C2FF] rounded-xl overflow-hidden'
					>
						<Text className='text-white text-center py-4'>Сохранить</Text>
					</TouchableOpacity>
				</View>
			</ScrollView>
		</View>
	)
}

export default ChooseCharacteristic
