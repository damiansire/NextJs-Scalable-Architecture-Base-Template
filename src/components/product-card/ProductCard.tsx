import styles from './ProductCardTemplate.module.css';

export interface IProductCardTemplate {}

const ProductCardTemplate: React.FC<IProductCardTemplate> = () => {
  return <div className={styles.container}>Hello world!</div>;
};

export default ProductCardTemplate;
