import '../styles/globals.css';
import { Header } from '../components/header';

export const metadata = {
    title: {
        template: '%s', // dynamic page title
        default: 'Enigmate' // default site title
    }
};

export default function RootLayout({ children }) {
    return (
        <html lang="pt">
            <head>
                <link rel="icon" href="/favicon.svg" sizes="any" />
            </head>
            <body className="antialiased text-white bg-gradient-to-r from-green-700 to-green-500">
                <div className="flex flex-col min-h-screen px-6 sm:px-12">
                    <div className="flex flex-col w-full max-w-5xl mx-auto grow">
                        <Header />
                        <main className="grow">{children}</main>
                        {/* Footer removed */}
                    </div>
                </div>
            </body>
        </html>
    );
}

