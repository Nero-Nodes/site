import { Component } from 'solid-js';

interface Props {
    link: string;
    name: any;
}

const Button: Component<Props> = ({ link, name }) => {
    return (
        <a
            href={link} 
            class={
                'transition ease-in-out hover:-translate-y-1 duration-500 mx-4 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 rounded-md shadow-xl text-base font-medium text-white bg-blue-500 hover:bg-gradient-to-r from-green-400 to-blue-500'}
        >
            {name}
        </a>
    )
}

export default Button;
