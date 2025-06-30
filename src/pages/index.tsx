import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
// import heroImage from '@site/static/img/hero-main.webp';

// import '../css/iggywebsite.css';
// import '../css/components.css';
// import '../css/normalize.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  // const backgroundStyle = {
  //   backgroundImage: `url(${heroImage}), radial-gradient(circle closest-side at 35% 48%, #ff910314, #070c1700 60%), radial-gradient(circle closest-side at 68% 52%, #111d35, #070c1700 63%), radial-gradient(circle farthest-side at 20% 0%, #0e1f42, var(--bg-1) 21%)`
  // };
  return (
    <div className="hero-section">
      <div className="container on-hero">
        <div className="wrapper-m">
          <div className="hero-title-centered s-m-b-0">
            <h1 className="heading xl">Hyper-Efficient<br /><span className="text-span-3">Message Streaming</span><br />at Laser Speed</h1>
          </div>
          <p className="body-text m subheadline">Apache Iggy (Incubating) is a high-performance, persistent message streaming platform written in Rust, capable of processing <span className="text-span-4">millions of messages per second</span> with ultra-low latency.</p>
          <div className="hero-features">
            <div className="w-layout-grid l-g-4-col hero-features-grid">
              <div className="feature-block centered subheadline-features">
                <h3 className="heading m on-hero linear-gradient-1">Millions</h3>
                <p className="body-text m s-m-b-0 subheadline-features">Messages/Second</p>
              </div>
              <div className="feature-block centered subheadline-features">
                <h3 className="heading m on-hero linear-gradient-2"> &lt; 1 ms</h3>
                <p className="body-text m s-m-b-0 subheadline-features">Latency @ P99</p>
              </div>
              <div className="feature-block centered subheadline-features">
                <h3 className="heading m on-hero linear-gradient-3">6+<br /></h3>
                <p className="body-text m s-m-b-0 subheadline-features">Language SDKs<br /></p>
              </div>
              <div className="feature-block centered subheadline-features">
                <h3 className="heading m on-hero">100%</h3>
                <p className="body-text m s-m-b-0 subheadline-features">Free & Open Source</p>
              </div>
            </div>
          </div>
          <div className="buttons-grid-section-2">
            <div className="container">
              <div className="buttons-wrapper-on-hero">
                <div className="w-layout-grid l-g-2-col buttons-on-hero">
                  <div className="feature-block centered">
                    <a href="/docs/introduction/getting-started" className="button medium on-hero w-inline-block">
                      <div className="button-content-wrapper">
                        <div className="button-text dark on-hero">Get Started</div>
                      </div>
                    </a>
                    <p className="body-text s on-hero">Run locally in 2 minutes<br />Cargo install, single binary<br /></p>
                  </div>
                  <div className="feature-block centered">
                    <a href="https://github.com/apache/iggy" target="_blank" className="button medium ghost secondary w-inline-block">
                      <div className="button-content-wrapper">
                        <img width="26" height="Auto" alt="gh-icon-orange" src="/img/gh-icon-orange.svg" loading="lazy" className="github-icon-on-hero" />
                        <div className="button-text ghost on-hero">View on GitHub</div>
                      </div>
                    </a>
                    <p className="body-text s on-hero">Explore the source , Rust<br />CLI, Benchmarks included<br /></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
