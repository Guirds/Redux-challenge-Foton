// Tela inical. Deve ter apenas uma botão,
// onde o user vai clicar e ser direcionado para o menu

import React from 'react';

const Home = () => (
  <button
    className="g-signin"
    data-callback="signinCallback"
    data-clientid="311434983417-5r3n7csbc8h10rr5oef7kdk67u17es9b.apps.googleusercontent.com"
    data-cookiepolicy="single_host_origin"
    data-requestvisibleactions="http://schemas.google.com/AddActivity"
    data-scope="https://www.googleapis.com/auth/plus.login"
  >
    {' '}
    Go to page
  </button>
);

export default Home;
