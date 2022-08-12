import styles from './Counter.module.css';
import { useState, useCallback } from 'react';

export function Counter() {
  const [count, setCount] = useState(0);
  const increment = useCallback(() => setCount((count) => count + 1), []);
  return (
    <div>
      <span className={styles.count}>
        {count}
      </span>
      <button onClick={increment} className={styles.button}>
        increment
      </button>
    </div>
  );
}
