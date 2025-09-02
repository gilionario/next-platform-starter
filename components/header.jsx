import Image from 'next/image';
import Link from 'next/link';
import enigmateLogo from 'public/enigmatelogo.png';

const navItems = [
    { linkText: 'Home', href: '/' },
    { linkText: 'Atividade', href: '/atividade' },
    { linkText: 'Sobre', href: '/sobre' }
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
                            <Link href={item.href} className="inline-flex px-1.5 py-1 sm:px-3 sm:py-2">
                                {item.linkText}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
            
        </nav>
    );
}
