import React, { Component } from 'react';
import { Button } from 'reactstrap';

import { Constant } from '../consts/Numbers';

class Buttons extends Component {
    updateBar() {
        this.props.updateBar(this.props.elem);
    }

    render() {
        return (
            <Button
                className={`height-3rem rounded-0 mb-2
                    ${this.props.hasSelectedPb !== '' ? 'btn-outline-info' : 'btn-light'}`}
                disabled={ !this.props.hasSelectedPb }
                onClick={ () => {
                    this.updateBar();
                } }>
                {
                    (Math.sign(this.props.elem) === Constant.ONE) ? '+' : ''
                }
                { this.props.elem }
            </Button>
        );
    }
}

export default Buttons;
