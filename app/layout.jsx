import '../styles/globals.css';
import { Header } from '../components/header';
import { Footer } from '../components/footer'; // <- import footer

export const metadata = {
    title: {
        template: '%s',
        default: 'Enigmate'
    }
};

export default function RootLayout({ children }) {
    return (
        <html lang="pt">
            <head>
                <link rel="icon" href="/enigmatelogo.png" sizes="any" />
            </head>
            <body className="antialiased text-white bg-gradient-to-r from-green-700 to-green-500">
                <div className="flex flex-col min-h-screen px-6 sm:px-12">
                    <div className="flex flex-col w-full max-w-5xl mx-auto grow">
                        <Header />
                        <main className="grow">{children}</main>
                        <Footer />
                    </div>
                </div>
            </body>
        </html>
    );
}



