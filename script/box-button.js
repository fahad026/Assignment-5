// first-box
const taskCount = document.querySelector('#task p');
const notificationCount = document.querySelector('#notification-count .count');
const activityLog = document.querySelector('#activity-log');
const firstBoxBtn = document.querySelector('#first-box button');

// Function to handle task completion
function handleTaskCompletion() {
    // Reduce number in task
    let taskValue = parseInt(taskCount.textContent);
    if (isNaN(taskValue)) {
        console.error("Invalid task count value");
        return;
    }
    taskCount.textContent = taskValue - 1;

    // Increase number in notification count
    let notificationValue = parseInt(notificationCount.textContent);
    if (isNaN(notificationValue)) {
        console.error("Invalid notification count value");
        return;
    }
    notificationCount.textContent = notificationValue + 1;

    // Display caption in activity log
    const taskCaption = document.querySelector('#first-box #caption').textContent;

    // Create a new activity entry
    const activityEntry = document.createElement('p');
    activityEntry.textContent = `Completed Task: ${taskCaption}`;

    // Apply light gray background and other styles to the activity log entry
    activityEntry.style.backgroundColor = '#f0f0f0';  // Light gray background
    activityEntry.style.padding = '8px';
    activityEntry.style.margin = '5px 0';
    activityEntry.style.borderRadius = '4px';

    // Append the activity entry to the log
    activityLog.appendChild(activityEntry);

    // Disable button and change opacity
    firstBoxBtn.disabled = true;
    firstBoxBtn.style.opacity = 0.5;

    // Add an alert to notify the user when the task is completed
    alert(`Task "${taskCaption}" has been completed!`);

}

// Add event listener to the button
if (firstBoxBtn) {
    firstBoxBtn.addEventListener('click', handleTaskCompletion);
} else {
    console.log('First box button not found.');
}


// second-box
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
// seventh-box
document.addEventListener('DOMContentLoaded', function () {
    // Get elements for task and notification counts
    const taskCount = document.querySelector('#task p');
    const notificationCount = document.querySelector('#notification-count .count');
    const activityLog = document.querySelector('#activity-log');

    // Get the button for the seventh box
    const seventhBoxBtn = document.querySelector('#btn-seven');  // Button in the seventh box

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

        // Get the caption of the seventh box
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

    // Add event listener to the seventh box button
    if (seventhBoxBtn) {
        seventhBoxBtn.addEventListener('click', function() {
            handleTaskCompletion(seventhBoxBtn, '#caption-seven');
        });
    } else {
        console.log('Seventh box button not found.');
    }
});
// eight-box
document.addEventListener('DOMContentLoaded', function () {
    // Get elements for task and notification counts
    const taskCount = document.querySelector('#task p');
    const notificationCount = document.querySelector('#notification-count .count');
    const activityLog = document.querySelector('#activity-log');

    // Get the button for the last box (eighth box in this case)
    const eighthBoxBtn = document.querySelector('#btn-eigth');  // Button in the eighth box

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

        // Get the caption of the eighth box
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

        // Show a normal alert
        alert(`Task "${taskCaption}" has been completed!`);

        // Show the second "Congratulations!!" alert
        alert('Congratulations!! You have complete all the tasks');
    }

    // Add event listener to the eighth box button
    if (eighthBoxBtn) {
        eighthBoxBtn.addEventListener('click', function() {
            handleTaskCompletion(eighthBoxBtn, '#caption-eigth');
        });
    } else {
        console.log('Eighth box button not found.');
    }
});

// clear history


// Select the 'Clear History' button and activity comments container
const clearHistoryButton = document.getElementById('clear-history');
const activityCommentsContainer = document.getElementById('activity-log');

// Add an event listener to the "Clear History" button
clearHistoryButton.addEventListener('click', function (){
    // Clear all comments inside the activity log
    activityCommentsContainer.innerHTML = ''; // This removes all child elements (comments)
});
