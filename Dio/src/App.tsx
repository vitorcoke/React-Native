import React from 'react';
import {
	View,
	Image,
	StyleSheet,
	SafeAreaView,
	StatusBar,
	Text,
	Pressable,
	Linking,
} from 'react-native';

const COLOR_GITHUB = '#010409';
const IMAGE_PROFILE_GITHUB =
	'https://avatars.githubusercontent.com/u/78811067?s=96&v=4';

const COLOR_FONTE_GITHUB = '#C9D1D9';
const COLOR_DARK_GITHUB = '#4F565E';
const URL_GITHUB = 'https://github.com/vitorcoke';

const App: React.FC = () => {
	const handlePressGoToGitHub = async () => {
		console.log('verificando');
		const response = await Linking.canOpenURL(URL_GITHUB);
		if (response) {
			console.log('link aprovado');
			try {
				await Linking.openURL(URL_GITHUB);
			} catch (error) {
				console.log(error);
			}
		}
	};

	return (
		<SafeAreaView style={style.container}>
			<StatusBar backgroundColor={COLOR_GITHUB} barStyle="light-content" />
			<View style={style.content}>
				<Image style={style.avatar} source={{ uri: IMAGE_PROFILE_GITHUB }} />
				<Text style={[style.defaultText, style.name]}>Vitor M. Coke</Text>
				<Text style={[style.defaultText, style.nickName]}>VitorCoke</Text>
				<Text style={[style.defaultText, style.description]}>
					Programador Full-Stack. Amante da Tecnologia.
				</Text>
				<Pressable onPress={handlePressGoToGitHub}>
					<View style={style.button}>
						<Text style={[style.defaultText, style.textButton]}>
							Open in GitHub
						</Text>
					</View>
				</Pressable>
			</View>
		</SafeAreaView>
	);
};

export default App;

const style = StyleSheet.create({
	container: {
		backgroundColor: COLOR_GITHUB,
		flex: 1,
		justifyContent: 'center',
	},
	content: {
		alignItems: 'center',
		padding: 20,
	},
	avatar: {
		width: 200,
		height: 200,
		borderRadius: 100,
		borderColor: 'white',
		borderWidth: 2,
	},
	defaultText: {
		color: COLOR_FONTE_GITHUB,
	},
	name: {
		fontSize: 20,
		fontWeight: 'bold',
		marginTop: 20,
	},
	nickName: {
		fontSize: 18,
		color: COLOR_DARK_GITHUB,
	},
	description: {
		fontSize: 14,
		fontWeight: 'bold',
	},
	button: {
		backgroundColor: COLOR_DARK_GITHUB,
		padding: 20,
		borderRadius: 10,
		marginTop: 20,
	},
	textButton: {
		fontWeight: 'bold',
		fontSize: 16,
	},
});
