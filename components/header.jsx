import Image from 'next/image';
import Link from 'next/link';
import enigmateLogo from 'public/enigmatelogo.png';

const navItems = [
    { linkText: 'Inicio', href: '/' },
    { linkText: 'Atividade', href: '/revalidation' },
    { linkText: 'Sobre', href: '/classics' }
];

export function Header() {
    return (
        <nav className="flex flex-wrap items-center gap-4 pt-6 pb-12 sm:pt-12 md:pb-24">
            <Link href="/">
                <Image src={enigmateLogo} alt="Enigmate logo" width={120} height={40} />
            </Link>
            {!!navItems?.length && (
                <ul className="flex flex-wrap gap-x-4 gap-y-1">
                    {navItems.map((item, index) => (
                        <li key={index}>
                            <Link
                                href={item.href}
                                className="inline-flex px-1.5 py-1 sm:px-3 sm:py-2 font-bold uppercase no-underline"
                                style={{ transition: 'color 0.2s', color: 'white' }}
                                onMouseEnter={e => (e.currentTarget.style.color = '#06b38d')}
                                onMouseLeave={e => (e.currentTarget.style.color = 'white')}
                            >
                                {item.linkText}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </nav>
    );
}


