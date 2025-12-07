import Layout from "~/layout";
import { featuredCollections } from "~/data"
import type { JSX } from "react";

interface Collection { name: string, symbol: string[], focus: string, description: string, category: string}

export default function Home() {

    return (
        <Layout>
            <article className="hero">
            <section>
            <h2 className="ital"><span className="em">Cultural</span>Infused Goods</h2>
            <h3 className="ital">Priceless beyond <span className="em">Gold</span></h3>
            <a className="btn" href="#shop">SHOP NOW</a>
            </section>
            </article>

            <div id="shop">.</div>
            <h2  className="ital center">Cultural Collections</h2>

            <article className="collections">
                {featuredCollections.slice(0, 2).map((collection: Collection): JSX.Element => (
                    <CollectionCard key={collection.name} name={collection.name} symbol={collection.symbol} category={collection.category} focus={collection.focus} description={collection.description} />
                ))}
                
            </article>
            <article className="collections">
            {featuredCollections.slice(2, 4).map((collection: Collection): JSX.Element => (
                    <CollectionCard key={collection.name} name={collection.name} symbol={collection.symbol} category={collection.category} focus={collection.focus} description={collection.description} />
                ))}
            </article>
        </Layout>
    )
}

function CollectionCard({ name, symbol, category, focus, description}: Collection) {
    return (
        <div className="card collection" key={name}>
                        {/* <img src={`/images/${category}.jpg`} alt={name} /> */}
                        <h4 className="em">{name.toUpperCase()}</h4>
                        <p>{focus} {category}</p>
                        <p>{description}</p>

                        {symbol.map(s => <p className="">{s}</p>)}
                        <a className="btn">View Collection</a>
                    </div>
    )
}