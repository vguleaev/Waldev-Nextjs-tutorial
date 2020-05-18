import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Index = (props) => {
  const [joke, setJoke] = useState('');
  useEffect(() => {
    getJoke();
  }, []);

  const getJoke = async () => {
    const res = await axios.get('https://api.chucknorris.io/jokes/random');
    setJoke(res.data.value);
  };

  return (
    <div>
      <h1>Hello from Next js</h1>
      <p>Description of the page</p>
      <p>Value CSR: {joke}</p>
      <p>Value SSR: {props.value}</p>
    </div>
  );
};

export const getStaticProps = async () => {
  const res = await axios.get('https://api.chucknorris.io/jokes/random');
  return {
    props: {
      value: res.data.value
    }
  };
};

export default Index;
