const express = require("express");
const sequelize = require('sequelize')

const exphbs = require('express-handlebars');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const app = express();
const port = 4000;

// To support URL-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));
// To parse cookies from the HTTP Request
app.use(cookieParser());
const User = require("./models/user1.js")

app.engine('hbs', exphbs({
    extname: '.hbs'
}));
app.set('view engine', 'hbs');


app.get('/', function (req, res) {
    res.render('home');
});
app.get('/register', (req, res) => {
    res.render('register');
});
const crypto = require('crypto');

const getHashedPassword = (password) => {
    const sha256 = crypto.createHash('sha256');
    const hash = sha256.update(password).digest('base64');
    return hash;
}

// app.post('/register', async (req, res) => {
//     try {
//     const newUser = new User1(req.body)
//     await newUser.save()
//     res.json({ User1: newUser }) // Returns the new user that is created in the database
//     } catch(error) {
//     console.error(error)
//     }
//     });
app.post('/register', async (req, res) => {
    try {
        const { secondName, firstName, email, password } = req.body;
        const User1 = req.body;
        const hashedPassword = getHashedPassword(password);
        const checkmMail = User1.findOne({ where: { email: email } });
        if (checkmMail) {
            res.json(err);
            return;
          }
          
        const NewUser = User1.create({
            secondName,
            firstName,
            email,
            password: hashedPassword,
          });
        
        return res.json(NewUser) // Returns the new user that is created in the database

// } catch(error) {

// console.error(error)

// }

//  });
//     }

//     const { email, firstName, secondName, password, confirmPassword } = req.body;
//     const checkmail = User1.findOne({ where: { email: email } });
//     const hashedPassword = getHashedPassword(password);
//     if (checkmail) {
//         res.json(error);
//         return;
//     }
    
//     const users = await User1.create({
//         firstName,
//         secondName,
//         email,
//         password
//     });


//     return res.json(users);
    
  


//         const users = User1.create({
//             firstName,
//             secondName,
//             email,
//             password: hashedPassword
//         });
//         const users = User1.findAll()
//         users.push({
//             firstName,
//             secondName,
//             email,
//             password: hashedPassword
//         });

//         res.render('login', {
//             message: 'Registration Complete. Please login to continue.',
//             messageClass: 'alert-success'
//         });
//     } else {
//         res.render('register', {
//             message: 'Password does not match.',
//             messageClass: 'alert-danger'
//         });
//     }
// });

app.get('/login', (req, res) => {
    res.render('login');
});
const generateAuthToken = () => {
    return crypto.randomBytes(30).toString('hex');
}

const authTokens = {};

app.post('/login', (req, res) => {
    const { email, password } = req.body;
    const hashedPassword = getHashedPassword(password);

    const user = users.find(u => {
        return u.email === email && hashedPassword === u.password
    });

    if (user) {
        const authToken = generateAuthToken();

        // Store authentication token
        authTokens[authToken] = user;

        // Setting the auth token in cookies
        res.cookie('AuthToken', authToken);

        // Redirect user to the protected page
        res.redirect('/protected');
    } else {
        res.render('login', {
            message: 'Invalid username or password',
            messageClass: 'alert-danger'
        });
    }
});
app.use((req, res, next) => {
    // Get auth token from the cookies
    const authToken = req.cookies['AuthToken'];

    // Inject the user to the request
    req.user = authTokens[authToken];

    next();
});

app.get('/protected', (req, res) => {
    if (req.user) {
        res.render('protected', {
            users: {
                firstName: "John",
                secondName: "Doe",
                email: "johndoe@email.com",
                password: "XohImNooBHFR0OVvjcYpJ3NgPQ1qq73WKhHvch0VQtg=",
            },
            schedules: {
                id: "2",
                user_id: "2",
                day: "3",
                start_at: "12",
                end_at: "14",
            },
        });
    } else {
        res.render('login', {
            message: 'Please login to continue',
            messageClass: 'alert-danger'
        });
    }
});
const requireAuth = (req, res, next) => {
    if (req.user) {
        next();
    } else {
        res.render('login', {
            message: 'Please login to continue',
            messageClass: 'alert-danger'
        });
    }
};

app.get('/protected', requireAuth, (req, res) => {
    res.render('protected');
});

app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});

