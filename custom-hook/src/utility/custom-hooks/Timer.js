import { useEffect, useState } from "react"

const useTimer = (initialTimer = 0, type) => {
  const [timer, setTimer] = useState(initialTimer);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(prevCounter => type === 'NEGATIVE' ? prevCounter - 1 : prevCounter + 1);
    }, 1000);

    return () => {
      return clearInterval(interval);
    }
  }, [type]);

  return [timer, setTimer];
}

export default useTimer;