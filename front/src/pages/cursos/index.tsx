import React from 'react';

import MenuBar from '../../components/MenuBar';

import Title from '../../components/Title';
import Footer from '../../components/Footer';

import { MaxContent, Courses, ContentContainer } from '../../styles/styled/Cursos/styles';
import api from '../../services/api';

interface CourseProps {
  id: string;
  description: string;
  link: string;
  title: string;
  avatar: string;
}

function Course<CourseProp>({ courses }) {

  return (
    <ContentContainer>
      <MenuBar />

      <MaxContent>
        <Title title="Cursos" />

        <Courses>
          {courses.length === 0 && (<h3>Nenhum curso cadastrado</h3>)}
          {
            courses.map((course: CourseProps) => (
              <div>
                <div>
                  {course.avatar ? (
                    <img src={course.avatar} alt="Imagem curso" />
                  ) : (
                    <span>
                      {course.title}
                    </span>
                  )}

                </div>

                <div>
                  <h1>{course.title}</h1>
                  <p>{course.description}</p>
                  <a href={`cursos/${course.id}`}>Ver Cursos</a>
                </div>
              </div>
            ))
          }
        </Courses>
      </MaxContent>

      <Footer />
    </ContentContainer>
  );
}

Course.getInitialProps = async () => {
  const response = await api.get('/free/course');

  return { courses: response.data }
}

export default Course