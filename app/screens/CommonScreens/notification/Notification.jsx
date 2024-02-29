import { Text, View } from 'react-native'
import NotificationClose from './../../../../assets/common/notification-close.svg'

const Notification = () => {
	return (
		<View className='m-auto bg-[#058849] flex-row items-center rounded-xl py-1 w-5/6 justify-between px-3'>
			<Text className='text-white'>Объявление создано</Text>
			<NotificationClose />
		</View>
	)
}

export default Notification
