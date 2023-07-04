import './App.css';
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import {faUser as userRegular} from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome" ;
import {faUser} from '@fortawesome/free-solid-svg-icons';
import { BrowserRouter, Routes,Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import CreateTask from './pages/CreateTask';
import TaskList from './pages/TaskList';
import Profile from './pages/Profile';
import PageNotFound from './pages/PageNotFound';
import Navigation from './components/Navigation';
import Login from './components/Login';
import Register from './components/Register';
import { AuthProvider } from './context/AuthContext';
import  { TaskProvider } from './context/TaskContext';






function App() {
  return (
    <BrowserRouter>
    <AuthProvider>
    <TaskProvider>
      <Navigation/>
    <Routes>

      <Route path='/'element={<Navigate to='/login'/>}></Route>
      <Route path='/' element={<Home/>}>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
      </Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/create-task' element={<CreateTask/>}></Route>
      <Route path='/task-list' element={<TaskList/>}></Route>
      <Route path='/profile' element={<Profile/>}></Route>
      <Route path='*' element={<PageNotFound/>}></Route>
    </Routes>
    </TaskProvider>
    </AuthProvider>
     
    </BrowserRouter>


  );
}

export default App;
