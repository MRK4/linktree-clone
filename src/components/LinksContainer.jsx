import data from '../data.json';

function LinksContainer() {
  return (
    <main className="flex flex-col items-center justify-center w-full space-y-6">
      <ul className="flex flex-col items-center justify-center w-full space-y-2">
        {data.links.map((link) => (
            <li
            className="flex w-full max-w-sm"
            key={link.id}
            >
              <a
              className="flex items-center justify-between w-full px-4 py-3 space-x-2 font-semibold text-center transition bg-transparent border-2 border-white rounded-full group hover:bg-white active:bg-white active:text-gray-900 hover:text-gray-900"
              href={link.link}
              target="_blank"
              rel="noreferrer"
              >
                <span className='flex items-center space-x-2'>
                  { link.icon && (
                    <span className="text-lg">{link.icon}</span>
                  )}
                  <p>{link.name}</p>
                </span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="hidden w-6 h-6 transition group-hover:block">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </a>
            </li>
        ))}
      </ul>
    </main>
  );
}

export default LinksContainer;
