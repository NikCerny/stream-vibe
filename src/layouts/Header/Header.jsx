import './Header.scss'
import Logo from '@/components/Logo'

const Header = () => {
    return (
    <header className='header'>
        <div className="header__inner container">
            <Logo loading='eager' className='header__logo'></Logo>
        </div>
    </header>
    )
}

export default Header