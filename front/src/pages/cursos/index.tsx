import React from 'react';

import Head from 'next/head';
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
      <Head>
        <title>APJESC - Cursos</title>

        <meta name="description" content="APJESC - Listagem de cursos" />
        <meta property="og:title" content="APJESC - Listagem de cursos" />
      </Head>

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