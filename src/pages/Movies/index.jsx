import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getListAsync } from '@/store/movieSlice';
function Movies() {
  const movies = useSelector((state) => state.movie.movies);
  const dispatch = useDispatch();
  // 服务器不会运行useEffect钩子
  useEffect(() => {
    // 如果服务器处理数据，则什么也不做
    // 如果没有处理，那么需要客户端处理
    if (window.requestPath === '/movies') {
      console.log('不需要加载');
      return;
    }
    console.log('加载数据');
    dispatch(getListAsync('获取电影'));
  }, []);
  return (
    <div>
      <h2>电影列表</h2>
      {movies.map((item) => {
        return (
          <ul key={item._id}>
            <li>{item.name}</li>
          </ul>
        );
      })}
    </div>
  );
}

Movies.loadData = function (store) {
  store.dispatch(getListAsync('获取电影'));
};

export default Movies;
