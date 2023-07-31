export default {
	async login () {
		let userLoggedIn = await login.run() //connect login table
		console.log(userLoggedIn, "uda masuk")
		if (userLoggedIn.length > 0) {
			storeValue("user", {"user": userLoggedIn[0]})
			navigateTo("HomePage", {})
		} else {
			showModal("ModalErrorLogin")
		}
	}
}