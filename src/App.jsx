import React, { useEffect ,useState } from 'react'
import Login from './component/Auth/Login'
import EmployeeDashboard from './component/Dashboard/EmployeeDashboard'
import AdminDashboard from './component/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/localstorage'


const App = () => {

const [user, setuser] = useState(null)

const HandleLogin =(email ,password)=>{
if(email=='admin@gmail.com' && password =='123'){
  // console.log('This is admin')
  setuser('admin')

}else if(email=='user@gmail.com' && password=='123'){
  console.log('this is User')
  setuser('user')
 
}else{
  alert(`INVALID CREDENTIAL`)
}
}



  
  return (
   <>

  {!user ? <Login HandleLogin= {HandleLogin} /> : ''}
  {user == 'admin' ? <AdminDashboard /> :''}
  {user == 'user' ? <EmployeeDashboard /> :''}


   {/* <Login />
   <AdminDashboard />
   <EmployeeDashboard /> */}

  
  
   </>
  )
}

export default App
