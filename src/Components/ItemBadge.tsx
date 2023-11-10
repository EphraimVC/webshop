import { ApiData } from "../Helpers/typeIndex";

function ItemBadge(props: ApiData) {
    const thumbnails = `https://www.bortakvall.se/${props.image}`;

    return (
        <div className="mt-20">
            <div
                key={props.id}
                className="card card-compact w-96 bg-base-100 shadow-xl"
            >
                <figure>
                    <img className="rounded-lg" src={thumbnails} alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{props.name}</h2>
                    <p className="font-extrabold text-lg">{props.price} kr</p>
                    <div className="card-actions justify-center">
                        <button className="btn btn-primary">
                            Lägg till i varukorgen
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ItemBadge;
