document.addEventListener('DOMContentLoaded', function() {
    // Check if user has seen the disclaimer before
    if (!localStorage.getItem('disclaimerSeen')) {
        // Show popup after a short delay
        setTimeout(function() {
            document.getElementById('disclaimer-popup').style.display = 'block';
        }, 1000);
    }

    // Close popup when clicking the close button
    document.getElementById('close-disclaimer').addEventListener('click', function() {
        document.getElementById('disclaimer-popup').style.display = 'none';
        localStorage.setItem('disclaimerSeen', 'true');
    });

    // Close popup when clicking outside
    window.addEventListener('click', function(event) {
        if (event.target === document.getElementById('disclaimer-popup')) {
            document.getElementById('disclaimer-popup').style.display = 'none';
            localStorage.setItem('disclaimerSeen', 'true');
        }
    });
}); 