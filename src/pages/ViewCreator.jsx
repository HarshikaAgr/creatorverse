import { useEffect, useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { supabase } from '../client'

const ViewCreator = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [creator, setCreator] = useState(null)

  useEffect(() => {
    const fetchCreator = async () => {
      const { data, error } = await supabase
        .from('creators')
        .select()
        .eq('id', id)
        .single()

      if (error) {
        console.log('Error fetching creator:', error)
      } else {
        setCreator(data)
      }
    }

    fetchCreator()
  }, [id])

  const deleteCreator = async () => {
    const { error } = await supabase
      .from('creators')
      .delete()
      .eq('id', id)

    if (error) {
      console.log('Error deleting creator:', error)
    } else {
      navigate('/')
    }
  }

  if (!creator) {
    return <p>Loading...</p>
  }

  return (
    <div className="details-page">
      <h1>{creator.name}</h1>

      {creator.imageURL && (
        <img
          src={creator.imageURL}
          alt={creator.name}
          className="details-image"
        />
      )}

      <p>{creator.description}</p>

      <a href={creator.url} target="_blank" rel="noreferrer">
        Visit Creator
      </a>

      <div className="button-row">
        <Link to={`/edit/${creator.id}`}>
          <button>Edit Creator</button>
        </Link>

        <button onClick={deleteCreator} className="delete-button">
          Delete Creator
        </button>
      </div>

      <Link to="/">Back to All Creators</Link>
    </div>
  )
}

export default ViewCreator