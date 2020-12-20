import React, { useState } from 'react';
import { Nav, NavItem, NavLink,Tooltip } from 'reactstrap';

const SideBar = (props) => {
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const mouseleave = () => setTooltipOpen(!tooltipOpen);
  const mousefunc = () => setTooltipOpen(true);
  return (
        <div className="sidebar-container">
      <Nav className="sidebar">
        <NavLink href="#" ><i class="fa fa-camera fa-3x" ></i></NavLink>
        <NavLink href="#" ><i class="fa fa-home fa-3x"></i></NavLink>
        <NavLink href="#" ><i class="fa fa-gift fa-3x" id="TooltipforGift"  ></i>
        <NavLink href="#" ><i class="fa fa-phone fa-3x"></i></NavLink>
            <Tooltip placement="right"  isOpen={tooltipOpen} target="TooltipforGift" className="tooltip" toggle={mousefunc} >
                <div className="tooltip-text" onMouseLeave={mouseleave} >
                <ul >
                  <li>Products</li>
                  <li>Linesheets</li>
                  <li>Categories</li>
                </ul>
              </div>  
            </Tooltip>
        </NavLink>
      </Nav>
    </div>
  );
}

export default SideBar;