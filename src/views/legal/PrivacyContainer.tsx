import { Component } from 'solid-js';
import Banner from '../../elements/Banner';

const TermsContainer: Component = () => {
    return (
        <div class="max-w-7xl mx-auto px-4 sm:px-6 h-screen">
            { /* Title */}
            <div class="flex items-center justify-center md:space-x-10 h-[24rem]">
                <p class={'text-9xl font-semibold text-white underline decoration-blue-500'}>Privacy <span class={'text-blue-500'}>Policy</span></p>
            </div>
            <Banner
                text={'This page is currently unavailable.'}
                type={'error'}
                icon={false}
                showCloseIcon={false}
            />
            <div class="flex items-center justify-center md:space-x-10 py-10">
                <p class={'text-xl font-semibold text-gray-500'}>
                    Last Updated: 7 July 2022
                </p>
            </div>
        </div>
    );
};

export default TermsContainer;
