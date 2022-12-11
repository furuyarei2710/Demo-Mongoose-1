import { createContext, useEffect, useState } from "react";

export const DateContext = createContext();

function CalendarProvider({ children }) {
  const [date, setDate] = useState(new Date());
  const [currentDate, setCurrentDate] = useState(new Date());
  const [time, setTime] = useState('');
  const [backgroundState, setBackgroundState] = useState({
    backgroundColor: '',
    color: '',
  });
  useEffect(() => {
    const timeout = setInterval(() => {
      setCurrentDate(new Date())
      // setDate(new Date())
    }, 30000)
    return () => clearInterval(timeout)
  }, []);
  const value = {
    date,
    setDate,
    currentDate,
    setCurrentDate,
    time,
    setTime,
    backgroundState,
    setBackgroundState
  };
  return (
    <DateContext.Provider value={value}>{children}</DateContext.Provider>
  );
}

export { CalendarProvider };