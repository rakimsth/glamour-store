import { BsArrowLeftSquare } from "react-icons/bs";
export default function Cart() {
  const data = ["1"];
  return <>{data.length > 0 ? <FullCart /> : <EmptyCart />}</>;
}

const FullCart = () => {
  return (
    <>
      <h1 className="text-center">Your Cart</h1>
      <div className="card">
        <div className="row">
          <div className="col-md-8 cart">
            <div className="title">
              <div className="row">
                <div className="col">
                  <h4>
                    <b>Shopping Cart</b>
                  </h4>
                </div>
                <div className="col align-self-center text-right text-muted">
                  3 items
                </div>
              </div>
            </div>
            <div className="row border-top border-bottom">
              <div className="row main align-items-center">
                <div className="col-2">
                  <img
                    className="img-fluid"
                    src="https://i.imgur.com/1GrakTl.jpg"
                  />
                </div>
                <div className="col">
                  <div className="row text-muted">Shirt</div>
                  <div className="row">Cotton T-shirt</div>
                </div>
                <div className="col">
                  <a href="#">-</a>
                  <a href="#" className="border">
                    1
                  </a>
                  <a href="#">+</a>
                </div>
                <div className="col">
                  &euro; 44.00 <span className="close">&#10005;</span>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="row main align-items-center">
                <div className="col-2">
                  <img
                    className="img-fluid"
                    src="https://i.imgur.com/ba3tvGm.jpg"
                  />
                </div>
                <div className="col">
                  <div className="row text-muted">Shirt</div>
                  <div className="row">Cotton T-shirt</div>
                </div>
                <div className="col">
                  <a href="#">-</a>
                  <a href="#" className="border">
                    1
                  </a>
                  <a href="#">+</a>
                </div>
                <div className="col">
                  &euro; 44.00 <span className="close">&#10005;</span>
                </div>
              </div>
            </div>
            <div className="row border-top border-bottom">
              <div className="row main align-items-center">
                <div className="col-2">
                  <img
                    className="img-fluid"
                    src="https://i.imgur.com/pHQ3xT3.jpg"
                  />
                </div>
                <div className="col">
                  <div className="row text-muted">Shirt</div>
                  <div className="row">Cotton T-shirt</div>
                </div>
                <div className="col">
                  <a href="#">-</a>
                  <a href="#" className="border">
                    1
                  </a>
                  <a href="#">+</a>
                </div>
                <div className="col">
                  &euro; 44.00 <span className="close">&#10005;</span>
                </div>
              </div>
            </div>
            <div className="back-to-shop">
              <a href="#">&leftarrow;</a>
              <span className="text-muted">Back to shop</span>
            </div>
          </div>
          <div className="col-md-4 summary">
            <div>
              <h5>
                <b>Summary</b>
              </h5>
            </div>
            <hr />
            <div className="row">
              <div className="col" style={{ paddingLeft: 0 }}>
                ITEMS 3
              </div>
              <div className="col text-right">&euro; 132.00</div>
            </div>
            <form>
              <p>SHIPPING</p>
              <select>
                <option className="text-muted">
                  Standard-Delivery- &euro;5.00
                </option>
              </select>
              <p>GIVE CODE</p>
              <input id="code" placeholder="Enter your code" />
            </form>
            <div
              className="row"
              style={{
                borderTop: "1px solid rgba(0,0,0,.1)",
                padding: "2vh 0",
              }}
            >
              <div className="col">TOTAL PRICE</div>
              <div className="col text-right">&euro; 137.00</div>
            </div>
            <button className="btn">CHECKOUT</button>
          </div>
        </div>
      </div>
    </>
  );
};

const EmptyCart = () => {
  return (
    <>
      <div className="p-5 mb-4 bg-body-tertiary rounded-3 text-center">
        <div className="container-fluid py-5">
          <h1 className="display-5 fw-bold">Your cart is empty</h1>
          <a className="btn btn-outline-secondary btn-lg" href="/cart">
            <BsArrowLeftSquare />
            &nbsp; Continue Shopping
          </a>
        </div>
      </div>
    </>
  );
};
