import { useDispatch, useSelector } from "react-redux";
import { ORDER_BY, ORDER_FLOW, clasifyType, orderType } from "../helpers";
import { OrderBy } from "./OrderBy";
import { orderAction } from "../redux/actions";


export const OrderComponent = () => {
  const orderFlow = useSelector((state)=>state.orderFlow)
  const orderBy = useSelector((state)=>state.orderBy)
  
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const data = {
      [event.target.name]: event.target.value,
    };
    dispatch(orderAction(data));
  };

  return (
    <div style={{color:"black"}}>
      <OrderBy
        selectName={ORDER_BY}
        title={"Order by"}
        placeholder={"<--- Select --->"}
        data={clasifyType}
        handleChange={handleChange}
        defaultValue={orderBy}
        

      />
      <OrderBy
        selectName={ORDER_FLOW}
        title={"Asc/Desc"}
        placeholder={"<--- Select --->"}
        data={orderType}
        handleChange={handleChange}
        defaultValue={orderFlow}
      />
    </div>
  );
};
