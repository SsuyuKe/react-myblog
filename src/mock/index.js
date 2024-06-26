import Mock from "mockjs";
import posts from './data/posts.json'

Mock.mock('/mock/posts', {
  code: 200,
  data: posts
})