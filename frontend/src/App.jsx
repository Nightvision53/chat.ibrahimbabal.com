import { Button } from '@chakra-ui/button';
import { Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import ChatPage from './Pages/ChatPage';
function App() {

  return (
    <div className="App">
      <Route path="/" component={HomePage} exact />
      <Route path="/chats" component={ChatPage} exact />
    </div>
  )
}

export default App
