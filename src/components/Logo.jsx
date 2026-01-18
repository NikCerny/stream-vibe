import './Logo.scss'
import classNames from 'classnames'

const Logo = (props) => {
    
    const {
        loading = 'lazy',
        className,
    } = props
    const title = 'Home'
    return (
        <a className={classNames(className, 'logo')} href='/' title={title} aria-label={title}>
            <img src="/Logo.svg" alt="" 
            className="logo__image" 
            width={199} 
            height={60} 
            loading={loading} />
        </a>
    )
}

export default Logo