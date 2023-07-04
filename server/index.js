require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const cors = require('cors')
const multer = require('multer')
const bcrypt = require("bcrypt");
const { v4: uuidv4 } = require('uuid');

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

// Models
const User = require('./models/User');

// App vai ser usado em express e servidor rodando na porta 3002
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
    return res.status(404).json({ msg: "Usuário não encontrado!" });
  }

  res.status(200).json({ user });
});

app.get('/dadosusuario/:id', async (req, res) => {
  console.log("🟪 Bem vindo a API!");
  console.log("ID do usuário:", req.params.id);

  try {
    const user = await User.findById(req.params.id);
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao obter os dados do usuário' });
  }
});

// Função de checar o token do usuário
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

// Mostrar todos os usuários na tela
app.get("/users", checkToken, async (req, res) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, process.env.SECRET);
    const userId = decodedToken.id;
    const user = await User.findOne({ _id: userId }); // Busca o usuário com base no ID

    if (!user) {
      throw new Error("Usuário não encontrado");
    }

    res.json(user);
  } catch (error) {
    res.status(500).json({ error: "Erro ao obter os dados do usuário" });
  }
});

// Com o método post para fazer login do usuário
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
      const loginServices = (email) => User.findOne({ email: email }).select("+password");
      const user = await loginServices(email);
    
      if (!user) {
        console.log('🔴 Usuário não encontrado');
        return res.status(401).send('Credenciais inválidas');
      }

      const passwordIsValid = await bcrypt.compare(password, user.password);
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

// Com o método post para fazer register do usuário
app.post("/auth/register", async (req, res) => {
  const { name, email, password, confirmpassword, cpf} = req.body;
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

  console.log( name , email, password, confirmpassword, cpf)

  // check if user exists
  const userExists = await User.findOne({ email: email });

  if (userExists) {
    return res.status(422).json({ msg: "🔴 Por favor, utilize outro e-mail!" });
  }

  const userId = uuidv4(); // Gerar um ID único
  const user = new User({
    userId,
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

// Retorna todos os arquivos adicionados ao banco
app.get("/posts", async (req, res) => {
  const files = await File.find();
  
  return res.json(files);
});


// Configuração do Multer para lidar com o upload de arquivos
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Especifique a pasta de destino para os arquivos
  },
  filename: (req, file, cb) => {
    const timestamp = Date.now(); // Crie um timestamp para evitar conflitos de nome
    const extension = file.originalname.split('.').pop(); // Obtenha a extensão do arquivo
    cb(null, `${timestamp}.${extension}`); // Defina o nome do arquivo
  },
});

const upload = multer({ storage: storage });

const File = require('./models/Picture');

// Rota para upload de imagem de perfil
app.post('/perfil/:id', upload.single('file'), checkToken, async (req, res) => {
  try {
    const filename = req.file.filename
    const imagePath = req.file.path

    console.log(filename)
    console.log(imagePath)
    const id = req.params.id;

    // check if user exists
    const user = await User.findById(id);
  
    if (!user) {
      return res.status(404).json({ msg: "Usuário não encontrado!" });
    }

    const file = req.file; // Obtenha o arquivo enviado
    let fileURI; // Defina a variável fileURI

    if (file) {
      fileURI = req.protocol + '://' + req.get('host') + '/' + file.filename;
    } else {
      return res.status(422).json({ msg: "🟡 Nenhum arquivo enviado" });
    }

    // Atualize o perfil do usuário com a URL da imagem
    user.profileImage = fileURI;
    console.log(fileURI)
    // Salve as alterações no banco de dados
    await User.findOneAndUpdate({ _id: id }, { profileImage: user.profileImage });

    // Salve as alterações no campo 'profileImage' do usuário
    await user.updateOne({ profileImage: fileURI });

    // Envie a resposta de sucesso
    console.log('🟢 Imagem de perfil atualizada com sucesso!');
    res.send('🟢 Imagem de perfil atualizada com sucesso!');

    } catch (error) {
      console.error('🔴 Erro ao enviar o arquivo e atualizar o perfil:', error);
      res.status(500).send('Erro ao enviar o arquivo e atualizar o perfil.');
    }
});
