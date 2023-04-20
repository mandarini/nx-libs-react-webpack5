import styles from './react-babel.module.css';

/* eslint-disable-next-line */
export interface ReactBabelProps {}

export function ReactBabel(props: ReactBabelProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to ReactBabel!</h1>
    </div>
  );
}

export default ReactBabel;
