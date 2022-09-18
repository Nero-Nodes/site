import { Component } from 'solid-js';
import Button from './Button';
import Navlink from './Navlink';

const Navbar: Component = () => {
    return (
        <div class="max-w-7xl mx-auto px-4 sm:px-6">
            <div class="flex justify-between items-center py-6 md:justify-start md:space-x-10">
                <div class="flex justify-start lg:w-0 lg:flex-1">
                    <h1 class={'text-3xl font-semibold uppercase text-blue-700 p-2'}>Nero.</h1>
                </div>
                <Navlink name={'Discord'} link={'https://discord.com/invite/SaGgzDDEtG'} />
                <Navlink name={'Donate'} link={'https://www.paypal.com/donate/?hosted_button_id=9SW85VZLD3J9A#'} />
                <div class="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                    <Button name={'Get Started'} link={'https://portal.neronodes.net/auth/login'} />
                </div>
            </div>
        </div>
    )
}

export default Navbar;
