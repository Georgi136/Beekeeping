import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AdminPage from '../pages/AdminPage'

export default function AdminApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<AdminPage />} />
      </Routes>
    </BrowserRouter>
  )
}
