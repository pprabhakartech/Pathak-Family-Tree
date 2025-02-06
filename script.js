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