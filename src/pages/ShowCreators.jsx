import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { client } from '../client'
import Card from '../components/Card'

function ShowCreators() {
  const [creators, setCreators] = useState([])
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    fetchCreators()
  }, [])

  const fetchCreators = async () => {
    setLoading(true)
    const { data, error } = await client.from('creators').select('*')
    if (error) {
      console.error('Error fetching creators:', error)
    } else {
      setCreators(data)
    }
    setLoading(false)
  }

  const handleDelete = async (id) => {
    const { error } = await client.from('creators').delete().eq('id', id)
    if (!error) {
      setCreators(prev => prev.filter(c => c.id !== id))
    }
  }

  return (
    <div>
      <div className="app-header">
        <h1>✦ CREATORVERSE ✦</h1>
        <p className="subtitle">Your favorite content creators in one place</p>
      </div>

      <button className="add-btn" onClick={() => navigate('/add')}>
        + Add Creator
      </button>

      {loading ? (
        <div className="loading">Loading creators...</div>
      ) : creators.length === 0 ? (
        <div className="empty-state">
          <p>No creators yet. Add your first one!</p>
        </div>
      ) : (
        <div className="creators-grid">
          {creators.map(creator => (
            <Card key={creator.id} creator={creator} onDelete={handleDelete} />
          ))}
        </div>
      )}
    </div>
  )
}

export default ShowCreators