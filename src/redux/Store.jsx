import { configureStore } from '@reduxjs/toolkit';
import { NavbarSlice } from '../pages/components/Navbar';
const store = configureStore({
    reducer: {
        navbar: NavbarSlice.reducer, // đáng ra chỗ này nó sẽ có 2 param là state và actions nhưng nó đã xử lí cho mình rồi
    },
});
export default store;