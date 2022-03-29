const bodyParser = require("body-parser");
const jsonServer = require("json-server");

const server = jsonServer.create();
const router = jsonServer.router("./mock/db.json");
const jwtService = require("./services/jwtService");
const authRoutes = require("./routes/authRoutes");
server.use(jsonServer.defaults());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
// server.use("/api", authRoutes);

// server.use(/^(?!\/auth).*$/, (req, res, next) => {
//   console.log("middleware");

//   if (
//     req.headers.authorization === undefined ||
//     req.headers.authorization.split(" ")[0] !== "Bearer"
//   ) {
//     const status = 401;
//     const message = "Bad authorization header";
//     res.status(status).json({ status, message });
//     return;
//   }
//   try {
//     jwtService.verifyToken(req.headers.authorization.split(" ")[1]);
//     next();
//   } catch (err) {
//     const status = 401;
//     const message = "Error: access_token is not valid";
//     res.status(status).json({ status, message });
//   }
// });

server.get('/', function (req, res) {
  res.send('GET request to the homepage');
});

server.use(router);

server.listen(3000, () => {
  console.log("Run Fake API Server");
});
