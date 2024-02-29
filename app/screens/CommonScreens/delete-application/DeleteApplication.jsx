import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

const DeleteApplication = ({
	setIsShowModalWindow,
	title,
	description,
	action
}) => {
	return (
		<View
			style={
				(StyleSheet.absoluteFillObject,
				{
					left: 0,
					top: 0,
					height: '100%',
					width: '100%',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center'
				})
			}
		>
			<View>
				<View>
					<Text className='text-white font-roboto-bold text-base'>{title}</Text>
					<Text className='text-white mt-1 font-roboto text-sm'>
						{description}
					</Text>
				</View>
				<View className='mt-5'>
					<TouchableOpacity className='bg-[#D44333] py-4  rounded-xl overflow-hidden'>
						<Text className='text-white text-center font-roboto-medium text-base'>
							{action}
						</Text>
					</TouchableOpacity>
					<TouchableOpacity
						className='py-4 rounded-xl overflow-hidden mt-3 bg-transparent border border-[#E2E2E2]'
						onPress={() => setIsShowModalWindow(false)}
					>
						<Text className='text-white text-center font-roboto-medium text-base'>
							Отмена
						</Text>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	)
}

export default DeleteApplication
