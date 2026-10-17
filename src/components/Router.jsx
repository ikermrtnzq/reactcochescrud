import React, { Component } from 'react'
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom'
import Menu from './Menu'
import Home from './Home'
import Update from './Update'
import Insert from './Insert'
import Delete from './Delete'

export default class Router extends Component {

    render() {
        function UpdateElement() {
            let id = useParams();
            return(<Update id={id}/>)

        }
        function DeleteElement() {
            let id = useParams();
            return(<Delete id={id}/>)

        }
        
        return (
        <div>
            <BrowserRouter>
                <Menu/>
                <Routes>
                    <Route path='/' element ={<Home/>}></Route>
                    <Route path='/update/:id' element ={<UpdateElement/>}></Route>
                    <Route path='/insert' element ={<Insert/>}></Route>
                    <Route path='/delete/:id' element ={<DeleteElement/>}></Route>

                </Routes>
            </BrowserRouter>
        </div>
        )
    }
}
