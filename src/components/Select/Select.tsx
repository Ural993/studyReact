import React from 'react';
import s from './Select.module.css'

type ItemType = {
  title: string
  value: any
}

export type SelectPropsType = {
  value: any
  onChange: (title: any) => void
  items: ItemType[]
  collapsed: boolean
  onChangeCollapsed: () => void

}


export function Select(props: SelectPropsType) {


  return (
    <div className={s.select}>
      <div className={s.title} onClick={props.onChangeCollapsed}>{props.value}</div>
      {props.collapsed && props.items.map(i => {
        return <div className={s.items} onClick={() => props.onChange(i.title)}>{i.title}</div>
      })}
    </div>
  )
}



