import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Start now 
          </Link>
        </div>
      </div>
    </header>
  );
}

function Feature({title, description, link}) {
  return (
    <div className="col col--4">
      <div className={styles.card}>
        <div className={styles.cardBody}>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        <div className={styles.cardFooter}>
          <Link className="button button--primary" to={link}>
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Welcome to ${siteConfig.title}`}
      description="Your go-to resource for mastering Sellista. Find guides, tips, and detailed documentation to help you set up and manage your online store.">
      <HomepageHeader />
      <main>
   
        <section className={styles.features}>
          <div className="container">
            <h2 className={styles.sectionTitle}>Getting Started with Sellista</h2>
            <div className="row">
              <Feature 
                title="Introduction"
                description="New to Sellista? Start here to learn the basics and set up your store."
                link="/docs/getting-started"
              />
              <Feature 
                title="Setting Up Your Store"
                description="Learn how to configure your store settings, including adding products and setting up payment and shipping options."
                link="/docs/store-setup"
              />
              <Feature 
                title="Managing Orders & Customers"
                description="Find out how to manage your orders and customers efficiently."
                link="/docs/orders-customers"
              />
            </div>
          </div>
          <div className="container">
            <h2 className={styles.sectionTitle}>Customizing Your Website</h2>
            <div className="row">
              <Feature 
                title="Website & Sales Channels"
                description="Customize your website and connect to various sales channels to maximize your reach."
                link="/docs/website-sales-channels"
              />
              <Feature 
                title="Website Builder"
                description="Use the Sellista Website Builder to design and customize your website."
                link="/docs/website-builder"
              />
              <Feature 
                title="Website Settings"
                description="Manage your website settings including themes, pages, navigation, and domains."
                link="/docs/website-settings"
              />
            </div>
          </div>
          <div className="container">
            <h2 className={styles.sectionTitle}>Advanced Features</h2>
            <div className="row">
              <Feature 
                title="Payments & Shipping"
                description="Set up payment methods and configure shipping options to streamline your operations."
                link="/docs/payments-shipping"
              />
              <Feature 
                title="Reviews & Returns"
                description="Enable product reviews and manage returns to enhance customer satisfaction."
                link="/docs/reviews-returns"
              />
              <Feature 
                title="Advanced Settings"
                description="Explore advanced settings to fully customize and optimize your Sellista store."
                link="/docs/advanced-settings"
              />
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}