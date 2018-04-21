import firebase from 'firebase'
import 'bootstrap'
import '../stylesheets/application.scss'
import React from 'react'
import { render } from 'react-dom'
import Root from './components/Root'

firebase.initializeApp({
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DATABASE_URL,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID
})

document.addEventListener('DOMContentLoaded', () => {
  render(
    <Root />,
    document.getElementById('root')
  )
})
