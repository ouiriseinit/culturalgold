import Layout from "~/components/layout";
import type { JSX, MouseEvent } from "react";
import { useEffect, useState } from "react";
import '~/css/home.css'

interface Collection {
  name: string;
  symbol: string[];
  focus: string;
  description: string;
  category: string;
}
export default function Home() {
  const [collections, setCollections] = useState<Collection[]>([]);

  useEffect(() => {
    fetch("/culturalgold/data/collections.json")
      .then((res) => res.json())
      .then((data) => setCollections(data));
  }, []);

  return (
    <Layout>
      <article className="hero">
      <img src="/culturalgold/images/castle-row.png" alt="" />
      <div className="overlay">.</div>
      <h2>Welcome to <span className="em">Cultural Gold!</span></h2>
      <p>Celebrating the love and enduring spirit of Africa</p>
      
      <p><span className="ital">The vibrant creativity</span> <br /> <span className="heading small"> the rich stories</span> <br /> <span className="strong small">the enduring legacy</span></p>
      <p>We invite to connect and rediscover the <br /> <span className="ital">beauty</span> that resides <span className="strong small">within</span></p>
      
      <a className="btn" href="#shop"><span>»</span> Explore OUR Legacy <span>«</span></a>
      </article>


      <div id="shop">.</div>
      <h2 className="strong center">Goods infused with Culture</h2>

      <article className="collections">
        {collections.map((collection: Collection): JSX.Element => (
          <CollectionCard
            key={collection.name}
            name={collection.name}
            symbol={collection.symbol}
            category={collection.category}
            focus={collection.focus}
            description={collection.description}
          />
        ))}
        </article>
        </Layout>
  );
}

function CollectionCard({ name, symbol, category, focus, description }: Collection) {
  const sendMessage = (e: MouseEvent) => {
    e.preventDefault()

    alert("demo only")

  }
    return (
        <div className="card collection-card" key={name}>
          {/* <img src={`/images/${category}.jpg`} alt={name} /> */}
          <h4 className="em">{name.toUpperCase()}</h4>
          <a href="/culturalgold/about">{symbol}</a>
          <p>{focus} {category}</p>
          <p className='desc'>{description}</p>

          
          <a className="btn" onClick={(e) => sendMessage(e)} href={`/culturalgold/collections/${category.toLowerCase()}`}>View Collection</a>
      </div>
  );
}
