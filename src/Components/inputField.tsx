function InputItem(props) {
    return (
        <div>
            <input
                type="text"
                placeholder={props.placeholder}
                className="input input-bordered w-full max-w-xs"
            />
        </div>
    );
}

export default InputItem;

//add function to pass data
