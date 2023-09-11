function updateUTCTime() {
    const utcDayElement = document.querySelector('[data-testid="currentDayOfTheWeek"]');
    const utcTimeElement = document.querySelector('[data-testid="currentUTCTime"]');
    const currentDate = new Date();

    const dayOptions = { weekday: 'long' };
    const hours = String(currentDate.getUTCHours()).padStart(2, '0');
    const minutes = String(currentDate.getUTCMinutes()).padStart(2, '0');
    const seconds = String(currentDate.getUTCSeconds()).padStart(2, '0');
    const milliseconds = String(currentDate.getUTCMilliseconds()).padStart(3, '0');
    const currentUTCDay = currentDate.toLocaleDateString('en-US', dayOptions);
    const currentUTCTime = `${hours}:${minutes}:${seconds}.${milliseconds}`;

    utcDayElement.textContent = ` ${currentUTCDay}`;
    utcTimeElement.textContent = currentUTCTime;
}

updateUTCTime();

setInterval(updateUTCTime, 100);

