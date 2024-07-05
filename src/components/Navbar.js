import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="navbar">
        <h1>Write your Blog</h1>
        <div className="links">
            <Link to = "/">Home</Link>
            {/* Inline Styling in react */}
            <Link to = "/create" style={{
                color: "white",
                backgroundColor: "#f1356d",
                borderRadius: "8px"
            
            }}>New Blog</Link>
        </div>
    </div>
  )
}

export default Navbar