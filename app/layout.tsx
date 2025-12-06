export default function GlobalLayout({ children }: { children: React.ReactNode }) { 
    return (
        <body>
        <header>
        <a href='/'><h1>Cultural Gold</h1></a>
        <nav>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
        </ul>
        </nav>    
        </header>
        
        <main>{children}</main>
        
        <footer>
            <p>&copy; 2024 Cultural Gold. All rights reserved.</p>
        </footer>
        </body>
    )
}