require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cors = require('cors')
const multer = require('multer')
const path = require('path');

const app = express();
app.listen(3002, () => {
  console.log('🟢 Server running on port http://localhost:3002')
})

// Config JSON response
app.use(express.json());
app.use(cors())

// Open Route
app.get("/", (req, res) => {
  console.log("🟪 Bem vindo a API!")
  res.status(200).json({ msg: "Bem vindo a API!" });
});

// Private Route
app.get("/user/:id", checkToken , async (req, res) => {
  const id = req.params.id;

  // check if user exists
  const user = await User.findById(id, "-password");

  if (!user) {
    console.log("🔴Usuário não encontrado!")
    return res.status(404).json({ msg: "Usuário não encontrado!" });
  }

  res.status(200).json({ user });
});

function checkToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) return res.status(401).json({ msg: "Acesso negado!" });

  try {
    const secret = process.env.SECRET;

    jwt.verify(token, secret);

    next();
  } catch (err) {
    res.status(400).json({ msg: "🔴 O Token é inválido!" });
  }
}
app.get("/users", async (req, res) => {
  const getAllUsers = async () => {
    try {
      const users = await User.find();
      return users;
    } catch (error) {
      // Trate o erro de forma adequada
      throw new Error('Erro ao buscar os usuários');
    }
  };
  const users = await getAllUsers();
  res.send({ users });
})


app.post("/auth/register", async (req, res) => {
  const { name, email, password, confirmpassword, cpf } = req.body;
  // validations
  if (!name) {
    return res.status(422).json({ msg: "🟡 O nome é obrigatório!" });
  }

  if (!email) {
    return res.status(422).json({ msg: "🟡 O email é obrigatório!" });
  }

  if (!password) {
    return res.status(422).json({ msg: "🟡 A senha é obrigatória!" });
  } 

  if(!cpf) {
    return res.status(422).json({ msg: "🟡 O CPF é obrigatória!" });
  }

  if (password != confirmpassword) {
    return res
      .status(422)
      .json({ msg: "🟡 A senha e a confirmação precisam ser iguais!" });
  }

   // check if user exists
   const userExists = await User.findOne({ email: email });

   if (userExists) {
     return res.status(422).json({ msg: "🔴 Por favor, utilize outro e-mail!" });
   }
 
  const user = new User({
    name,
    email,
    password,
    cpf
  });

  try {
    await user.save();
    res.status(201).json({ msg: "🟢 Usuário criado com sucesso!" });
  } catch (error) {
    res.status(500).json({ msg: error });
  }

});


app.post("/auth/login", async (req, res) => {
  const { email, password } = req.body;

  // validations
  if (!email) {
    return res.status(422).json({ msg: "🟡 O email é obrigatório!" });
  }

  if (!password) {
    return res.status(422).json({ msg: "🟡 A senha é obrigatória!" });
  }

    try {
      const loginServices = (email) => User.findOne({email : email}).select("+password")
      const user = await loginServices(email)
      const passwordIsValid = await bcrypt.compare(password , user.password)

      console.log(passwordIsValid)


      if ( passwordIsValid == true ) {
        console.log('🟢 Usuário autenticado com sucesso!')

        const secret = process.env.SECRET;
        const token = jwt.sign(
          {
            id: user._id,
          },
          secret
        );

        res.status(200).json({ msg: "🟢 Autenticação realizada com sucesso!", token });

      } else {
        console.log('🔴 Credenciais inválidas')
        res.status(401).send(`🔴 Senha inválida`)      
      }
    }catch (err) {
      res.status(500).send(err.message)
    }
});


app.get("/posts", async (req, res) => {
  const files = await File.find();
  
  return res.json(files);
});

const User = require('./models/User');

// Configuração do Multer para lidar com o upload de arquivos
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });
// Rota para receber os arquivos
app.post('/api/upload', upload.single('file'), async (req, res) => {
  if (!req.file) {
    return res.status(400).send('Nenhum arquivo enviado.');
  }

  try {
    // Atualizar a foto de perfil do usuário no banco de dados
    const user = await User.findOneAndUpdate(
      { email : email }, // Condição para encontrar o usuário
      { profileImage: req.file.filename }, // Dados para atualizar (nome do arquivo)
      { new: true } // Retorna o usuário atualizado
    );

    res.send('Arquivo enviado e perfil atualizado com sucesso!');
  } catch (error) {
    console.error('Erro ao enviar o arquivo e atualizar o perfil:', error);
    res.status(500).send('Erro ao enviar o arquivo e atualizar o perfil.');
  }
});

app.get('user/64a092c59502c6bfdc630756', checkToken , async (req, res) => {
  const id = req.params.userId;
  console.log(id)
  // check if user exists
  const user = await User.findById(id, "-password");

  if (id !== req.user.id) {
    console.log("🔴 Acesso negado")
    return res.status(404).json({ msg: "Acesso negado" });
  }

  res.status(200).json({ user });
});


const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASS;

mongoose
  .connect(
    `mongodb+srv://${dbUser}:${dbPassword}@smartidbd.8mfges4.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(() => {
    console.log(`🟢 Connection established with SmartID_BD`);
    app.listen(3000);
  })
  .catch((err) => {
    console.log(`🔴 Error connecting to Database because ${err}`);
    return
  })