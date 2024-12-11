import React from "react";
import '../Sidebar/sidebar.css'
const Sidebar = ({isFilterVisible}) => {
  

  return (
    <div className="sidebar-wrapper">
    {isFilterVisible && (
      <div className="sidebar">
       
        <div className="filter-section">
          <div>
          <input type="checkbox" id="customizable" />
          <label htmlFor="customizable">Customizable</label>

          </div>

          <h4>IDEAL FOR</h4>
          <select>
            <option value="all">All</option>
            <option value="casual">Casual</option>
            <option value="formal">Formal</option>
          </select>

          <h4>OCCASSION</h4>
          <select>
            <option value="all">All</option>
            <option value="casual">Casual</option>
            <option value="formal">Formal</option>
          </select>

          <h4>WORK</h4>
          <select>
            <option value="all">All</option>
            <option value="casual">Casual</option>
            <option value="formal">Formal</option>
          </select>

          <h4>FABRIC</h4>
          <select>
            <option value="all">All</option>
            <option value="casual">Casual</option>
            <option value="formal">Formal</option>
          </select>

          <h4>SEGMENT</h4>
          <select>
            <option value="all">All</option>
            <option value="casual">Casual</option>
            <option value="formal">Formal</option>
          </select>

          <h4>SUITABLE FOR</h4>
          <select>
            <option value="all">All</option>
            <option value="casual">Casual</option>
            <option value="formal">Formal</option>
          </select>

          <h4>RAW MATERIALS</h4>
          <select>
            <option value="all">All</option>
            <option value="casual">Casual</option>
            <option value="formal">Formal</option>
          </select>

          <h4>PATTERN</h4>
          <select>
            <option value="all">All</option>
            <option value="casual">Casual</option>
            <option value="formal">Formal</option>
          </select>
          
        </div>
      </div>
    )}
   
  </div>
  );
};

export default Sidebar;
