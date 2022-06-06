window.addEventListener('deviceorientation', handleOrientation, true);
function handleOrientation(event) {
    var absolute = event.absolute;
    var alpha = event.alpha;
    var beta = event.beta;
    var gamma = event.gamma;

    document.getElementById('test').innerText = `absolute: ${absolute}, alpha: ${alpha}, beta: ${beta}, amma: ${gamma}`;
    // Do stuff with the new orientation data
}
