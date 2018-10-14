import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Constant } from '../consts/Numbers';
import { getPbs } from '../actions';
import Title from '../components/title';
import Progressbars from '../components/Progressbars';
import ProgressbarSelector from '../components/Progressbar-selector';
import ButtonList from '../components/Buttonlist';

export class Container extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bars: [{
                pbId: '',
                val: Constant.ZERO
            }],
            chosenBar: 'progbar1'
        };
    }

    componentWillMount() {
        this.props.getPbs();
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            bars: nextProps.bars
        });
    }

    selectbar(e) {
        const chosenBar = e.target.value;
        this.setState(() => ({ chosenBar }));
    }

    updateBar(num) {
        const allPbIds = Object.keys(this.props.bars).map((elem, idx) => {
            return `progbar${idx + Constant.ONE}`;
        });
        if (allPbIds.indexOf(this.state.chosenBar) !== Constant.NEGETIVEONE) {
            const bars = this.state.bars.map((ele) => {
                const newVal = (ele.val + num) < Constant.ZERO
                    ? Constant.ZERO : ele.val + num;
                if (ele.pbId === this.state.chosenBar) {
                    return {
                        pbId: ele.pbId,
                        val: newVal
                    };
                }
                return ele;
            });
            this.setState({
                bars
            });
        }
    }

    render() {
        if (!this.props.btns || !this.props.bars || !this.props.limit) {
            return (
                <div>
                Loading...
                </div>
            );
        }
        return (
            <div  className="col-12">
                <div> 
                    <Title />
                    <div>
                        <Progressbars bars={ this.state.bars } limit={ this.props.limit } />
                    </div>
                    <div>
                    <ProgressbarSelector bars={ this.state.bars }
                        hasSelectedPb={ this.state.chosenBar }
                        selectPbById={
                            (event) => {
                                this.selectbar(event);
                        }} />
                    <ButtonList hasChoosen={ this.state.chosenBar }
                        btns={ this.props.btns }
                        updateBar={
                            (number = Constant.ZERO) => {
                                this.updateBar(number);  
                         }} />
                    </div>
                </div>
            </div>
        );
    }
}

Container.propTypes = {
    bars: PropTypes.array,
    chosenBar: PropTypes.string
};

const mapStateToProps = (state) => ({
    btns: state.pbs.buttons,
    bars: state.pbs.bars,
    limit: state.pbs.limit
});

export default connect(mapStateToProps, { getPbs })(Container);
