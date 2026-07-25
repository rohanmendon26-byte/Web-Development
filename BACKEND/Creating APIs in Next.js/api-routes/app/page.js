"use client";

export default function Home() {
  const handleClick = async () => {
    const data = {
      name: "Rohan",
      role: "Coder",
    };

    const response = await fetch("/api/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const res = await response.json();
    console.log(res);
  };

  return (
    <div>
      <h1 className="text-xl font-bold">
        Next.js API Routes Demo
      </h1>

      <button onClick={handleClick}>
        Click me
      </button>
    </div>
  );
}