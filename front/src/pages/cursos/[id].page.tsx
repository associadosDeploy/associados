import React from 'react';

import Head from 'next/head';

import { useRouter } from 'next/router'

import MenuBar from '../../components/MenuBar';

import Title from '../../components/Title';


import { MaxContent, Courses } from '../../styles/styled/Curso/styles';
import api from '../../services/api';
import Link from 'next/link';

interface CourseProps {
  id: string;
  description: string;
  link: string;
  title: string;
  avatar: string;
}

function Course<CourseProp>({ course }:any) {

  return (
    <>
      <Head>
        <title>APJESC - {course.title}</title>

        <meta name="description" content={`APJESC - Curso ${course.title}`} />
        <meta property="og:title" content={`APJESC - Curso ${course.title}`} />
      </Head>
      <MenuBar />
      <MaxContent>
        <Title title="Dados do Curso" />

        <Courses>
          <div>
            <div>
              <img src={course.avatar} alt="Imagem Curso" />
            </div>

            <div>
              <h1>{course.title}</h1>
              <p>{course.description}</p>

              <div>
                Acesse por <Link href={course.link}>Link</Link>
              </div>
            </div>
          </div>
        </Courses>
      </MaxContent>

    </>
  );
}

Course.getInitialProps = async ({ query }:any) => {
  let course = {};

  const { id } = query;

  if (id) {
    const response = await api.get(`/free/course/${id}`);
    course = response.data;
  }

  return { course };
}


export default Course