import Image from "next/image";
import styles from "@/styles/Component01.module.css";

const Component01: React.FC = () => {
  return (
    <>
      <div className={styles.component01}>
        <Image
          src="/assets/component-01/Image-01@2x.jpg"
          alt="Image01"
          width={384}
          height={600}
          priority
        />
        <div className={styles.component01__column2}>
          <Image
            src="/assets/component-01/Image-02@2x.jpg"
            alt="Image02"
            width={384}
            height={290}
            priority
          />
          <Image
            src="/assets/component-01/Image-03@2x.jpg"
            alt="Image02"
            width={384}
            height={290}
            priority
          />
        </div>
        <div className={styles.component01__column3}>
          <div className={styles.component01__column2_header}>
            ANSWER YOUR BODY&apos;S NEEDS
          </div>
          <hr />
          <p className={styles.component01__column2_firstParagraph}>
            The way ingredients are sourced affects the way we nourish our
            bodies. Author Mark Schatzer believes our body naturally develops an
            appetite for the foods and nutients int need to be healthy, but that
            artificial flavourings are getting in the way. This can be reversed
            by focusing on high-quality ingredients and being mindful as your
            appetite guides you to consume according to your body&apos;s needs.
          </p>
          <div className={styles.component01__column2_subheader}>
            BE MINDFUL
          </div>
          <p className={styles.component01__column2_secondParagraph}>
            Sourcing local or organic food is a good way to start being more
            mindful about what you&apos;re cooking and eating.
          </p>
        </div>
      </div>
    </>
  );
};

export default Component01;
