import React, { useState } from 'react';

function User() {
  const [activeTab, setActiveTab] = useState('button1');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="signup_form">
      <div className="tab-buttons">
        <button
          className={activeTab === 'button1' ? 'active' : ''}
          onClick={() => handleTabClick('button1')}
        >
          Button 1
        </button>
        <button
          className={activeTab === 'button2' ? 'active' : ''}
          onClick={() => handleTabClick('button2')}
        >
          Button 2
        </button>
        <button
          className={activeTab === 'button3' ? 'active' : ''}
          onClick={() => handleTabClick('button3')}
        >
          Button 3
        </button>
      </div>
      <form className={activeTab === 'button1' ? 'content' : activeTab === 'button2' ? 'content2' : 'content3'}>
        <h3>Signup</h3>
        <label htmlFor="">Username</label>
        <input type="text" placeholder="Username" />
        <label htmlFor="">Email</label>
        <input type="text" placeholder="email" />
        <label htmlFor="">Password</label>
        <input type="text" placeholder="password" />
        <button className="btn" type="submit">
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
