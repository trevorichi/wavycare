import './App.css';
import AnimatedText from 'react-animated-text-content';

function App() {
  return (
    <div className="App">
  <AnimatedText
    type="words" // animate words or chars
    animation={{
      x: '200px',
      y: '-20px',
      scale: 1.1,
      ease: 'ease-in-out',
    }}
    animationType="float"
    interval={0.06}
    duration={0.8}
    tag="h1"
    className="animated-paragraph"
    includeWhiteSpaces
    threshold={0.1}
    rootMargin="20%"
  >
    The Humble Beginning of Wavy Care
  </AnimatedText>
    </div>
  );
}

export default App;
