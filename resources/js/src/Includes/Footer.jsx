import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer id="footer" fixed="bottom">
    <div className="container">
      <div className="copyright">
        © Copyright <strong><span>Ronald</span></strong>. All Rights Reserved
      </div>
      <div className="credits">

        Designed by <Link to="/footer">Rony Ryan</Link>
      </div>
    </div>
  </footer>
  )
}

export default Footer
