

const AddProductForm = ({data}) => {


    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Category</th>
              <th>Name</th>
              <th>Price</th>
              <th>Qty</th>
              <th>Selling Price</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => {
              let { Id, Category, Name, Price, Qty, SellPrice } = item;
              return (
           
                  <tr key={Id}>
                    <td>{Id}</td>
                    <td>{Category}</td>
                    <td>{Name}</td>
                    <td>{Price}</td>
                    <td>{Qty}</td>
                    <td>{SellPrice}</td>
                  </tr>
           
              );
            })}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default AddProductForm;
  
  