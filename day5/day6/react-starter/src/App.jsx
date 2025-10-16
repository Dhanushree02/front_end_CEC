import React, { useState } from "react";
import ProfileCard from "./components/ProfileCard";
import List from "./components/List";
import Advancedlist from "./components/AdvancedList";
import  Forms  from "./assets/forms";
function App() {
  const [activeTab, setActiveTab] = useState("profile");

  return (
    <div style={{ padding: "20px" }}>
      <h1>React Components Demo</h1>

      {/* Nav Tabs */}
      <div style={{ marginBottom: "20px" }}>
        <button onClick={() => setActiveTab("profile")}>Profile</button>
        <button onClick={() => setActiveTab("list")}>List</button>
        <button onClick={() => setActiveTab("advancedlist")}>Advanced List</button>
        <button onClick={() => setActiveTab("forms")}>Forms</button>
      </div>

      {/* Tab Content */}
      <div>
        {activeTab === "profile" && <ProfileCard />}
        {activeTab === "list" && <List />}
        {activeTab === "advancedlist" && <Advancedlist />}
        {activeTab === "forms" && <Forms />}
      </div>
    </div>
  );
}

export default App;
