import Link from "next/link";
import React from "react";
import Counter from "./components/Counter/Counter";
import ContentSection from "./components/ContentSection/ContentSection";

export default function Home() {
  return (
      <main>
        <h1>
        Jeff Simpson Welcomes <a href="https://nextjs.org">Next.js!</a>
      </h1>

      <Counter name={"Pablo"} mult={1} size={2} />
      <Counter name={"Pia"} mult={2} size={0.5} />
      
       <ContentSection identity={"GitHub"}/>

        <p>Check out my <Link href="/store">Fake Store</Link></p>
      </main>
  );
}
