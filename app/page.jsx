import { Card } from 'components/card';
import { getNetlifyContext } from 'utils';
import Image from 'next/image';
import cover from 'public/cover.png';




const ctx = getNetlifyContext();

// ...existing code...

export default function Page() {
    return (
        <div className="flex flex-col gap-12 sm:gap-16 text-center px-4 py-8">
            <section className="flex flex-col items-center gap-6">


                <Image
                    src={cover}
                    alt="cover"
                    className=" w-full max-w-sm sm:max-w-md md:max-w-lg"
                />

                <iframe
                    data-testid="embed-iframe"
                    style={{ borderRadius: '12px' }}
                    src="https://open.spotify.com/embed/album/3kf0gD02XV7sKAf2Qc7uRS?utm_source=generator&si=d8ab473c9be74218"
                    width="100%"
                    height="352"
                    frameBorder="0"
                    allowFullScreen
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                    className="w-full max-w-xl"
                ></iframe>

                <h2 className="mt-6 text-xl sm:text-2xl font-semibold text-white">
                    Keikat
                </h2>
                <p className="text-lg text-white">
                    Hardrock House, Helsinki - 10.9.2025
                </p>
            </section>
        </div>
    );
}

// ...existing code...

function RuntimeContextCard() {
    const title = `Netlify Context: running in ${ctx} mode.`;
    if (ctx === 'dev') {
        return (
            <Card title={title}>
                <p>Next.js will rebuild any page you navigate to, including static pages.</p>
            </Card>
        );
    } else {
        const now = new Date().toISOString();
        return (
            <Card title={title}>
                <p>This page was statically-generated at build time ({now}).</p>
            </Card>
        );
    }
}
