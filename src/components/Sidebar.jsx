import React from 'react'
import { Link } from "react-router-dom";
import '../style/sidebar.css';

const Sidebar = () => {
  return (
    <aside className="sidebar">
    {/* Your sidebar content here */}
    <button >
        <Link to="/">Home</Link>
      </button>
     
      <button >
        <Link to="/course">Courses</Link>
      </button>

      <button >
        <Link to="/exam">Exam Mangment </Link>
      </button>
  </aside>
  )
}

export default Sidebar