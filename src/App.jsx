import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AppRoute, AuthRoute } from './routes';
import { Footer, Navbar } from "./components";

import ScrollToTop from './helpers/ScrollToTop';

const App = () => {
    return (
        <Router>
            <Navbar />
            <ScrollToTop />
            <Routes>
                <Route path='/auth/*' element={ <AuthRoute/> }/>
                <Route path='*' element={ <AppRoute/> }/>
            </Routes>
            <Footer />
        </Router>
    )
}
export default App;