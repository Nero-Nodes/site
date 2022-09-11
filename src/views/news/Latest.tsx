import { Component } from 'solid-js';

export default () => {
    return (
        <div class="bg-gray-800 ">
        <div class="max-w-7xl mx-auto px-4 bg-gray-800 sm:px-6 ">
            { /* Title */}
            <div class="flex items-center justify-center md:space-x-10 h-[24rem]">
                <p class={'text-8xl font-semibold text-white underline decoration-blue-500'}>08.09.2022 - <span class={'text-blue-500'}>News</span></p>
            </div>
            { /* General */ }
            <div class="flex items-center justify-center md:space-x-10 bg-gray-800">
                <p class={'text-5xl font-semibold text-white'}>The sad passing of Her Majesty The Queen</p>
            </div>
            <div class="flex items-center justify-center md:space-x-10 mt-5 bg-gray-800">
                <p class={'text-xl font-semibold text-white'}>
                   The sad passing of Her Majesty The Queen has affected everyone in the United Kingdom one way or another, this day marks a sad point in history.
                   Elizabeth II was Queen of the United Kingdom from 6 February 1952 until her death on 8 September 2022. Her reign of 70 years and 214 days was the longest of any British monarch and the second-longest recorded of any monarch of a sovereign country. 
                   Below I have attached some articles covering it and what will occour within the next 10 days.
                </p>
            </div>
            <div class="flex items-center justify-center md:space-x-10 mb-5 bg-gray-800">
                <p class={'text-xl font-semibold text-white'}>
                    <br />
                    BBC Covering Funeral: <a href={'https://help.rescue-uk.org/ukraine-se-pm'} class={'text-blue-500 cursor-pointer'}>https://www.bbc.co.uk/news/uk-62861617</a>
                    <br />
                    BBC Report: <a href={'https://donate.redcross.org.uk/appeal/ukraine-crisis-appeal'} class={'text-blue-500 cursor-pointer'}>https://www.bbc.co.uk/news/uk-61585886</a>
                </p>
            </div>
            <div class="flex items-center justify-center md:space-x-10 py-10 bg-gray-800">
                <p class={'text-xl font-semibold text-gray-500'}>
                    Last Updated: 8 September 2022
                </p>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
            </div>
            
            { /* General */ }
            <div class="flex items-center justify-center md:space-x-10 bg-gray-800">
                <p class={'text-5xl font-semibold text-white'}>Ukrainian Invasion</p>
            </div>
            <div class="flex items-center justify-center md:space-x-10 mt-5 bg-gray-800">
                <p class={'text-xl font-semibold text-white'}>
                   The team at Nero stand behind the country of Ukraine at a point where the Russian government has taken control of over 20% of the country
                   by violent means. We highly encourage anyone with spare income to donate to Ukraine today. Donating supports the people and government in
                   regaining their homes and returning to pre-invasion life.
                </p>
            </div>
            <div class="flex items-center justify-center md:space-x-10 mb-5 bg-gray-800">
                <p class={'text-xl font-semibold text-white'}>
                    <br />
                    Rescue UK: <a href={'https://help.rescue-uk.org/ukraine-se-pm'} class={'text-blue-500 cursor-pointer'}>https://help.rescue-uk.org/ukraine-se-pm</a>
                    <br />
                    Red Cross: <a href={'https://donate.redcross.org.uk/appeal/ukraine-crisis-appeal'} class={'text-blue-500 cursor-pointer'}>https://donate.redcross.org.uk/appeal/ukraine-crisis-appeal</a>
                    <br />
                    DEC: <a href={'https://www.dec.org.uk/appeal/ukraine-humanitarian-appeal'} class={'text-blue-500 cursor-pointer'}>https://www.dec.org.uk/appeal/ukraine-humanitarian-appeal</a>
                </p>
            </div>
            <div class="flex items-center justify-center md:space-x-10 py-10 bg-gray-800">
                <p class={'text-xl font-semibold text-gray-500'}>
                    Last Updated: 7 July 2022
                </p>
            </div>
        </div>
        </div>
        
    );
};
