import React from 'react';
import styles from './login.module.scss';
import { FaGoogle, FaFacebookF, FaTwitter, FaGithub } from 'react-icons/fa';
import Link from 'next/link';

const LoginPage = () => {
  async function handleSubmit(formaData) {
    'use server';
    let username = formaData.get('username');
    let password = formaData.get('password');
    console.log('data ==', username, password);
  }

  return (
    <div className={styles.pageContainer}>
      <div className={styles.formContainer}>
        <h1 className={styles.title}>Login</h1>
        <form className={styles.form} action={handleSubmit}>
          <div className={styles.inputGroup}>
            <label htmlFor='username'>Username/Email</label>
            <input
              type='text'
              name='username'
              id='username'
              placeholder='Your Email or Username'
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              name='password'
              id='password'
              placeholder='Your password'
            />
            <div className={styles.forgot}>
              <Link
                href='#'
                className={styles.forgotPassword}
                rel='noopener noreferrer'>
                Forgot Password ?
              </Link>
            </div>
          </div>
          <button className={styles.signIn} type='submit'>
            Sign in
          </button>
        </form>
        <div className={styles.socialMessage}>
          <div className={styles.line} />
          <p className={styles.message}>Login with social accounts</p>
          <div className={styles.line} />
        </div>

        <div className={styles.socialIcons}>
          <button className={styles.socialIcon}>
            <FaGoogle />
          </button>
          <button className={styles.socialIcon}>
            <FaFacebookF />
          </button>
          <button className={styles.socialIcon}>
            <FaGithub />
          </button>
        </div>

        <p className={styles.signup}>
          Don't have an account?
          <Link href='#'>Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
