import { Component } from 'solid-js';
import Button from '../../elements/Button';
import * as Icon from 'solid-icons/fa';

const SignupContainer: Component = () => {
    return (
        <div class="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8 lg:flex lg:items-center lg:justify-between">
            <h2 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                <span class="block text-white">Ready to dive in?</span>
                <span class="block text-blue-500">Get a free server on us.</span>
            </h2>
            <div class="mt-8 flex lg:mt-0 lg:flex-shrink-0">
                <div class="inline-flex rounded-md shadow">
                    <Button link={'https://portal.neronodes.net'} name={'Get Started'} />
                </div>
                <div class="inline-flex rounded-md shadow">
                    <Button link={'https://neronodes.net/discord'} name={<Icon.FaBrandsDiscord />} />
                </div>
                <div class="inline-flex rounded-md shadow">
                    <Button link={'https://twitter.com/neronodes'} name={<Icon.FaBrandsTwitter />} />
                </div>
                <div class="inline-flex rounded-md shadow">
                    <Button link={'https://neronodes.net/donate'} name={<Icon.FaBrandsPaypal />} />
                </div>
            </div>
        </div>
    );
};

export default SignupContainer;
