function ItemHero(props) {
    return (
        <div>
            <div className="card card-compact w-[43rem] bg-base-100 shadow-xl">
                <figure>
                    <img src={props.image} alt="Shoes" />
                </figure>
                <div className="card-body flex flex-row ">
                    <h2 className="card-title">{props.name}</h2>
                    <p>{props.price}</p>
                </div>
            </div>
        </div>
    );
}

export default ItemHero;

//fattas beskrivning
//
