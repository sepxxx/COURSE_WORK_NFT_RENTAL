function Progress({ max, value, readableValue }) {
  return (
    <div className="progress-container">
      <progress max={max} value={value} />
    </div>
  );
}

export { Progress };
