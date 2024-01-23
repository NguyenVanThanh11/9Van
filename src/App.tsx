import { memo } from 'react';
import type { FC } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import classes from './App.module.css';
import resets from './components/_resets.module.css';
import { Login } from './components/Login/Login.js';
import { Role } from './components/Role/Role';
import { Dashboard } from './components/Dashboard/Dashboard';
import { LopHocHocSinh } from './components/Student/LopHocHocSinh/LopHocHocSinh';
import { Profile } from './components/Profile/Profile';
import { DanhSachLop } from './components/DanhSachLop/DanhSachLop';
import { TaoLopMoi } from './components/TaoLopMoi/TaoLopMoi';
import { DanhSachHocSinhTeacher } from './components/DanhSachHocSinhTeacher/DanhSachHocSinhTeacher';
import { BaiTap } from './components/BaiTap/BaiTap';
import { EBai } from './components/EBai/EBai';
import { AGiaoChoLop } from './components/AGiaoChoLop/AGiaoChoLop';

interface Props {
  className?: string;
}
export const App: FC<Props> = memo(function App(props = {}) {
  return (
    // <div className={`${resets.clapyResets} ${classes.root}`}>
    //   <Login />
    // </div>
    <Router>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/role" element={<Role />} />
      <Route path="/giao-vien" element={<Dashboard />} />
      <Route path="/hoc-sinh" element={<LopHocHocSinh />} />
      <Route path="/lop-hoc" element={<DanhSachLop />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/tao-moi-lop" element={<TaoLopMoi />} />
      <Route path="/danh-sach-hoc-sinh" element={<DanhSachHocSinhTeacher />} />
      <Route path="/bai-tap" element={<BaiTap />} />
      <Route path="/de-thi" element={<EBai />} />
      <Route path="/da-giao" element={<AGiaoChoLop />} />
    </Routes>
  </Router>
  );
});
