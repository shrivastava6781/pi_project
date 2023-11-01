const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
var cors = require('cors')
const app = express();

app.use(bodyParser.json());
app.use(cors())

mongoose.connect("mongodb+srv://Aditya97:pJfsA3oNDvrWVBUx@cluster0.iio7ebp.mongodb.net/webmaster?retryWrites=true&w=majority")
.then(()=>{
    console.log("database connected hogya ");
})
.catch((err)=>console.log(err))

const User = mongoose.model('User', {
  username: String,
  password: String,
});

const Item = mongoose.model("Item",{
    name : String,
    phone : Number,
    email : String,
})
// Signup route
app.post('/signup', async (req, res) => {
  const { username, password} = req.body;

  try {
    const existingUser = await User.findOne({ username });
    
    if (existingUser) {
      return res.status(409).json({ message: 'Username already exists' });
    }

    const newUser = new User({ username, password });
    await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// form
app.post('/forms', async (req, res) => {
    try {
      const { name , phone ,email} = req.body;
      const newItem = new Item({
        name,
        phone,
        email,
      });
    const savedItem = await newItem.save();
    console.log(savedItem)
      res.status(201).json(savedItem);
    } catch (error) {
        console.log({error})
       res.status(400).json({ error });
    }
  });

//   send data forms

app.post('/response', async (req, res) => {
    try {
        const { name, phone, email } = req.body;

        // Use the 'Item' model to find records in the database.
        const found = await Item.find({ name, email, phone });
        
        // You should use 'console.log' with the 'req.body' to see the received data.
        console.log('Received data:', req.body);


        // Respond to the client with the 'found' data.
        res.status(200).json({ found });

    } catch (err) {
        // In the catch block, you should respond with an error status and message.
        res.status(400).json({ error: err.message });
    }
});

// app.post('/response', async (req, res) => {
//     try {
//         const { name , phone ,email} = req.body;
//         const found = await Item.find({name,email,phone})
//         console.log('Received data:', Item);
//         res.send('Data received successfully.');
//         res.status(200).json({found})
//         res.send(found)
//     } catch (err) {
//         res.status(400).json({err})
//     }

// });

//   const Item = req.body;
//   const { name , phone ,email} = req.body;
//   // Process the data as needed, e.g., save it to a database
//   console.log('Received data:', Item);
//   console.log(Item)
//   res.send('Data received successfully.');

// // Signin route
// app.post('/signin', async (req, res) => {
//   const { email, password} = req.body;

//   try {
//     const existingUser = await User.findOne({ email });
    
//     if (existingUser) {
//       return res.status(409).json({ message: 'Username already exists' });
//     }

//     const newUser = new User({ email, password });
//     await newUser.save();

//     res.status(201).json({ message: 'User registered successfully' });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Server error' });
//   }
// });

// getapi from
// app.get('forms', async (req, res) => {
//     try {
//       const data = await newItem.find(); // Replace this with your own query
//       res.json(data);
//     } catch (err) {
//       console.error(err);
//       res.status(500).send('Internal Server Error');
//     }
//   });
  

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});



// const express = require('express');
// const bodyParser = require('body-parser');
// const app = express();
// const port = 3000;

// app.use(bodyParser.json());

// app.post('/receive-data', (req, res) => {
//   const data = req.body;
//   // Process the data as needed, e.g., save it to a database
//   console.log('Received data:', data);
//   res.send('Data received successfully.');
// });

// app.listen(port, () => {
//   console.log(`Express app listening on port ${port}`);
// });
