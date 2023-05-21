export function Payment() {
  return (
    <div>
      <form>
        <div>
          <input type="radio" name="payment" value="q-pay" className="bg-black" />
          <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px">
            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g transform="translate(2.000000, 2.000000)">
                <circle className="radio-outline" stroke="currentColor" stroke-width="1.5" cx="10" cy="10" r="9.25"></circle>
                <circle className="radio-fill" fill="currentColor" cx="10" cy="10" r="5"></circle>
              </g>
            </g>
          </svg>
          <label htmlFor="q-pay">Q-Pay</label>
        </div>
        <div>
          <input type="radio" name="payment" value="dansaar shiljuuleh" />
          <label htmlFor="dansaar">Dansaar shiljuuleh</label>
        </div>
        <div>
          <input type="radio" name="payment" value="cart" />
          <label htmlFor="dansaar">Cart</label>
        </div>
      </form>
    </div>
  );
}
