/* eslint-disable react/prop-types */
import styled from 'styled-components/macro';

export default function Weekly({ checkedSchedule, setDay, setDate, setTime }) {
  const handleSelectDay = (e) => {
    setDay(e.target.value);
  };

  const handleDate = (e) => {
    setDate(e.target.value);
  };

  const handleTime = (e) => {
    setTime(e.target.value);
  };
  if (!checkedSchedule) return;
  if (checkedSchedule === 'specific')
    return (
      <InputWrapper>
        <Label>Date</Label>
        <Input type="date" onChange={handleDate} />
        <Label>at</Label>
        <Input type="time" onChange={handleTime} value={undefined} />
      </InputWrapper>
    );
  if (checkedSchedule === 'daily')
    return (
      <InputWrapper>
        <Label>Everyday at</Label>
        <Input type="time" value={undefined} onChange={handleTime} />
      </InputWrapper>
    );
  if (checkedSchedule === 'weekly')
    return (
      <InputWrapper>
        <Label>Every</Label>
        <Select onChange={handleSelectDay}>
          <Option value="Monday">Monday</Option>
          <Option value="Tuesday">Tuesday</Option>
          <Option value="Wednesday">Wednesday</Option>
          <Option value="Thursday">Thursday</Option>
          <Option value="Friday">Friday</Option>
        </Select>
        <Label>At</Label>
        <Input type="time" value={undefined} />
      </InputWrapper>
    );
}

const InputWrapper = styled.div`
  display: flex;
  gap: 16px;
  align-items: baseline;
`;

const Label = styled.label``;

const Input = styled.input``;

const Select = styled.select``;

const Option = styled.option``;

// on Inputs with type="time" the value is set to undefined, because of that err: A component is changing an uncontrolled input of type text to be controlled.
