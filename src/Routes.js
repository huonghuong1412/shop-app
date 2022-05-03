import React from 'react'
import About from './pages/AboutPage/About';
import BlogCreate from './pages/BlogPage/BlogCreate';
import BlogDetail from './pages/BlogPage/BlogDetail';
import BlogPage from './pages/BlogPage/BlogPage';
import CartPage from './pages/CartPage/CartPage';
import Contact from './pages/ContactPage/Contact';
import HomePage from './pages/HomePage/HomePage'
import InstructionBank from './pages/InstructionPage/InstructionBank';
import InstructionBuy from './pages/InstructionPage/InstructionBuy';
import InstructionPage from './pages/InstructionPage/InstructionPage';
import NotFound from './pages/NotFoundPage/NotFound';
import OrderDetail from './pages/OrderPage/OrderDetail';
import OrderPage from './pages/OrderPage/OrderPage';
import PolicyChange from './pages/PolicyPage/PolicyChange';
import PolicyGuarantee from './pages/PolicyPage/PolicyGuarantee';
import PolicyPayment from './pages/PolicyPage/PolicyPayment';
import PolicySecurity from './pages/PolicyPage/PolicySecurity';
import PolicyShip from './pages/PolicyPage/PolicyShip';
import AllProductsPage from './pages/ProductsPage/AllProductsPage';
import ProductDetail from './pages/ProductsPage/ProductDetail';
import ProductsPage from './pages/ProductsPage/ProductsPage'
import ProductsSearch from './pages/ProductsPage/ProductsSearch';
import Login from './pages/UserPage/Login';
import Register from './pages/UserPage/Register';
import User from './pages/UserPage/User';

const Routes = [
    {
        path: '/',
        exact: true,
        main: () => <HomePage />
    },
    {
        path: '/collections',
        exact: true,
        main: () => <AllProductsPage />
    },
    {
        path: '/products',
        exact: true,
        main: () => <AllProductsPage />
    },
    {
        path: '/products/:id',
        exact: false,
        main: ({ match, location, history }) => <ProductDetail history={history} match={match} location={location} />
    },
    {
        path: '/collections/:category',
        exact: false,
        main: ({ match, location }) => <ProductsPage match={match} location={location} />
    },
    {
        path: '/search/keyword/:text',
        exact: false,
        main: ({ history, match, location }) => <ProductsSearch history={history} match={match} location={location} />
    },
    // {
    //     path: '/search',
    //     exact: false,
    //     main: ({ history, match, location }) => <ProductsSearch history={history} match={match} location={location} />
    // },
    {
        path: '/cart',
        exact: false,
        main: () => <CartPage />
    },
    {
        path: '/checkout',
        exact: true,
        main: ({ history }) => <OrderPage history={history} />
    },
    {
        path: '/checkout/detail',
        exact: false,
        main: ({ history }) => <OrderDetail history={history} />
    },
    {
        path: '/pages/huong-dan',
        exact: false,
        main: () => <InstructionPage />
    },
    {
        path: '/pages/tai-khoan-ngan-hang',
        exact: false,
        main: () => <InstructionBank />
    },
    {
        path: '/pages/huong-dan-mua-hang',
        exact: false,
        main: () => <InstructionBuy />
    },
    {
        path: '/pages/chinh-sach-van-chuyen',
        exact: false,
        main: () => <PolicyShip />
    },
    {
        path: '/pages/chinh-sach-doi-tra',
        exact: false,
        main: () => <PolicyChange />
    },
    {
        path: '/pages/chinh-sach-thanh-toan',
        exact: false,
        main: () => <PolicyPayment />
    },
    {
        path: '/pages/chinh-sach-bao-mat',
        exact: false,
        main: () => <PolicySecurity />
    },
    {
        path: '/pages/chinh-sach-bao-hanh',
        exact: false,
        main: () => <PolicyGuarantee />
    },
    {
        path: '/pages/about-us',
        exact: false,
        main: () => <About />
    },
    {
        path: '/account',
        exact: true,
        main: ({ history }) => <User history={history} />
    },
    {
        path: '/account/register',
        exact: false,
        main: ({ history, location }) => <Register history={history} location={location} />
    },
    {
        path: '/account/login',
        exact: false,
        main: ({ history, location }) => <Login history={history} location={location} />
    },
    {
        path: '/pages/lien-he',
        exact: false,
        main: () => <Contact />
    },
    {
        path: '/pages/lien-he',
        exact: false,
        main: () => <Contact />
    },
    {
        path: '/blogs/news',
        exact: true,
        main: () => <BlogPage />
    },
    {
        path: '/blogs/news/create',
        exact: false,
        main: ({ history }) => <BlogCreate history={history} />
    },
    {
        path: '/blogs/news/:id',
        exact: false,
        main: ({ match }) => <BlogDetail match={match} />
    },
    {
        path: '*',
        exact: false,
        main: () => <NotFound />
    }
]

// const Routes = () => (
//     <Router history={history}>
//         <Switch>
//             <Route exact={true} path="/" component={pages.HomePage} />
//             <Route exact={true} path="/products" component={pages.ProductsPage} />
//         </Switch>
//     </Router>
// )

export default Routes;