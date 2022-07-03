import React from "react";
import NhanVien from "./nhanVien";
import SanPham from "./sanPham";
import WithCard from "./with-card";

const WapperCard = WithCard(NhanVien);

export default function HocPage() {
  return (
    <div>
      <h3>HOC Page</h3>
      {/* <NhanVien /> */}
      <br />
      <WapperCard />
    </div>
  );
}
