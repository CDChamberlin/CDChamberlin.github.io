export default function Copyright(props) {
  return (
    <footer className="bg-neutral-200 text-center dark:bg-neutral-700 lg:text-left">
      <div className="p-4 text-center text-neutral-700 dark:text-neutral-200">
        © 2024 - {new Date().getFullYear()} Copyright: &nbsp;
        <a
          className="text-neutral-800 dark:text-neutral-200 "
          href="https://github.com/CDChamberlin"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit Collin Chamberlin's GitHub Profile"
        >
          Collin Chamberlin
        </a>
      </div>
    </footer>
  );
}
