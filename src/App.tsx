import React, { useState } from 'react';
import './App.css';
import Accordion from './components/Accordion/Accordion';
import { UncontrolledAccordion } from './components/UncontrolledAccordion/UncontrolledAccordion';
import { OnOff } from './components/OnOff/OnOff';
import { RaitingValueType, Rating } from './components/Ratings/Rating';
import { UncontrolledRating } from './components/UncontrolledRatings/UncontrolledRating';
import { title } from 'process';
import { Select } from './components/Select/Select';

function App() {
  let [selectValue, setSelectValue] = useState(undefined)

  const onChange = (title: any) => {
    setSelectValue(title)
  }

  return (
    <div className="App">
      <Select onChange={onChange} value={selectValue} items={[
        { title: 'Ural', value: 1 },
        { title: 'Maxim', value: 2 },
        { title: 'Vova', value: 3 },
      ]} />
    </div>
  );
}

export default App;
