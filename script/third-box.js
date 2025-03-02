// third-box
document.addEventListener('DOMContentLoaded', function () {
    // Get elements for task and notification counts
    const taskCount = document.querySelector('#task p');
    const notificationCount = document.querySelector('#notification-count .count');
    const activityLog = document.querySelector('#activity-log');

    // Get the button for the third box
    const thirdBoxBtn = document.querySelector('#btn-third');  // Button in the third box

    // Function to handle task completion
    function handleTaskCompletion(button, captionId) {
        // Ensure we have valid elements
        if (!taskCount || !notificationCount || !activityLog) {
            console.error('One or more required elements are missing!');
            return;
        }

        // Reduce the task count by 1
        let taskValue = parseInt(taskCount.textContent);
        if (isNaN(taskValue)) {
            console.error('Task count is not a valid number');
            return;
        }
        taskCount.textContent = taskValue - 1;

        // Increase notification count by 1
        let notificationValue = parseInt(notificationCount.textContent);
        if (isNaN(notificationValue)) {
            console.error('Notification count is not a valid number');
            return;
        }
        notificationCount.textContent = notificationValue + 1;

        // Get the caption of the third box (updated id)
        const taskCaption = document.querySelector(captionId).textContent;

        // Create a new entry in the activity log
        const activityEntry = document.createElement('p');
        activityEntry.textContent = `Completed Task: ${taskCaption}`;

        // Add light gray background to activity log entry
        activityEntry.style.backgroundColor = '#f0f0f0';  // Light gray background
        activityEntry.style.padding = '8px';
        activityEntry.style.margin = '5px 0';
        activityEntry.style.borderRadius = '4px';

        // Append the activity entry to the log
        activityLog.appendChild(activityEntry);

        // Disable the button and change its opacity
        button.disabled = true;
        button.style.opacity = 0.5;

        // Optionally, alert the user
        alert(`Task "${taskCaption}" has been completed!`);
    }

    // Add event listener to the third box button
    if (thirdBoxBtn) {
        thirdBoxBtn.addEventListener('click', function() {
            handleTaskCompletion(thirdBoxBtn, '#caption-third');
        });
    } else {
        console.log('Third box button not found.');
    }
});



// fourth-box
document.addEventListener('DOMContentLoaded', function () {
    // Get elements for task and notification counts
    const taskCount = document.querySelector('#task p');
    const notificationCount = document.querySelector('#notification-count .count');
    const activityLog = document.querySelector('#activity-log');

    // Get the button for the fourth box
    const fourthBoxBtn = document.querySelector('#btn-fourth');  // Button in the fourth box

    // Function to handle task completion
    function handleTaskCompletion(button, captionId) {
        // Ensure we have valid elements
        if (!taskCount || !notificationCount || !activityLog) {
            console.error('One or more required elements are missing!');
            return;
        }

        // Reduce the task count by 1
        let taskValue = parseInt(taskCount.textContent);
        if (isNaN(taskValue)) {
            console.error('Task count is not a valid number');
            return;
        }
        taskCount.textContent = taskValue - 1;

        // Increase notification count by 1
        let notificationValue = parseInt(notificationCount.textContent);
        if (isNaN(notificationValue)) {
            console.error('Notification count is not a valid number');
            return;
        }
        notificationCount.textContent = notificationValue + 1;

        // Get the caption of the fourth box (updated id)
        const taskCaption = document.querySelector(captionId).textContent;

        // Create a new entry in the activity log
        const activityEntry = document.createElement('p');
        activityEntry.textContent = `Completed Task: ${taskCaption}`;

        // Add light gray background to activity log entry
        activityEntry.style.backgroundColor = '#f0f0f0';  // Light gray background
        activityEntry.style.padding = '8px';
        activityEntry.style.margin = '5px 0';
        activityEntry.style.borderRadius = '4px';

        // Append the activity entry to the log
        activityLog.appendChild(activityEntry);

        // Disable the button and change its opacity
        button.disabled = true;
        button.style.opacity = 0.5;

        // Show an alert confirming the task completion
        alert(`Task "${taskCaption}" has been completed!`);
    }

    // Add event listener to the fourth box button
    if (fourthBoxBtn) {
        fourthBoxBtn.addEventListener('click', function() {
            handleTaskCompletion(fourthBoxBtn, '#caption-fourth');
        });
    } else {
        console.log('Fourth box button not found.');
    }
});


