import { AdminSidebar } from "components";
import React from "react";

type IProps = {
  children: React.ReactNode;
};
const AdminLayout = ({ children }: IProps) => {
  return (
    <div>
      <AdminSidebar />
      {children}
    </div>
  );
};

export default AdminLayout;
