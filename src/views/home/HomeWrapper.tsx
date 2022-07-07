import Footer from '../../elements/Footer';
import Navbar from '../../elements/Navbar';
import FeaturesContainer from './FeaturesContainer';
import HeaderContainer from './HeaderContainer';
import SignupContainer from './SignupContainer';
import StatsContainer from './StatsContainer';

export default () => (
    <>
        <div class={'bg-header bg-no-repeat bg-cover h-screen'}>
            <Navbar />
            <HeaderContainer/>
        </div>
        <FeaturesContainer />
        <StatsContainer />
        <div class={'bg-footer bg-no-repeat bg-cover bg-bottom'}>
            <SignupContainer />
            <Footer />
        </div>
    </>
);
