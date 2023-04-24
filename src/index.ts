import http from "http";

const PORT = 5000;

const server = http.createServer(async (req, res) => {
    if(req.url === "/api" && req.method === "GET") {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.write("Test response from the API\n")
        res.end()
    } else {
        res.writeHead(404, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "Route not found" }));
    }
});

server.listen(PORT, () => {
    console.log(`server started on port: ${PORT}`)
});
