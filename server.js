
const cors = require("cors");
const Db = require("./config");
const express = require('express');
const session = require("express-session");
const cookieParser = require("cookie-parser");

const app = express()
const port = 5000
const bodyParser = require('body-parser'); // middleware



// Static Files
app.use(express.static('public'));
app.use(express.json());
app.use(cors());
// Specific folder example
 app.use('/css', express.static(__dirname + 'public/css'))
 app.use('/js', express.static(__dirname + 'public/js'))
 app.use('/img', express.static(__dirname + 'public/images'))
 app.use(bodyParser.urlencoded({ extended: true }));
 app.use(cookieParser());
 app.use(session({ secret: "gumpu2002", saveUninitialized: true, resave: true }));
 

// Set Views
app.set('views', './views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
const User = Db.collection("Users")



// Navigation
app.get('/', async(req, res) => {
  res.render('Home.html')
   //const snapshot = await HospitUseral.get()
 //  res.sendFile(path.join(__dirname + '/Home.html'));
//  const collections = await User.listCollections();
//  collections.forEach(collection => {
//    console.log('Found subcollection with id:', collection.id);
// const snapshot = await User.where('email','==',`latha@gmail.com`)
// .get();

})
app.get('/AboutUs', (req, res) => {
   res.render('AboutUs.html')   
})
app.get('/ULogin', (req, res) => {
   res.render('ULogin.html')   
})
app.get('/Dlogin', (req, res) => {
   res.render('Dlogin.html')   
})
app.get('/DSelector', (req, res) => {
   res.render('DSelector.html')   
})
app.get('/consult', (req, res) => {
   res.render('consult.html')   
})
app.get('/Home', (req, res) => {
   res.render('Home.html')   
})

app.get('/appointment', (req, res) => {
   
   try {
   if(req.session.user.email)
   {
   //res.render('appointment.html',{user:req.session.user.email })  
      res.render('appointment.html')
   }  
}  
catch(e){
    
   console.log("not authorized")
   res.render('ULogin')

}
})
app.post('/ULogin', async(req, res) => {
  
   let email = req.body.email
   let Password = req.body.Password
   const user = {
      email: req.body.email,
      Password: req.body.Password
  };
   //console.log({user})
   const snapshot = await User.where('email','==',`${email}`)
                              .where('Password','==',`${Password}`)
                              .get();
if (snapshot.empty) {
console.log('No matching documents.');
 res.send("No User Available")
 res.render('ULogin.html')
}  
 else{

console.log('User available.');
console.log(` email: ${email} Password: ${Password} `)
    req.session.user = user;
    req.session.save();
    res.redirect('/appointment')
 }
 

   
  // res.render('ULogin.html')
})
app.get('/hospitals',async(req,res) =>{
   const Hospitals = Db.collection('hospitals')
   const snapshot = await Hospitals.get();
   snapshot.forEach(doc => {
     console.log(doc.id, '=>', doc.data());
   });

    
}
)
  


app.get('/Logout', (req, res) => {

   req.session.destroy()
   res.render('Home.html')

})
app.post('/signup',async(req, res) => {
   
      let Tnc =req.body.Tnc
      let fName = req.body.fName
      let lName = req.body.lName
      let email = req.body.email
      let Password = req.body.Password
      let data= req.body


  
   await User.add(data );
  
    //console.log(data)
    res.render('ULogin.html')

})



app.listen(port, () => console.info(`App listening on port ${port}`))
































