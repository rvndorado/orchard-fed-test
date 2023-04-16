import Image from "next/image";
import styles from "@/styles/Component02.module.css";

interface ICarouselItem {
  imagePath: string;
  header: string;
  details: string;
}

const CarouselItem: React.FC<ICarouselItem> = ({
  imagePath,
  header,
  details,
}) => {
  return (
    <div className={styles.component02__carouselItem}>
      <div className={styles.component02__carouselItem_image}>
        <Image
          src={imagePath}
          alt="Component2-Image01"
          style={{ verticalAlign: "bottom" }}
          width={0}
          height={0}
          sizes="100vw"
          className={styles.component02__carouselItem_image}
          priority
        />
      </div>
      <span className={styles.component02__carouselItem_header}>{header}</span>
      <p className={styles.component02__carouselItem_details}>{details}</p>
      <span className={styles.component02__carouselItem_readMore}>
        READ MORE
      </span>
    </div>
  );
};

export default CarouselItem;
