import Logo from '@/assets/images/logo.png'


const Layout = ({ children }) => {
  return (
    <div>
      <div className='border-b border-gray-200 border-solid h-20 flex items-center'>
        <div className='container mx-auto'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center'>
              <img src={Logo} alt="logo" />
              <div className='bg-gray-100 rounded-lg overflow-hidden px-3 leading-10 h-10'>
                <i className="fa-solid fa-magnifying-glass text-gray-300 mr-2" />
                <input className='bg-gray-100 w-72 focus:outline-0' type="text" placeholder='全站搜尋' />
              </div>
            </div>
            <div className='flex items-center'>
              <button className='bg-themeColor px-2 py-1 mr-3 rounded text-white'>
                <i className="fa-solid fa-pen"></i>
                <span className='ml-2'>發表文章</span>
              </button>
              <ul className='flex items-center text-lg'>
                <li className='mr-3 cursor-pointer px-2 py-1 hover:bg-gray-200 rounded'>En</li>
                <li className='mr-3 cursor-pointer'>
                  <button className='px-2 py-1 rounded hover:bg-gray-200'>
                      <i class="fa-solid fa-moon"></i>
                    </button>
                </li>
                <li className='cursor-pointer'><button className='px-2 py-1 rounded hover:bg-gray-200'>登入</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className='container mx-auto'>
        {children}
      </div>
      <div className='bg-gray-200 py-3'>
        <p className='text-center text-sm border-t border-gray-200 border-solid'>©2024 ssuyuke All Rights Reserved.</p>
      </div>
    </div>
  )
}

export default Layout