// const ran=document.getElementById('fname')

const http=require('http')

const fs= require('fs')
const path = require('path')


const server=http.createServer(handler)

function handler(req,res){
if (req.url==="/"){
    let filepath=path.join(__dirname,'public','form.html')
    fs.readFile(filepath, 'utf8',(err,data)=>{
        res.writeHead(200, {'Content-Type':'text/html'})
        res.end(data)
        console.log(req.url)
    })
}

}

server.listen(3000,"127.0.0.1")
// const form = document.querySelector('form');
// form.addEventListener('submit', handleSubmit);

// function handleSubmit(event) {
//     event.preventDefault();
  
//     const data = new FormData(event.target);
  
//     const value = data.get('email');
  
//     console.log({ value });
//   }
  

