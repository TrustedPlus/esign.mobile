import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	header: {
		backgroundColor: "#be3817"
	},
	footer: {
		backgroundColor: "#be3817"
	},
	headerImage: {
		width: 35,
		height: 35
	},
	left: {
		maxWidth: 25
	},
	right: {
		maxWidth: 50
	},
	container: {
		backgroundColor: "white"
	},
	// ListMenu
	listItem: {
		marginLeft: 0,
		minHeight: 10
	},
	listItemText: {
		fontSize: 20,
		marginRight: 5
	},
	thumbnail: {
		marginLeft: 5
	},
	numChain: {
		width: 30,
		height: 30,
		backgroundColor: "white",
		marginLeft: 10,
		marginTop: 10,
		borderRadius: 15,
		borderColor: "darkblue",
		borderWidth: 1
	},
	vert: {
		position: "absolute",
		left: 25,
		top: 45,
		height: 30, // или сколько нужно в пикселях или процентах
		width: 1,
		borderWidth: 0,
		borderLeftWidth: 3,
		borderColor: "lightblue",
	},
	vertfirst: {
		position: "absolute",
		left: 25,
		top: -25,
		height: 30, // или сколько нужно в пикселях или процентах
		width: 1,
		borderWidth: 0,
		borderLeftWidth: 3,
		borderColor: "lightblue",
	},
	// SideListItem
	sideListItem: {
		marginLeft: 2,
		height: 50
	},
	sidethumbnail: {
		marginRight: 5
	},
	// SideBar
	splash_screen: {
		width: "100%",
		height: "100%"
	},
	splash_icon: {
		position: "absolute",
		left: 100,
		top: 10,
		width: 70,
		height: 70
	},
	splash_text: {
		position: "absolute",
		left: 60,
		top: 90,
		fontSize: 20,
		color: "white"
	},
	// Signature, DescriptionError, Encryption
	sign_enc_view: {
		paddingBottom: 20,
		paddingTop: 20,
	},
	sign_enc_title: {
		fontSize: 23,
		color: "grey",
		width: "80%",
		paddingLeft: 3
	},
	sign_enc_prompt: {
		fontSize: 17,
		color: "lightgrey",
		textAlign: "center"
	},
	sign_enc_button: {
		position: "absolute",
		marginTop: 6,
		right: 10
	},
	selectFiles: {
		fontSize: 17,
		height: 20,
		color: "grey",
		width: "70%",
		paddingLeft: 4
	},
	// PropertiesCert
	prop_cert_righttext: {
		position: "absolute",
		width: "60%",
		right: 5,
		textAlign: "right",
		color: "blue"
	},
	prop_cert_status: {
		fontSize: 17,
		color: "grey",
		position: "absolute",
		left: 110,
		top: 60,
		right: 5
	},
	prop_cert_img: {
		height: 70,
		width: 70,
		margin: 20
	},
	prop_cert_title: {
		fontSize: 20,
		position: "absolute",
		left: 110,
		right: 5,
		top: 15
	},
	// Modal
	wrapper: {
		paddingTop: 50,
		flex: 1
	},

	modal: {
		justifyContent: "center",
		alignItems: "center"
	},

	modal3: {
		height: 300,
		width: 300,
		backgroundColor: "rgba(255, 255, 255, 0.85)",
		borderRadius: 8,
	},

	btn: {
		margin: 10,
		backgroundColor: "#3B5998",
		color: "white",
		padding: 10
	},
});