function addingEventListener() {
    const input = document.getElementById('input');
    const test = document.getElementById('fifth');

    function clickAlert() {
        alert('I was clicked!');
    }
    
    input.addEventListener('click', clickAlert);
    test.addEventListener('click', clickAlert);
}
addingEventListener();
