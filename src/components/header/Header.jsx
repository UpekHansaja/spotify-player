import React, { useEffect, useState } from 'react'
import { Moon, Sun, SunMedium, SunMoon, TentTree } from 'lucide-react'

const Header = () => {

    const [timeOfDay, setTimeOfDay] = useState('-');

    const loadTimeNGreating = () => {

        const date = new Date();
        const hours = date.getHours();

        if (hours < 12) {
            setTimeOfDay('morning')
        }
        else if (hours >= 12 && hours < 17) {
            setTimeOfDay('afternoon')
        }
        else if (hours >= 17 && hours < 21) {
            setTimeOfDay('evening')
        }
        else {
            setTimeOfDay('night')
        }

    };

    useEffect(() => {
        loadTimeNGreating();
    }, []);

    return (
        <>
            <header className='sticky top-0 z-50'>
                {/* time based greating msg */}
                <div className='flex justify-between items-center backdrop-blur-sm p-4 px-12'>
                    <div className='text-2xl font-bold'>
                        <span className='ms-3 flex items-center gap-2'>
                            Good {timeOfDay}
                            {timeOfDay === 'morning' && <SunMedium size={26} />}
                            {timeOfDay === 'afternoon' && <Sun size={26} />}
                            {timeOfDay === 'evening' && <SunMoon size={26} />}
                            {timeOfDay === 'night' && <Moon size={26} />}
                        </span>
                    </div>
                    <div className='text-sm font-semibold'>12:00 PM</div>
                </div>

            </header>
        </>
    )
}

export default Header