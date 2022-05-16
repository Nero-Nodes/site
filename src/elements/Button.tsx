import { Component } from 'solid-js';

interface Props {
    link: string;
    name: any;
}

const Button: Component<Props> = ({ link, name }) => {
    return (
        <a
            href={link} 
            class={'ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-500 hover:bg-blue-600'}
        >
            {name}
        </a>
    )
}

export default Button;
