// Function to show the selected content and hide the others
function showContent(contentId) {
    // Hide all content
    var contents = document.getElementsByClassName('content');
    for (var i = 0; i < contents.length; i++) {
        contents[i].style.display = 'none';
    }

    // Show the selected content
    document.getElementById(contentId).style.display = 'block';
}
