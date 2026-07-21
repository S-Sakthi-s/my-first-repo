const http = require("http")
http.createServer((req,res)=>{res.end("Order Service Number")}).listen(3000);
console.log("Server started on port 3000");
