import { useState } from 'react'
import './styles/App.css'

import Button from '@mui/material/Button';

export function ButtonUsage() {
  return <Button variant="outlined ">Hello world</Button>;
}

function App() {
  return (
    <>
    <ButtonUsage />
    </>
  )
}

export default App
