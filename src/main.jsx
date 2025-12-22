import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from './theme/ThemeContext'
import store from './store/store'
import App from './App'
import './index.css'
import './styles/animate.css'

/**
 * 애플리케이션 진입점
 * Provider 순서:
 * 1. Redux Provider (전역 상태 관리)
 * 2. BrowserRouter (라우팅)
 * 3. ThemeProvider (테마 관리)
 */
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename="/hayohio-portfolio">
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
