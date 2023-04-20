import styles from './react-swc.module.css';

/* eslint-disable-next-line */
export interface ReactSwcProps {}

export function ReactSwc(props: ReactSwcProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to ReactSwc!</h1>
    </div>
  );
}

export default ReactSwc;
