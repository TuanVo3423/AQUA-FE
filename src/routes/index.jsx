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
    {path : routes.home , component : home , title : 'home'},
    {path : routes.shop , component : Shop , title : 'shop'},
    {path : routes.detail , component : Detail , title : 'detail'},
    {path : routes.wishlist , component : Wishlist , title : 'wishlist'},
    {path : routes.cart , component : Cart , title : 'cart'},
    {path : routes.account , component : Account , title : 'account'},
    {path : routes.login , component : Login , title : 'login'},
    {path : routes.register , component : Register , title : 'register'},
    {path : routes.checkout , component : Checkout , title : 'checkout'},
    {path : routes.ordercomplete , component : OrderComplete , title : 'ordercomplete'},
    {path : routes.contact_me , component : Contact , title : 'contact'},
    {path : routes.about_me , component : AboutMe , title : 'AboutMe'},
]


export const privateRoutes = [

]