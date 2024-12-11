import React from 'react'
import '../DropDownBtn/dropdown.css'

const DropdownBtn = ({ isFilterVisible, toggleFilter }) => {
    return (
        <div className='sideDrop'>
            <div className='filterBtn'>
                <h4>3425 ITEMS</h4>

                <button className="toggle-button" onClick={toggleFilter}>
                    {isFilterVisible ? "> HIDE FILTER" : "< SHOW FILTER"}
                </button>

            </div>
            <div className="dropdown">
                <select>
                    <option value="recommended">RECOMMENDED</option>
                    <option value="recommended">NEWEST FIRST</option>
                    <option value="recommended">POPULAR</option>
                    <option value="low-to-high">PRICE: LOW TO HIGH</option>
                    <option value="high-to-low">PRICE: HIGH TO LOW</option>
                </select>
            </div>
        </div>
    )
}

export default DropdownBtn
