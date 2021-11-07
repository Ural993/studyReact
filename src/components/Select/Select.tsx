import React from 'react';

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
    <div>
      <div onClick={props.onChangeCollapsed}>{props.value}</div>
      {props.collapsed && props.items.map(i => {
        return <div onClick={() => props.onChange(i.title)}>{i.title}</div>
      })}
    </div>
  )
}



