import express from 'express';
import http from 'http';
import fs from 'fs';


// const http = require('http');
// const http = http();






let port = 8080;




const server = http.createServer((req, response) => {
    response.writeHead(200, {
        'Content-Type': 'text/html'
    });

    if (req.url == '/') {
        fs.readFile('index.html', null, function (error, data) {
            if (error) {
                response.writeHead(404);
                respone.write('Whoops! File not found!');
            } else {
                response.write(data);
            }
            response.end();
        });

}
else if (req.url == '/home') {
 

    fs.readFile('index.html', null, function (error, data) {
        if (error) {
            response.writeHead(404);
            respone.write('Whoops! File not found!');
        } else {
            response.write(data);
        }
        response.end();
    });

}

else if (req.url == '/about') {
     



    
    fs.readFile('about.html', null, function (error, data) {
        if (error) {
            response.writeHead(404);
            respone.write('Whoops! File not found!');
        } else {
            response.write(data);
        }
        response.end();
    });
}

else if (req.url == '/contact') {
     



    
    fs.readFile('contact.html', null, function (error, data) {
        if (error) {
            response.writeHead(404);
            respone.write('Whoops! File not found!');
        } else {
            response.write(data);
        }
        response.end();
    });
}

});



server.listen(port, () => {
    console.log(`Server is listening on port number: ${port}`);

});





// http.createServer(function (req, res) {
//     res.writeHead(200, {'Content-Type': 'text/html'});

// if (req.url == '/') {
//     res.write('Hello World!');  //write a response to the client

// }
// else if (req.url == '/home') {
//     res.write('Hello World!');  

// }

// else if (req.url == '/contact') {
//     res.write('Hello COntact!'); 

// }

// else if (req.url == '/about') {
//     // res.writeHead(200, {"Content-Type": "text/html"});

//     // res.write('Whoops! File  found!');
//     const htmlFile = 'index.html';
//     // fs.createReadStream(htmlFile).pipe(res);

//     fs.readFile('index.html',{encoding:'utf8'}, function read(err, data) {
//         if (err) {
//             throw err;
//         }
//         var content = data;
//     // res.write('Whoops! File  found!');
//     res.writeHead(200, {"Content-Type": "text/html"});
//         res.write(content);

      
//         console.log(content);  
//         res.end(content);
       
//     });

    


//     // fs.readFileSync('./index.html',  function (error, data) {
//     //     res.write('Whoops! File  found!');
//     //     if (error) {
//     //         res.writeHead(404);
//     //         res.write('Whoops! File not found!');
//     //     } else {
//     //         res.write('Whoops! File  found!');
//     //         res.write(data);
//     //     }
//     //     res.end();
//     // });

//     // res.write('Hello about!'); 

// }



   
//     res.end(); //end the response
//   }).listen(8080); 

// // const app = express();
// // const PORT = 5000;
// // // console.log(__dirname);
// // app.get('/', (req, res)=>{
// //     // console.log(__dirname)
// //     // res.sendFile('index.html');
// //     res.send("<html> <head>server Response</head><body><h1> This page was render direcly from the server <p>Hello there welcome to my website</p></h1></body></html>");
// //     // res.send('HOMEPAGE');
// // })


// // app.listen(PORT, ()=> {
// //     console.log(`sever running on PORT http://localhost:${PORT}`)
// // });