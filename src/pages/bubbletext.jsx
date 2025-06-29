import styles from '../components/bubble.module.css'; // Adjust path if needed

const BubbleText = ({ text, className = '' }) => (
  <span className={className}>
    {text.split('').map((char, idx) => (
      <span className={styles.hoverText} key={idx}>
        {char === ' ' ? '\u00A0' : char}
      </span>
    ))}
  </span>
);