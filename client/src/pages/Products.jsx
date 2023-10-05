import { useDispatch } from "react-redux";
import { addToCart } from "../slices/cartSlice";

export default function Products() {
  const dispatch = useDispatch();
  const products = [
    {
      id: 1,
      name: "Apple iPhone XS (Silver, 64 GB)",
      image: "https://i.imgur.com/KFojDGa.jpg",
      quantity: "1",
      price: "99000",
    },
    {
      id: 2,
      name: "Apple iPhone XS Max (Gold, 64 GB)",
      image: "https://i.imgur.com/KFojDGa.jpg",
      quantity: "1",
      price: "109900",
    },

    {
      id: 3,
      name: "OnePlus 7 Pro (Almond, 256 GB)",
      image: "https://i.imgur.com/6IUbEME.jpg",
      quantity: "1",
      price: "52999",
    },
  ];
  return (
    <div>
      <div className="row text-center text-white mb-5">
        <div className="col-lg-7 mx-auto">
          <h1 className="display-4">Product List</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-8 mx-auto">
          <ul className="list-group shadow">
            {products.length > 0 ? (
              products.map((product, index) => {
                return (
                  <div key={index}>
                    <li className="list-group-item">
                      <div className="media align-items-lg-center flex-column flex-lg-row p-3">
                        <div className="media-body order-2 order-lg-1">
                          <h5 className="mt-0 font-weight-bold mb-2">
                            {product?.name}
                          </h5>
                          <p className="font-italic text-muted mb-0 small">
                            64 GB ROM | 14.73 cm (5.8 inch) Super Retina HD
                            Display 12MP + 12MP | 7MP Front Camera A12 Bionic
                            Chip Processor
                          </p>
                          <div className="d-flex align-items-center justify-content-between mt-1">
                            <h6 className="font-weight-bold my-2">
                              Rs {product.price}
                            </h6>
                            <button
                              className="btn btn-success"
                              onClick={() =>
                                dispatch(
                                  addToCart({
                                    id: new Date().valueOf(),
                                    name: product?.name || "",
                                    image: product?.image || "'",
                                    price: product?.price || "",
                                    quantity: product?.quantity || 1,
                                  })
                                )
                              }
                            >
                              Add to Cart
                            </button>
                          </div>
                        </div>
                        <img
                          src={product?.image}
                          alt="Generic placeholder image"
                          width="200"
                          className="ml-lg-5 order-1 order-lg-2"
                        />
                      </div>
                    </li>
                  </div>
                );
              })
            ) : (
              <>No Product</>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
