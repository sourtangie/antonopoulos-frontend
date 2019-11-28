/**
 * Created by cassi on 28/11/19.
 */
import React from "react";

class FormView extends React.Component {

    handleChange(e){
        e.preventDefault();
        if(e.target.key.value === ""){
            alert("Please input a private key!")
        }else {
            this.props.changeValue(
                e.target.key.value,
            );
        } };

    render() {
        return (
            <form onSubmit={this.handleChange.bind(this)}>
                <label>
                    Private Key:
                    <input type="text" name="key" />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default FormView;