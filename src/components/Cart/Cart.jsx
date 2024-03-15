

const Cart = ({cart}) => {
    return (
        <div className="bg-sky-200 my-6 p-4 rounded-sm">
           <div> <h1>cart: {cart.length}</h1></div>
            <div className="divider"></div>
           <div><h2>Course Name</h2>
            <div>
        <ul>
            {
                cart.map((c)=> <li 
                key={c.id} 
                >{c.name}</li>)
            }
        </ul>
            </div>
           </div>
          

           <div className="divider"></div>
           <div>Total Credit hour:{cart.reduce((acc, curr) => acc + curr.credit, 0)}</div>
           <div className="divider"></div>
         
           <div>Total Price:{cart.reduce((acc, curr) => acc + curr.price, 0)}</div>
        </div>
    );
};

export default Cart;