/**
 * Footer Component
 * A reusable footer built with React functional component and named export.
 */
export function Footer() {
  return (
    <footer className="main-footer">
      <div className="footer-container">
        {/* Unordered Lists Section */}
        <div className="footer-lists">
          <ul className="footer-group">
            <li className="list-title">Services</li>
            <li><a href="#">Web Design</a></li>
            <li><a href="#">App Development</a></li>
          </ul>

          <ul className="footer-group">
            <li className="list-title">Company</li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Our Team</a></li>
          </ul>

          <ul className="footer-group">
            <li className="list-title">Support</li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Contact Support</a></li>
          </ul>
        </div>

        {/* Social Links Section */}
        <div className="footer-social">
          <a href="#" className="social-link">LinkedIn</a>
          <a href="#" className="social-link">GitHub</a>
          <a href="#" className="social-link">Twitter</a>
        </div>

        {/* Copyright Section */}
        <div className="footer-copy">
          <p>© 2025 Full Stack Journey. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}