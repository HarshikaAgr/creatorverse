import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { supabase } from '../client'

const AddCreator = () => {
  const navigate = useNavigate()

  const [creator, setCreator] = useState({
    name: '',
    url: '',
    description: '',
    imageURL: ''
  })

  const handleChange = (event) => {
    const { name, value } = event.target

    setCreator((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const addCreator = async (event) => {
    event.preventDefault()

    const { error } = await supabase
      .from('creators')
      .insert({
        name: creator.name,
        url: creator.url,
        description: creator.description,
        imageURL: creator.imageURL
      })

    if (error) {
      console.log('Error adding creator:', error)
    } else {
      navigate('/')
    }
  }

  return (
    <div>
      <h1>Add Creator</h1>

      <form onSubmit={addCreator}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={creator.name}
          onChange={handleChange}
          required
        />

        <label>URL</label>
        <input
          type="text"
          name="url"
          value={creator.url}
          onChange={handleChange}
          required
        />

        <label>Description</label>
        <textarea
          name="description"
          value={creator.description}
          onChange={handleChange}
          required
        />

        <label>Image URL</label>
        <input
          type="text"
          name="imageURL"
          value={creator.imageURL}
          onChange={handleChange}
        />

        <button type="submit">Add Creator</button>
      </form>

      <br />

      <Link to="/">Back</Link>
    </div>
  )
}

export default AddCreator