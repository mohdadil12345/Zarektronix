import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import useOnlinestatus from '../hooks/useOnlinestatus';

function User() {
  const [activeTab, setActiveTab] = useState('Offline');
  const [name, setname] = useState("")
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const [mode, setmode] = useState(activeTab)

  const isUserOnline = useOnlinestatus()




useEffect(() => {
  setmode(activeTab);
}, [activeTab]);



useEffect(() => {
  if(isUserOnline) {
    let lsdata = JSON.parse(localStorage.getItem('offlineUsers'))
     
  if(lsdata) {
     for (let i = 0; i < lsdata.length; i++) {
        
    
      // console.log("lsss", lsdata[i])

      let  {name, email, password, mode} = lsdata[i]
      
        registration( {name, email, password, mode})
        if( i == lsdata.length-1) {

          localStorage.removeItem("offlineUsers")
        }
     }
  }

  }

}, [isUserOnline]);

const form_submit = (e) => {
  e.preventDefault();
  const user = {
    name,
    email,
    password,
    mode
  };

  if (isUserOnline) {
    registration(user);

  } else {
   
    let offlineUsers = JSON.parse(localStorage.getItem('offlineUsers')) || [];

if(offlineUsers){
  offlineUsers.push(user);
  localStorage.setItem('offlineUsers', JSON.stringify(offlineUsers));
}else{
  localStorage.setItem('offlineUsers', JSON.stringify([user]));

}

    

    
    toast.success("Signup data saved offline. Will be submitted when online.", {
      style: {
        borderRadius: "50px",
        background: "#000428",
        color: "#ffffff",
        padding: "30px",
        fontWeight: "600",
      },
    });
  }
};

const registration = async (user) => {
  let headersList = {
    "Content-Type": "application/json"
  };

  let bodyContent = JSON.stringify({
    "name": user.name,
    "email": user.email,
    "password": user.password,
    "mode": user.mode
  });
  
  let response = await fetch("https://zarektronix-1.onrender.com/register", {
    method: "POST",
    body: bodyContent,
    headers: headersList
  });

  let data = await response.json();
  console.log(data);
  if (response.ok) {
      toast.success('Signup Successfully', {
        style: {
          borderRadius: '50px',
          background: '#000428',
          color: '#ffffff',
          padding: '30px',
          fontWeight: '600',
        },
      });
  } else {
    toast.error("user is already Registered", {
      style: {
        borderRadius: "50px",
        background: "#000428",
        color: "#ffffff",
        padding: "1rem 1.5rem",
        fontWeight: "600",
      },
    });
  }
};



  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };


  return (
    <div className="signup_form">


    
{isUserOnline ? <div>Online 🟢</div> : <div >Offline 🔴</div> }

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
        <input required onChange={(e)=> setname(e.target.value)} className={activeTab === 'Offline' ? 'input1' : activeTab === 'Online' ? 'input2' : 'input3'} type="text" placeholder="Username" />
        <label htmlFor="">Email</label>
        <input required onChange={(e)=> setemail(e.target.value)}   className={activeTab === 'Offline' ? 'input1' : activeTab === 'Online' ? 'input2' : 'input3'} type="email" placeholder="email" />
        <label htmlFor="">Password</label>
        <input required onChange={(e)=> setpassword(e.target.value)} className={activeTab === 'Offline' ? 'input1' : activeTab === 'Online' ? 'input2' : 'input3'} type="text" placeholder="password" />
        <label htmlFor="">Mode</label>
        <input className={activeTab === 'Offline' ? 'input1' : activeTab === 'Online' ? 'input2' : 'input3'} value={mode} readOnly type="text" />
        <button className={activeTab === 'Offline' ? 'btn1' : activeTab === 'Online' ? 'btn2' : 'btn3'} type="submit">
          Signup
        </button>
        <div>
          <button className={activeTab === 'Offline' ? 'google1' : activeTab === 'Online' ? 'google2' : 'google3'}>Google</button>
          <button className={activeTab === 'Offline' ? 'facebook1' : activeTab === 'Online' ? 'facebook2' : 'facebook3'}>Facebook</button>
        </div>
      </form>
    
    </div>
  );
}

export default User;
