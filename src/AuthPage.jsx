import axios from "axios"
/* eslint-disable react/prop-types */
const AuthPage = (props)=>{
  const onSubmit = (e)=>{
    e.preventDefault()
    const {value} = e.target[0]
    props.onAuth({username:value, secret:value})
    axios
      .post("https://backend-chat-pi.vercel.app/authenticate", { username: value })
      .then((r)=> props.onAuth({...r.data,secret:value}))
      .catch((e)=>console.log("Auth Error", e))
  }


  document.title = 'Auth'
  return (
    <div className="background">
      <form onSubmit={onSubmit} className="form-card">
        <div className="form-title">Welcome 👋</div>

        <div className="form-subtitle">Set a username to get started</div>

        <div className="auth">
          <div className="auth-label">Username</div>
          <input className="auth-input" name="username" />
          <button className="auth-button" type="submit">
            Enter
          </button>
        </div>
      </form>
    </div>
  );
}


export default AuthPage