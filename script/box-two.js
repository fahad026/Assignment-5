document.addEventListener("DOMContentLoaded", function() {
    // Get all the necessary elements
    const taskAssignedElement = document.querySelector('#task p'); // Element showing task count
    const notificationCountElement = document.querySelector('#notification-count .count'); // Notification count
    const activityLogElement = document.querySelector('#activity-log'); // Activity log element
    const firstBoxCaption = document.querySelector('#second-box #caption-two'); // Caption of the first box
    const completedButton = document.querySelector('#second-box button'); // "Completed" button in the first box
    
    // Define initial counts (set them accordingly if you have data)
    let taskCount = parseInt(taskAssignedElement.textContent) || 0;
    let notificationCount = parseInt(notificationCountElement.textContent) || 23;

    // Function to update task count and notification count
    function updateCounts() {
        taskAssignedElement.textContent = taskCount;
        notificationCountElement.textContent = notificationCount;
    }

    // Function to handle the completed button click
    completedButton.addEventListener('click', function() {
        // Disable the completed button after clicking
        completedButton.disabled = true;
        
        // Reduce task count
        taskCount -= 1;
        
        // Increase notification count
        notificationCount += 1;
        
        // Show the caption in the activity log
        const activityLogItem = document.createElement('div');
        activityLogItem.textContent = ` ${firstBoxCaption.textContent}`;
        activityLogElement.appendChild(activityLogItem);
        
        // Update the counts on the page
        updateCounts();
    });
});
