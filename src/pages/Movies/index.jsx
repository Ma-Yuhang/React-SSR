import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getListAsync } from '@/store/movieSlice';
export default function Movies() {
  const movies = useSelector((state) => state.movie.movies);
  const dispatch = useDispatch();
  return (
    <div>
      movies
      <button
        onClick={async() => {
          const res = await dispatch(getListAsync('获取电影'));
          console.log(res.payload.data);
        }}
      >
        获取所有电影
      </button>
      <button onClick={() => {
        console.log('movies',movies);
      }}>获取电影</button>
    </div>
  );
}
