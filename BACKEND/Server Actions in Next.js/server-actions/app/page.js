import Image from "next/image";
import { submitAction } from "@/actions/form";

export default function Home() {
  
  return (
    <div className="flex justify-center items-center h-screen">
      <form action={submitAction} className="border p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4">Simple Form</h1>

        <input
          name="name"
          type="text"
          placeholder="Enter your name"
          className="border p-2 mb-4 w-full"
        />

        <input
          name="email"
          type="email"
          placeholder="Enter your email"
          className="border p-2 mb-4 w-full"
        />

        <button className="bg-blue-500 text-white px-4 py-2 rounded w-full">
          Submit
        </button>
      </form>
    </div>
  );
}
