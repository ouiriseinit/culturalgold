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

  const scrollToElement = (event: React.MouseEvent, id: string, padding: number = 0) => {
  event.preventDefault();
  const element = document.getElementById(id);
  if (element) {
    const targetPosition = element.getBoundingClientRect().top + window.scrollY - padding;
    window.scrollTo({ top: targetPosition, behavior: 'smooth' });
  }}

  return (
    <Layout>
      <article className="hero">
      <h2>Welcome to <span className="em">Cultural Gold!</span></h2>
      <p>Celebrating the love and enduring spirit of Africa</p>
      <p><span className="ital">The vibrant creativity</span>,<span className="heading small"> the rich stories</span>, <span className="strong small">the enduring legacy</span></p>
      <p>We invite to connect and rediscover the <span className="ital">beauty</span> that resides <span className="strong small">within</span></p>
      <a className="btn" onClick={(e) => scrollToElement(e, 'shop')}><span>»</span> Explore Legacy <span>«</span></a>
      </article>

      <div id="shop">/</div>
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
          <p>{focus} {category}</p>
          <p className='desc'>{description}</p>

          <a href="/culturalgold/about" className="right">{symbol}</a>
          <a className="btn" onClick={(e) => sendMessage(e)} href={`/culturalgold/collections/${category.toLowerCase()}`}>View Collection</a>
      </div>
  );
}
