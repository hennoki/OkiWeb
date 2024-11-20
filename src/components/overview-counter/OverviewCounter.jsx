import React from "react";
import CountUp from "react-countup";

const OverviewCounter = () => {
  return (
    <section className="  container h-12 md:h-32">
      <div className="grid grid-cols-4 divide-x divide-slate-700 mx-auto w-full md:max-w-[900px] shadow-lg bg-white dark:bg-gray-800 -translate-y-10 md:-translate-y-16 my-4 md:p-8 dark:text-white/70">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-sm font-bold text-black/80 dark:text-white sm:text-lg md:text-3xl">
            <CountUp end={322} suffix="+" duration={2.75} />
          </h1>
          <p>clients</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-sm font-bold text-black/80 dark:text-white sm:text-lg md:text-3xl">
            <CountUp end={400} suffix="+" duration={2.75} />
          </h1>
          <p>clients</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-sm font-bold text-black/80 dark:text-white sm:text-lg md:text-3xl">
            <CountUp end={242} suffix="+" duration={2.75} />
          </h1>
          <p>clients</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-sm font-bold text-black/80 dark:text-white sm:text-lg md:text-3xl">
            <CountUp end={300} suffix="+" duration={2.75} />
          </h1>
          <p>clients</p>
        </div>
        {/* <div className="flex flex-col items-center justify-center">
          <h1>250</h1>
          <p>clients</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <h1>250</h1>
          <p>clients</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <h1>250</h1>
          <p>clients</p>
        </div> */}
      </div>
    </section>
  );
};

export default OverviewCounter;
