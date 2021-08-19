import React from 'react';

import { Switch } from 'react-router-dom';

import SignIn from '../pages/SignIn';
import Dashboard from '../pages/Dashboard';
import Cursos from '../pages/Cursos';
import CriarCursos from '../pages/CriarCursos';
import Associado from '../pages/Associado';
import AlterarAssociado from '../pages/AlterarAssociado';
import AlterarCurso from '../pages/AlterarCurso';

import Route from './Route';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />

    <Route path="/dashboard" isPrivate component={Dashboard} />
    <Route path="/cursos" exact isPrivate component={Cursos} />
    <Route path="/cursos/criar" isPrivate component={CriarCursos} />
    <Route path="/cursos/alterar/:id" isPrivate component={AlterarCurso} />

    <Route path="/associados" isPrivate exact component={Associado} />
    <Route path="/associados/alterar/:id" isPrivate component={AlterarAssociado} />

  </Switch>
);

export default Routes;
