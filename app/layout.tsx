import { ReactNode } from 'react';
import { NavLink } from '@/components/NavLink';

import { Inter } from 'next/font/google';
import Logo from 'public/logo.svg';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'The Movie Database',
  description: 'For using new version of Next.js',
};

const routes = [
  {
    name: 'Home',
    slug: '/',
  },
  {
    name: 'Movies',
    slug: '/movies',
  },
];

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} flex min-h-screen flex-col bg-gray-100`}
      >
        <header className="border-b border-slate-200 bg-white py-4 text-gray-800 shadow-md">
          <div className="container flex items-center justify-between">
            <Logo className="w-14" />

            <nav className="flex items-center justify-end">
              <ul className="flex items-center gap-4">
                {routes.map(route => (
                  <NavLink key={route.slug} slug={route.slug}>
                    {route.name}
                  </NavLink>
                ))}
                {/*<li>*/}
                {/*  <Link className="navLink" href="/">*/}
                {/*    home*/}
                {/*  </Link>*/}
                {/*</li>*/}

                {/*<li>*/}
                {/*  <Link className="navLink" href="/movies">*/}
                {/*    movies*/}
                {/*  </Link>*/}
                {/*</li>*/}
              </ul>
            </nav>
          </div>
        </header>

        <main className="grow">
          <section className="py-16 md:py-20">
            <div className="container">{children}</div>
          </section>
        </main>

        <footer className="border-t border-slate-200 bg-white py-4 text-gray-800">
          <p className="text-center text-sm font-bold text-gray-400">
            &copy; {new Date().getFullYear()} {metadata.title}
          </p>
        </footer>
      </body>
    </html>
  );
}
