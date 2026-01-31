function Prop(props) {

    if (props.show == true) {
        return (
            <div>
                <p>
                    name : {props.name} <br />
                    age : {props.age}
                </p>
            </div>
        );
    }
    else {
        return (
            <div>
                Record is not Found
            </div>
        );
    }
}
export default Prop;