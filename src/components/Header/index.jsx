import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'
export default function Header() {
  return (
    <div className='header-containter'>
      <Link to='/'>首页</Link>
      <Link to='/movies'>电影列表</Link>
    </div>
  )
}
