import React from 'react'
import bcg from "../assets/bcg.png"

function User() {
  return (
    <div class="signup_form">
      <form action="">
        <h3>Signup</h3>
        <label for="">Username</label>
        <input type="text" placeholder="Username" />
        <label for="">Email</label>
        <input type="text" placeholder="email" />
        <label for="">Password</label>
        <input type="text" placeholder="password" />
        <button type="submit">Signup</button>
        <div>
          <button class="google">Google</button>
          <button class="facebook">Facebook</button>
        </div>
      </form>
      <div class="imgg">
        <img src="/inspiration/illus.png" alt="" />
      </div>
    </div>
  )
}

export default User