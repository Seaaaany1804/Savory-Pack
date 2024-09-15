import './App.css';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import FAQsPage from './pages/FAQsPage';
import HomePage from './pages/HomePage';
import HowItWorksPage from './pages/HowItWorksPage';
import MenuPage from './pages/MenuPage';
import ReviewsPage from './pages/ReviewsPage';
import WhyGustoMeals from './pages/WhyGustoMeals';

function App() {
  return (
    <div>
      <HomePage/>
      <HowItWorksPage/>
      <AboutPage/>
      <WhyGustoMeals/>
      <MenuPage/>
      <ReviewsPage/>
      <FAQsPage/>
      <ContactPage/>
    </div>
  );
}

export default App;
