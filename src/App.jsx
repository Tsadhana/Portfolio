import Header from './components/Header'
import { Home } from './components/Home'
import { ThemeProvider } from './contexts/ThemeContext'

function App() {

  return (
    <ThemeProvider>
        <Header />
        <Home />
    </ThemeProvider>
  )
}

export default App
