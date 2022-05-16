import { Component } from 'solid-js';
import Button from './Button';
import Navlink from './Navlink';

const Navbar: Component = () => {
    return (
        <div class="max-w-7xl mx-auto px-4 sm:px-6">
            <div class="flex justify-between items-center border-b-2 border-gray-800 py-6 md:justify-start md:space-x-10">
                <div class="flex justify-start lg:w-0 lg:flex-1">
                    <h1 class={'text-3xl font-semibold uppercase text-blue-500 p-2'}>Nero</h1>
                </div>
                <Navlink name={'Site'} link={'https://neronodes.net'} />
                <Navlink name={'Site'} link={'https://neronodes.net'} />
                <Navlink name={'Site'} link={'https://neronodes.net'} />
                <Navlink name={'Site'} link={'https://neronodes.net'} />
                <div class="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                    <Navlink name={'Sign in'} link={'/login'} />
                    <Button name={'Sign up'} link={'/signup'} />
                </div>
            </div>
        </div>
    )
}

export default Navbar;
