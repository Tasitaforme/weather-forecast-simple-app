import Weather from './components/Weather';

export default function App() {
  return (
    <div className="App">
      <main>
        <Weather defaultCity="Kyiv" />
      </main>
      <footer>
        <code>
          This project was coded by{' '}
          <a
            href="https://www.linkedin.com/in/tasita/"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            Tasita
          </a>{' '}
          <br />
          <a
            href="https://github.com/Tasitaforme/weather-forecast-app-react"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            Open-sourced on GitHub
          </a>{' '}
          and{' '}
          <a
            href="https://netlify.com/"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            hosted on Netlify
          </a>
        </code>
      </footer>
    </div>
  );
}
