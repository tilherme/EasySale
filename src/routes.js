import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './pages/Login';
import Register from "./pages/Register";
import Sales from "./pages/Sales";
import CadModalidade from "./pages/CadModalidade";
import CadProduto from "./pages/CadProduto";
import CadFornecedor from './pages/CadFornecedor'

export default function Routes(){
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/main" component={Sales} />
        <Route path="/cadmodalidade" component={CadModalidade} />
        <Route path="/cadastroproduto" component={CadProduto} />
        <Route path="/fornecedor" component={CadFornecedor}/>
      </Switch>
    </BrowserRouter>
  );
}