import React, { Component } from 'react';
import { VictoryPie, VictoryLabel } from 'victory';

class TrainerChart extends Component {

    constructor(props) {
        super(props)
        const myData = [{ x: "Issues", y: 1 }, { x: "Attention", y: 5 }, { x: "Good", y: 2 }]
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
                    labelPosition={({ index }) => index ? 'centroid' : "startAngle"}
                    labelPlacement={({ index }) => index ? "parallel" : "vertical"}
                    labels={({ datum }) => datum.x}
                />
            </React.Fragment >

        )
    }
}
export default TrainerChart;                              