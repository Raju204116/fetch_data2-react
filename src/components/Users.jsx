import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'


export default function Users() {
  const [users, setUsers] = useState([])
  

  useEffect(()=> {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res=> res.json())
      .then(data => setUsers(data))
  
  }, [])

  
   return (
  <>
    <h1 className="page-title">Fethcing Data in React</h1>

    <div className="users-container">
      {
        users.map(user => (
          <div className="cards" key={user.id}>
            <h2>{user.name}</h2>
            <p><strong>Username:</strong> {user.username}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
            <p><strong>City:</strong> {user.address.city}</p>
            <p><strong>Company:</strong> {user.company.name}</p>
          </div>
        ))
      }
    </div>
  </>
)
}
