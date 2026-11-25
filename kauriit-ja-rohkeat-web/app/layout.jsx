import '../styles/globals.css';
import Image from 'next/image';
import band from 'public/band.png';
import { Footer } from '../components/footer';
import { Header } from '../components/header';

export const metadata = {
    title: {
        template: 'kauriit ja rohkeat',
        default: 'Kauriit ja rohkeat'
    }
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/favicon.icon" sizes="any" />
            </head>
            <body className="antialiased text-white bg-black">
                <div className="fixed inset-0 -z-10 bg-black">
                    <Image
                        src={band}
                        alt=""
                        fill
                        priority
                        className="object-cover opacity-50"
                    />
                </div>

                <div className="flex flex-col min-h-screen px-6 bg-noise sm:px-12">
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