import './babel'
import * as $ from 'jquery'
import Post from '@models/Post'
import json from '@assets/json'
import '@/styles/style.css'
import '@/styles/less.less'
import '@/styles/scss.scss'
import logo from '@assets/webpack-logo'
import xml from '@assets/data.xml'
import csv from '@assets/data.csv'
import React from 'react'
import {render} from 'react-dom'

const post = new Post('Webpack Post Title', logo)

const App = () => (
  <div className="container">
    <h1>Webpack</h1>
    <div className="logo"/>
    <hr/>
    <pre>
      {post.toString()}
    </pre>
    <hr/>
    <div className="box">
      <h2>Less</h2>
    </div>
    <div className="card">
      <h2>scss</h2>
    </div>
  </div>
)
render(
  <App/>
  , document.getElementById('app'))