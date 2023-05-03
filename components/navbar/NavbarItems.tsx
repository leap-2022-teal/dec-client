import React from "react";

export default function NavbarItems({ label }: any) {
  return (
    <div className="text-black cursor-pointer hover:text-gray-300 transition text-xs">
      {label}
    </div>
  );
}
