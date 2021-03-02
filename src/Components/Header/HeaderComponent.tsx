import React, { Component } from 'react';
import './HeaderStyle.scss';
import Logo from '../Logo/LogoComponent'

export class HeaderComponent extends Component<any> {
    render() {
        return(
            <div className="app-header">
                <Logo />
            </div>
        )
    }
}
export default HeaderComponent;