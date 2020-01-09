/**
 * Created by cassi on 28/11/19.
 */
import React from "react";
import ItemService from "../api/ItemService";

class FormView extends React.Component {
    constructor(props) {
        super(props);
        this.itemService = new ItemService();
    }
    init(key) {
        this.itemService.getAll(key).then(items => {
            this.props.handler(items);
            console.log("init="+this.state);

        });
    }
    changeValue(key) {
        this.setState(
            {
                key: key
            },
        );
        this.init(key);
    }
    handleChange(e){
        e.preventDefault();
        if(e.target.key.value === ""){
            alert("Please input a key!")
        }else {
            this.changeValue(
                e.target.key.value,
            );
        } };

    render() {
        return (
            <form className="mr-sm-2 form-inline float-lg-right" onSubmit={this.handleChange.bind(this)}>
                <div>
                <label className="text-white font-weight-bold keyInput-label">
                    Public Key: </label>
                    <input className ="form-control mr-sm-2" type="search" name="key" placeholder="Public key..." aria-label="Search" />
                <button className="float-lg-right btn btn-outline-success" type="submit">Submit</button>
                </div>
                </form>
        );
    }
}

export default FormView;