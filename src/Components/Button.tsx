function Button(props) {
    return (
        <div>
            <div className="card-actions justify-end">
                <button className="btn btn-primary">{props.BtnText}</button>
            </div>
        </div>
    );
}

export default Button;
//add option to pass an event
