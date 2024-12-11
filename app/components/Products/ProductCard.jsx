import Image from "next/image";
import '../Products/product.css'

const ProductCard = ({ product }) => {
    return (
      <div className="card">
        <img src={product.image} alt={product.title} />
        <h2>{product.title}</h2>
        <div className="desc">
        <p>{product.description.split(' ').slice(0, 8).join(' ')}...</p>
        <Image src="/heart.png" alt="heart" width="25" height="25" />

        </div>
      </div>
    );
  };
  
  export default ProductCard;
  