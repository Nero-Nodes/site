import { Component } from 'solid-js';

export default () => {
    return (
        <div class="max-w-7xl mx-auto px-4 sm:px-6 h-screen">
            { /* Title */}
            <div class="flex items-center justify-center md:space-x-10 h-[24rem]">
                <p class={'text-8xl font-semibold text-white underline decoration-blue-500'}>07.07.2022 - <span class={'text-blue-500'}>News</span></p>
            </div>
            { /* General */ }
            <div class="flex items-center justify-center md:space-x-10">
                <p class={'text-5xl font-semibold text-white'}>Ukrainian Invasion</p>
            </div>
            <div class="flex items-center justify-center md:space-x-10 mt-5">
                <p class={'text-xl font-semibold text-white'}>
                   The team at Nero stand behind the country of Ukraine at a point where the Russian government has taken control of over 20% of the country
                   by violent means. We highly encourage anyone with spare income to donate to Ukraine today. Donating supports the people and government in
                   regaining their homes and returning to pre-invasion life.
                </p>
            </div>
            <div class="flex items-center justify-center md:space-x-10 mb-5">
                <p class={'text-xl font-semibold text-white'}>
                    <br />
                    Rescue UK: <a href={'https://help.rescue-uk.org/ukraine-se-pm'} class={'text-blue-500 cursor-pointer'}>https://help.rescue-uk.org/ukraine-se-pm</a>
                    <br />
                    Red Cross: <a href={'https://donate.redcross.org.uk/appeal/ukraine-crisis-appeal'} class={'text-blue-500 cursor-pointer'}>https://donate.redcross.org.uk/appeal/ukraine-crisis-appeal</a>
                    <br />
                    DEC: <a href={'https://www.dec.org.uk/appeal/ukraine-humanitarian-appeal'} class={'text-blue-500 cursor-pointer'}>https://www.dec.org.uk/appeal/ukraine-humanitarian-appeal</a>
                </p>
            </div>
            <div class="flex items-center justify-center md:space-x-10 py-10">
                <p class={'text-xl font-semibold text-gray-500'}>
                    Last Updated: 7 July 2022
                </p>
            </div>
        </div>
    );
};
