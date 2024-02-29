import React, { useState, createRef, useEffect } from 'react'
import {
	View,
	TextInput,
	StyleSheet,
	Text,
	TouchableOpacity,
	TouchableWithoutFeedback,
	Keyboard
} from 'react-native'
import BackComponent from '../CommonScreens/back/Back'

const EnterCode = ({ navigation }) => {
	const [code, setCode] = useState(['', '', '', ''])
	const refs = [createRef(), createRef(), createRef(), createRef()]
	const [timeLeft, setTimeLeft] = useState(120)

	useEffect(() => {
		const interval = setInterval(() => {
			setTimeLeft(prevTime => (prevTime > 0 ? prevTime - 1 : 0))
		}, 1000)
		return () => clearInterval(interval)
	}, [])

	const formatTime = time => {
		const minutes = Math.floor(time / 60)
		const seconds = time % 60
		return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`
	}

	const handleCodeChange = (text, index) => {
		const newCode = [...code]
		newCode[index] = text
		setCode(newCode)
		if (text && index < refs.length - 1) {
			refs[index + 1].current.focus()
		}
	}

	useEffect(() => {
		let check = true
		for (let i = 0; i < code.length; i++) {
			if (code[i] === '') {
				check = false
			}
		}
		check === true && navigation.navigate('choose-profile')
	}, [code])

	const handleKeyPress = (e, index) => {
		if (e.nativeEvent.key === 'Backspace' && index > 0 && code[index] === '') {
			refs[index - 1].current.focus()
		}
	}

	return (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
			<View className='flex-1 bg-black p-5'>
				<BackComponent navigation={navigation} />
				<View className='flex-1 flex-col gap-2 items-center justify-center align-middle'>
					<Text className='text-white font-roboto-medium text-3xl text-center'>
						Введите код
					</Text>
					<Text className='text-white font-roboto-medium text-sm w-44 text-center leading-5 mb-5'>
						Отправили код на номер +996777393436
					</Text>
					<View className='flex-row gap-3 mb-2'>
						{code.map((digit, index) => (
							<TextInput
								key={index}
								ref={refs[index]}
								value={digit}
								onChangeText={text => handleCodeChange(text, index)}
								onKeyPress={e => handleKeyPress(e, index)}
								keyboardType='numeric'
								maxLength={1}
								className='bg-white py-3 px-4 rounded-xl w-12 h-12 text-center font-roboto text-2xl leading-7'
							/>
						))}
					</View>
					<TouchableOpacity
						onPress={() => {
							/* Логика для повторной отправки кода */
						}}
						disabled={timeLeft > 0}
					>
						<Text
							className={`${timeLeft > 0 ? 'text-custom-blue-transparent' : 'text-[#01C2FF]'} font-roboto-medium`}
						>
							{timeLeft > 0
								? `Отправить код повторно (${formatTime(timeLeft)})`
								: 'Отправить код повторно'}
						</Text>
					</TouchableOpacity>
				</View>
			</View>
		</TouchableWithoutFeedback>
	)
}

export default EnterCode
