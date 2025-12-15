import '~/css/app.css'

export default function GlobalLayout({ children }: { children: React.ReactNode }) { 
    return (
        <body>
        <Header />
        <main>{children}</main>
        <Footer />
        </body>
    )
}

function Header() {
    return (
        <header>
        <h1><a  href='/culturalgold/'>Cultural Gold</a></h1>
        <nav>
        <ul>
            <li><a href="/culturalgold/#shop">Shop</a></li>
            <li><a href="/culturalgold/about">About</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
        </nav>    
        </header>
    )
}

import {SocialIcon} from 'react-social-icons/component'
import 'react-social-icons/instagram'
import 'react-social-icons/facebook'

function Footer() {
    return (
    <footer className="footer">
        <section className="links">
            <a className="heading" href="/"><h2 className="em">Cultural Gold</h2></a>
            <h2 className="strong">Get Connected</h2>
            <a href="mailto:culturalgold79@gmail.com">culturalgold79@gmail.com</a>
            <a href="tel:+(980) 800-2822">(980) 800-2822</a>
            
            <div className="grid">
            <SocialIcon className="social" url="www.instagram.com" href="https://www.instagram.com/culturalgold79/" bgColor={`rgba(38, 38, 38, 0.5);`} />
            <SocialIcon className="social" url="www.facebook.com" href="https://www.facebook.com/" bgColor={`rgba(38, 38, 38, 0.5);`} />
            </div>
        </section>

      
        <form id="contact" className="contact-form">
            <h2 className="strong">Contact Us</h2>
            <label>
                Name
                <input type="text" name="name" placeholder="" />
            </label>
            <label>
                Email
                <input type="email" name="name" placeholder="" />
            </label>
            <label>
                Message
                <textarea name="message" placeholder="Your message"></textarea>
            </label>
            <button className="btn" type="button">(Send)</button>
            
        </form>
  </footer>
    )
}