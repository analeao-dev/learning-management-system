import { createServer } from "node:http";

// const frase1 = Promise.resolve('Olá');
// const frase2 = Promise.resolve('Mundo');
// const frasesPromises = [frase1, frase2];

// console.log(frasesPromises);
// const frases = [];
// for await (const frase of frasesPromises){
//     frases.push(frase);
// }
// console.log(frases.join(", "));

const server = createServer(async (request, response) => {
    const url = new Url(request.url, 'https://friendly-palm-tree-jwgxpwwr47qfpg4r-3000.app.github.dev/');

    const chunks = [];
    for await (const chuck of request){
        chunks.push(chuck);
    }

    const body = Buffer.concat(chunks).toString('utf-8');
    console.log(request.method)
    response.statusCode = 404;
    response.end('Não encontrada.')
});

server.listen(3000, () => {
    console.log('Server iniciado...')
});