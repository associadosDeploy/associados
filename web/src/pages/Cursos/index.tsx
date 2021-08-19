import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

import { FaSpinner, FaGraduationCap, FaUserTie } from 'react-icons/fa';

import Menu from '../../components/Menu';
import Loading from '../../components/Loading';
import api from '../../services/api';

import { Container, Content, Title, ContentContainer, Cards, Card } from './styles';

interface Transaction {
  id: string;
  user_id: string;
  link: string;
  title: string;
  description: string;
  avatar: string;
  urlAvatar: string;
}

const Cursos: React.FC = () => {
  const [courses, setCourses] = useState<Transaction[]>([]);

  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadCourses(): Promise<void> {
      await api.get('/courses').then(response => {
        setCourses(response.data);
      });

      // setLoading(false);
    }

    loadCourses();
  }, []);


  return (
    <Container>
      <Menu />
      <Content>
        <ContentContainer>

          <Title>
            <h1>
              <FaGraduationCap size={40} />
              <span>Gerenciamento de Cursos</span>
            </h1>

            <Link to="cursos/criar">
              Criar Cursos
            </Link>

          </Title>

          <Cards>
            {courses.map(course => (

              <Link to={`cursos/alterar/${course.id}`}>
                <Card>
                  {course.urlAvatar && (
                    <img src={course.urlAvatar} alt="foto" />
                  )}

                  {!course.urlAvatar && (
                    <span>{course.title}</span>
                  )}
                </Card>
              </Link>

            ))}

          </Cards>
        </ContentContainer>

        {/* {loading ?
          (
            <Loading>
              <h1>
                Carregando
              </h1>
              <FaSpinner size={25} />
            </Loading>
          ) :
          (
            <>
              <Title>
                <div>
                  <h1>Carteira Magaventures</h1>
                </div>

                <div>
                  <Link to="/startup/create">Criar Startup</Link>
                </div>
              </Title>
              <Startups>
                {
                  startups.map(startup => (
                    <Link to={`/startup/${startup.id}`} key={startup.id}>
                      <Startup>
                        {
                          startup.urlAvatar
                            ? (
                              <div>
                                <img src={startup.urlAvatar} alt="logo" />
                              </div>
                            ) :
                            (<h1>{startup.name}</h1>)
                        }
                      </Startup>
                    </Link>
                  ))
                }
              </Startups>
            </>
          )} */}
      </Content>
    </Container>
  );
};

export default Cursos;
