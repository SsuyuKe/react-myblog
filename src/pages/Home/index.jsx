import { Carousel } from 'antd';
import { useNavigate } from "react-router-dom";
import Layout from "@/components/Layout"
import IconButton from "@/components/IconButton";
import HotCard from "@/components/HotCard";
import PostCard from '@/components/PostCard';
import Tab from '@/components/Tab';
import { postApi } from '@/api/post';
import { useEffect, useState } from 'react';
import { setStoragePosts, getStoragePosts } from '@/utils/localStorage'

const carouselImages = [
  'https://plus.unsplash.com/premium_photo-1718479227189-d5f36431b2a8?q=80&w=1537&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1718152220007-6fb2c02fec95?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1565006111656-06a8a9c8f53b?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
]

const searchData = [
  {
    key: 'workshop',
    title: '甜點工作坊',
    image: 'https://images.unsplash.com/flagged/photo-1558013276-d925ddb73271?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDMyfHhqUFI0aGxrQkdBfHxlbnwwfHx8fHw%3D'
  },
  {
    key: 'dinner',
    title: '下午茶',
    image: 'https://plus.unsplash.com/premium_photo-1689245691846-c152a885f5ad?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDExMXx4alBSNGhsa0JHQXx8ZW58MHx8fHx8'
  }
]

const tabData = [
  {
    key: 'recommend',
    label: '推薦'
  },
  {
    key: 'dessert',
    label: '甜點'
  },
  {
    key: 'coffee',
    label: '咖啡'
  },
]

// 重複的組件 => 列表渲染
const Home = () => {
  const navigate = useNavigate()
  const [posts, setPosts] = useState(getStoragePosts())
  const [filterPosts, setFilterPosts] = useState(getStoragePosts())
  const [tabKey, setTabKey] = useState(tabData[0].key)
  const changePage = (url) => {
    navigate(url)
  }
  const getPosts = async() => {
    try {
      const { data, code } = await postApi.getPosts()
      if (code === 200) {
        // 頁面
        setPosts(data)
        setFilterPosts(data)
        // 本地儲存庫
        setStoragePosts(data)
      }
    } catch(err) {
      console.error(err)
    }
  }
  const changeTabKey = (key) => {
    setTabKey(key)
    const storagePosts = getStoragePosts()
    if (key === 'recommend') {
      return setFilterPosts(storagePosts)
    }
    const filteredPosts = storagePosts.filter(post => post.categoryKey === key)
    return setFilterPosts(filteredPosts)
  }

  useEffect(() => {
    if (!posts.length) { // 資料庫沒東西
      getPosts()
    }
  }, [])
  return (
    <Layout>
      <Carousel autoplay>
        {carouselImages.map(image => (
          <div key={image} className='h-96'>
            <img className='w-full h-96 object-cover' src={image} alt="image" />
          </div>
        ))}
      </Carousel>
      <h2 className='text-xl font-bold my-4'>超熱搜話題</h2>
      <div className="flex">
        {searchData.map(data => (
          <IconButton
            className='mr-3 last:mr-0'
            key={data.key}
            title={data.title}
            image={data.image}
            btnKey={data.key}
            onClick={() => changePage(`/search?keyword=${data.key}`)}
          />
        ))}
      </div>
      <h2 className='text-xl font-bold my-4'>本日熱門</h2>
      <div className='flex flex-wrap -mx-2'>
        {posts.map((post, idx) => {
          if (idx < 5) {
            return (
              <div key={post.id} className='w-1/5 px-2 mb-4 last:mb-0'>
                <HotCard
                  id={post.id}
                  cover={post.cover}
                  author={post.author.name}
                  avatar={post.author.image}
                  time={post.created_at}
                  title={post.title}
                  category={post.category}
                  commentNum={post.action.comments.length}
                  onPageClick={() => changePage(`/post/${post.id}`)}
                />
              </div>
            )
          }
        })}
      </div>
      <div className='mt-5 flex flex-col items-center'>
        <div className='w-[700px] mb-5'>
          {tabData.map(tab => (
            <Tab
              key={tab.key}
              tabKey={tab.key}
              className='mr-3 last:mr-0'
              label={tab.label}
              activeKey={tabKey}
              onClick={changeTabKey} />
          ))}
        </div>
        {filterPosts.map(post => (
          <PostCard
            key={post.id}
            id={post.id}
            avatar={post.author.image}
            title={post.title}
            cover={post.cover}
            theme={post.theme}
            desc={post.desc}
            likeNum={post.action.likes}
            commentNum={post.action.comments.length}
            time={post.created_at}
            onTitleClick={() => changePage(`/post/${post.id}`)}
          />
        ))}
      </div>
    </Layout>
  )
}

export default Home