import './App.css'
import { ThemeProvider } from './components/theme-provider'
import { RouterProvider } from 'react-router';
import { router } from './routes';

function App() {

  return (
    <ThemeProvider defaultTheme='dark'>
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default App
