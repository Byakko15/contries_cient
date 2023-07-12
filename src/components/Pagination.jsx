import { nextPageAction, prevPageAction } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";

export const Pagination = () => {
  const dispatch = useDispatch();
  const totalPages = useSelector((state) => state.totalPages);
  const currentPage = useSelector((state) => state.currentPage);

  const handleClick = (event) => {
    const shoot = event.target.name;
    if (shoot === "next") {
      dispatch(nextPageAction());
    } else {
      dispatch(prevPageAction());
    }
  };

  return (
    <div className="paginationComponent">
      {currentPage > 1 && (
        <button 
          name="prev" 
          onClick={handleClick}
          className="prev-page pagination-common"
        >
          ⬅️
        </button>
      )}
      <span>{`${currentPage} of ${totalPages}`}</span>
      {currentPage < totalPages && (
        <button 
          name="next" 
          onClick={handleClick}
          className="next-page pagination-common"
        >
          ➡️
        </button>
      )}
    </div>
  );
};
