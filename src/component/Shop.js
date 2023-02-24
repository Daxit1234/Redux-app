import React from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Deposite, Withdraw } from '../state/action-creator'
import {actionCreator} from '../state/reducer/index'

function Shop() {
    const dispatch=useDispatch()
    const[withdraw,deposite]=bindActionCreators(actionCreator.dispatch)
  return (
    <div className='container'>
        <h3>Deposite Withdrow Money</h3>
      <button className='btn btn-primary mx-2'onClick={()=>{Withdraw(100)}}>-</button>
      Add cart
      <button className='btn btn-primary mx-2' onClick={()=>{Deposite(100)}}>+</button>
    </div>
  )
}

export default Shop
