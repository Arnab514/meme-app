export const memesApi = async () => {
    const response = await fetch('https://api.imgflip.com/get_memes')
    return await response.json();
}

// another api - 'https://api.memegen.link/templates/'

// const fetch = require('node-fetch');

// const url = 'https://ronreiter-meme-generator.p.rapidapi.com/meme?top=Top%20Text&bottom=Bottom%20Text&meme=Condescending-Wonka&font_size=50&font=Impact';
// const options = {
//   method: 'GET',
//   headers: {
//     'X-RapidAPI-Key': '361c633106msh4d5824daee53689p119c14jsndf2114194c83',
//     'X-RapidAPI-Host': 'ronreiter-meme-generator.p.rapidapi.com'
//   }
// };

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }

// *******************************************************************************

// const url = 'https://ronreiter-meme-generator.p.rapidapi.com/meme?top=Top%20Text&bottom=Bottom%20Text&meme=Condescending-Wonka&font_size=50&font=Impact';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '361c633106msh4d5824daee53689p119c14jsndf2114194c83',
// 		'X-RapidAPI-Host': 'ronreiter-meme-generator.p.rapidapi.com'
// 	}
// };

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }