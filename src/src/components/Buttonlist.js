import React, {Component} from 'react';
import Buttons from './Buttons';

class ButtonList extends Component {
	render() {
		return (

                <div className="text-center equalspace-flex">
                    { this.props.btns.map((elem, idx) => (
                        <Buttons elem={elem} key={elem + idx}
                            hasSelectedPb={ this.props.hasChoosen }
                            updateBar={ this.props.updateBar } />
                    )) }
                </div>

		);
	}
}

export default ButtonList;
