import Layout from "~/components/layout"
import "~/css/about.css"
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import image1 from "/culturalgold/images/pexels-harrun-muhammad-116282236-35117462.jpg" 
import image2 from "/culturalgold/images/pexels-adedamola-adetoyi-503771-35156547.jpg"
import image3 from "/culturalgold/images/pexels-hcdigital-3347324.jpg"
export default function About() {
    return (
        <Layout>
            <Parallax pages={2}>
                <ParallaxLayer speed={1}>
                    <div className="container">
                    
                    <img src={image1} alt="" />
                    <img className='side' src={image2} alt="" />
                    <img src={image3} alt="a tree standing in front of a starry night sky" />
                    </div>
                </ParallaxLayer>
                <ParallaxLayer speed={0.5}>
                    <article>
                    
                    <h2>About Us</h2>
            
                    <p>At Cultural Gold, we honor African by exhibiting our culture, celebrate expert craftsmanship, and create a space where global luxury becomes personal and deeply familiar. Every product, every detail, every package carries the love and intention of our roots.</p>
                    
                    
                    <p className="center-text">In a world full of noise, genuine identity is the highest luxury.</p>
                    
                    
                    <p className="last">Like ancient trees, our heritage runs deep—a network of strength and resilience woven through generations. It isn't merely remembered, but felt—a quiet knowing that you are part of something timeless. To wear a Cultural Gold piece is to tap into this network, to draw upon the unwavering spirit of those who came before.</p>

                    </article>
                </ParallaxLayer>
            </Parallax>
        </Layout>
    )
}
