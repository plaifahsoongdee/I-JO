
import React, { useState } from 'react'; // เพิ่ม useState ตรงนี้

function Sidebar() {
  const [activeTab, setActiveTab] = useState("#overview");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="list-group list-group-flush">
    <h2 style={{ fontFamily: 'Comic Sans MS', fontSize: '24px', color: '#FF69B4' }}>DeviasKit</h2>
      <a
        href="#overview"
        onClick={() => handleTabClick("#overview")}
        className={`list-group-item list-group-item-action ${activeTab === "#overview" ? "active" : ""}`}
      >
        Overview
      </a>
      <a
        href="#customers"
        onClick={() => handleTabClick("#customers")}
        className={`list-group-item list-group-item-action ${activeTab === "#customers" ? "active" : ""}`}
      >
        Customers
      </a>
      <a
        href="#settings"
        onClick={() => handleTabClick("#settings")}
        className={`list-group-item list-group-item-action ${activeTab === "#settings" ? "active" : ""}`}
      >
        Settings
      </a>
      <a
        href="#account"
        onClick={() => handleTabClick("#account")}
        className={`list-group-item list-group-item-action ${activeTab === "#account" ? "active" : ""}`}
      >
        Account
      </a>
    </div>
  );
}

export default Sidebar;
