import data from "../data.json";

function SocialLinks() {
  return (
    <footer>
      <ol className="flex flex-row space-x-3">
        {data.socials.map((social) => (
          <li className="flex w-full max-w-sm" key={social.id}>
            <a className="transition hover:underline active:underline" href={social.link} target="_blank" rel="noreferrer">
              {social.name}
            </a>
          </li>
        ))}
      </ol>
    </footer>
  );
}

export default SocialLinks;
