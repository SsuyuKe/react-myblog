import clsx from 'clsx';

const IconButton = ({ title, image, className, btnKey, onClick }) => {
  return (
    <button
      className={clsx(className, 'flex items-center border-2 border-solid border-gray-200 px-3 py-2 rounded-3xl cursor-pointer')}
      onClick={() => onClick(btnKey)}
    >
      <div className='w-8 h-8 rounded-full overflow-hidden mr-2'>
        <img className='w-full h-full object-cover' src={image} alt="image" />
      </div>
      {title}
    </button>
  )
}

export default IconButton