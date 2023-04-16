import Image from "next/image";
import CarouselItem from "./CarouselItem";
import styles from "@/styles/Component02.module.css";

const Component02: React.FC = () => {
  return (
    <div className={styles.component02}>
      <span className={styles.component02__header}>
        ALL THE LATEST FROM AEG
      </span>
      <div className={styles.component02__carousel}>
        <CarouselItem
          imagePath="/assets/component-02/Image-01@2x.jpg"
          header="Summer Lunch Menu by Mark Best"
          details="AEG ambassador Mark Best's summer eats are guarantedd to help
            you make the most of the warmer weather and entertaining at home."
        />
        <CarouselItem
          imagePath="/assets/component-02/Image-02@2x.jpg"
          header="A Traditional Christmas Eve, Mark Best Style"
          details="One of Australia's best chefs and AEG ambassador, Mark Best,
          shares his favourite Christmas Eve menu which is sure to impress
          your guests."
        />
        <CarouselItem
          imagePath="/assets/component-02/Image-03@2x.jpg"
          header="Taking Taste Further"
          details="This exclusive cookbook gives you all the know-how you need. We`ve
          designed it to make sure you get the most out of our products - and
          the best out of your food."
        />
      </div>
    </div>
  );
};

export default Component02;
