const jsonServer = require("json-server");
const auth = require("json-server-auth");
const cors = require("cors");
const port = process.env.PORT || 3001;
const { v4: uuidv4 } = require("uuid");

const app = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

router.db._.id = "uuid";
app.db = router.db;
app.use(jsonServer.bodyParser);
app.use(middlewares);

app.use((req, res, next) => {
  const uuidUrls = ["/users", "/apiList"];
  if (req.method === "POST" && uuidUrls.includes(req.originalUrl)) {
    const newUuid = uuidv4();
    const newBody = { ...req.body, uuid: newUuid };
    req.body = newBody;
  }
  next();
});
const rules = auth.rewriter({
  users: 600,
  apiList: 664,
  favoriteApi: 660,
});

app.use(cors());
app.use(rules);
app.use(auth);
app.use(router);
app.listen(port);

console.log("Server is running on port:", port);
