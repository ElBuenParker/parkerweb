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
      <NavContainer>
        <h2>ElBuen<span>Parker</span></h2>
        <div className={`links ${clicked ? 'active' : ''}`}>
          <button onClick={handleClick} href="#h" className="BntNav">Inicio</button>
          <button onClick={handleClick} href="#h" className="BntNav">portafolio</button>
          <button onClick={handleClick} href="#h" className="BntNav">Acerca de mi</button>
          <button onClick={handleClick} href="#h" className="BntNav">Contacto</button>
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
    span{
      font-weight: bold;
    }
  }
  padding: .4rem;
  border: 2px solid #264143;
  border-radius: 5px;
  box-shadow: 3px 4px 0px 1px #000000;
  background-color: #D1D1D1;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .links{
    position: absolute;
    top: -700px;
    left: -2000px;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    transition: all .5s ease;
 
    @media(min-width: 768px){
      position: initial;
      margin: 0;
  
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
  
  }
  .burguer{
    @media(min-width: 768px){
      display: none;
    }
  }
  .BntNav {
    background-color: white;
    color: black;
    margin: 5px;
    border-radius: .4em;
    font-size: 17px;
    font-weight: 600;
    padding: 1em 2em;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    border: 1px solid black;
    box-shadow: 0 0 0 0 black;
  }
  
  .BntNav:hover {
    transform: translateY(-4px) translateX(-2px);
    box-shadow: 2px 5px 0 0 black;
  };
  
  .BntNav:active {
    transform: translateY(2px) translateX(1px);
    box-shadow: 0 0 0 0 black;
  };
`

const BgDiv = styled.div`
  border: 2px solid #264143;
  box-shadow: 3px 4px 0px 1px #000000;
  background-color: #D1D1D1;
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