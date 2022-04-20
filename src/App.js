/* eslint-disable eqeqeq */
import { useState } from 'react';
import styled from 'styled-components/macro';
import axios from 'axios';
import Weekly from './components/weekly';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [checkedFormat, setCheckedFormat] = useState('');
  const [checkedSchedule, setCheckedSchedule] = useState('');
  const [day, setDay] = useState('Monday');
  const [time, setTime] = useState('');
  const [date, setDate] = useState('');

  const disabledButton =
    name === '' || email === '' || checkedFormat === '' || checkedSchedule === '' || time === '' || date === '';

  const handleFormat = (e) => {
    if (e.target.checked) {
      setCheckedFormat(e.target.value);
    }
  };

  const handleSchedule = (e) => {
    if (e.target.checked) {
      setCheckedSchedule(e.target.value);
    }
  };

  const reportData = {
    name,
    email,
    checkedFormat,
    checkedSchedule,
    day: day || null,
    time: time || null,
    date: date || null
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('https://jsonplaceholder.typicode.com/posts', reportData).then((response) => {
      alert(response.status);
    });
  };

  console.log(time);
  return (
    <Wrapper>
      <FormWrapper>
        <FormHeader>
          <HeaderTitle>Export Report</HeaderTitle>
        </FormHeader>
        <Form onSubmit={handleSubmit}>
          <InputsWrapper>
            <Label htmlFor="reportName">Report name</Label>
            <Input
              type="text"
              placeholder="Shareablee Report"
              name="reportName"
              id="reportName"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </InputsWrapper>
          <InputsWrapper>
            <Label>Format</Label>
            <Input
              type="radio"
              name="excel"
              id="excel"
              value="excel"
              onChange={handleFormat}
              checked={checkedFormat === 'excel'}
            />
            <Label htmlFor="excel">Excel</Label>
            <Input
              type="radio"
              name="csv"
              id="csv"
              value="csv"
              onChange={handleFormat}
              checked={checkedFormat === 'csv'}
            />
            <Label htmlFor="csv">Csv</Label>
          </InputsWrapper>
          <InputsWrapper>
            <Label>E-mail to</Label>
            <Input
              type="email"
              placeholder="client@company.com"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </InputsWrapper>
          <InputsWrapper style={{ marginBottom: '12px' }}>
            <Label>Schedule</Label>
            <Input
              type="radio"
              name="repeat"
              id="repeat"
              value="repeat"
              onChange={handleSchedule}
              checked={checkedSchedule === 'repeat'}
            />
            <Label htmlFor="repeat">No Repeat</Label>
            <Input
              type="radio"
              name="specific"
              id="specific"
              value="specific"
              onChange={handleSchedule}
              checked={checkedSchedule === 'specific'}
            />
            <Label htmlFor="specific">Specific Date</Label>
            <Input
              type="radio"
              name="daily"
              id="daily"
              value="daily"
              onChange={handleSchedule}
              checked={checkedSchedule === 'daily'}
            />
            <Label htmlFor="daily">Daily</Label>
            <Input
              type="radio"
              name="weekly"
              id="weekly"
              value="weekly"
              onChange={handleSchedule}
              checked={checkedSchedule === 'weekly'}
            />
            <Label htmlFor="weekly">Weekly</Label>
          </InputsWrapper>
          <Weekly
            checkedSchedule={checkedSchedule}
            day={day}
            setDay={setDay}
            setTime={setTime}
            date={date}
            setDate={setDate}
          />
          <FormFooter>
            <ButtonsWrapper>
              <CancelButton type="button">Cancel</CancelButton>
              <SubmitButton type="submit" disabled={disabledButton}>
                OK
              </SubmitButton>
            </ButtonsWrapper>
          </FormFooter>
        </Form>
      </FormWrapper>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
`;

const FormWrapper = styled.div`
  border: 2px solid gray;
`;

const FormHeader = styled.div`
  border-bottom: 2px solid gray;
`;

const HeaderTitle = styled.h4`
  margin-left: 32px;
  font-size: 1.25rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 32px;
  gap: 16px;
`;

const InputsWrapper = styled.div``;

const Label = styled.label``;

const Input = styled.input`
  margin-left: 16px;
`;

const FormFooter = styled.div`
  border-top: 2px solid gray;
  margin-left: -32px;
  margin-right: -32px;
  display: flex;
  justify-content: flex-end;
  padding: 16px 0px;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  margin-right: 32px;
  gap: 16px;
  margin-bottom: -32px;
`;

const CancelButton = styled.button`
  width: 100px;
  cursor: pointer;
`;

const SubmitButton = styled.button`
  width: 100px;
  cursor: pointer;
`;
