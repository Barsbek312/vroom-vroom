import { TouchableOpacity } from 'react-native'
import Back from './../../../../assets/common/back.svg'
import Close from './../../../../assets/common/close.svg'

const BackComponent = ({ navigation, isCloseImage = false }) => {
	return (
		<TouchableOpacity className='mt-7' onPress={() => navigation.goBack()}>
			{isCloseImage ? <Close /> : <Back />}
		</TouchableOpacity>
	)
}

export default BackComponent
