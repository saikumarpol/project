import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import styles from './BackButton.module.css';

const BackButton = () => {
  const navigate = useNavigate();
  return (
    <button
      className={styles.backButton}
      onClick={() => navigate(-1)}
      aria-label="Go back"
    >
      <FaArrowLeft style={{ marginRight: 6 }} /> Back
    </button>
  );
};

export default BackButton;
