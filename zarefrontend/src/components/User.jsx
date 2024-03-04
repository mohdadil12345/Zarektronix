import React, { useState } from 'react';

function User() {
  const [activeTab, setActiveTab] = useState('Offline');
  const [name, setname] = useState("")
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")


const form_submit = (e)=> {
    e.preventDefault()
    const user = {
      name,
      email,
      password,
    }
    registration(user)
}


  const registration = async(user) =>  {
    
    let headersList = {
      "Content-Type": "application/json"
     }
     
     let bodyContent = JSON.stringify({
     
         "username" :user.username,
         "email" : user.email,
         "password" : user.password,
         "mode" : user.mode,
        
     }
     
     
        );
     
     let response = await fetch("https://movie-lists-x2e8.onrender.com/user/register", { 
       method: "POST",
       body: bodyContent,
       headers: headersList
     });
     
     let data = await response.text();
     console.log(data);
     if (data) {
      alert('user registered successfull')
    }
     
  }









  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };


  return (
    <div className="signup_form">
      <div className="tab-buttons">
        <button
          className={activeTab === 'Offline' ? 'active' : ''}
          onClick={() => handleTabClick('Offline')}
        >
          Offline
        </button>
        <button
          className={activeTab === 'Online' ? 'active' : ''}
          onClick={() => handleTabClick('Online')}
        >
         Online
        </button>
        <button
          className={activeTab === 'Hybrid' ? 'active' : ''}
          onClick={() => handleTabClick('Hybrid')}
        >
        Hybrid
        </button>
      </div>
      <form onSubmit={(e)=> form_submit(e)} className={activeTab === 'Offline' ? 'form1' : activeTab === 'Online' ? 'form2' : 'form3'}>
        <h3>Signup</h3>
        <label htmlFor="">Username</label>
        <input onChange={(e)=> setname(e.target.value)} className={activeTab === 'Offline' ? 'input1' : activeTab === 'Online' ? 'input2' : 'input3'} type="text" placeholder="Username" />
        <label htmlFor="">Email</label>
        <input onChange={(e)=> setemail(e.target.value)}   className={activeTab === 'Offline' ? 'input1' : activeTab === 'Online' ? 'input2' : 'input3'} type="text" placeholder="email" />
        <label htmlFor="">Password</label>
        <input onChange={(e)=> setpassword(e.target.value)} className={activeTab === 'Offline' ? 'input1' : activeTab === 'Online' ? 'input2' : 'input3'} type="text" placeholder="password" />
        <button className={activeTab === 'Offline' ? 'btn1' : activeTab === 'Online' ? 'btn2' : 'btn3'} type="submit">
          Signup
        </button>
        <div>
          <button className="google">Google</button>
          <button className="facebook">Facebook</button>
        </div>
      </form>
    
    </div>
  );
}

export default User;
