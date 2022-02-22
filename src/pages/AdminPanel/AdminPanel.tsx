import { FC, FormEvent, useRef, useState, ChangeEvent, useEffect } from 'react';
import { NewProductValidate } from '../../models/product.model';
import Shadow from '../../UI/Shadow/Shadow';
import Button from '../../UI/Button/Button';
import { Input, TextArea } from '../../UI/Input/Input';
import { usePostProduct } from '../../actions/postProduct';
import classes from './AdminPanel.module.scss';
import { LoaderSpinner } from '../../UI/LoaderSpinner/LoaderSpinner';

const validLength = (value: string): boolean => value.trim().length >= 3;
const noEqual = (value: number): boolean => value !== 0;

const AdminPanel: FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [image, setImage] = useState<any>(null);
  const [formValidity, setFormValidity] = useState<NewProductValidate>({
    productNameIsValid: true,
    productDescriptionIsValid: true,
    productPriceIsValid: true
  });

  const productNameRef = useRef<HTMLInputElement>(null);
  const productDescriptionRef = useRef<HTMLTextAreaElement>(null);
  const productPriceRef = useRef<HTMLInputElement>(null);
  const productFileRef = useRef<HTMLInputElement>(null);

  const { error, progress, postFileHandler } = usePostProduct();

  const cancelHandler = () => {
    productNameRef.current!.value = '';
    productDescriptionRef.current!.value = '';
    productPriceRef.current!.value = '0';
    productFileRef.current!.value = '';
    setImage(null);
  };

  const addNewProductHandler = async (event: FormEvent) => {
    event.preventDefault();

    const name = productNameRef.current!.value;
    const description = productDescriptionRef.current!.value;
    const price = parseInt(productPriceRef.current!.value, 10);

    const productNameIsValid = validLength(name);
    const productDescriptionIsValid = validLength(description);
    const productPriceIsValid = noEqual(price);
    const img = image?.name ? image.name : 'undefined';

    setFormValidity({
      productNameIsValid,
      productDescriptionIsValid,
      productPriceIsValid
    });

    const formIsValid = productNameIsValid && productDescriptionIsValid && productPriceIsValid;

    if (!formIsValid) return;

    setIsLoading(true);

    const product = {
      name,
      description,
      price,
      img
    };

    postFileHandler(`products/${img}`, image, product);

    cancelHandler();
  };

  const fileHandler = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) setImage(event.target.files[0]);
  };

  useEffect(() => {
    if (progress === 100) setIsLoading(false);
  }, [progress]);

  return (
    <article className={classes.admin}>
      <Shadow>
        <section className={classes.container}>
          <div className={classes.heading}>
            <h1>admin panel</h1>
          </div>
          <div className={classes['add-section']}>
            <h3>Add Product</h3>
            <p className={classes.error}>{error}</p>
            {progress === 100 && error === '' && <p className={classes.done}>Done !</p>}
            <form onSubmit={addNewProductHandler}>
              <Input
                ref={productNameRef}
                label='Product Name'
                hasError={!formValidity.productNameIsValid}
                textError='Name do not be empty!'
                input={{
                  id: 'newProductName',
                  type: 'text'
                }}
              />
              <TextArea
                ref={productDescriptionRef}
                label='description'
                hasError={!formValidity.productDescriptionIsValid}
                textError='Description do not be empty!'
                id='newProductDescription'/>

              <Input
                ref={productPriceRef}
                label='price'
                hasError={!formValidity.productPriceIsValid}
                textError='Price cannot be equal 0!'
                input={{
                  id: 'newProductPrice',
                  type: 'number',
                  defaultValue: 0,
                  min: '0'
                }}
              />
              <input type='file' onChange={fileHandler} ref={productFileRef} />
              <div className={classes.action}>
                {isLoading && <LoaderSpinner />}
                {!isLoading && (
                  <>
                    <Button extraClassName={classes.button} type='button' name='cancel' onClick={cancelHandler} />
                    <Button extraClassName={classes.button} type='submit' name='Add' />
                  </>
                )}
              </div>
            </form>
          </div>
        </section>
      </Shadow>
    </article>
  );
};

export default AdminPanel;
