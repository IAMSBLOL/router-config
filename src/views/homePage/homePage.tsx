import { useNavigate } from 'react-router-dom'

const HomePage = () => {
  const navigate = useNavigate()
  return (
    <div>
      <h1 onClick={() => navigate('/1231231231')}>Home 123Page</h1>
    </div>
  )
}
export default HomePage
