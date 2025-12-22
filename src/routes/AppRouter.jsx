    import { Routes, Route } from 'react-router-dom'
    import MainLayout from '@components/layout/MainLayout'
    import Home from '@pages/Home/Home'
    import Work from '@pages/Work'
    import About from '@pages/About/About'
    import Contact from '@pages/Contact'
    import Detail from '@pages/Detail/Detail'
    import NotFound from '@pages/NotFound/NotFound'

    /**
     * 📍 라우트 설정만 담당
     * - BrowserRouter는 main.jsx에서 한 번만 사용
     * - basename은 상위에서 처리
     */
    export default function AppRouter() {
    return (
        <Routes>
        {/* 메인 레이아웃 적용 */}
        <Route element={<MainLayout />}>
            <Route index element={<Home />} /> {/* / 경로 */}
            <Route path="work" element={<Work />} />
            <Route path="portfolio/:id" element={<Detail />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
        </Route>
        
        {/* 404 페이지 */}
        <Route path="*" element={<NotFound />} />
        </Routes>
    )
    }
