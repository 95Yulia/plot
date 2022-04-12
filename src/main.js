import Plotly from 'plotly.js-dist-min' ;
import {range, trace1Y, trace2Y, trace2X, trace3X, trace3Y, trace4X, trace4Y} from "./setValue";

function colorOfTrace4() {
    if(trace4Y[1] >= trace1Y[0]) {
        return  '#ff8e45';
    } else {
        return   '#fd0101';
    }
}

let trace1 = {
    x: range,
    y: trace1Y,
    name: 'План добычи',
    type: 'scatter',
    fill: 'tonexty',
    mode: 'lines',
    fillcolor: 'rgba(62,178,255,0.12)'


};
let trace2 = {
    x: trace2X,
    y: trace2Y,
    name: 'Добыто (сутки)',
    mode: 'lines',
    line: {
        color: "#b710ff"
    }
};

let trace3 = {
    x: trace3X,
    y: trace3Y,
    name: 'Добыто (час)',
    type: 'bar',
    marker: {
        color: '#65ff7c'
    }
};

let trace4 = {
    x: trace4X,
    y: trace4Y,
    name: 'Прогноз добычи',
    mode: 'lines',
    line: {
        dash: 'dot',
        color: colorOfTrace4()
    }
};
let data = [trace1, trace2, trace3, trace4];
let layout = {
    title: {
        text:'Скважина 1-1',
        font: {
            family: 'Courier New, monospace',
            size: 24
        },
        xanchor: 'center'
    },
    xaxis: {
        title: {
            font: {
                family: 'Courier New, monospace',
                size: 18,
                color: '#7f7f7f'
            }
        },
        type: 'date',
        range: range,
        dtick: 7200000,
    },
    yaxis: {
        title: {
            text: 'Дебит',
            font: {
                family: 'Courier New, monospace',
                size: 18,
                color: '#7f7f7f'
            },
            standoff: 15
        },
        ticksuffix: ' тыс.м'
    },
    margin: {
        autoexpand: true,
        pad: 10,
        l: 150,
    },
    legend: {
        orientation: 'h',
        xanchor: 'center',
        x: 0.5
    },
    autosize: true
};

let config = {responsive: true}

Plotly.newPlot('gd' , data, layout, config)
