export const routes = {
    GET: {
        '/': (req, res) => {
            res.end('Home')
        },
        '/produtos/notebook': (req, res) => {
            res.end('Produtos - Notebook')
        }
    },
    POST: {
        '/produto': (req, res) => {
            res.end('Notebook Post')
        }
    }
}