import './index.css'
import logo from './logo.svg'

export default function Header() {
  return (
    <header className='header'>
      <img alt='logo' src={logo} height={32}/>
    </header>
  )
}