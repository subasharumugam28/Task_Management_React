import '../Styles/ProgressBar.css'
function ProgressBar({ task }) {
  const totalLength = task.length;
  const completedLength = task.filter((t) => t.completed).length;
  const percentage =
    totalLength === 0 ? 0 : (completedLength / totalLength) * 100;

  return (
    <div className="progress-container">
      <p className="progress-text">
        {completedLength} out of {totalLength} completed
      </p>

      <div className="progress-bar-background">
        <div
          className="progress-bar-fill"
          style={{ width: `${percentage}%` }}
        >
          {Math.round(percentage)}%
        </div>
      </div>
    </div>
  );
}
export default ProgressBar;