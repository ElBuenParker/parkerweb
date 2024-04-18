import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import BurguerButton from './BurguerButton'
import { Outlet, Link, useNavigate } from "react-router-dom"


function Navbar() {
  const links = [
    {
      name:"Home",
      href:"/home",
    },
   
    {
      name:"Portafolio",
      href:"/portafolio",
    },
    {
      name:"Contact",
      href:"/contact",
    },

  ];

  const navigate = useNavigate();
  const navigateToMain = async () => {
    navigate("/Home/")
}
  const [clicked, setClicked] = useState(false)
  const handleClick = () => {
    //cuando esta true lo pasa a false y vice versa
    setClicked(!clicked)
  }
    return (
    <>
      <style>@import url('https://fonts.googleapis.com/css2?family=Carter+One&family=Teko:wght@300..700&display=swap')</style>
      <NavContainer >
        <h2>ElBuen<span>Parker</span></h2>
        <div onClick={handleClick} className={`links ${clicked ? 'active' : ''}`}>{links.map((x)=> (
            <Link to={x.href}>{x.name}</Link>
          ))}
          </div>
        <div className='burguer'>
          <BurguerButton clicked={clicked} handleClick={handleClick} />
        </div>
        <BgDiv className={`initial ${clicked ? ' active' : ''}`}></BgDiv>
      </NavContainer>
     
     
    </>
  )
}

export default Navbar

const NavContainer = styled.nav`
  h2{
    color: black;
    font-weight: 400;
    font-family: "Teko", sans-serif;
  font-optical-sizing: auto;
  z-index: 5;
    span{
      font-weight: bold;
      font-family: "Teko", sans-serif;
  font-optical-sizing: auto;
    }
  }
  padding: .4rem;
  border: 2px solid #264143;
  border-radius: 5px;
  box-shadow: 3px 4px 0px 1px #000000;
  background-color: #ffff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  a{
    color: #000000;
    text-decoration: none;
    margin-right: 1rem;
  }

  .links{
   
    a{
      color: #000000;
      text-decoration: none;
      margin-right: 1rem;
      font-family: "Carter One", system-ui;
      font-weight: 400;
      font-style: normal;
      

    }
    @media(min-width: 100px){
      position: relative;
      top: -100px;
      margin: 0;
      a{
        color: #000000;
        text-decoration: none;
        margin-right: 1rem;
      }
  
      display: block;
    }
  }
  .links.active{
    width: 100%;
    display: block;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: 30%;
    left: 0;
    right: 0;
    text-align: center;
    z-index: 5;
    a{
      color: #000000;
      text-decoration: none;
      margin-right: 4rem;
      font-size:2.5rem;
      transition-duration: 800ms

    }
  
  }
  .burguer{
    @media(min-width: none){
      display: none;
    }
    z-index: 5;
  }
`

const BgDiv = styled.div`
  border: 2px solid #264143;
  box-shadow: 3px 4px 0px 1px #000000;
  background-color: #ffff;
  position: absolute;
  top: -4000px;
  left: -1000px;
  width: 100%;
  height: 100%;

  transition: all .6s ease ;
  z-index: 4;
  &.active{
    border-radius: 0 0 80% 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition-duration: 800ms

    
  }


`