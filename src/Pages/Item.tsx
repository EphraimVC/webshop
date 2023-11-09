import ItemHero from "../Components/ItemHero";
import Btn from "../Components/Button";

function Item(props) {
    return (
        <div>
            <ItemHero image={} name={} price={} />
            <div className="flex justify-center">
                <Btn BtnText={"Lägg till"} />
            </div>
        </div>
    );
}

export default Item;
