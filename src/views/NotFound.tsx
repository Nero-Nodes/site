import { Component } from 'solid-js';
import Banner from '../elements/Banner';

const TermsContainer: Component = () => {
    return (
        <div class="max-w-7xl mx-auto px-4 sm:px-6 h-screen">
            { /* Title */}
            <div class="flex items-center justify-center md:space-x-10 h-[24rem]">
                <p class={'text-9xl font-semibold text-white underline decoration-blue-500'}>Error <span class={'text-blue-500'}>404</span></p>
            </div>
            <Banner
                text={'Unable to find requested page. This request has been logged.'}
                type={'error'}
                icon={false}
                showCloseIcon={false}
            />
        </div>
    );
};

export default TermsContainer;
