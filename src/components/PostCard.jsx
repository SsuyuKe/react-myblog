import { message } from "antd";

const PostCard = ({ id, title, cover, avatar, theme, time, desc, likeNum, commentNum, onTitleClick }) => {
  const handleCopy = () => {
    console.log('copy');
    message.success('已複製貼文連結')
  }
  return (
    <div className="w-[700px] border-b border-gray-200 border-solid pb-5 mb-5">
      <div className="mb-5 text-sm text-[rgba(0,0,0,0.5)]">
        <img className="w-6 h-6 inline-block mr-2 object-cover rounded-full" src={avatar} alt="image" />
        <span>{theme}</span>
        <span>．</span>
        <span>{time}</span>
      </div>
      <div className="flex justify-between">
        <div className="w-[504px]">
          <h2 className="whitespace-nowrap text-ellipsis overflow-hidden text-xl font-bold mb-3" onClick={onTitleClick}>{title}</h2>
          <p className="whitespace-nowrap text-ellipsis overflow-hidden text-sm mb-3">
            {desc}
          </p>
          <div className="flex items-center text-[rgba(0,0,0,0.5)]">
            <div className="mr-3">
              <i className="fa-regular fa-heart mr-2"></i>
              <span>{likeNum}</span>
            </div>
            <div className="mr-3">
              <i className="fa-regular fa-comment mr-2"></i>
              <span>{commentNum}</span>
            </div>
            <div className="mr-3 cursor-pointer" onClick={() => handleCopy(id)}>
              <i className="fa-solid fa-link"></i>
            </div>
          </div>
        </div>
        <div className="w-20 h-20 rounded-xl overflow-hidden">
          <img
            className="w-full h-full"
            src={cover}
            alt="" />
        </div>
      </div>
    </div>
  )
}

export default PostCard