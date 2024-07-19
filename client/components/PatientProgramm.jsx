import React from 'react'
import styled from 'styled-components/native'
import { Image, Text, View, TouchableOpacity } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons'

const Group = styled.View`
	margin-top: 30px;
	width: 100%;
`
const GroupWork = styled.View`
	margin-top: 30px;
	width: 100%;
	height: 200px;
	background-color: white;
	border-radius: 5px;
`
const GroupTitle = styled.Text`
	color: white;
	font-weight: 800;
	font-size: 30px;
	margin-left: 20px;
	margin-bottom: 0;
`
const GroupIcon = styled.View`
	display: flex;
	flex-direction: row;
	padding-top: 10px;
	padding-left: 25px;
`
const GroupIconButton = styled.View`
	display: flex;
	flex-direction: row;
	padding-left: 25px;
	padding-top: 15px;
`
const GroupIconText = styled.Text`
	color: black;
	margin-left: 20px;
	font-size: 25px;
`
const GroupIconTime = styled.View`
	width: 400px;
	height: 50px;
	background-color: #2a86ff;
	border-radius: 18px;
	justify-content: center;
	align-items: center;
`
const GroupIconPrice = styled.View`
	margin-left: 25px;
	width: 130px;
	height: 50px;
	background-color: #84d269;
	border-radius: 18px;
	justify-content: center;
	align-items: center;
`
const GroupIconTimeText = styled.Text`
	color: white;
	font-size: 30px;
`
const GroupIconPriceText = styled.Text`
	color: white;
	font-size: 30px;
`

export default function PatientProgramm({ title, items }) {
	return (
		<Group>
			<GroupTitle>Что делать</GroupTitle>
			<GroupWork>
				<GroupIcon>
					<FontAwesome5 name='teeth-open' size={30} color='black' />
					<GroupIconText>Зуб: 11</GroupIconText>
				</GroupIcon>
				<GroupIcon>
					<FontAwesome5 name='diagnoses' size={30} color='black' />
					<GroupIconText>Диагноз: Победитель</GroupIconText>
				</GroupIcon>
				<GroupIcon>
					<GroupIconButton>
						<GroupIconTime>
							<GroupIconTimeText>12.04.2024-14:00</GroupIconTimeText>
						</GroupIconTime>
						<GroupIconPrice>
							<GroupIconPriceText>1500p</GroupIconPriceText>
						</GroupIconPrice>
					</GroupIconButton>
				</GroupIcon>
			</GroupWork>
		</Group>
	)
}
