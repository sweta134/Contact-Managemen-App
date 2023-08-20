// src/Sidebar.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar: React.FC = () => {
  return (
    <div className="bg-gray-800 text-white h-screen w-48 fixed top-0 left-0 overflow-y-auto">
      <div className="p-4">
        <h1 className="text-2xl font-semibold mb-4">Taiyo.ai</h1>
        <ul>
          <li className="mb-2">
            <Link to="/" className="hover:text-blue-500">Contacts</Link>
          </li>
          <li className="mb-2">
            <Link to="/charts-and-maps" className="hover:text-blue-500">Charts and Maps</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
