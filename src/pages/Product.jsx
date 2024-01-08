import PageNav from "../components/PageNav";
import styles from "./Product.module.css";

export default function Product() {
  return (
    <main className={styles.product}>
      <PageNav />

      <section>
        <img
          src="img-1.jpg"
          alt="person with dog overlooking mountain with sunset"
        />
        <div>
          <h2>About WorldWide.</h2>
          <p>
            Embark on a journey of a lifetime with WorldWise, your trusted
            partner in documenting and sharing your global adventures. We
            understand that every step you take, every city you explore, and
            every memory you create is a treasure worth cherishing. WorldWise is
            here to help you capture, preserve, and share those moments
            seamlessly.
          </p>
          <p>Welcome to WorldWise – The Ultimate Travel Companion!</p>
        </div>
      </section>
    </main>
  );
}
