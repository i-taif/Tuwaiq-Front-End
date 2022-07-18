import React,{useState} from 'react'
import axios from 'axios'
function CreateUser() {
    const [formValue, setformValue] = useState({
        username:'',
        email: '',
        password: ''
      });

      const handleSubmit = async() => {
        // store the states in the form data
        const loginFormData = new FormData();
        loginFormData.append("username", formValue.username)
        loginFormData.append("email", formValue.email)
        loginFormData.append("password", formValue.password)
      
        try {
          // make axios post request
          const response = await axios({
            method: "post",
            url: "http://127.0.0.1:8000/register",
            data: loginFormData,
            headers: { "Content-Type": "multipart/form-data" },
          });
        } catch(error) {
          console.log(error)
        }
      }

    const handleChange = (e) => {
        setformValue({
          ...formValue,
          [e.target.name]: e.target.value
        });
      }


  return (
    <form onSubmit={handleSubmit}>
      <p>Login Form</p>
      <input
        type="email"
        name="email"
        placeholder="enter an email"
        value={formValue.email}
        onChange={handleChange}
      />
      <input
        type="text"
        name="username"
        placeholder="username"
        value={formValue.username}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        placeholder="enter a password"
        value={formValue.password}
        onChange={handleChange}
      />
      <button
        type="submit"
      >
        Login
      </button>
    </form>
  )
};

export default CreateUser
