import React from 'react';
import { Navbar, Form, FormControl, Nav } from 'react-bootstrap';
import { FaSearch, FaUserCircle } from 'react-icons/fa';

function Header() {
    const headerStyle = {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between", // กระจายเนื้อหาทั้งสองฝั่งให้มีระยะห่างกัน
      padding: "1rem",
      backgroundColor: "#fff", // พื้นหลังสีขาว
      boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
    };
  
    const leftSectionStyle = {
      display: "flex",
      alignItems: "center",
    };
  
    const rightSectionStyle = {
      display: "flex",
      alignItems: "center",
      gap: "1rem",
    };
  
    const searchStyle = {
      padding: "0.5rem",
      borderRadius: "20px",
      border: "1px solid #ddd",
      marginLeft: "1rem",
    };
  
    return (
      <div style={headerStyle}>
        <div style={leftSectionStyle}>
          <span style={{ fontSize: "1.5rem", color: "#FF69B4" }}>Dashboard</span>
          <input type="text" placeholder="Search" style={searchStyle} />
        </div>
        <div style={rightSectionStyle}>
          <i className="fas fa-users" />
          <i className="fas fa-bell" />
          <img
            src="profile_picture_url" // แทนที่ด้วย URL รูปโปรไฟล์
            alt="Profile"
            style={{ width: "40px", height: "40px", borderRadius: "50%" }}
          />
        </div>
      </div>
    );
  }

export default Header;
