const header = document.querySelector('header');
const h1 = document.querySelector('h1');
const select = document.querySelector('select');
const div = document.querySelector('div')


select.addEventListener('change',()=>{
	// console.log(select.value)

if(select.value ==='fr'){
	async function fetchIt () {


// fetch for french
const options = {
	method: 'POST',
	headers: {
		'content-type': 'application/json',
		'X-RapidAPI-Key': '0319a18fdfmsha7439b86fa1f502p15fa7ejsn6e0e869ef8a2',
		'X-RapidAPI-Host': 'ai-translate.p.rapidapi.com'
	},
	body: '{"texts":["<header><h1>This is an heading tag</h1><p>This is a paragraph text</p><h2>this is a random text for testing isaacbrownisaac request</h2></header>"],"tls":["fr"],"sl":"en"}'
};

fetch('https://ai-translate.p.rapidapi.com/translates', options)
	.then(response => response.json())
	.then(response => div.innerHTML = response[0].texts)
	.catch(err => console.error(err));
}

fetchIt()
}


// fetch for Germany
if(select.value ==='de'){
	async function fetchIt () {


const options = {
	method: 'POST',
	headers: {
		'content-type': 'application/json',
		'X-RapidAPI-Key': '0319a18fdfmsha7439b86fa1f502p15fa7ejsn6e0e869ef8a2',
		'X-RapidAPI-Host': 'ai-translate.p.rapidapi.com'
	},
	body: '{"texts":["<header><h1>This is an heading tag</h1><p>This is a paragraph text</p><h2>this is a random text for testing isaacbrownisaac request</h2></header>"],"tls":["de"],"sl":"en"}'
};

fetch('https://ai-translate.p.rapidapi.com/translates', options)
	.then(response => response.json())
	.then(response => div.innerHTML=response[0].texts)
	.catch(err => console.error(err));
}

fetchIt()
}



// fetch for chinese
if(select.value ==='zh'){
	async function fetchIt () {


const options = {
	method: 'POST',
	headers: {
		'content-type': 'application/json',
		'X-RapidAPI-Key': '0319a18fdfmsha7439b86fa1f502p15fa7ejsn6e0e869ef8a2',
		'X-RapidAPI-Host': 'ai-translate.p.rapidapi.com'
	},
	body: '{"texts":["<header><h1>This is an heading tag</h1><p>This is a paragraph text</p><h2>this is a random text for testing isaacbrownisaac request</h2></header>"],"tls":["zh"],"sl":"en"}'
};

fetch('https://ai-translate.p.rapidapi.com/translates', options)
	.then(response => response.json())
	.then(response => div.innerHTML=response[0].texts)
	.catch(err => console.error(err));
}

fetchIt()
}



// fetch for english
if(select.value ==='en'){
	async function fetchIt () {


const options = {
	method: 'POST',
	headers: {
		'content-type': 'application/json',
		'X-RapidAPI-Key': '0319a18fdfmsha7439b86fa1f502p15fa7ejsn6e0e869ef8a2',
		'X-RapidAPI-Host': 'ai-translate.p.rapidapi.com'
	},
	body: '{"texts":["<header><h1>This is an heading tag</h1><p>This is a paragraph text</p><h2>this is a random text for testing isaacbrownisaac request</h2></header>"],"tls":["en"],"sl":"en"}'
};

fetch('https://ai-translate.p.rapidapi.com/translates', options)
	.then(response => response.json())
	.then(response => div.innerHTML=response[0].texts)
	.catch(err => console.error(err));
}

fetchIt()
}





})
// header.style.display='none'
