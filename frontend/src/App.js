import React,{useState} from "react";
import axios from 'axios';
import {useNavigate, Link } from "react-router-dom";


function App() {
//   const navigate = useNavigate();
//   const [user, setUser] = useState("");
//   const [pass, setPass] = useState("");

//   function handleUser(evt) {
//     setUser(evt.target.value);
//   }

//   function handlePass(evt) {
//     setPass(evt.target.value);
//   }

//   function check() {
//   axios.post("http://localhost:5000/login", {
//     username: user,
//     password: pass
//   })
//     .then((data) => {
//       if (data.data === true) {
//         navigate("/success");
//       } else {
//         navigate("/fail");
//       }
//     })
//     .catch((error) => {
//       console.error("Login error:", error);
//     });
// }
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-black text-white">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="Netflix Logo"
        className="h-12 mb-6"
      />

      <h1 className="text-3xl font-bold mb-4">Welcome to Netflix Clone</h1>
      <p className="mb-6 text-gray-400">Please log in to continue</p>

      <Link
        to="/login"
        className="bg-red-600 hover:bg-red-700 px-6 py-2 rounded font-semibold"
      >
        Go to Login
      </Link>
    </div>
  );
}

export default App;
