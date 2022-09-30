import routes from '../configs/routes';
// Pages
import home from '../pages/home';
import Shop from '../pages/Shop';
import Detail from '../pages/Detail';
import Wishlist from '../pages/Wishlist';
import Cart from '../pages/Cart';
import Account from '../pages/Account';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Checkout from '../pages/Checkout';
import OrderComplete from '../pages/OrderComplete';
import Contact from '../pages/Contact';
import AboutMe from '../pages/AboutMe';


export const publicRoutes = [
    {path : routes.home , component : home , title : 'Home' , isShowBreadcrum : false},
    {path : routes.shop , component : Shop , title : 'Shop' , isShowBreadcrum : true},
    {path : routes.detail , component : Detail , title : 'Detail' , isShowBreadcrum : true},
    {path : routes.wishlist , component : Wishlist , title : 'Wishlist' , isShowBreadcrum : true},
    {path : routes.cart , component : Cart , title : 'Cart' , isShowBreadcrum : true},
    {path : routes.account , component : Account , title : 'Account' , isShowBreadcrum : true},
    {path : routes.login , component : Login , title : 'Login' , isShowBreadcrum : true},
    {path : routes.register , component : Register , title : 'Register' , isShowBreadcrum : true},
    {path : routes.checkout , component : Checkout , title : 'Checkout' , isShowBreadcrum : true},
    {path : routes.ordercomplete , component : OrderComplete , title : 'Ordercomplete' , isShowBreadcrum : true},
    {path : routes.contact_me , component : Contact , title : 'Contact' , isShowBreadcrum : true},
    {path : routes.about_me , component : AboutMe , title : 'AboutMe' , isShowBreadcrum : true},
]


export const privateRoutes = [

]