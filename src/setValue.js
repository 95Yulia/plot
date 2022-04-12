let dataOfSetValue = {};
let setOftrace2X = new Set();
let trace1Y = [];
let range, trace2Y, trace2X, trace3X, trace3Y, trace4X, trace4Y;

function setValue(value,date) {
    dataOfSetValue[date] = value;
    let keys = Object.keys(dataOfSetValue);
    keys.sort();
    setOftrace2X.clear();
    trace2Y = [];

    for (let i = 0; i < keys.length; i++) {
        if (!setOftrace2X.has(keys[i])) {
            setOftrace2X.add(new Date(keys[i] - 3 * 60 * 60 * 1000));
            trace2Y.push(dataOfSetValue[keys[i]]);
        }
    }

    trace2X = Array.from(setOftrace2X);

    let k = (trace2Y[trace2Y.length-1]-trace2Y[trace2Y.length-2])/(trace2X[trace2X.length-1]-trace2X[trace2X.length-2]);
    let predictionY = k*(range[1] - trace2X[trace2X.length-1])+trace2Y[trace2Y.length-1];
    trace4X = [trace2X[trace2X.length-1], range[1]];
    trace4Y = [trace2Y[trace2Y.length-1], predictionY];

    trace3Y = [trace2Y[0]];
    trace3X = [trace2X[0]];

    for (let i=0; i<trace2Y.length; i++){
        trace3Y.push(trace2Y[i+1]-trace2Y[i]);
        trace3X.push(trace2X[i+1]);
    }
}

function setPlan(value) {
    trace1Y = [value, value]
}

function setRange(date) {
    range = [new Date(date), new Date(date+86399059)]
}


setRange(1529010000000)
setValue(18, 1529038860000+3600000*1);
setValue(28, 1529038860000+3600000*2);
setValue(15, 1529038860000);
setValue(31, 1529038860000+3600000*3);
setValue(36, 1529038860000+3600000*4);
setPlan(100);

export {range, trace1Y, trace2Y, trace2X, trace3X, trace3Y, trace4X, trace4Y}