import React, { useEffect, useRef, useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';

import * as Yup from 'yup';
import Menu from '../../components/Menu';

import Input from '../../components/Input';
import ImageInput from '../../components/ImageInput';
import Textarea from '../../components/Textarea';
import Button from '../../components/Button';

import Loading from '../../components/Loading';
import api from '../../services/api';

import { useToast } from '../../hooks/toast';
import { Container, Content, ContentContainer } from './styles';

import getValidationErrors from '../../utils/getValidationErrors';

interface courseFormData {
  avatar: File;
  link: string;
  title: string;
  description: string;
}

const CriarCursos: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();
  const history = useHistory();

  const handleSubmit = useCallback(async (data: courseFormData) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        link: Yup.string()
          .required('Link do curso é obrigatório'),
        title: Yup.string().required('Título do curso é obrigatório'),
        description: Yup.string().required('Descrição do curso é obrigatório'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      if (!data.avatar) {
        addToast({
          type: 'info',
          title: 'Informação',
          description: 'Você precisa selecionar uma imagem para prosseguir',
        });
      }
      const newData = new FormData();
      newData.append('avatar', data.avatar);
      newData.append('link', data.link);
      newData.append('title', data.title);
      newData.append('description', data.description);
      await api.post('/courses', newData);

      addToast({
        type: 'success',
        title: 'Curso Criado',
        description: 'O curso foi criado com sucesso',
      });

      history.push('/cursos');
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);

        formRef.current?.setErrors(errors);

        return;
      }

      addToast({
        type: 'error',
        title: 'Erro na Criação de curso',
        description: 'Ocorreu um erro ao criar o curso, cheque os dados.',
      });
    }
  }, [addToast, history])

  return (
    <Container>
      <Menu />
      <Content>
        <ContentContainer>

          <h1>Criar Cursos</h1>

          <Form ref={formRef} onSubmit={handleSubmit}>
            <ImageInput name="avatar" />

            <Input name="title" placeholder="Digite o Titulo do curso" label="Titulo" />
            <Input name="link" placeholder="Digite o link do curso" label="Link" />
            <Textarea name="description" label="Descrição" placeholder="Digite o informações do curso" />

            <Button type="submit" color="#2A2A29">Criar</Button>
          </Form>
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

export default CriarCursos;
