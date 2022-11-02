import Navbar from './components/Sidebar/Navbar';
import './assets/js/main.js';
import './assets/css/index.css';
import {BrowserRouter, Routes , Route} from 'react-router-dom';

import Dashboard from './pages/0Dashboard/Dashboard';

import Alunos from './pages/1Alunos/Alunos';
import AddNewAluno from './pages/1Alunos/AddNewAluno';
import ViewAluno from './pages/1Alunos/ViewAluno';
import EditAluno from './pages/1Alunos/EditAluno';

import AlunosProspectados from './pages/2Alunos_Prospectados/AlunosProspectados';
import AddNewAlunoProspectado from './pages/2Alunos_Prospectados/AddNewAlunoProspectado';
import ViewAlunoProspectado from './pages/2Alunos_Prospectados/ViewAlunoProspectado';
import EditAlunoProspectado from './pages/2Alunos_Prospectados/EditAlunoProspectado';

import Professores from './pages/3Professores/Professores';
import AddNewProfessor from './pages/3Professores/AddNewProfessor';
import ViewProfessor from './pages/3Professores/AddNewProfessor';
import EditProfessor from './pages/3Professores/AddNewProfessor';

import Cursos from './pages/4Cursos/Cursos';
import AddNewCurso from './pages/4Cursos/AddNewCurso';
import ViewCurso from './pages/4Cursos/AddNewCurso';
import EditCurso from './pages/4Cursos/AddNewCurso';

import Turmas from './pages/5Turmas/Turmas';
import AddNewTurma from './pages/5Turmas/AddNewTurma';
import EditTurma from './pages/5Turmas/EditTurma';
import ViewTurma from './pages/5Turmas/ViewTurma';

import Settings from './pages/Settings';
import Logout from './pages/Logout';
import NotFoundPage from './pages/NotFound';



function App() {
  return (
    <>
     
      <BrowserRouter>
        <Navbar/>
        <Routes>
          {/* Páginas Inicial */}
          <Route path='/' exact element={<Dashboard/>}/>
          {/* Páginas Inicial */}

          {/* Páginas de Alunos */}
          <Route path='/alunos' exact element={<Alunos/>}/>
          <Route path='/add/new_aluno' exact element={<AddNewAluno/>}/>
          <Route path='/view_aluno/:matricula' exact element={<ViewAluno/>}/>
          <Route path='/edit_aluno/:matricula' exact element={<EditAluno/>}/>
          {/* Páginas de Alunos */}

          {/* Páginas de Alunos Prospectados */}
          <Route path='/alunos_prospectados' exact element={<AlunosProspectados/>}/>
          <Route path='/add/new_aluno_prospectado' exact element={<AddNewAlunoProspectado/>}/>
          <Route path='/view_lead/:idLead' exact element={<ViewAlunoProspectado/>}/>
          <Route path='/edit_lead/:idLead' exact element={<EditAlunoProspectado/>}/>
          {/* Páginas de Alunos Prospectados */}

          {/* Páginas de Professores */}
          <Route path='/professores' exact element={<Professores/>}/>
          <Route path='/add/new_professor' exact element={<AddNewProfessor/>}/>
          <Route path='/view_prof/:idProfessor' exact element={<ViewProfessor/>}/>
          <Route path='/edit_prof/:idProfessor' exact element={<EditProfessor/>}/>
          {/* Páginas de Professores */}

          {/* Páginas de Cursos */}
          <Route path='/cursos' exact element={<Cursos/>}/>
          <Route path='/add/new_curso' exact element={<AddNewCurso/>}/>
          <Route path='/view_curso/:idCurso' exact element={<ViewCurso/>}/>
          <Route path='/edit_curso/:idCurso' exact element={<EditCurso/>}/>
          {/* Páginas de Cursos */}

          {/* Páginas de Turmas */}
          <Route path='/turmas' exact element={<Turmas/>}/>
          <Route path='/add/new_turma' exact element={<AddNewTurma/>}/>
          <Route path={`/view_turma/:idTurma`} exact element={<ViewTurma/>}/>
          <Route path={`/edit_turma/:idTurma`} exact element={<EditTurma/>}/>
          {/* Páginas de Turmas */}

          {/* Páginas Gerais */}
          <Route path='/settings' exact element={<Settings/>}/>
          <Route path='/logout' exact element={<Logout/>}/>
          <Route path='*' exact element={<NotFoundPage/>}/>
          {/* Páginas Gerais */}
        </Routes>
      </BrowserRouter>
      </>
  );
}

export default App;