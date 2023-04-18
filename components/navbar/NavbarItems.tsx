import React from "react";

export default function NavbarItems({ label }: any) {
  return (
    <div className="text-white cursor-pointer hover:text-gray-300 transition">
      {label}
    </div>
  );
}
