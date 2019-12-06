/**
 * Created by cassi on 05/12/19.
 */
import React from 'react';
class Header extends React.Component{
    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-light bg-dark header-padding">
                <a className="navbar-brand font-weight-bold text-white" href="#">
                    <img className="brand-pic" src="https://i.imgur.com/pnRvBkI.png" width="30" height="30" alt="" />
                    Antonopolous Explorer</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </nav>)}
}
export default Header;