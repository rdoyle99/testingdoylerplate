import Confetti from "react-confetti";
import { useState } from "react";

export default function Dashboard() {
  const [confetti, setConfetti] = useState(false);
  return (
    <main className="flex-1">
      {!!confetti ? (
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          recycle={false}
          numberOfPieces={500}
        />
      ) : null}
      <div className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="py-4">
            <button
              className="p-2 m-2 bg-blue-300 rounded shadow hover:bg-blue-200"
              type="button"
              onClick={() => {
                setConfetti(true);
                setTimeout(function () {
                  setConfetti(false);
                }, 5000);
              }}
            >
              Throw confetti
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
