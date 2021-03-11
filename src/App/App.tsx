import * as React from 'react';
import SignupForm from '../Features/SignupForm/SignupForm';
import styles from './App.module.css';

const App: React.FC = () => (
  <div className={styles.App}>
    <SignupForm />
  </div>
);

export default App;
