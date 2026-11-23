import { useEffect, useState } from "react";

const MESSAGES = [
  "Fetching CV data",
  "Loading skills",
  "Polishing projects",
  "Almost there",
];

function Loader() {
  const [step, setStep] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const msg = setInterval(
      () => setStep((s) => Math.min(s + 1, MESSAGES.length - 1)),
      1400
    );
    const timer = setInterval(() => setSeconds((s) => s + 1), 1000);
    return () => {
      clearInterval(msg);
      clearInterval(timer);
    };
  }, []);

  return (
    <div
      className="flex justify-center items-center min-h-screen px-6"
      role="status"
      aria-live="polite"
    >
      <div className="retro-card w-full max-w-sm overflow-hidden">
        {/* Window-style title bar */}
        <div className="flex items-center gap-2 px-4 py-2 border-b-2 border-ink bg-paper-2">
          <span className="w-3 h-3 rounded-full bg-accent border border-ink" />
          <span className="w-3 h-3 rounded-full bg-mustard border border-ink" />
          <span className="w-3 h-3 rounded-full bg-accent-2 border border-ink" />
          <span className="ml-auto text-[0.7rem] tracking-[0.15em] uppercase text-ink-soft tabular-nums">
            {String(seconds).padStart(2, "0")}s
          </span>
        </div>

        <div className="p-6 flex flex-col gap-5">
          <div className="flex items-center gap-3">
            <span className="loader-spinner" aria-hidden />
            <span className="font-display italic text-3xl font-extrabold">
              Loading
              <span className="loader-dots" aria-hidden>
                <span>.</span>
                <span>.</span>
                <span>.</span>
              </span>
            </span>
          </div>

          {/* Indeterminate striped progress bar */}
          <div className="loader-track" aria-hidden>
            <div className="loader-bar" />
          </div>

          <p key={step} className="loader-msg m-0 text-xs uppercase tracking-[0.18em] text-ink-soft">
            &gt; {MESSAGES[step]}
            <span className="loader-caret" aria-hidden>_</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Loader;
