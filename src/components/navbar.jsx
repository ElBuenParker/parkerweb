import React, { useState } from 'react'
import styled from 'styled-components'
import BurguerButton from './BurguerButton'

function Navbar() {

  const [clicked, setClicked] = useState(false)
  const handleClick = () => {
    //cuando esta true lo pasa a false y vice versa
    setClicked(!clicked)
  }

    return (
    <>
      <style>@import url('https://fonts.googleapis.com/css2?family=Carter+One&family=Teko:wght@300..700&display=swap')</style>
      
      <NavContainer>
        <h2>ElBuen<span>Parker</span></h2>
        <div className={`links ${clicked ? 'active' : ''}`}>
        <a onClick={handleClick} href="#h">inicio</a>
          <a onClick={handleClick} href="#h">Portafolio</a>
          <a onClick={handleClick} href="#h">Acerca de mi</a>
          <a onClick={handleClick} href="#h">Contacto</a>
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
    position: absolute;
    top: -700px;
    left: -2000px;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    transition: all .5s ease;
    a{
      color: #000000;
      text-decoration: none;
      margin-right: 1rem;
      font-family: "Carter One", system-ui;
  font-weight: 400;
  font-style: normal;
    }
 
    @media(min-width: 768px){
      position: initial;
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
    a{
      color: #000000;
      text-decoration: none;
      margin-right: 1rem;
    }
  
  }
  .burguer{
    @media(min-width: 768px){
      display: none;
    }
  }
`

const BgDiv = styled.div`
  border: 2px solid #264143;
  box-shadow: 3px 4px 0px 1px #000000;
  background-color: #ffff;
  position: absolute;
  top: -1000px;
  left: -1000px;
  width: 100%;
  height: 100%;
  z-index: -1;
  transition: all .6s ease ;
  
  &.active{
    border-radius: 0 0 80% 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }


`