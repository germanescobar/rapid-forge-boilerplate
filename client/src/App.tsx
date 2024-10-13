import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { trpc } from './trpc.ts'

function Home() {
  const { data, isLoading } = trpc.healthcheck.useQuery()

  if (isLoading) return <div>Loading...</div>

  return <div>{data?.status}</div>
}

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
