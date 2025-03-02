document.addEventListener('DOMContentLoaded', function () {
    // Get elements for task and notification counts
    const taskCount = document.querySelector('#task p');
    const notificationCount = document.querySelector('#notification-count .count');
    const activityLog = document.querySelector('#activity-log');

    // Get the button for the second box
    const secondBoxBtn = document.querySelector('#btn-two');  // Button in the second box

    // Function to handle task completion
    function handleTaskCompletion() {
        // Reduce the task count by 1
        let taskValue = parseInt(taskCount.textContent);
        taskCount.textContent = taskValue - 1;

        // Increase notification count by 1
        let notificationValue = parseInt(notificationCount.textContent);
        notificationCount.textContent = notificationValue + 1;

        // Get the caption of the second box
        const taskCaption = document.querySelector('#caption-two').textContent;

        // Create a new entry in the activity log
        const activityEntry = document.createElement('p');
        activityEntry.textContent = `Completed Task: ${taskCaption}`;
        
        // Style the activity entry with a light gray background
        activityEntry.style.backgroundColor = '#f0f0f0';  // Light gray background
        activityEntry.style.padding = '8px';
        activityEntry.style.margin = '5px 0';
        activityEntry.style.borderRadius = '4px';

        // Append the activity entry to the log
        activityLog.appendChild(activityEntry);

        // Disable the button and change its opacity
        secondBoxBtn.disabled = true;
        secondBoxBtn.style.opacity = 0.5;

        // Alert the user that the task has been completed
        alert(`Task "${taskCaption}" has been completed!`);
    }

    // Add event listener to the second box button
    if (secondBoxBtn) {
        secondBoxBtn.addEventListener('click', handleTaskCompletion);
    } else {
        console.log('Second button not found.');
    }
});
