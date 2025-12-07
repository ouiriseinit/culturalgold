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
        <a href='/'><h1>Cultural Gold</h1></a>
        <nav>
        <ul>
            <li><a href="/culturalgold/">Home</a></li>
            <li><a href="/culturalgold/about">About</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
        </nav>    
        </header>
    )
}

function Footer() {
    return (
        <footer className="footer">
      <form className="contact-form">
        <h2 className="strong">Contact Us</h2>
        <label>
          Name
          <input type="text" name="name" placeholder="Your name" />
        </label>
        <label>
          Message
          <textarea name="message" placeholder="Your message"></textarea>
        </label>
        <button className="btn" type="button">(Send)</button>
      </form>
    
    <section className="addresses">
    <address>
      <a href="mailto:culturalgold79@gmail.com">culturalgold79@gmail.com</a>
      <a href="tel:+(980) 800-2822">(980) 800-2822</a>
    </address>
    </section>
    <section className="socials">
    <a href="/culturalgold/" className="logo">
        <h2 className="heading">Cultural Gold</h2>
      </a>
      </section>

  </footer>
    )
}