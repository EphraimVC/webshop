import InputField from "../Components/inputField";
import Btn from "../Components/Button";

function CustomerInfo() {
    return (
        <div className="flex justify-center">
            <div>
                <h3>Customer Information:</h3>
                <InputField className="" placeholder={"Name"} />
                <InputField placeholder={"Adress"} />
                <InputField placeholder={"E-mail"} />
                <InputField placeholder={"Telephone"} />
            </div>
            <div>
                <Btn BtnText={"go to payment"} />
            </div>
        </div>
    );
}

export default CustomerInfo;

// add style on inputfields
