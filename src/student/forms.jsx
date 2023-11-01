
import React, { useState } from 'react';

function Forms() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await fetch('http://localhost:3000/forms', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
  
        if (response.status === 200) {
          // Handle successful signup
          response.status(200).json({ message: 'post Successfully' });
        } else {
          // Handle error or display error message
          console.log("error")
        }
      } catch (error) {
        // Handle network or other errors
        console.error(error);
      //   response.status(500).json({ message: 'Server error' });
      }
      setFormData({
        name: '',
        phone: '',
        email: '',
      })
    console.log('Form Data:', formData);
  }


  return (
    <div>
      <h2>User Details Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="phone">Phone:</label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Forms;

// import React, { useState } from 'react';
// import axios from 'axios';

// function App() {
//   const [data, setData] = useState('');
//   const [message, setMessage] = useState('');

//   const sendDataToExpress = async () => {
//     try {
//       const response = await axios.post('/receive-data', { data });
//       setMessage(response.data);
//     } catch (error) {
//       console.error('Error sending data:', error);
//       setMessage('An error occurred while sending data.');
//     }
//   };

//   return (
//     <div>
//       <h1>React to Express Data Transfer</h1>
//       <input
//         type="text"
//         value={data}
//         onChange={(e) => setData(e.target.value)}
//         placeholder="Enter data"
//       />
//       <button onClick={sendDataToExpress}>Send Data to Express</button>
//       <p>{message}</p>
//     </div>
//   );
// }

// export default App;


// import React, { useState } from 'react'

// const Forms = () => {
//     const [name, setName] = useState("")
//     const [email, setEmail] = useState("")
//     const [phone, setPhone] = useState("")
//     // const [picture, setPicture] = useState({})

//     const handleName = (e) => {
//         setName(e.target.value);
//         console.log(setName)
//     }
//     const handleEmail = (e) => {
//         setEmail(e.target.value);
//     }
//     const handlePhone = (e) => {
//         setPhone(e.target.value);
//     }
//     // const handlefile = (e) => {
//     //     setPicture(e.target.value);
//     // }


    // const handleonSubmit = async (e) => {
    //     e.preventDefault();
    //     try {
    //       const response = await fetch('http://localhost:3000/forms', {
    //         method: 'POST',
    //         headers: {
    //           'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify(name,email,phone),
    //       });
    
    //       if (response.status === 200) {
    //         // Handle successful signup
    //         response.status(200).json({ message: 'post Successfully' });
    //       } else {
    //         // Handle error or display error message
    //         console.log("error")
    //       }
    //     } catch (error) {
    //       // Handle network or other errors
    //       console.error(error);
    //     //   response.status(500).json({ message: 'Server error' });
    //     }
    //     setName("")
    //     setEmail("")
    //     setPhone("")
    //   };

//     return(
//         <>
//         <div className="container-div">
//             <form onClick={handleonSubmit} className="form-box">
//             <h2>Forms</h2>
//             <input value = {name} onChange={handleName} placeholder="Name" required/>
//             <br />
//             <input className="input-field" value = {email} onChange={handleEmail}  placeholder="Email" required/>
//             <br />
//             <input className="input-field" value = {phone} onChange={handlePhone} placeholder="Phone" required/> 
//             <br />
//             <input type="file" id="myFile" name="filename"/>
//             <br />
//             <button type='submit' className="buttons">Submit</button>
//         </form>
//         </div>
//         </>
//     )
// };


// export default Forms

