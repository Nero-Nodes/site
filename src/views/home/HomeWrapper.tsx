import { Component } from 'solid-js';
import Banner from '../../elements/Banner';
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
            <Banner text={'Welcome to the new homepage!'} />
            <HeaderContainer />
            <FeaturesContainer />
            <StatsContainer />
            <SignupContainer />
            <Footer />
        </>
    );
};

export default HomeWrapper;
