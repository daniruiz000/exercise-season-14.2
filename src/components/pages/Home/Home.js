const user = process.env.REACT_APP_USER;
const password = process.env.REACT_APP_PASSWORD;

const Home = () => {
  return (
    <div>
      <h1>HomePage</h1>
      <p>El usuario es:{user}</p>
      <p> La contraseña es:{password}</p>
    </div>
  );
};

export default Home;
