import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Posts from '../../pages/posts';

function RoutesManager() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Posts />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesManager;
