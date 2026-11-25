import Image from 'next/image';
import Link from 'next/link';
import logo from 'public/logo.png';
import githubLogo from 'public/images/github-mark-white.svg';

const navItems = [
  
];

export function Header() {
    return (
       <nav className="flex flex-wrap items-center gap-4 pt-6 pb-12 sm:pt-12 md:pb-24">
            <Image src={logo} alt="logo" className="w-24 h-auto sm:w-32" />
        </nav>
    );
}
