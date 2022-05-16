import { Component } from 'solid-js';
import Footer from '../../elements/Footer';
import Navbar from '../../elements/Navbar';
import FeaturesContainer from './FeaturesContainer';
import HeaderContainer from './HeaderContainer';
import SignupContainer from './SignupContainer';
import StatsContainer from './StatsContainer';

const HomeWrapper: Component = () => {
    return (
        <>
            <Navbar />
            <HeaderContainer />
            <FeaturesContainer />
            <StatsContainer />
            <SignupContainer />
            <Footer />
        </>
    );
};

export default HomeWrapper;
