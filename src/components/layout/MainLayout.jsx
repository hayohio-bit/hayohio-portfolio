import React from 'react'
import { Outlet } from 'react-router-dom'
import ScrollToTop from '../../components/ui/ScrollToTop'
import Header from './Header/Header'
import Footer from './Footer'

export default function MainLayout() {
    return (
        <div className="main-layout">
        <Header />
        <main className="main">
            <Outlet />
        </main>
        <Footer />
        <ScrollToTop />
        </div>
    )
}
