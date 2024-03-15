import React from "react";
import "./SideBar.css";
import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";


const SideBar = () => {
  return (
    <div className="side-bar">
      <Nav className="navigation">
        <NavLink to="/Home" className={'side-button'}>
          <i class="bi bi-house"></i>Home
        </NavLink>
        <NavLink to="/Liquidity" className={'side-button'}>
          <i class="bi bi-graph-up"></i>Liquidity
        </NavLink>
        <NavLink to="/" className={'side-button'}>
          <i class="bi bi-arrow-left-right" ></i>Swap
        </NavLink>
        <NavLink to="/" className={'side-button'}>
          <i class="bi bi-stack"></i>Staking & Farming
        </NavLink>
        <NavLink to="/" className={'side-button'}>
          <i class="bi bi-box"></i>Surup Pools
        </NavLink>
        <NavLink to="/" className={'side-button'}>
          <i class="bi bi-people"></i>Referral
        </NavLink>
        <NavLink to="/" className={'side-button'}>
          <i class="bi bi-ticket-detailed"></i>Lottery
        </NavLink>
        <NavLink to="/" className={'side-button'}>
          <i class="bi bi-arrow-repeat"></i>Bridge
        </NavLink>
        <NavLink to="/" className={'side-button'}>
          <i class="bi bi-file-earmark"></i>Docs
        </NavLink>
        <NavLink to="/" className={'side-button'}>
          <i class="bi bi-rocket-takeoff"></i>Launchpad
        </NavLink>
        <NavLink to="/" className={'side-button'}>
          <i class="bi bi-badge-vo"></i>Voting
        </NavLink>
        <NavLink to="/" className={'side-button'}>
          <i class="bi bi-eye"></i>Overview
        </NavLink>
        <NavLink to="/" className={'side-button'}>
          <i class="bi bi-three-dots-vertical"></i>More
        </NavLink>
      </Nav>
    </div>
  );
};

export default SideBar;