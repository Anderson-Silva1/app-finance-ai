import { ModeToggle } from "../toggle-theme";

export const Header = () => {
  return (
    <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-8">
      <div>
        <h1 className="text-3xl font-bold">
          Finance <span className="text-primary">AI</span>
        </h1>
      </div>
      <nav>
        <ul className="flex">
          <li>teste</li>
          <li>teste</li>
          <li>teste</li>
        </ul>
      </nav>
      <ModeToggle />
    </header>
  );
};
