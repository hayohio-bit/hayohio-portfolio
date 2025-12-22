import { configureStore } from '@reduxjs/toolkit';
import portfolioReducer from './slices/portfolioSlice';

// Redux 스토어 설정
const store = configureStore({
reducer: {
    portfolio: portfolioReducer,
    // 나중에 다른 슬라이스 추가 가능
    // favorite: favoriteReducer,
    // auth: authReducer,
},
});

export default store;
