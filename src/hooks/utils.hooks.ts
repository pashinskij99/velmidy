import { ActionCreator, bindActionCreators } from '@reduxjs/toolkit';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

const getHeight = () => window.innerHeight 

const useHeight = (): number => {  
  const [height, setHeight] = useState(getHeight())

  useEffect(() => {
    const intervalId = setInterval(() => {
      const nextHeight = getHeight()

      setHeight(nextHeight)
    }, 200)

    return () => {
      clearInterval(intervalId)
    };
  });

  return height
}

const useMapDispatch = <A, C extends ActionCreator<A>>(actions: C): C => {
  const dispatch = useDispatch()
  
  return bindActionCreators(actions, dispatch)
}

export { useHeight, useMapDispatch }