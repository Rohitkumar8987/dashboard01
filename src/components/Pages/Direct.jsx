import React from 'react'

export default function Direct() {

const logout=()=>{
  localStorage.removeItem("signup")
  window.location.reload()
}

  return (
    <div>
      <h1>Direct</h1>
      <button onClick={logout} className="logout" >LogOut</button>
    </div>
  )
}
