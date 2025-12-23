import { Routes, Route } from 'react-router-dom'
import MainLayout from '@components/layout/MainLayout'
import Home from '@pages/Home/Home.jsx'
import Work from '@pages/Work.jsx'
import About from '@pages/About/About.jsx'
import Contact from '@pages/Contact.jsx'
import Detail from '@pages/Detail/Detail.jsx'
import NotFound from '@pages/NotFound/NotFound.jsx'
/**
 * 📍 라우트 설정만 담당
 * - BrowserRouter는 main.jsx에서 한 번만 사용
 * - basename은 상위에서 처리
 */

export default function AppRouter() {
    return (
        <Routes>
            {/* 메인 레이아웃 아래에 중첩 라우트 */}
            <Route path="/" element={<MainLayout />}>
                <Route index element={<Home />} />
                <Route path="work" element={<Work />} />
                <Route path="about" element={<About />} />
                <Route path="contact" element={<Contact />} />
                <Route path="portfolio/:id" element={<Detail />} />
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    )
}
