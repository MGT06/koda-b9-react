import Header from "../components/Header";
import TableToDoList from "../components/TableToDoList";
import ToDoListForm from "../components/ToDoListForm";

function ToDoList() {
  return (
    <>
      <Header />
      <section className=" grid grid-cols-2 gap-3 px-10 py-5 ">
        <ToDoListForm />
        <TableToDoList />
      </section>
    </>
  );
}

export default ToDoList;
