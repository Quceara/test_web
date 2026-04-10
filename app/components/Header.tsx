"use client";

import { useEffect, useMemo, useState } from "react";

type HeaderProps = {
  onExpire?: () => void;
};

export default function Header({ onExpire }: HeaderProps) {
  const [secondsLeft, setSecondsLeft] = useState(10);

  useEffect(() => {
    const timerId = setInterval(() => {
      setSecondsLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  const formattedTime = useMemo(() => {
    const minutes = Math.floor(secondsLeft / 60);
    const seconds = secondsLeft % 60;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  }, [secondsLeft]);

  const isCritical = secondsLeft <= 30;

  useEffect(() => {
    if (secondsLeft === 0) {
      onExpire?.();
    }
  }, [secondsLeft, onExpire]);

  return (
    <header className="fixed top-0 left-0 z-50 flex w-full flex-col items-center gap-1 bg-[#1D5B43] py-2">
      <p className="text-[24px] leading-[130%] font-semibold text-white max-[1217px]:text-[18px] max-[344px]:text-[14px]">
        Успейте открыть пробную неделю
      </p>
      <div className={`flex items-center justify-center gap-2 ${isCritical ? "text-[#FD5656] animate-pulse" : "text-[#FFBB00]"}`}>
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4.99781 0.463683C5.22659 -0.154582 6.10105 -0.15458 6.32983 0.463685L7.44113 3.46694C7.51306 3.66132 7.66632 3.81458 7.8607 3.8865L10.864 4.99781C11.4822 5.22659 11.4822 6.10105 10.864 6.32983L7.8607 7.44113C7.66632 7.51306 7.51306 7.66632 7.44113 7.8607L6.32983 10.864C6.10105 11.4822 5.22659 11.4822 4.99781 10.864L3.8865 7.8607C3.81458 7.66632 3.66132 7.51306 3.46694 7.44113L0.463683 6.32983C-0.154582 6.10105 -0.15458 5.22659 0.463685 4.99781L3.46694 3.8865C3.66132 3.81458 3.81458 3.66132 3.8865 3.46694L4.99781 0.463683Z" fill="#FFBB00" />
        </svg>
        <time
          dateTime={`PT${Math.floor(secondsLeft / 60)}M${secondsLeft % 60}S`}
          className="font-[var(--font-raleway)] text-[40px] leading-[110%] font-bold max-[1217px]:text-[32px] max-[344px]:text-[28px]"
        >
          {formattedTime}
        </time>
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4.99781 0.463683C5.22659 -0.154582 6.10105 -0.15458 6.32983 0.463685L7.44113 3.46694C7.51306 3.66132 7.66632 3.81458 7.8607 3.8865L10.864 4.99781C11.4822 5.22659 11.4822 6.10105 10.864 6.32983L7.8607 7.44113C7.66632 7.51306 7.51306 7.66632 7.44113 7.8607L6.32983 10.864C6.10105 11.4822 5.22659 11.4822 4.99781 10.864L3.8865 7.8607C3.81458 7.66632 3.66132 7.51306 3.46694 7.44113L0.463683 6.32983C-0.154582 6.10105 -0.15458 5.22659 0.463685 4.99781L3.46694 3.8865C3.66132 3.81458 3.81458 3.66132 3.8865 3.46694L4.99781 0.463683Z" fill="#FFBB00" />
        </svg>
      </div>
    </header>
  );
}
