export function formatTime(totalSeconds: number) {
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds - (hours * 3600)) / 60);
  const seconds = totalSeconds % 60;

  const formattedHours = hours < 10 ? `0${hours}` : hours.toString();
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes.toString();
  const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds.toString();

  if (hours > 0) {
    return `${formattedHours}:${formattedMinutes} hours`;
  } else if (minutes > 0) {
    return `${formattedMinutes}:${formattedSeconds} minutes`;
  } else {
    return `00:${formattedSeconds} seconds`;
  }
}