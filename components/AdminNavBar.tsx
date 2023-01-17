import Image from "next/image";

const AdminNavBar = ({ session }: any) => {
  return (
    <div className="navbar bg-black text-primary-content">
      <div className="navbar-start"></div>
      <div className="navbar-center hidden lg:flex">
        <div className="form-control">
          <div className="input-group">
            <input
              type="text"
              placeholder="Search…"
              className="input input-bordered"
            />
            <button className="btn btn-square">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="navbar-end">
        {session && (
          <div className="avatar cursor-pointer">
            <div className="w-12 rounded-full ring ring-success ring-offset-base-100 ring-offset-2">
              {session.user!.image ? (
                <Image
                  src={session.user!.image!}
                  alt="avatar"
                  width={100}
                  height={100}
                />
              ) : (
                <Image
                  src={
                    "https://c4.wallpaperflare.com/wallpaper/808/87/756/son-goku-dragon-ball-ultra-instinct-dragon-ball-super-white-hair-hd-wallpaper-preview.jpg"
                  }
                  alt="avatar"
                  width={100}
                  height={100}
                />
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminNavBar;
