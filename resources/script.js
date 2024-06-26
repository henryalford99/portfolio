function updateTime() {
    const now = new Date();
    const options = {
        timeZone: 'America/Phoenix',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
    };
    const formatter = new Intl.DateTimeFormat('en-US', options);
    const parts = formatter.formatToParts(now);

    const hours = parts.find(part => part.type === 'hour').value;
    const minutes = parts.find(part => part.type === 'minute').value;
    const seconds = parts.find(part => part.type === 'second').value;

    const timeString = `Peoria, AZ ${hours}:${minutes}:${seconds} MST`;
    document.getElementById('time').textContent = timeString;
}

setInterval(updateTime, 1000);
updateTime(); // Initial call to display the time immediately

