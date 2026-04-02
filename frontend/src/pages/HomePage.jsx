import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import RateLimitedUI from '../components/RateLimitedUI'
import axios from "axios"
import toast from 'react-hot-toast'
import NoteCard from '../components/NoteCard'
import api from '../lib/axios'
import NotesNotFound from '../components/NotesNotFound'



const HomePage = () => {
  const [IsRateLimited, setIsRateLimited] = useState(false)
  const [Notes, setNotes] = useState([])
  const [Loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const res = await api.get("/notes")
        console.log(res.data)
        setNotes(res.data)
        setIsRateLimited(false)
      } catch (error) {
        console.log("Error fetching notes")
        if (error.response?.status === 429) {
          setIsRateLimited(true)
        } else {
          toast.error("Failed to load notes");
        }
      } finally {
        setLoading(false)
      }

    }

    fetchNotes()
  }, [])

  return (
    <div className='min-h-screen'>
      <Navbar />

      {IsRateLimited && <RateLimitedUI />}

      <div className='max-w-7xl mx-auto p-4 mt-6'>
        {Loading && <div className='text-center text-primary py-10'>Loading notes</div>}

        {Notes.length === 0 && !IsRateLimited && <NotesNotFound />}

        {Notes.length > 0 && !IsRateLimited && (
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {Notes.map(note => (
              <NoteCard key={note._id} note={note} setNotes={setNotes} />
            ))}
          </div>
        )}
      </div>


    </div>
  )
}

export default HomePage
