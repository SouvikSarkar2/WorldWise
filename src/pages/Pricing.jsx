// Uses the same styles as Product
import PageNav from "../components/PageNav";
import styles from "./Product.module.css";

export default function Product() {
  return (
    <main className={styles.product}>
      <PageNav />

      <section>
        <div>
          <h2>
            Simple pricing.
            <br />
            Just $9/month.
          </h2>
          <p>
            $9/month: Everything in Wanderer's Passport. Priority customer
            support. Advanced statistics and insights about your travels.
            Collaborate on shared maps with friends.
            <br /> Nomad's Odyssey - $19.99/month: All the features in Global
            Voyager. Exclusive access to new features and updates. Premium map
            themes and customization options. Unlimited storage for photos and
            memories.
          </p>
        </div>
        <img src="img-2.jpg" alt="overview of a large city with skyscrapers" />
      </section>
    </main>
  );
}
