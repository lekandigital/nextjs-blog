import Link from 'next/link'

const navItems = {
  '/': {
    name: 'home',
  },
  '/essays': {
    name: 'essays',
  },
}

export function Navbar() {
  return (
    <nav className="nav">
      {Object.entries(navItems).map(([path, { name }]) => {
        return (
          <Link
            key={path}
            href={path}
          >
            {name}
          </Link>
        )
      })}
    </nav>
  )
}