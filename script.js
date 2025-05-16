// Show the popup when the page loads
window.onload = function () {
    document.getElementById('welcome-popup').style.display = 'flex';
};

// Close the popup when the close button is clicked
document.getElementById('close-popup').addEventListener('click', function () {
    document.getElementById('welcome-popup').style.display = 'none';
});




// Show the About Us popup when the About Us button is clicked
document.getElementById('about-us').addEventListener('click', function () {
    document.getElementById('about-popup').style.display = 'flex';
});

// Close the About Us popup
document.getElementById('close-about-popup').addEventListener('click', function () {
    document.getElementById('about-popup').style.display = 'none';
});

//for toggle button

document.addEventListener('DOMContentLoaded', function() {
    const nodes = document.querySelectorAll('.tree .node');
    const toggleAllButton = document.getElementById('toggle-all');
    let isExpanded = false; // Track the current state of the tree

    // Function to expand or collapse all nodes
    function toggleAllNodes(expand) {
        nodes.forEach(node => {
            const parentLi = node.parentElement;
            const childrenUl = parentLi.querySelector('ul');

            if (childrenUl) {
                if (expand) {
                    parentLi.classList.add('expanded');
                } else {
                    parentLi.classList.remove('expanded');
                }
            }
        });
    }

    // Add click event to toggle individual nodes
    nodes.forEach(node => {
        const parentLi = node.parentElement;
        const childrenUl = parentLi.querySelector('ul');

        if (childrenUl) {
            node.addEventListener('click', function(event) {
                event.stopPropagation();
                parentLi.classList.toggle('expanded');
            });

            // Initially collapse all items with children
            parentLi.classList.remove('expanded');
        } else {
            node.style.cursor = 'default';
        }
    });

    // Add click event to the "Expand All" / "Collapse All" button
    toggleAllButton.addEventListener('click', function() {
        isExpanded = !isExpanded; // Toggle the state
        toggleAllNodes(isExpanded); // Expand or collapse all nodes
        toggleAllButton.textContent = isExpanded ? 'Collapse All' : 'Expand All'; // Update button text
    });
});

//Count total number of living person
document.addEventListener("DOMContentLoaded", function () {
        const livingNodes = document.querySelectorAll('.node.living');
        const livingCountElement = document.getElementById('living-count');
        if (livingCountElement) {
            livingCountElement.textContent = livingNodes.length;
        }
    });
