import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Navbar from './components/Navbar';
import Catalog from './pages/Catalog';
import OrderPage from './pages/OrderPage/OrderPage';
import DeliveryPage from './pages/DeliveryPage/DeliveryPage';
import AuthPage from './pages/AuthPage/AuthPage';
import WelcomePage from './pages/WelcomePage/WelcomePage';
import Searcher from './pages/Searcher';
import { AuthRoute } from './services/auth';
import Footer from './components/Footer';
import Product from './pages/Product';
import ShoppingCart from './components/ShoppingCart';
import { useConfig } from './contexts/ConfigContext';
import Modal from './components/Modal';
import { useAuth } from './hooks/useAuth';

export default function AppUI() {
    const { isCartOpen } = useConfig();
    const { user } = useAuth();

    return (
        <>
            <Navbar user={user} />

            {isCartOpen && (
                <Modal>
                    <ShoppingCart />
                </Modal>
            )}

            <Routes>
                <Route path="/" element={
                    <Home />
                } />

                <Route path="/catalog" element={<Catalog />} />
                <Route path="/search/:slug" element={<Searcher />} />
                <Route path="/product/:product_id" element={<Product />} />
                <Route path="/order" element={<OrderPage />} />
                <Route path="/delivery" element={<DeliveryPage />} />
                <Route path="/auth" element={<AuthPage />} />
                <Route path="/welcome" element={
                    <AuthRoute>
                        <WelcomePage />
                    </AuthRoute>
                } />
                <Route path="/profile" element={
                    <AuthRoute>
                        <WelcomePage />
                    </AuthRoute>
                } />
            </Routes>
            <Footer />
        </>
    )
}
