// Line Analyzer

// Add Event Listener
document.getElementById('analyze').addEventListener('click', analyzeLine);

// Event Function
function analyzeLine() {
    // Get Inputted Point Data (pt1x, pt1y) and (pt2x, pt2y)
    let pt1x = Number(document.getElementById('pt1x').value);
    let pt1y = Number(document.getElementById('pt1y').value);
    let pt2x = Number(document.getElementById('pt2x').value);
    let pt2y = Number(document.getElementById('pt2y').value);

    // Call Analyze Functions and Display results
    document.getElementById('length').innerHTML = getLength(pt1x, pt1y, pt2x, pt2y);
    document.getElementById('slope').innerHTML = getSlope(pt1x, pt1y, pt2x, pt2y);
    document.getElementById('description').innerHTML = getDescription(pt1x, pt1y, pt2x, pt2y);
    document.getElementById('location-1').innerHTML = getPointLocation(pt1x, pt1y);
    document.getElementById('location-2').innerHTML = getPointLocation(pt2x, pt2y);
    // document.getElementById('equation').innerHTML = getEquation(pt1x, pt1y, pt2x, pt2y);
}

function getLength(x1, y1, x2, y2) {
    // Use pythagorean theorem to determine length from (x1, y1) to (x2, y2)
    let rise = y2 - y1;
    let run = x2 - x1;
    return (rise ** 2 + run ** 2) ** 0.5
}

function getSlope(x1, y1, x2, y2) {
    // Use the slopes rise/run formola to determine slope
    let rise = y2 - y1;
    let run = x2 - x1;
    return (rise / run)
}

function getDescription(x1, y1, x2, y2) {
    // Use the slope to determine its characteristics 
    let run = x2 - x1
    let rise  = y2 - y1;
    
    if(rise/run < 0 ) {
        return "decreasing";
    } else if(rise/run > 0) {
        return "increasing";
    } else if(rise/run == 0) {
        return "horizontal";
    } else {
        return "vertical";
    }
}


function getPointLocation(x1, y1) {
    // Use the points given to determine the location of x1 and y1
    if (x1 > 0 && y1 > 0) {  
        return "quadrant 1";
    } else if (x1 < 0 && y1 < 0) { 
        return "quadrant 2";
    } else if (x1 < 0 && y1 < 0) {
        return "quadrant 3";
    } else if (x1 > 0 && y1 > 0) { 
        return "quadrant 4";
    } else if (x1 == 0 && y1 == 0) { 
        return "origin";
    } else if (x1 == 0) { 
        return "y axis";
    } else if (y1 == 0) { 
        return "x axis";
    }
}

function getPointLocation(x2, y2) {
    // Use the points given to determine the location of x2 and y2 
    if (x2 > 0 && y2 > 0) {
        return "quadrant 1";
    } else if (x2 < 0 && y2 > 0) { 
        return "quadrant 2";
    } else if (x2 < 0 && y2 < 0) { 
        return "quadrant 3";
    } else if (x2 > 0 && y2 < 0) { 
        return "quadrant 4";
    } else if (x2 == 0 && y2 == 0) { 
        return "origin";
    } else if (x2 == 0) { 
        return "y axis";
    } else if (y2 == 0) { 
        return "x axis";
    }
}