/**
 * Created by cassi on 28/11/19.
 */
import React from "react";

class FormView extends React.Component {

    handleChange(e){
        e.preventDefault();
        if(e.target.key.value === ""){
            alert("Please input a key!")
        }else {
            this.props.changeValue(
                e.target.key.value,
            );
        } };

    render() {
        return (
            <form className="mr-sm-2 form-inline" onSubmit={this.handleChange.bind(this)}>
                <div>
                <label className="text-white font-weight-bold">
                    Public Key: </label>
                    <input className ="form-control mr-sm-2" type="search" name="key" placeholder="Public key..." aria-label="Search" />
                <button className="pull-right btn btn-outline-success" type="submit">Submit</button>
                </div>
                </form>
        );
    }
}

export default FormView;