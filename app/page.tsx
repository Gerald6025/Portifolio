import Image from "next/image";
import Info from "@/components/info";
import Mouse from "@/components/mouse";
 import Circle from "@/components/circle";
 import Right from "@/components/right";

export default function Home() {
  return (
    <div className=" grid grid-cols-2 relative h-[100vh] w-full bg-[url(/back.jpg)] bg-center bg-cover bg-[#000000b7] bg-blend-overlay">
      <div>
      <Info/>
      <Mouse/>
      </div>
      <div>
      <Right />
      
      </div>

    </div>
  );
}
