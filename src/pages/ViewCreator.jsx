import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { client } from '../client'

function ViewCreator() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [creator, setCreator] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchCreator = async () => {
      const { data, error } = await client
        .from('creators')
        .select('*')
        .eq('id', id)
        .single()
      if (!error) setCreator(data)
      setLoading(false)
    }
    fetchCreator()
  }, [id])

  const handleDelete = async () => {
    if (window.confirm(`Delete ${creator.name}?`)) {
      await client.from('creators').delete().eq('id', id)
      navigate('/')
    }
  }

  if (loading) return <div className="loading">Loading...</div>
  if (!creator) return <div className="loading">Creator not found.</div>

  return (
    <div className="page-container">
      <button className="back-btn" onClick={() => navigate('/')}>Back</button>

      {creator.imageURL
        ? <img className="view-creator-image" src={creator.imageURL} alt={creator.name} />
        : <div className="view-creator-placeholder" />
      }

      <div className="view-creator-name">{creator.name}</div>
      <a className="view-creator-url" href={creator.url} target="_blank" rel="noreferrer">
        {creator.url}
      </a>
      <div className="view-creator-desc">{creator.description}</div>

      <div className="action-row">
        <button className="edit-btn" onClick={() => navigate(`/edit/${id}`)}>✏️ Edit</button>
        <button className="delete-btn" onClick={handleDelete}>🗑️ Delete</button>
      </div>
    </div>
  )
}

export default ViewCreator