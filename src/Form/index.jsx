import {currencies} from '../currencies';
import {useState} from 'react';
import Clock from './Clock';
import Result from './Result';
import Label from './Label';
import {StyledForm, Fieldset, Legend, Field, Option, Wrapper, Button, StyledInfo} from './styled';

export const Form = () => {
  const [initialCurrency, setInitCurrency] = useState('PLN');
  const [convertedCurrency, setConvertedCurrency] = useState('USD');
  const [amount, setAmount] = useState('');
  const [hideResult, setHideResult] = useState(true);
  const [resultValue, setResultValue] = useState(0)

  const onFormSubmit = (event) => {
    event.preventDefault();

    setResultValue(
      ( 
      (amount * currencies.find((currency) => currency.name === initialCurrency).value) /
      currencies.find((currency) => currency.name === convertedCurrency).value
    ).toFixed(2)
      );
    setHideResult(false);
  };

  const resetForm = (event) => {
    event.preventDefault();
    setAmount("");
    setInitCurrency('PLN');
    setConvertedCurrency('USD');
    setHideResult(true);
  }

  return(
    <StyledForm onSubmit={onFormSubmit}>
    <Fieldset>
    <Legend>Currency office</Legend>
      <Clock />
      <Label
        text="Select currency"
        content={
          <Field
           as="select"
            value={initialCurrency}
            onChange={({target}) => setInitCurrency(target.value)}
            >
            {currencies.map((currency) => (
              <Option key={currency.name}>{currency.name}</Option>
            ))}
          </Field>
        }
        />
      <Label 
        text='Enter a value'
        content={
          <Field 
           value={amount}
            onChange={({target}) => setAmount(target.value)}
            placeholder='Enter the amount'
            type="number"
            required
            step="0.01"
            
            />
        }
        />
      <Label
        text="Select currency"
        content={
          <Field
           as="select"
            value={convertedCurrency}
            $defaultValue="USD"
            onChange={({target}) => setConvertedCurrency(target.value)}
            >
            {currencies.map((currency) => (
              <Option key={currency.name}>{currency.name}</Option>
            ))}
          </Field>
        }
        />
      <Wrapper>
      <Button>Recalculate</Button>
        <Button onClick={resetForm}>Clear</Button>
      </Wrapper>
      
      <StyledInfo>Fields marked with * are required.</StyledInfo>
      
    </Fieldset>
      <Result
        hideResult={hideResult}
        resultValue={resultValue}
        convertedCurrency={convertedCurrency}
        />
    </StyledForm>
  )
  
}