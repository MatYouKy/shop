import { FC, FormEvent, useState, useRef, memo } from 'react';
import { Input } from '../../../UI/Input/Input';
import Button from '../../../UI/Button/Button';
import classes from './ProductItem.module.scss';

const ProductItemForm: FC<{ id: string; price: string; onAddToProduct: (number: number) => void }> = ({
  id,
  price,
  onAddToProduct
}) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: FormEvent) => {
    event.preventDefault();
    const enteredAmount = amountInputRef.current!.value;
    const enteredAmountNumber = +enteredAmount!;

    if (enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5) {
      setAmountIsValid(false);
      return;
    }

    onAddToProduct(enteredAmountNumber);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.price}>{price}</div>
      <Input
        ref={amountInputRef}
        extraClassName={classes.input}
        label='Amount'
        input={{
          id: `amount-${id}`,
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1'
        }}
      />
      <Button name='Add' type='Submit' extraClassName={classes.button}/>
      {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
    </form>
  );
};

export default memo(ProductItemForm);
