import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ContactInfo from './components/ContactInfo';
import Step2 from './components/Quantity';
import Step3 from './components/Price';
import Step4 from './components/SubmissionStatus';

const App: React.FC = () => {
  return (
    <Router>
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Navigate to="/ContactInfo" />} />
          <Route path="/step1" element={<ContactInfo />} />
          <Route path="/step2" element={<Step2 />} />
          <Route path="/step3" element={<Step3 />} />
          <Route path="/step4" element={<Step4 />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;