import { Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import CartPage from "./Pages/CartPage";
import StartPage from "./Pages/StartPage";
import CustomerInfo from "./Pages/CustomerInfo";
import Item from "./Pages/Item";
function App() {
    return (
        <Routes>
            <Route path="*" element={<Dashboard />}>
                <Route index element={<StartPage />} />
                <Route path="cart" element={<CartPage />} />
                <Route path="customer_info" element={<CustomerInfo />} />
                <Route path="Item:id" element={<Item />} />
            </Route>
        </Routes>
    );
}

export default App;
