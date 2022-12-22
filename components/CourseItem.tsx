const CourseItem = ({ PropsData }: any) => {
  return (
    <div>
      <div className="items-center justify-between text-center px-3 py-3 rounded-full">
        <div
          className={
            PropsData % 2 == 0
              ? "stats bg-success text-primary-content shadow-lg"
              : "stats bg-primary text-primary-content"
          }
        >
          <div className="stat">
            <div className="stat-title">Account balance</div>
            <div className="text-sm">
              Special Supplementary Examinations (January 2023) for the pass out
              diploma students of Elite Polytechnic Institute, Mogra (EPI)
            </div>
            <div className="stat-actions">
              <button
                className={
                  PropsData % 2 !== 0
                    ? "btn btn-success btn-sm"
                    : "btn btn-primary btn-sm"
                }
              >
                Check Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseItem;
