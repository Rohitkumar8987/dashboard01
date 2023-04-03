
import React, {useRef, useEffect,useState} from 'react'
import Direct from './Direct'

export default function Practice() {

  const name=useRef()
  const email=useRef()
  const password=useRef()
   const[showDirect,setShowDirect]=useState(false)
   const[show,setShow]=useState(false)
const localSignup=localStorage.getItem("signup")
const localEmail=localStorage.getItem("email")
const localName=localStorage.getItem("name")
const localPassword=localStorage.getItem("password")

  useEffect(()=>{
    if(localSignup){
      setShowDirect(true)
    }
    if(localEmail){
      setShow(true)
    }
  })
  const handleClick=()=>{
    if(name.current.value &&email.current.value &&password.current.value)
    // console.log(name.current.value ,email.current.value ,password.current.value)
    {
      localStorage.setItem("name",name.current.value)
      localStorage.setItem("email",email.current.value)
      localStorage.setItem("password",password.current.value)
      localStorage.setItem("signup",email.current.value)
      alert("successfully !!")
      window.location.reload()
    }
  }
   const handleSignIn=()=>{
    if(email.current.value==localEmail &&password.current.value==localPassword)
    {
      localStorage.setItem("signup",email.current.value)
      window.location.reload()
    }
    else{
      alert("please Enter valid Email And Password ")
    }
   }
  return (
    <div>
      {showDirect? <Direct/>:
      (show?
          <div className="container">
           <h1 className='d-flex justify-content-evenly'>Hello {localName}</h1>
            <div className="input_space">
              <input type="text" placeholder='email' ref={email} />
            </div>
            <div className="input_space">
              <input type="Password" placeholder='password' ref={password} />
            </div>
            <button onClick={handleSignIn} >Sign In</button>
          </div>
          :
          <div className="container">
          <div className="input_space">
            <input type="text" placeholder='name' ref={name} />
          </div>
          <div className="input_space">
            <input type="text" placeholder='email' ref={email} />
          </div>
          <div className="input_space">
            <input type="Password" placeholder='password' ref={password} />
          </div>
          <button onClick={handleClick} >Sign up</button>
        </div>)
        }
    </div>
  )
}




// import React, {useState} from 'react'
// import {useNavigate} from 'react-router-dom'



// export default function Login() {
//     const navigate = useNavigate();
//     const [login, setLogin] = useState('')

//     const handleChange = (e) => {
//         const {name, value} = e.target;
//         // setSingUp({...signup, [name]: value})
//         setLogin(prev => ({...prev, [name]: value}))
//     }
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         if(localStorage.getItem('signup')) {
//             const localData = JSON.parse(localStorage.getItem('signup'));
//             // console.log(JSON.parse(localData))
//             // console.log(localData)
//             if(login?.email === localData?.email && login?.password === localData?.password) {
//                 navigate('/dashboard')
//             } else {
//                 alert('Please Check Email And Password')
//             }
//         }
//     }
//     console.log(login)
//   return (
//     <>
//         <form onSubmit={(e) => handleSubmit(e)}>
//         <input type="t1ext"   onChange={(e) => handleChange(e)}/>
//         <input type="text"   onChange={(e) => handleChange(e)}/>
//         <button name="submit" className='btn btn-success' disabled={''}>Submit</button>
//     </form>
//     </>
//   )
// }





// import React ,{useState}from 'react'

// export default function Practice() {
   
//   const[ number,setNumber]=useState('');
//   const[number1,setNumber1]=useState(' ');
//   const[disable, setDisable]=useState(0);

//     const handlenumber=(e)=>{
//       const getnumber= e.target.value;
//       setNumber(getnumber);
     
//     }
//     const handlenumber1 =(e)=>{
//       const getnumber1= e.target.value;
//       setNumber1(getnumber1);
//     }
//     const handleSubmit=(e)=>{
//         e.preventDefault();

//         console.log(`Get number ${number} , ${number1}`);
//         setDisable(true);
//     }

//   return (
//     <>
//     <div className="d-flex justify-content-evenly" style={{width:"50%"}}>
//       <form action="" onSubmit={handleSubmit}>
//        <input className='form-control' placeholder='number' onChange={(e)=>handlenumber(e)} />
//        <input className='form-control'  placeholder='number1' onChange={(e)=>handlenumber1(e)} />
//        <button name="submit" className='btn btn-success' disabled={''}>Submit</button>
//        </form>
//        </div>
//     </>
//   )
// }





// import React, { useState } from "react";
// const App = () => {
//   const [update,setUpdate] = useState('');
//   const [show,setShow] = useState([]);
//   const name = (event) => {
//     setUpdate(event.target.value)
//   }
//   const addme = () => {
//       setShow([...show,update])
//       setUpdate('')
//   }
//   const handleDelete = (index) => {
//     let newArray = [...show];
//     newArray.splice(index,1);
//     setShow(newArray);
//   }
//   const handleEdit = (index) => {
//     setUpdate(index)
//    const updat = show?.map(item => {
//       if(item === index) {
//         item = update
//       }
//       return item;
//     })
//     setShow(updat)
//   }
//   return(
//     <>
//     <input type="text" placeholder="Enter Something..." onChange={name} value={update}/>
//     <button onClick={addme}>Add</button>
//     {
//       show.map((item,index,array)=>{
//         // return(
//         //   <div key={index}>
//         //     {item}<button onClick={()=>handleDelete(index)}>Delete</button><button onClick={()=>handleEdit(item)}>Edit</button>
//         //   </div>
//         // )
//       })
//     }
//     </>
//   )
// }
// export default App;




// import React, { useState, useEffect } from "react";
// import { Row, Col, Divider } from "antd";

// export default function Dashboard() {
//   const [animalsList, setAnimalsList] = useState([]);
//   const [selectedAnimals, setSelectedAnimals] = useState("");
//   const [multiSelectedAnimals, setMultiSelectedAnimals] = useState([]);

//   useEffect(() => {
//     let Animals = ["Tiger", "Monkey", "Dogs", "Lions"];
//     setAnimalsList(Animals);
//   }, []);

//   return (
//     <Col>
//       <Row>
//         <Col span={16}>
//           <h1>Animals List</h1>
//           {animalsList.map((animals) => (
//             <h2
//               style={{ color: animals === selectedAnimals ? "red " : "green" }}
//               onClick={() => {
//                 setSelectedAnimals(animals);
//               }}
//             >
//               {animals}
//             </h2>
//           ))}
//         </Col>
//         <Col span={8}>
//           <h1>Cart</h1>
//           <h2>You have selected {selectedAnimals} animals.</h2>
//         </Col>
//       </Row>

//       <Divider />

//       <Row>
//         <Col span={16}>
//           <h1>Animals List</h1>
//           {animalsList.map((animals) => (
//             <h2
//               style={{
//                 color: multiSelectedAnimals.includes(animals) ? "red" : "green",
//               }}
//               onClick={() =>
//                 setMultiSelectedAnimals([...multiSelectedAnimals, animals])
//               }
//             >
//               {animals}
//             </h2>
//           ))}
//         </Col>
//         <Col span={8}>
//           <h1>Cart Items ({multiSelectedAnimals.length})</h1>
//           <h2>You have selected {multiSelectedAnimals.join(", ")} animals(s).</h2>
//           <button onClick="disable(this)"> disable</button>
//         </Col>
//       </Row>
//     </Col>
//   );
// }