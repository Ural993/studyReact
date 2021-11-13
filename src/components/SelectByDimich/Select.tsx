import React, { useState, KeyboardEvent, useEffect } from 'react';
import s from './Select.module.css'

type ItemType = {
  title: string
  value: any
}

export type SelectPropsType = {
  value?: any
  onChange: (title: any) => void
  items: ItemType[]
}


export function Select(props: SelectPropsType) {
  const [active, setActive] = useState(false)
  const [hoveredElementValue, setHoveredElementValue] = useState(props.value)
  const selectedItem = props.items.find(i => i.value === props.value)
  const hoveredItem = props.items.find(i => i.value === hoveredElementValue)

  useEffect(() => {
    setHoveredElementValue(props.value)
  }, [props.value])

  const toggleItems = () => {
    setActive(!active)
  }
  const onItemClick = (value: any) => {
    props.onChange(value)
    toggleItems()
  }
  const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
    debugger
    if (e.key === "ArrowUp" || e.key === "ArrowDown") {
      for (let i = 0; i < props.items.length; i++) {
        if (props.items[i].value === hoveredElementValue) {
          let pretendentElement = e.key === "ArrowDown" ? props.items[i + 1] : props.items[i - 1]
          if (pretendentElement) {
            props.onChange(pretendentElement.value)
          }
          break;

        }
      }
    }
  }
  return (
    <div className={s.select}>
      <div className={s.title}
        onClick={toggleItems}
        onKeyUp={onKeyUp}
        tabIndex={0}
      >

        {selectedItem && selectedItem.title}</div>
      {props.items.map(i => {
        return active && <div key={i.value}
          className={s.items + ' ' + (hoveredItem === i ? s.selected : '')}
          onClick={() => onItemClick(i.value)}
          onMouseEnter={() => setHoveredElementValue(i.value)}
        >{i.title}</div>
      }
      )
      }
    </div>
  )
}



