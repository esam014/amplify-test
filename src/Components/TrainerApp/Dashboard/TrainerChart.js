import React, { Component } from 'react';
import { VictoryPie, VictoryLabel } from 'victory';

class TrainerChart extends Component {

    constructor(props) {
        super(props)
        const myData = [{ x: 1, y: 2, }, { x: 2, y: 5 }, { x: 3, y: 2 }]
        this.state = { myData }
    }

    render() {
        return (
            < React.Fragment >
                <VictoryPie
                    colorScale={["red", "yellow", "green"]}
                    data={this.state.myData}
                    height={150}
                    innerRadius={20}
                    startAngle={-90}
                    endAngle={90}
                    labels={({ datum }) => `${datum.y}`}
                    labelRadius={({ datum }) => 30}
                    labelComponent={<VictoryLabel style={ {fontSize: 5 } } />}
                    animate={true}
                />
            </React.Fragment >

        )
    }
}
export default TrainerChart;                              