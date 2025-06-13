import { useState } from 'react'
import './App.css'
import ArticlePreview from './components/ArticlePreview'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ArticlePreview />
    </>
  )
}

export default App
