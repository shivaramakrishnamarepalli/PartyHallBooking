import React, { useState } from 'react'

const HallForm = () => {
  const [formData, setFormData] = useState({
    hall_id: '',
    hall_name: '',
    hall_address: '',
    admin_id: '',
    status: '',
    hall_rental_cost: '',
    hall_max_capacity: '',
    hall_price_plate: '',
    hall_catering: '',
    hall_duration: '',
    hall_rating: '',
  })

  const [errors, setErrors] = useState({
    hall_id: '',
    hall_name: '',
    hall_address: '',
    admin_id: '',
    status: '',
    hall_rental_cost: '',
    hall_max_capacity: '',
    hall_price_plate: '',
    hall_catering: '',
    hall_duration: '',
    hall_rating: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
    // Reset error message when user starts typing
    setErrors({ ...errors, [name]: '' })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
    let hasError = false
    const newErrors = { ...errors }

    // Check if all fields are filled
    for (const key in formData) {
      if (formData[key] === '') {
        newErrors[key] = 'This field is required'
        hasError = true
      }
    }

    if (hasError) {
      setErrors(newErrors)
      return
    }

    // Handle form submission if all fields are filled
    console.log(formData)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="hall_id">Hall ID</label>
        <input
          type="text"
          className="form-control"
          id="hall_id"
          name="hall_id"
          onChange={handleChange}
          value={formData.hall_id}
        />
        {errors.hall_id && (
          <small className="text-danger">{errors.hall_id}</small>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="hall_name">Hall Name</label>
        <input
          type="text"
          className="form-control"
          id="hall_name"
          name="hall_name"
          onChange={handleChange}
          value={formData.hall_name}
        />
        {errors.hall_name && (
          <small className="text-danger">{errors.hall_name}</small>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="hall_address">Hall Address</label>
        <input
          type="text"
          className="form-control"
          id="hall_address"
          name="hall_address"
          onChange={handleChange}
          value={formData.hall_address}
        />
        {errors.hall_address && (
          <small className="text-danger">{errors.hall_address}</small>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="admin_id">Admin ID</label>
        <input
          type="text"
          className="form-control"
          id="admin_id"
          name="admin_id"
          onChange={handleChange}
          value={formData.admin_id}
        />
        {errors.admin_id && (
          <small className="text-danger">{errors.admin_id}</small>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="status">Status</label>
        <input
          type="text"
          className="form-control"
          id="status"
          name="status"
          onChange={handleChange}
          value={formData.status}
        />
        {errors.status && (
          <small className="text-danger">{errors.status}</small>
        )}
      </div>
      {/* Add other form groups for each field */}
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  )
}

export default HallForm
