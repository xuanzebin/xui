import ReactDOM from 'react-dom'
import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import IconExample from './lib/icon/Icon.examle'
import ButtonExample from './lib/Button.example'

const app = document.querySelector('#root')
ReactDOM.render(
    <Router>
        <div>
            <header>
                <h1>XUI</h1>
            </header>
            <div>
                <aside>
                    <ul>
                        <li><Link to='/Icon'>Icon</Link></li>
                        <li><Link to='/Button'>Button</Link></li>
                    </ul>
                </aside>
                <main>
                    <Route path='/Icon' component={IconExample}/>
                    <Route path='/Button' component={ButtonExample} />
                </main>
            </div>
        </div>
    </Router>
, app)