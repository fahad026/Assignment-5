// Get elements
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
