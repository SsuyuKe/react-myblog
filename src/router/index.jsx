import { createBrowserRouter } from "react-router-dom";
import { Collect, CreatePost, EditPost, Home, Login, NotFound, Post, Search, Setting } from "@/pages";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/post/:id',
    element: <Post />
  },
  {
    path: '/collect',
    element: <Collect />
  },
  {
    path: '/search',
    element: <Search />
  },
  {
    path: '/create-post',
    element: <CreatePost />
  },
  {
    path: '/edit-post',
    element: <EditPost />
  },
  {
    path: '/setting',
    element: <Setting />
  },
  {
    path: '*',
    element: <NotFound />
  }
])

export default router