// fifth-box
document.addEventListener('DOMContentLoaded', function () {
    // Get elements for task and notification counts
    const taskCount = document.querySelector('#task p');
    const notificationCount = document.querySelector('#notification-count .count');
    const activityLog = document.querySelector('#activity-log');

    // Get the button for the fifth box
    const fifthBoxBtn = document.querySelector('#btn-fifth');  // Button in the fifth box

    // Function to handle task completion
    function handleTaskCompletion(button, captionId) {
        // Ensure we have valid elements
        if (!taskCount || !notificationCount || !activityLog) {
            console.error('One or more required elements are missing!');
            return;
        }

        // Reduce the task count by 1
        let taskValue = parseInt(taskCount.textContent);
        if (isNaN(taskValue)) {
            console.error('Task count is not a number');
            return;
        }
        taskCount.textContent = taskValue - 1;

        // Increase notification count by 1
        let notificationValue = parseInt(notificationCount.textContent);
        if (isNaN(notificationValue)) {
            console.error('Notification count is not a number');
            return;
        }
        notificationCount.textContent = notificationValue + 1;

        // Get the caption of the fifth box (updated id)
        const taskCaption = document.querySelector(captionId).textContent;

        // Create a new entry in the activity log
        const activityEntry = document.createElement('p');
        activityEntry.textContent = `Completed Task: ${taskCaption}`;

        // Add light gray background to the activity entry
        activityEntry.style.backgroundColor = '#f0f0f0';  // Light gray background
        activityEntry.style.padding = '8px';
        activityEntry.style.margin = '5px 0';
        activityEntry.style.borderRadius = '4px';

        // Append the activity entry to the log
        activityLog.appendChild(activityEntry);

        // Disable the button and change its opacity
        button.disabled = true;
        button.style.opacity = 0.5;

        // Show an alert after the task is completed
        alert(`Task "${taskCaption}" has been completed!`);
    }

    // Add event listener to the fifth box button
    if (fifthBoxBtn) {
        fifthBoxBtn.addEventListener('click', function() {
            handleTaskCompletion(fifthBoxBtn, '#caption-fifth');
        });
    } else {
        console.log('Fifth box button not found.');
    }
});

// sixth-box
document.addEventListener('DOMContentLoaded', function () {
    // Get elements for task and notification counts
    const taskCount = document.querySelector('#task p');
    const notificationCount = document.querySelector('#notification-count .count');
    const activityLog = document.querySelector('#activity-log');

    // Get the button for the sixth box
    const sixthBoxBtn = document.querySelector('#btn-sixth');  // Button in the sixth box

    // Function to handle task completion
    function handleTaskCompletion(button, captionId) {
        // Ensure we have valid elements
        if (!taskCount || !notificationCount || !activityLog) {
            console.error('One or more required elements are missing!');
            return;
        }

        // Reduce the task count by 1
        let taskValue = parseInt(taskCount.textContent);
        if (isNaN(taskValue)) {
            console.error('Task count is not a number');
            return;
        }
        taskCount.textContent = taskValue - 1;

        // Increase notification count by 1
        let notificationValue = parseInt(notificationCount.textContent);
        if (isNaN(notificationValue)) {
            console.error('Notification count is not a number');
            return;
        }
        notificationCount.textContent = notificationValue + 1;

        // Get the caption of the sixth box (updated id)
        const taskCaption = document.querySelector(captionId).textContent;

        // Create a new entry in the activity log
        const activityEntry = document.createElement('p');
        activityEntry.textContent = `Completed Task: ${taskCaption}`;
        
        // Apply light gray background color to activity entry
        activityEntry.style.backgroundColor = '#f0f0f0';  // Light gray
        activityEntry.style.padding = '8px';
        activityEntry.style.margin = '5px 0';
        activityEntry.style.borderRadius = '4px';

        // Append the activity entry to the log
        activityLog.appendChild(activityEntry);

        // Disable the button and change its opacity
        button.disabled = true;
        button.style.opacity = 0.5;

        // Show an alert after the task is completed
        alert(`Task "${taskCaption}" has been completed!`);
    }

    // Add event listener to the sixth box button
    if (sixthBoxBtn) {
        sixthBoxBtn.addEventListener('click', function() {
            handleTaskCompletion(sixthBoxBtn, '#caption-sixth');
        });
    } else {
        console.log('Sixth box button not found.');
    }
});
