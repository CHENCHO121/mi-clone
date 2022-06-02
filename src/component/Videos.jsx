import React from 'react';
import '../style/Videos.css';
import VideosCard from './VideosCard';

const Videos = ({videos}) => {
  return (
    <div className='videos'>
        {
            videos.map((item,index)=>(
                <VideosCard key={item.image} index={index} name={item.name} image={item.image}/>
            ))
        }
    </div>
  )
}

export default Videos