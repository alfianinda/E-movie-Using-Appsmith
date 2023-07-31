export default {
	async getSearchMovie () {
		let response = await search_movie.run();
		let result = JSON.parse(response);
		
		return result.results
		console.log(result.results);
	},
	async buyMovie() {
		//beli movie => akan diinput ke database 
		// await insert_movie.run();
		console.log("buy")
		//close modal detail 
		closeModal(ModalDetail);
	}
}