import React from 'react';

function SimpsonsFamily() {
  const styles = {
    h1: {
      fontSize: '2.5rem',
      marginTop: '2rem',
      marginBottom: '2rem',
      textAlign: 'center',
    },
    a: {
      color: '#f2ff00',
      textDecoration: 'none',
    },
    aHover: {
      color: '#0056b3',
      textDecoration: 'underline',
    },
    p: {
      fontSize: '1.2rem',
      lineHeight: 1.5,
      marginBottom: '1rem',
    },
  };

  return (
    <>
      <h1 style={styles.h1}><strong>Os Simpsons (Família):</strong></h1>
      <p style={styles.p}>
        <strong>Homer Simpson:</strong>
        <a href="https://pt.wikipedia.org/wiki/Homer_Simpson" style={styles.a}>https://pt.wikipedia.org/wiki/Homer_Simpson</a>
      </p>
      <p style={styles.p}>
        <strong>Marge Simpson:</strong>
        <a href="https://pt.wikipedia.org/wiki/Marge_Simpson" style={styles.a}>https://pt.wikipedia.org/wiki/Marge_Simpson</a>
      </p>
      <p style={styles.p}>
        <strong>Bart Simpson:</strong>
        <a href="https://pt.wikipedia.org/wiki/Bart_Simpson" style={styles.a}>https://pt.wikipedia.org/wiki/Bart_Simpson</a>
      </p>
      <p style={styles.p}>
        <strong>Lisa Simpson:</strong>
        <a href="https://pt.wikipedia.org/wiki/Lisa_Simpson" style={styles.a}>https://pt.wikipedia.org/wiki/Lisa_Simpson</a>
      </p>
      <p style={styles.p}>
        <strong>Maggie Simpson:</strong>
        <a href="https://en.wikipedia.org/wiki/Maggie_Simpson" style={styles.a}>https://en.wikipedia.org/wiki/Maggie_Simpson</a>
      </p>
    </>
  );
}

export default SimpsonsFamily;