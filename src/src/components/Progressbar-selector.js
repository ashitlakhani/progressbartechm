import React, { Component } from 'react';
import { FormGroup, Label, Input } from 'reactstrap';

import { ProgOptions } from './Progressbar-Opts';

class ProgressbarSelector extends Component {
    changeProgressbar(e) {
        this.props.selectPbById(e);
    }

    render() {
        return (
            <FormGroup>
                <Label for="progressbAs-select0" className="text-brand">
                    Select Progressbar
                </Label>
                <Input type="select" id="progressbAs-select0"
                    name="progressbar-select" bsSize="lg"
                    className="rounded-0 normal-bdcolor-boxshadow
                        custom-select height-3rem appear-btn"
                    onChange={ (event) => {
                        this.changeProgressbar(event);
                    } }>
                    {this.props.bars.map((item, idx) => (
                        <ProgOptions key={idx} {...item} />
                    ))}
                </Input>
            </FormGroup>
        );
    }
}

export default ProgressbarSelector;
