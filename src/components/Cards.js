import React, { useState } from 'react'
import '../css/card.css'
import styled from 'styled-components';

function Cards(props) {

    const OverlayDiv = styled.div`
    display: flex;
    width: 50vw;
    height: 70vh;
    overflow-y: scroll;
    border-radius: 16px;
    background-color: rgba(251, 237, 237, 0.2); 
    backdrop-filter: blur(40px);
    border: 2px solid white;
  
    @media (max-width: 768px) {
      width: 80vw;
    }
  `;  
  const [showOverlay, setShowOverlay] = useState(false);
  const handleCloseClick = (event) => {
    event.stopPropagation();
    setShowOverlay(false);
  };
  return (
    <div style={{
      ...styles.card,
      ...styles[props.size]
    }} onClick={() => setShowOverlay(true)}>
      <img
        src={props.imgSrc}
        alt="Card"
        style={{ width: '100%', height: '100%', borderRadius: '16px', objectFit: 'cover' }}
      />
      {showOverlay && (
        <div className='overlayStyles' style={overlayStyles} onClick={handleCloseClick}>
        <OverlayDiv>
                 {props.overlayContent}
        </OverlayDiv>
        </div>
      )}
    </div>
  )
}

const styles = {
  card: {

    margin: '15px 10px',
    padding: 0,
    borderRadius: '16px',
    border: '2px solid white'
  },
  small: {

    gridRowEnd: 'span 33'
  },
  medium: {

    gridRowEnd: 'span 40'
  },
  large: {

    gridRowEnd: 'span 52'
  }
}

const overlayStyles = {
  position: 'absolute',
  top: 0,

  left: 0,
  width: '80vw',
  height: '100vh',
  borderRadius: '16px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const overlayDiv = {
    display: 'flex',
    width: '50vw',
    height: '70vh',
    overflowY: 'scroll',
    borderRadius: '16px',
    backgroundColor: 'rgba(251, 237, 237, 0.2)', 
    backdropFilter: 'blur(40px)',
    border: '2px solid white'
}

export default Cards;
