import Link from 'next/link';

/**
 * An info footer with links to the entire website.
 */
export default function SiteFooter() {
  return (
    <footer className="bg-blue-600 text-white">
      <div className="p-4">
        <div className="grid grid-cols-2 max-w-3xl mx-auto">
          <div>
            <div className="text-lg font-bold">Open Letter</div>
            <ul>
              <li>
                <Link href="/">
                  <a className="text-white">Home</a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a className="text-white">About</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="p-4 text-center bg-blue-700">
        A{' '}
        <a className="text-[#00FCA8] font-bold" href="https://williecubed.me">
          WillieCubed
        </a>{' '}
        project
      </div>
    </footer>
  );
}
