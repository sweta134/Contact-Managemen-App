// src/App.tsx
import React from 'react';
import './tailwind.css';
import Sidebar from './components/Sidebar';
import ContactsPage from './pages/ContactsPage';
import CreateContactPage from './pages/CreateContactPage';
import EditContactPage from './pages/EditContactPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardPage from './pages/Dashboard';

function App() {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="flex-1 p-4 ml-48 z-0">
          <Routes>
            <Route path="/" element={<ContactsPage />} />
            <Route path="/create" element={<CreateContactPage />} />
            <Route path="/edit/:id" element={<EditContactPage />} />
            <Route path="/charts-and-maps" element={<DashboardPage />} /> {/* Add this route */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
