import React, { useState } from 'react';



type AccordioPropsType = {
  titleValue: string
}


export function UncontrolledAccordion(props: AccordioPropsType) {

  let [collapsed, setcollapsed] = useState(false)

  return (
    <div>
      <AccordionTitle titleValue={props.titleValue} onClick={() => setcollapsed(!collapsed)} />
      {!collapsed && <AccordionBody />}
    </div>
  )
}



type AccordioTitlePropsType = {
  titleValue: string
  onClick: () => void
}
export function AccordionTitle(props: AccordioTitlePropsType) {
  return (
    <div>
      <h3 onClick={() => props.onClick()}>{props.titleValue}</h3>
    </div>
  )
}



export function AccordionBody() {
  return (
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>

  )
}