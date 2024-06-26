import { message } from "antd";
import { useState } from "react";

const HotCard = ({ id, cover, author, avatar, time, title, category, commentNum, onPageClick }) => {
  const [isCollect, setIsCollect] = useState(false)

  const handleCollect = (id) => {
    message.success('已加入收藏')
    // setIsCollect(id);
  };

  return (
    <div className='rounded-lg overflow-hidden border border-solid border-gray-200'>
      <div className='h-40 relative'>
        <img className='w-full h-full object-cover' src={cover} alt="image" />
        <div className='cursor-pointer' onClick={() => handleCollect(id)}>
          {isCollect ? (
            <i className="text-2xl text-primaryTabColor fa-solid fa-heart mr-1 absolute top-2 right-2"></i>
          ): (
            <i className="text-2xl text-white fa-regular fa-heart mr-1 absolute top-2 right-2"></i>
          )}
        </div>
      </div>
      <div className='p-3' onClick={onPageClick}>
        <div className='flex items-center text-sm mb-2'>
          <img className='w-6 h-6 rounded-full object-cover border border-gray-300 border-solid mr-2' src={avatar} alt="logo" />
          <span>{author}</span>
          <span>・</span>
          <span>{time}</span>
        </div>
        <p className='whitespace-nowrap text-ellipsis overflow-hidden'>{title}</p>
        <div className='mt-9 flex justify-between'>
          <p className='bg-cardTagColor px-2 rounded text-white'>{category}</p>
          <div className='mr-3 flex items-center text-md text-gray'>
            <i className="fa-regular fa-message mr-1"></i>
            <span className='text-base'>{commentNum}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HotCard