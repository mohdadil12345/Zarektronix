import React, { useEffect, useState } from 'react';

function User() {
  const [activeTab, setActiveTab] = useState('Offline');
  const [name, setname] = useState("")
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const [mode, setmode] = useState(activeTab)



const form_submit = (e)=> {
    e.preventDefault()
    const user = {
      name,
      email,
      password,
      mode
    
    }
    registration(user)
}

useEffect(() => {
  setmode(activeTab); 
}, [activeTab]); 



  const registration = async(user) =>  {
    
    let headersList = {
      "Content-Type": "application/json"
     }
     
     let bodyContent = JSON.stringify({
     
         "name" :user.name,
         "email" : user.email,
         "password" : user.password,
         "mode" : user.mode,
        
     }
     
     
        );
     
     let response = await fetch("https://zarektronix-1.onrender.com/users/register", { 
       method: "POST",
       body: bodyContent,
       headers: headersList
     });
     
     let data = await response.json();
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
        <h3 className={activeTab === 'Offline' ? 'h1' : activeTab === 'Online' ? 'h2' : 'h3'}>Signup</h3>
        <label htmlFor="">Username</label>
        <input onChange={(e)=> setname(e.target.value)} className={activeTab === 'Offline' ? 'input1' : activeTab === 'Online' ? 'input2' : 'input3'} type="text" placeholder="Username" />
        <label htmlFor="">Email</label>
        <input onChange={(e)=> setemail(e.target.value)}   className={activeTab === 'Offline' ? 'input1' : activeTab === 'Online' ? 'input2' : 'input3'} type="text" placeholder="email" />
        <label htmlFor="">Password</label>
        <input onChange={(e)=> setpassword(e.target.value)} className={activeTab === 'Offline' ? 'input1' : activeTab === 'Online' ? 'input2' : 'input3'} type="text" placeholder="password" />
        <label htmlFor="">Mode</label>
        <input className={activeTab === 'Offline' ? 'input1' : activeTab === 'Online' ? 'input2' : 'input3'} value={mode} readOnly type="text" />
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
