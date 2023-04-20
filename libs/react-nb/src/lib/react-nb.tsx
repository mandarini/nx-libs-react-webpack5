import styles from './react-nb.module.css';

/* eslint-disable-next-line */
export interface ReactNbProps {}

export function ReactNb(props: ReactNbProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to ReactNb!</h1>
    </div>
  );
}

export default ReactNb;
