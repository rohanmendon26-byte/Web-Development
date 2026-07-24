import Image from "next/image";

export default function Home() {
  return (
   <div className="container size-80 bg-red-50 relative">
    <Image src="https://i.ytimg.com/vi/7MTXkRxZQ-8/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDzwD-AYPcMalcQp0DtxOfvIJVZYw" fill={true} className="mx-auto object-fit" alt=""   />
   </div>
  );
}
