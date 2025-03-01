// Get elements
const taskCount = document.querySelector('#task p');
const notificationCount = document.querySelector('#notification-count .count');
const activityLog = document.querySelector('#activity-log');
const firstBoxBtn = document.querySelector('#first-box button');

// Function to handle task completion
function handleTaskCompletion() {
    // Reduce number in task
    let taskValue = parseInt(taskCount.textContent);
    taskCount.textContent = taskValue - 1;

    // Increase number in notification count
    let notificationValue = parseInt(notificationCount.textContent);
    notificationCount.textContent = notificationValue + 1;

    // Display caption in activity log
    const taskCaption = document.querySelector('#first-box #caption').textContent;
    const activityEntry = document.createElement('p');
    activityEntry.textContent = `Completed Task: ${taskCaption}`;
    activityLog.appendChild(activityEntry);

    // Disable button and change opacity
    firstBoxBtn.disabled = true;
    firstBoxBtn.style.opacity = 0.5;
}

// Add event listener to the button
firstBoxBtn.addEventListener('click', handleTaskCompletion);
