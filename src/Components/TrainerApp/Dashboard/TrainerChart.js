import React, { Component } from 'react';
import '../../../../node_modules/react-vis/style.css';
import { RadialChart } from 'react-vis';

class TrainerChart extends Component {

    constructor(props) {
        super(props)
        const myData = [{ angle: 1 }, { angle: 5 }, { angle: 2 }]
        this.state = { myData }
    }

    render() {
        return (
            < React.Fragment >
                <RadialChart
                    data={this.state.myData}
                    width={300}
                    height={300} />
            </React.Fragment >

        )
    }
}
export default TrainerChart;                              