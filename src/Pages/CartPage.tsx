import InputField from "../Components/inputField";
import Btn from "../Components/Button";

function CartPage() {
    return (
        <div>
            <h3>Items:</h3>
            <InputField placeholder={"type placeholder"} />
            <Btn BtnText={"till Betalning"} />
        </div>
    );
}

export default CartPage;

//map function till inputfield
