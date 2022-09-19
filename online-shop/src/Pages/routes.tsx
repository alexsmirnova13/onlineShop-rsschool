import {Route, Routes, Navigate} from 'react-router-dom';
import Cards from './Cards.page';
import Cart from './Cart.page';

const useRoutes = () => (
    <Routes>
        <Route path='cards' element={<Cards/>}/>
        <Route path='cart' element={<Cart/>}/>
        <Route path="*" element={<Navigate to={'cards'} />}/>
    </Routes>
);

export default useRoutes;