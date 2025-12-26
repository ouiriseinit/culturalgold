import Layout from "~/components/layout"
import "~/css/about.css"
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import type { JSX } from "react"
export default function About() {
    return (
        <Layout>
            <div className="container">
            <Card 
                text="At Cultural Gold, we honor African by exhibiting our culture, celebrate expert craftsmanship, and create a space where global luxury becomes personal and deeply familiar. Every product, every detail, every package carries the love and intention of our roots."
                image="/culturalgold/images/pexels-harrun-muhammad-116282236-35117462.jpg"
            />
            <Card 
                text="In a world full of noise, genuine identity is the highest luxury."
                image="/culturalgold/images/pexels-adedamola-adetoyi-503771-35156547.jpg"
            />
            <Card
                text="Like ancient trees, our heritage runs deep—a network of strength and resilience woven through generations. To wear a Cultural Gold piece is to tap into this network, to draw upon the unwavering spirit of those who came before."
                image="/culturalgold/images/pexels-hcdigital-3347324.jpg"
            />
            
            </div>
            <article>
            <div className="overlay">.</div>
            <h2>About Us</h2>
    
           

            </article>
        </Layout>
    )
}

function Card({ image, text }: { image: React.ReactNode, text: string}) {
    return ( 
        <div className="container"><img src={`${image}`} />
            <div className="overlay">{text}</div>
        </div>
    )
}
