function animateBox(day) {
    var box = document.getElementById('box');
    var colors = {
        'Monday': '#800080',  // Purple
        'Tuesday': '#FFC0CB', // Pink
        'Wednesday': '#0000FF', // Blue
        'Thursday': '#008000', // Green
        'Friday': '#FFFF00', // Yellow
        'Saturday': '#FFA500', // Orange
        'Sunday': '#FF0000' // Red
    };

    var distance = 100; // distance to move down in pixels

    box.style.backgroundColor = colors[day];
    box.style.display = 'block';
    box.style.transform = 'translateY(0)';

    setTimeout(function () {
        box.style.transform = 'translateY(' + distance + 'px)';
    }, 100);

    setTimeout(function () {
        box.classList.add('fade-out'); // Add fade-out class
        setTimeout(function() {
            box.style.display = 'none';
            box.classList.remove('fade-out'); // Remove fade-out class
        }, 1000);
    }, 1000);
}
