import React, { Component } from 'react';
import { Progress } from 'reactstrap';

export class Progressbars extends Component {
    render() {
        return (
            <div>
                {this.props.bars.map((elem, idx) => (
                    <div key={elem.pbId + idx}>
                    <div className="text-center middle-percent">
                        {elem.val}%
                    </div>
                    <Progress color={`${elem.val > this.props.limit ? 'danger' : 'info'}`}
                        className="height-3rem rounded-0"
                        value={ elem.val } />
                    </div>    
                ))}
            </div>
        );
    }
}

export default Progressbars;
