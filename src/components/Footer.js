import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <footer>
      <p>Copyright &copy; 2021</p>
      <div className='footerLink'>
        <Link to='/about'>About  </Link>
        <Link to='/completed'>  Completed</Link>
      </div>

    </footer>
  )
}

export default Footer
