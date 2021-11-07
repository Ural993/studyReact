import React from 'react';

type ItemType = {
  title: string
  value: any
}

export type AccordioPropsType = {
  titleValue: string
  collapsed: boolean
  onChange: () => void
  onClick: (value: any) => void
  /**
   * Elements that showed when accordion will be opened (not collapsed) 
   */
  items: ItemType[]
}


export function Accordion(props: AccordioPropsType) {
  return (
    <div>
      <AccordionTitle titleValue={props.titleValue} onChange={() => props.onChange()} />
      {!props.collapsed && <AccordionBody items={props.items} onClick={props.onClick} />}
    </div>
  )
}
export default Accordion;


type AccordioTitlePropsType = {
  titleValue: string
  onChange: () => void
}
export function AccordionTitle(props: AccordioTitlePropsType) {
  return (
    <div>
      <h3 onClick={(e) => props.onChange()}>{props.titleValue}</h3>
    </div>
  )
}

type AccordionBodyPropsType = {
  items: ItemType[]
  onClick: (value: any) => void
}

export function AccordionBody(props: AccordionBodyPropsType) {
  return (
    <ul>
      {props.items.map(i => {
        return <li key={i.value} onClick={() => props.onClick(i.value)}>{i.title}</li>
      })}
    </ul>

  )
}