import React from 'react'
import './List.scss'
import {ITask} from "../../interfaces"


interface IList {
  tasks: ITask[],

  onDone(id: number): void,

  onDelete(id: number): void
}

const List: React.FC<IList> = ({tasks, onDone, onDelete}) => {
  const doubleClickHandler = (id: number) => {
    onDelete(id)
  }

  const clickHandler = (id: number) => {
    onDone(id)
  }

  return (
    <div className='list'>
      {tasks.map(task => {
          const classes: string[] = ['list__item']
          if (task.done) {
            classes.push('list__item--done')
          }
          return (
            <div
              className={classes.join(' ')}
              key={task.id}
              onDoubleClick={() => doubleClickHandler(task.id)}
              onClick={() => clickHandler(task.id)}
            >
              <h2>{task.title}</h2>
            </div>
          )
        }
      )}
    </div>
  )
}


export default List
