import {
	FlatList,
	ScrollView,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View
} from 'react-native'
import ApplicationBlock from '../CommonScreens/application-block/ApplicationBlock'
import React, { useState } from 'react'
import Search from './../../../assets/applications/search.svg'
import Filter from './../../../assets/applications/filter.svg'
import BmwExample from './../../../assets/applications/bmw-example.svg'

const Applications = ({ navigation }) => {
	const [isSaler, setIsSaler] = useState(true)
	return (
		<View className='flex-1 bg-black px-2 pb-20'>
			<ScrollView
				showsHorizontalScrollIndicator={false}
				showsVerticalScrollIndicator={false}
			>
				<View className='flex-col w-full mt-4 p-5'>
					<View className='w-full flex-row justify-around'>
						<TouchableOpacity onPress={() => setIsSaler(true)}>
							<View
								className={`${isSaler && 'border-b-[#01C2FF]'} py-3 border-b-3`}
							>
								<Text
									className={`${isSaler ? 'text-[#01C2FF]' : 'text-[#757575]'} font-roboto-medium text-sm`}
								>
									Покупатель
								</Text>
							</View>
						</TouchableOpacity>
						<TouchableOpacity onPress={() => setIsSaler(false)}>
							<View
								className={`${!isSaler && 'border-b-[#01C2FF]'} py-3 border-b-3`}
							>
								<Text
									className={`${!isSaler ? 'text-[#01C2FF]' : 'text-[#757575]'} font-roboto-medium text-sm`}
								>
									Продавец
								</Text>
							</View>
						</TouchableOpacity>
					</View>
					<View className='mt-4 flex-row items-center'>
						<View className='flex-1 mr-3 relative flex-row items-center'>
							<TextInput className='bg-[#484646] rounded-xl py-1 pr-1 pl-4 h-8 flex-grow text-white font-roboto' />
							<TouchableOpacity
								style={
									(StyleSheet.absoluteFillObject,
									{ position: 'absolute', right: 5 })
								}
							>
								<Search />
							</TouchableOpacity>
						</View>
						<TouchableOpacity>
							<View>
								<Filter />
							</View>
						</TouchableOpacity>
					</View>
					<View className='mt-4 flex-row'>
						<ScrollView
							className='flex-row gap-2 pb-4'
							horizontal={true}
							showsHorizontalScrollIndicator={false}
						>
							<TouchableOpacity>
								<View className='flex-row items-center bg-[#484646] py-6px px-3 rounded-xl'>
									<BmwExample />
									<Text className='text-white font-roboto text-xs ml-1'>
										BMW
									</Text>
								</View>
							</TouchableOpacity>
							<TouchableOpacity>
								<View className='flex-row items-center bg-[#484646] py-6px px-3 rounded-xl'>
									<BmwExample />
									<Text className='text-white font-roboto text-xs ml-1'>
										BMW
									</Text>
								</View>
							</TouchableOpacity>
							<TouchableOpacity>
								<View className='flex-row items-center bg-[#484646] py-6px px-3 rounded-xl'>
									<BmwExample />
									<Text className='text-white font-roboto text-xs ml-1'>
										BMW
									</Text>
								</View>
							</TouchableOpacity>
							<TouchableOpacity>
								<View className='flex-row items-center bg-[#484646] py-6px px-3 rounded-xl'>
									<BmwExample />
									<Text className='text-white font-roboto text-xs ml-1'>
										BMW
									</Text>
								</View>
							</TouchableOpacity>
							<TouchableOpacity>
								<View className='flex-row items-center bg-[#484646] py-6px px-3 rounded-xl'>
									<BmwExample />
									<Text className='text-white font-roboto text-xs ml-1'>
										BMW
									</Text>
								</View>
							</TouchableOpacity>
						</ScrollView>
					</View>
					{/* Если current-application-car то переход к объявлению для машин, а если current-application-sparepart, то к запчасти */}
					{[1, 2, 3, 4].map(item => (
						<View className='mb-4'>
							<TouchableOpacity
								onPress={() => navigation.navigate('current-application-car')}
							>
								<ApplicationBlock />
							</TouchableOpacity>
						</View>
					))}
				</View>
			</ScrollView>
		</View>
	)
}

export default Applications
