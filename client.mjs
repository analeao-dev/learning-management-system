const response = await fetch('https://friendly-palm-tree-jwgxpwwr47qfpg4r-3000.app.github.dev/produto', {
    method: 'GET',
    // headers: {
    //     'Content-Type': 'application/json'
    // },
    // body: JSON.stringify({username: 'ana'})
});

const body = await response.text();
console.log(body);