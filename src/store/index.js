import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userSlice'
import movieReducer from './movieSlice'

// let config = {}
// if (typeof window !== 'undefined') {
//   // 客户端
//   config = {
//     reducer: {
//       user: userReducer,
//       movie: movieReducer
//     },
//     preloadedState: window.pageDatas
//   }
// } else {
//   config = {
//     reducer: {
//       user: userReducer,
//       movie: movieReducer
//     },
//   }
// }
// export default configureStore(config)

function createStore() {
  let store = null
  if (typeof window !== 'undefined') {
    // 客户端
    store = configureStore({
      reducer: {
        user: userReducer,
        movie: movieReducer
      },
      preloadedState: window.pageDatas
    })
  } else {
    store = configureStore({
      reducer: {
        user: userReducer,
        movie: movieReducer
      },
    })
  }
  return store
}

export default createStore

// let config = {}
// if (typeof window !== 'undefined') {
//   // 客户端
//   config = {
//     reducer: {
//       user: userReducer,
//       movie: movieReducer
//     },
//     preloadedState: window.pageDatas
//   }
// } else {
//   config = {
//     reducer: {
//       user: userReducer,
//       movie: movieReducer
//     },
//   }
// }
// return configureStore(config)