import React from 'react'
import ButtonList from './ButtonList';
import VideoContainer from './VideoContainer';

const MainContainer = () => {
  return (
    <div className="bg-red-600 w-full h-[180vh]">
      <ButtonList />
      <VideoContainer/>
    </div>
  );
}

export default MainContainer