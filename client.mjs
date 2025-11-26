const response = await fetch('http://localhost:3000/contato', {
	method: 'GET',
	// headers: {
	//     'Content-Type': 'application/json'
	// },
	// body: JSON.stringify({username: 'ana'})
});

const body = await response.text();
console.log(body);
