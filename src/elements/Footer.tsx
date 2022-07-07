import { Component } from 'solid-js';
import Navlink from './Navlink';

const Footer: Component = () => {
    return (
        <div class="max-w-7xl py-10 mx-auto px-4 sm:px-6">
            <div class="flex justify-between items-center border-t-2 border-gray-800 py-6 md:justify-start md:space-x-10">
                <div class="flex justify-start lg:w-0 lg:flex-1">
                    <h1 class={'text-3xl font-semibold uppercase text-blue-500 p-2'}>Neronodes.net</h1>
                </div>
                <Navlink link={'/legal/terms'} name={'Terms'} />
                <Navlink link={'/legal/privacy'} name={'Privacy'} />
                <p class={'mt-1 text-sm text-gray-500'}>&copy; 2022 Nero Nodes.</p>
            </div>
        </div>
    )
}

export default Footer;
