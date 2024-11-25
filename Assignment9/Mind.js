function toggleContent() {
    const content = document.getElementById('hiddenContent');
    if (content.style.display === 'none' || content.style.display === '') {
        content.style.display = 'block'; // Show content
    } else {
        content.style.display = 'none'; // Hide content
    }
}