import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button, Card } from "semantic-ui-react";
import ProductService from "../services/productService";

export default function ProductDetail() {
  // useParams() parametreleri obje olarak donuyor. Bizde Destructuring yaparak id yi aliyoruz.
  let { id } = useParams();

  // Destructuring
  const [product, setProduct] = useState({});

  // component yuklendiginde yapilmasini istedigim kod. Angular karsiligi Load()
  // fonksiyonel komponentlerde kullanilir.
  useEffect(() => {
    let productService = new ProductService();
    productService.getByProductById(id).then((result) => {
      setProduct(result.data.data);
    });
  }, []);

  return (
    <div>
      <Card.Group>
        <Card fluid>
          <Card.Content>
            <Card.Header>{product.productName}</Card.Header>
            {/* <Card.Header>{product.category.categoryName}</Card.Header> */}
            <Card.Header>{product.unitPrice}</Card.Header>
            <Card.Header>{product.quantityPerUnit}</Card.Header>
          </Card.Content>
          <Card.Content extra>
            <div className="ui two buttons">
              <Button basic color="green">
                Approve
              </Button>
              <Button basic color="red">
                Decline
              </Button>
            </div>
          </Card.Content>
        </Card>
      </Card.Group>
    </div>
  );
}
