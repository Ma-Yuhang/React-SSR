import React, { useState } from 'react'

export default function Home() {
  const [n, setN] = useState(0)
  return (
    <div>
      <h1>Home: {n}</h1>
      <button
        onClick={() => {
          setN((n) => n + 1)
        }}>
        点击
      </button>
    </div>
  )
}
