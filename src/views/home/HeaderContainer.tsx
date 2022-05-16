import { Component } from 'solid-js';

const HeaderContainer: Component = () => {
    return (
        <div class="max-w-7xl mx-auto px-4 sm:px-6">
            <div class="flex items-center justify-center md:space-x-10 h-[48rem]">
                <span>
                    <h1 class={'text-9xl font-bold text-white'}>Your Next<br />Minecraft Server<span class={'text-blue-500'}>.</span></h1>
                    <h1 class={'text-3xl font-semibold mt-4 text-gray-500'}>Start your next SMP with <span class={'text-blue-500'}>Nero Nodes.</span></h1>
                </span>
            </div>
        </div>
    );
};

export default HeaderContainer;
