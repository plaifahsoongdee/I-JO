import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import OverviewCard from './OverviewCard';
import BarChart from './BarChart';
import DonutChart from './DonutChart';
import LatestProducts from './LatestProducts';
import LatestOrders from './LatestOrders';
import { Container, Row, Col } from 'react-bootstrap';

function DashboardLayout() {
  const [selectedTab, setSelectedTab] = useState("รายรับ");
  const [entries, setEntries] = useState({
    รายรับ: [],
    รายจ่าย: [],
    ยอดเงินคงเหลือ: [],
    ยอดเงินเก็บ: [],
  });

  const handleAddEntry = (tab) => {
    const newEntry = prompt(`เพิ่มรายการใหม่ใน ${tab}:`);
    if (newEntry) {
      setEntries((prevEntries) => ({
        ...prevEntries,
        [tab]: [...prevEntries[tab], newEntry],
      }));
    }
  };

  const dashboardContainerStyle = {
    display: "flex",
    width: "100vw",
    minHeight: "100vh",
    backgroundColor: "#f5f5f5",
  };

  const sidebarStyle = {
    backgroundColor: "#F8E7EF",
    color: "#333",
    width: "240px",
    minHeight: "100vh",
    boxShadow: "2px 0px 5px rgba(0, 0, 0, 0.1)",
    padding: "1rem",
    position: "fixed",
    top: 0,
    left: 0,
  };

  const contentStyle = {
    flex: 1,
    padding: "2rem",
    marginLeft: "260px",
  };

  const cardGridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "1.5rem",
    marginTop: "1rem",
  };

  return (
    <div style={dashboardContainerStyle}>
      <div style={sidebarStyle}>
        <Sidebar onSelectTab={setSelectedTab} />
      </div>
      <div style={contentStyle}>
        <Header />
        <div style={cardGridStyle}>
          <OverviewCard title="รายรับ" value="$24k" percentage={12} onClick={() => handleAddEntry("รายรับ")} />
          <OverviewCard title="รายจ่าย" value="1.6k" percentage={-16} onClick={() => handleAddEntry("รายจ่าย")} />
          <OverviewCard title="ยอดเงินคงเหลือ" value="75.5%" onClick={() => handleAddEntry("ยอดเงินคงเหลือ")} />
          <OverviewCard title="ยอดเงินเก็บ" value="$15k" onClick={() => handleAddEntry("ยอดเงินเก็บ")} />
        </div>
        <Row className="w-100 mt-4">
          <Col md={6}><BarChart /></Col>
          <Col md={6}><DonutChart /></Col>
        </Row>
        <Row className="w-100 mt-4">
          <Col md={6}><LatestProducts /></Col>
          <Col md={6}><LatestOrders /></Col>
        </Row>
      </div>
    </div>
  );
}

export default DashboardLayout;
