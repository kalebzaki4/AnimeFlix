const express = require("express");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const fs = require("fs");
const app = express();

const USERS_FILE = "./users.json";
const SECRET = "sua_chave_secreta_supersegura"; 

app.use(cors());
app.use(express.json());

function readUsers() {
  if (!fs.existsSync(USERS_FILE)) return [];
  return JSON.parse(fs.readFileSync(USERS_FILE, "utf8"));
}
function writeUsers(users) {
  fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2));
}

app.post("/api/signup", async (req, res) => {
  const { email, password, username } = req.body;
  if (!email || !password || !username) return res.status(400).json({ error: "Dados obrigatórios." });
  const users = readUsers();
  if (users.find(u => u.email === email)) return res.status(409).json({ error: "Email já cadastrado." });
  const hash = await bcrypt.hash(password, 10);
  users.push({ email, username, password: hash });
  writeUsers(users);
  res.json({ message: "Usuário criado com sucesso." });
});

app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;
  const users = readUsers();
  const user = users.find(u => u.email === email);
  if (!user) return res.status(401).json({ error: "Credenciais inválidas." });
  const valid = await bcrypt.compare(password, user.password);
  if (!valid) return res.status(401).json({ error: "Credenciais inválidas." });
  const token = jwt.sign({ email: user.email, username: user.username }, SECRET, { expiresIn: "2h" });
  res.json({ token, username: user.username, email: user.email });
});

function auth(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).json({ error: "Token ausente." });
  const token = authHeader.split(" ")[1];
  try {
    req.user = jwt.verify(token, SECRET);
    next();
  } catch {
    res.status(401).json({ error: "Token inválido." });
  }
}

app.get("/api/profile", auth, (req, res) => {
  res.json({ user: req.user });
});

app.listen(3001, () => console.log("Auth server rodando na porta 3001"));
