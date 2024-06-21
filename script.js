document.getElementById('fetchDogButton').addEventListener('click',fetchDogImage);

function fetchDogImage(){
	fetch('https://dog.ceo/api/breeds/image/random')
	.then(response =>response .json())
	.then (data => {
		console.log(data)
		const dogImage =
		document.getElementById('dogImage')
		dogImage.src=data.message;
	})
	.catch(error => console.error('Error fetching dog image:',error));
}
function fetchBooks(){
	fetch("https://anapioficeandfire.com/api/books")
	.then(response => response.json())
	.then(data =>{
		const gameofthronessection =document.getElementById('gameofthrones')
	data.forEach(dataItem=>{
		const title=document.createElement('h2')
		title.textContent=dataItem.name
		gameofthronessection.appendChild(title)

	})
	})
}

document.addEventListener('DOMContentLoaded',fetchBooks)