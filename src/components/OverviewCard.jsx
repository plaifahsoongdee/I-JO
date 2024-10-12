import React from 'react';

function OverviewCard({ title, value, percentage, onClick }) {
  const cardStyle = {
    backgroundColor: "#ffe7ef",
    color: "#333",
    borderRadius: "10px",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
    padding: "1rem",
    textAlign: "center",
    cursor: "pointer", // เปลี่ยนเคอร์เซอร์เมื่อ hover เพื่อบอกว่าคลิกได้
  };

  const titleStyle = {
    color: "#FF69B4",
    fontSize: "18px",
    fontWeight: "bold",
    marginBottom: "0.5rem",
  };

  const valueStyle = {
    color: "#FF1493",
    fontSize: "24px",
    fontWeight: "bold",
  };

  const percentageStyle = {
    color: percentage >= 0 ? "green" : "red",
    fontSize: "16px",
  };

  return (
    <div style={cardStyle} onClick={onClick}>
      <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 496 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style={{ color: "#FF69B4", fontSize: "24px" }}>
        <path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm80 168c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zm-160 0c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zm194.8 170.2C334.3 380.4 292.5 400 248 400s-86.3-19.6-114.8-53.8c-13.6-16.3 11-36.7 24.6-20.5 22.4 26.9 55.2 42.2 90.2 42.2s67.8-15.4 90.2-42.2c13.4-16.2 38.1 4.2 24.6 20.5z"></path>
      </svg>
      <div style={titleStyle}>{title}</div>
      <p style={valueStyle}>{value}</p>
      <p style={percentageStyle}>{percentage >= 0 ? `↑ ${percentage}%` : `↓ ${Math.abs(percentage)}%`}</p>
    </div>
  );
}

export default OverviewCard;
