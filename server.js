const jsonServer = require("json-server");
const auth = require("json-server-auth");
const cors = require("cors");
const port = process.env.PORT || 3001;

const app = jsonServer.create();
const router = jsonServer.router("db.json");

app.db = router.db;

const rules = auth.rewriter({
	users: 600,
	profile: 660,
	"/profile/:userId": "/profile?userId=:userId",
	planets: 444,
	posts: 444,
	"/posts/?category=:category": "/posts?category=:category",
	extras: 444
});

app.use(cors());
app.use(rules);
app.use(auth);
app.use(router);
app.listen(port);

console.log("Server is running on port:", port);

/* A senha do Kenzinho é 123456 */
/* A senha do Vivy é 987654 */
