"use client";

import { useEffect, useState } from "react";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

function getTimeLeft(): TimeLeft {
  const releaseDate = new Date(2026, 10, 19, 0, 0, 0).getTime();
  const now = Date.now();
  const difference = releaseDate - now;

  if (difference <= 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
}

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

  useEffect(() => {
    const updateCountdown = () => {
      setTimeLeft(getTimeLeft());
    };

    updateCountdown();

    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!timeLeft) {
    return null;
  }

  const items = [
    { value: timeLeft.days, label: "DIAS" },
    { value: timeLeft.hours, label: "HORAS" },
    { value: timeLeft.minutes, label: "MIN" },
    { value: timeLeft.seconds, label: "SEG" },
  ];

  return (
    <div className="mt-12">
      <p className="mb-4 text-xs font-bold tracking-[0.25em] text-white/40">
        CONTAGEM REGRESSIVA
      </p>

      <div className="flex flex-wrap gap-3">
        {items.map((item) => (
          <div
            key={item.label}
            className="min-w-[90px] rounded-2xl border border-[#ff2bd6]/20 bg-[#ff2bd6]/5 px-5 py-4 shadow-[0_0_30px_rgba(255,43,214,0.05)]"
          >
            <div className="text-3xl font-black tabular-nums text-white">
              {String(item.value).padStart(2, "0")}
            </div>

            <div className="mt-1 text-[10px] font-bold tracking-[0.2em] text-[#ff65df]">
              {item.label}
            </div>
          </div>
        ))}
      </div>

      <p className="mt-4 text-sm text-white/30">
        19 de novembro de 2026
      </p>
    </div>
  );
}