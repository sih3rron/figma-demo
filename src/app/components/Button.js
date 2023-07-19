import styles from "./styles/Button.css";

export default function Button({ buttonCopy, leveling }) {
  return (
    <>
      <div className={ [styles.shape, leveling] }>{ buttonCopy }</div>
    </>
  );
}
