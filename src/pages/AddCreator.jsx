import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { client } from '../client'

function AddCreator() {
  const navigate = useNavigate()
  const [form, setForm] = useState({ name: '', url: '', description: '', imageURL: '' })

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.name || !form.url || !form.description) {
      alert('Please fill in name, URL, and description.')
      return
    }
    const { error } = await client.from('creators').insert([form])
    if (!error) navigate('/')
    else alert('Error adding creator.')
  }

  return (
    <div className="page-container">
      <button className="back-btn" onClick={() => navigate('/')}>Back to Home</button>
      <div className="page-title">Add a Creator</div>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name *</label>
          <input name="name" value={form.name} onChange={handleChange} placeholder="e.g. MrBeast" />
        </div>
        <div className="form-group">
          <label>Channel URL *</label>
          <input name="url" value={form.url} onChange={handleChange} placeholder="https://youtube.com/@..." />
        </div>
        <div className="form-group">
          <label>Description *</label>
          <textarea name="description" value={form.description} onChange={handleChange} placeholder="What kind of content do they make?" />
        </div>
        <div className="form-group">
          <label>Image URL (optional)</label>
          <input name="imageURL" value={form.imageURL} onChange={handleChange} placeholder="https://..." />
        </div>
        <button className="submit-btn" type="submit">Add Creator</button>
      </form>
    </div>
  )
}

export default AddCreator