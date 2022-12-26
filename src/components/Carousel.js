import React from 'react';
import { useEffect, useState, Children, cloneElement } from 'react';


export default function Carousel ({children}) {
  const [items, setItems] = useState([]);
  const [offSet, setOffSet] = useState(0);

  const handleLeftArrowClick = () => {
    setOffSet((currentOffSet) => {
      const newOffSet = currentOffSet + 50;
      
      return Math.min(newOffSet, 0);
    })
  }

  const handleRightArrowClick = () => {
    setOffSet((currentOffSet) => {
      const newOffSet = currentOffSet - 50;

      const maxOffSet = -(50 * (items.length - 2));
      return Math.max(newOffSet, maxOffSet)
    })
  }

  useEffect(() => {
    setItems(
      Children.map(children, child => {
        return cloneElement(child, {
          style: {
            height: '100%',
            minWidth: '50%',
            maxWidth: '50%'
          }
        })
      })
    )
  }, []);
  
  return (
    <div className='carousel'>
      <div className='arrow arrow__back'onClick={handleLeftArrowClick}><div><span></span></div></div>
      <div className='carousel__wrapper'>      
        <div className='carousel__window'>
          <div className='all-items__container'
          
            style={ {
              transform: `translateX(${offSet}%)`
            }}
          >
            {items}
          </div>
        </div>
      </div>
      <div className='arrow arrow__next' onClick={handleRightArrowClick}><div><span></span></div></div>
    </div>
  );
}