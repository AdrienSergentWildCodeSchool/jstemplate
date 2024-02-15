import "./App.css";

function App() {
  return (
    <main className="container">
      <header>
        <h1 className="logo">Harmonia</h1>
      </header>

      <nav className="navbar">
        <ul>
          <li>
            <a
              href="https://documentation-harmonia.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="30"
                height="30"
                viewBox="0 0 50 50"
              >
                <path
                  d="M37,4H13c-4.963,0-9,4.037-9,9v24c0,4.963,4.037,9,9,9h24c4.963,0,9-4.037,9-9V13C46,8.037,41.963,4,37,4z M14,15h18	c0.553,0,1,0.447,1,1c0,0.553-0.447,1-1,1H14c-0.553,0-1-0.447-1-1S13.447,15,14,15z M44,17.171	c-1.796,2.942-10.193,16.435-13.717,17.497L29.4,36.435c-0.175,0.351-0.528,0.553-0.896,0.553c-0.15,0-0.303-0.034-0.446-0.105	c-0.174-0.087-0.296-0.227-0.391-0.382c-0.906,0.334-1.853,0.483-2.647,0.487c-1.603-0.004-2.621-0.697-3.404-1.265	C20.979,35.261,20.59,35,20,35c-0.562,0-0.978,0.239-1.663,0.661C17.369,36.258,16.165,37,14,37c-0.553,0-1-0.447-1-1s0.447-1,1-1	c1.598,0,2.419-0.506,3.288-1.041C18.053,33.487,18.844,33,20,33c1.267,0,2.075,0.586,2.789,1.104	c0.682,0.493,1.22,0.884,2.201,0.884c0.007,0,0.013,0,0.02,0c1.253-0.006,2.914-0.486,3.635-1.518l0.1-0.2	c-0.134-1.062,0.159-2.55,0.73-4.27H14c-0.553,0-1-0.447-1-1s0.447-1,1-1h16.213c0.518-1.287,1.136-2.643,1.799-4H14	c-0.553,0-1-0.447-1-1s0.447-1,1-1h19.018c1.724-3.332,3.554-6.448,4.637-8.266c1.922,1.762,4.808,3.214,6.345,3.746V17.171z M44,14.596c-1.874-0.778-4.654-2.589-5.664-3.501V9.681l1.798-2.931C42.423,7.903,44,10.268,44,13V14.596z"
                  fill="#eee"
                />
              </svg>
              Documentation
            </a>
          </li>
          <li>
            <a
              href="https://github.com/WildCodeSchool/js-template-fullstack"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="30"
                height="30"
                viewBox="0 0 50 50"
              >
                <path
                  d="M17.791,46.836C18.502,46.53,19,45.823,19,45v-5.4c0-0.197,0.016-0.402,0.041-0.61C19.027,38.994,19.014,38.997,19,39 c0,0-3,0-3.6,0c-1.5,0-2.8-0.6-3.4-1.8c-0.7-1.3-1-3.5-2.8-4.7C8.9,32.3,9.1,32,9.7,32c0.6,0.1,1.9,0.9,2.7,2c0.9,1.1,1.8,2,3.4,2 c2.487,0,3.82-0.125,4.622-0.555C21.356,34.056,22.649,33,24,33v-0.025c-5.668-0.182-9.289-2.066-10.975-4.975 c-3.665,0.042-6.856,0.405-8.677,0.707c-0.058-0.327-0.108-0.656-0.151-0.987c1.797-0.296,4.843-0.647,8.345-0.714 c-0.112-0.276-0.209-0.559-0.291-0.849c-3.511-0.178-6.541-0.039-8.187,0.097c-0.02-0.332-0.047-0.663-0.051-0.999 c1.649-0.135,4.597-0.27,8.018-0.111c-0.079-0.5-0.13-1.011-0.13-1.543c0-1.7,0.6-3.5,1.7-5c-0.5-1.7-1.2-5.3,0.2-6.6 c2.7,0,4.6,1.3,5.5,2.1C21,13.4,22.9,13,25,13s4,0.4,5.6,1.1c0.9-0.8,2.8-2.1,5.5-2.1c1.5,1.4,0.7,5,0.2,6.6c1.1,1.5,1.7,3.2,1.6,5 c0,0.484-0.045,0.951-0.11,1.409c3.499-0.172,6.527-0.034,8.204,0.102c-0.002,0.337-0.033,0.666-0.051,0.999 c-1.671-0.138-4.775-0.28-8.359-0.089c-0.089,0.336-0.197,0.663-0.325,0.98c3.546,0.046,6.665,0.389,8.548,0.689 c-0.043,0.332-0.093,0.661-0.151,0.987c-1.912-0.306-5.171-0.664-8.879-0.682C35.112,30.873,31.557,32.75,26,32.969V33 c2.6,0,5,3.9,5,6.6V45c0,0.823,0.498,1.53,1.209,1.836C41.37,43.804,48,35.164,48,25C48,12.318,37.683,2,25,2S2,12.318,2,25 C2,35.164,8.63,43.804,17.791,46.836z"
                  fill="#eee"
                />
              </svg>
              Github
            </a>
          </li>
        </ul>
      </nav>

      <section className="text-box">
        <h2 className="block-primary">
          <span className="block-primary-main">Harmonia</span>
          <span className="block-primary-sub">Votre framework JavaScript</span>
        </h2>
        <a
          href="https://documentation-harmonia.vercel.app/"
          className="btn btn-white btn-animated"
          target="_blank"
          rel="noopener noreferrer"
        >
          Documentation
        </a>
      </section>

      <footer>
        Développé par la&nbsp;
        <a
          href="https://www.wildcodeschool.com/"
          className="wcs"
          target="_blank"
          rel="noopener noreferrer"
        >
          Wild Code School
        </a>
      </footer>
    </main>
  );
}

export default App;
