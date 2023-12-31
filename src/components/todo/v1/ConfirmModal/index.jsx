import { useContext } from "react";
import ConfirmModalStyled from "src/components/todo/v1/ConfirmModal/styles";
import axiosRequest from "src/config/axiosConfig";
import { Context } from "src/context/todoContext";

const ConfirmModal = ({ setIsShowConfirm, selectingId }) => {
  const { fetchTodo, setTodoList, isFetchingTodoList, setIsFetchingTodoList } =
    useContext(Context);

  const handleConfirmDelete = async () => {
    setIsFetchingTodoList(true);
    const response = await axiosRequest.delete(`/todos/${selectingId}`);
    if (response.status === 200) {
      const response = await fetchTodo();
      setTodoList(response);
    }
    setIsFetchingTodoList(false);
    setIsShowConfirm(false);
  };

  const handleCancelDelete = () => {
    setIsShowConfirm(false);
  };

  return (
    <ConfirmModalStyled>
      <h2>Delete Confirm</h2>
      <p>Are you sure you want to delete ?</p>
      <section className="action-buttons">
        <button
          className="button primary"
          onClick={handleConfirmDelete}
          disabled={isFetchingTodoList}
        >
          {isFetchingTodoList ? "Deleting..." : "Delete"}
        </button>
        <button
          className="button"
          onClick={handleCancelDelete}
          disabled={isFetchingTodoList}
        >
          Cancel
        </button>
      </section>
    </ConfirmModalStyled>
  );
};

export default ConfirmModal;
