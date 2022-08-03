import Link from 'next/link';
import { OpenLetter } from '../lib/letters';

function OpenLetterListItem({
  title,
  tldr,
  authors,
  publishedDate,
  slug,
}: OpenLetter) {
  const date = new Date(publishedDate).toLocaleString();
  const authorsByline = authors.map(({ name }) => name).join(', ');
  return (
    <Link href={`/${slug}`}>
      <a className="block mb-4 text-white decoration-none shadow-sm p-4 bg-surface dark:bg-surface-dark dark:text-on-surface-dark text-black rounded-md hover:shadow-md focus:shadow-md">
        <div className="">
          <div className="text-2xl font-display mb-1">{title}</div>
          <div className="text-lg font-display mb-2">TL;DR: {tldr}</div>
          <div className="">
            Published by <span>{authorsByline}</span> at <span>{date}</span>
          </div>
        </div>
      </a>
    </Link>
  );
}

/**
 * Component properties for an OpenLetterList.
 */
interface OpenLetterListProps {
  /**
   * All the letters to display.
   */
  letters: OpenLetter[];
  /**
   * The number of items to display.
   * If not provided, the entire list will be displayed.
   */
  limit?: number;
}

/**
 * A list of open letters.
 */
export default function OpenLetterList({
  letters,
  limit,
}: OpenLetterListProps) {
  const letterItems = letters
    .map((letter) => <OpenLetterListItem key={letter.slug} {...letter} />)
    .slice(0, limit ?? letters.length - 1);
  return <div>{letterItems}</div>;
}
