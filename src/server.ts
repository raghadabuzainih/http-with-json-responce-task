import * as http from 'http'

const server = http.createServer((req: http.IncomingMessage, res: http.ServerResponse) => {
    res.setHeader('Content-Type', 'application/json')

    if(req.method == 'GET'){
        if(req.url == '/'){
            res.statusCode = 200  
            res.end(JSON.stringify({message: 'Welcome to the server'}))
        }
        else if(req.url == '/about'){
            res.statusCode = 200  
            res.end(JSON.stringify({message: 'This is the about route'}))
        }  
        else errorResponce(res)  
    }else{
        errorResponce(res)
    }
})

function errorResponce(res: http.ServerResponse){
    res.statusCode = 404
    res.end(JSON.stringify({error: 'Route not found'}))
}

server.listen(3000)