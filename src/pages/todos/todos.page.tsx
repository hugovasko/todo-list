import React from "react";

const Todos: React.FC<TodosProps> = () => {
    // #region render
  return (
    <div className="text-3xl font-bold underline m-6">
      <p>Hello React!</p>
      <p>What's up?</p>
    </div>
  );
    // #endregion
};

interface TodosProps {}

export default Todos;