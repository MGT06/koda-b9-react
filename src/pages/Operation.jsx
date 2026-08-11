// Minitask 1
import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Operation() {
  let [num, setNum] = useState(0);
  return (
    <>
      <Header />
      <div className="flex justify-center items-center h-full gap-10">
        <button
          onClick={() => {
            if (num <= 0) {
              console.log("Angka Tidak dapat kurang Dari 0");
              return;
            }
            setNum(num - 1);
          }}
          className="py-2 px-4 border rounded-2xl cursor-pointer"
        >
          Kurang
        </button>
        <p className="font-bold text-4xl">{num}</p>
        <button
          onClick={() => {
            if (num >= 10) {
              console.log("Angka Tidak dapat kurang Dari 0");
              return;
            }
            setNum(num + 1);
          }}
          className="py-2 px-4 border rounded-2xl cursor-pointer"
        >
          Tambah
        </button>
      </div>
      <Footer />
    </>
  );
}

export default Operation;
