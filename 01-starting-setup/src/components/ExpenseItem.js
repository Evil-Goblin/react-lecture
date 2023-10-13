import './ExpenseItem.css';

function ExpenseItem() {
  return (
    // <h2>Expense item!</h2>
    // root 요소는 단 하나 뿐이어야한다.
    // jsx 에서는 class 대신 className을 사용한다.
    <div className="expense-item">
      <div>March 28th 2021</div>
      <div className="expense-item__description">
        <h2>Car Insurance</h2>
        <div className="expense-item__price">$294.67</div>
      </div>
    </div>
    // <div>이 div를 통해 root요소가 둘이 됨으로 에러가 발생한다.</div>
  );
}

export default ExpenseItem;