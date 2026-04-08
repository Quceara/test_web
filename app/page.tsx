"use client";

import { useState } from "react";
import Body from "./components/Body";
import Header from "./components/Header";

export default function Home() {
  const [timerExpired, setTimerExpired] = useState(false);

  return (
    <main className="overflow-x-hidden">
      <Header onExpire={() => setTimerExpired(true)} />
      <Body timerExpired={timerExpired} />
    </main>
  );
}
