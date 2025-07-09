import { Link } from "react-router-dom"
import "./header.scss"
import type { User } from "../../interface/types";

interface HeaderProps {
  user: User | null;
}


function Header({ user }: HeaderProps) {
  // Get initials
  const initials = user?.name
    ? user.name
        .split(' ')
        .map((word) => word[0])
        .slice(0, 2)
        .join('')
        .toUpperCase()
    : 'NA';

  return (
    <header className="header-container">
      <Link to="/dashboard" className="logo">
        <img src="./src/assets/swift_logo.webp" alt="Swift" title="Swift Company" className="logo-img"/>
        <span>WIFT</span>
      </Link>
      <Link to="/profile" className="profile-data">
        <span>{initials}</span>
        <span>{user?.name}</span>
      </Link>
    </header>
  )
}

export default Header
