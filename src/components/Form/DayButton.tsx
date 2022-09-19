import { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  labelDay: string
}

export function DayButton(props:ButtonProps) {
  return (
    <button      
      {...props}
      className='w-8 h-8 rounded bg-zinc-900'      
    >
      {props.labelDay}      
    </button>
  )


}