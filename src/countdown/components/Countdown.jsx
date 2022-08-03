
function Countdown({launchTime}) {
  return (
    <div>
        <h1 className="text-white text-2xl uppercase tracking-widest">
                We're launching soon
            </h1>

            <div className="mt-16 flex items-center justify-center gap-3 md:gap-8">
                
                {/* Day Start  */}
                <div>
                    <div className="rounded-lg shadow-xl bg-secondaryDark w-20 h-20 md:w-32 md:h-32 lg:w-40 lg:h-40 flex items-center justify-center relative">
                        <div className="bg-veryDarkBlue w-3 h-3 rounded-lg absolute -left-2"></div>
                        <div className="bg-veryDarkBlue w-3 h-3 rounded-lg absolute -right-2"></div>

                        <h1 className="text-teal-200 text-3xl sm:text-4xl md:text-6xl lg:text-7xl">{launchTime.days}</h1>
                    </div>
                    <h5 className="uppercase text-white mt-5 text-xs sm:text-sm lg:text-lg">
                        days
                    </h5>
                </div>
                {/* Day End  */}
                
                {/* Hours Start  */}
                <div>
                    <div className="rounded-lg shadow-xl bg-secondaryDark w-20 h-20 md:w-32 md:h-32 lg:w-40 lg:h-40 flex items-center justify-center relative">
                        <div className="bg-veryDarkBlue w-3 h-3 rounded-lg absolute -left-2"></div>
                        <div className="bg-veryDarkBlue w-3 h-3 rounded-lg absolute -right-2"></div>

                        <h1 className="text-teal-200 text-3xl sm:text-4xl md:text-6xl lg:text-7xl">{launchTime.hours}</h1>
                    </div>
                    <h5 className="uppercase text-white mt-5 text-xs sm:text-sm lg:text-lg">
                        hours
                    </h5>
                </div>
                {/* Hours Ends  */}

                {/* Minutes Start  */}
                <div>
                    <div className="rounded-lg shadow-xl bg-secondaryDark w-20 h-20 md:w-32 md:h-32 lg:w-40 lg:h-40 flex items-center justify-center relative">
                        <div className="bg-veryDarkBlue w-3 h-3 rounded-lg absolute -left-2"></div>
                        <div className="bg-veryDarkBlue w-3 h-3 rounded-lg absolute -right-2"></div>

                        <h1 className="text-teal-200 text-3xl sm:text-4xl md:text-6xl lg:text-7xl">{launchTime.minutes}</h1>
                    </div>
                    <h5 className="uppercase text-white mt-5 text-xs sm:text-sm lg:text-lg">
                        minutes
                    </h5>
                </div>
                {/* Minutes End  */}

                {/* Seconds Start  */}
                <div>
                    <div className="rounded-lg shadow-xl bg-secondaryDark w-20 h-20 md:w-32 md:h-32 lg:w-40 lg:h-40 flex items-center justify-center relative">
                        <div className="bg-veryDarkBlue w-3 h-3 rounded-lg absolute -left-2"></div>
                        <div className="bg-veryDarkBlue w-3 h-3 rounded-lg absolute -right-2"></div>

                        <h1 className="text-teal-200 text-3xl sm:text-4xl md:text-6xl lg:text-7xl">{launchTime.seconds}</h1>
                    </div>
                    <h5 className="uppercase text-white mt-5 text-xs sm:text-sm lg:text-lg">
                        seconds
                    </h5>
                </div>
                {/* Seconds End  */}

            </div>
    </div>
  )
}

export default Countdown