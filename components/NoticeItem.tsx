import Image from "next/image";
import Link from "next/link";

const NoticeItem = ({ propsData }: any) => {
  return (
    <div className="items-center justify-center text-center px-5 rounded-full">
      <div className="stats bg-primary text-primary-content">
        <div className="stat">
          <div className="stat-title">Account balance</div>
          <div className="text-sm">
            Special Supplementary Examinations (January 2023) for the pass out
            diploma students of Elite Polytechnic Institute, Mogra (EPI)
          </div>
          <div className="stat-actions">
            <button className="btn btn-sm btn-success">Check Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoticeItem;
