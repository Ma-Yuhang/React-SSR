import React, { useState } from 'react'
import './index.css'
import pngUrl from '@/asset/aa.png'

export default function Home() {
  const [n, setN] = useState(0)
  return (
    <div>
      <h1>Home: {n}</h1>
      <div className='bg'></div>
      <button
        className='button'
        onClick={() => {
          setN((n) => n + 1)
        }}>
        点击
      </button>
      <img src={pngUrl} />
    </div>
  )
}
