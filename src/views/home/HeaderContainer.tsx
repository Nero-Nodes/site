import Banner from '../../elements/Banner';

export default () => (
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
        <Banner
            text={'Enjoy 50% of extra CPU on new servers, on us.'}
            showCloseIcon
            icon={false}
        />
        <header>
        </header>
        <div class="flex items-center justify-center md:space-x-10 h-[48rem]">
            <span>
                <h1 class={'text-8xl font-semibold text-white'}>A new take on speed<span class={'text-blue-500'}>.</span></h1>
                <h1 class={'text-3xl mt-4 text-gray-300 flex justify-center'}>Start your next Minecraft server with <span class={'text-blue-500'}>&nbsp;Nero.</span></h1>
            </span>
        </div>
    </div>
);
