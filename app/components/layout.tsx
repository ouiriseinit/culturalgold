import '~/css/app.css'

export default function GlobalLayout({ children }: { children: React.ReactNode }) { 
    return (
        <>
        <Header />
        <main>{children}</main>
        <Footer />
        </>
    )
}

function Header() {
    return (
        <header>
        <h1>
            <a  href='/culturalgold/'>Cultural 
            <img src='/culturalgold/images/logo-removebg-preview.png' alt="An elegant woman crowned with an orange headscarf and wearing golden earings" />
            Gold</a>
            
        </h1>
        
        <Nav />
        </header>
    )
}

    import { SocialIcon } from 'react-social-icons/component'
    import 'react-social-icons/instagram'
    import 'react-social-icons/facebook'

    function Footer() {
    const sendMessage = () => {
        alert('demo only')
    }
    return (
    <footer className="footer">
        <section className="links">
            <h2 className="strong">Get Connected</h2>
            <img src='/culturalgold/images/logo-alt-removebg-preview.png' alt="An elegant woman crowned with an orange headscarf and wearing golden earings" />

            <div className="column">
            <a href="mailto:culturalgold79@gmail.com">culturalgold79@gmail.com</a>
            <a href="tel:+(980) 800-2822">(980) 800-2822</a>
            </div>
            
            <div className="grid">
            <SocialIcon className="social" url="www.instagram.com" href="https://www.instagram.com/culturalgold79/" bgColor={`#f46b0a`} />
            <SocialIcon className="social" url="www.facebook.com" href="https://www.facebook.com/" bgColor={`#f46b0a`} />
            </div>
        </section>

    
        <form id="contact" className="contact-form" action="https://contact-eight-black.vercel.app/api/send" method="POST">
            <h2 className="strong">Contact Us</h2>
            <label>
                Name
                <input type="text" name="name" required/>
            </label>
            <label>
                Email
                <input type="email" name="email" placeholder="" required/>
            </label>
            <label>
                Message
                <textarea name="message" placeholder="Your message"></textarea>
            </label>
            <input type="submit" value="Send Message" />
            
        </form>
    </footer>
    )
}

function Nav() {
    const handleShopClick = (event: MouseEvent) => {
        event.preventDefault();
        if (window.location.pathname === '/culturalgold/') {
            document.querySelector('#shop')?.scrollIntoView({ behavior: 'smooth' });
        } else {
            window.location.href = '/culturalgold/#shop';
        }
    }
    return (
    <nav>
        <ul>
            <li><a onClick={(e) => handleShopClick} href="/culturalgold/#shop">Shop</a></li>
            {/* <li><a href="/culturalgold/about">About</a></li> */}
            <li><a href="#contact">Contact</a></li>
        </ul>
        </nav>    
    )
}