import React, { useEffect, useRef, useCallback, useState } from 'react';

import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import {  useParams } from 'react-router-dom';

import * as Yup from 'yup';
import { FaSpinner } from 'react-icons/fa';
import Menu from '../../components/Menu';

import Input from '../../components/Input';
import ImageInput from '../../components/ImageInput';
import Button from '../../components/Button';
import Textarea from '../../components/Textarea';

import Loading from '../../components/Loading';
import api from '../../services/api';

import { useToast } from '../../hooks/toast';

import { Container, Content, ContentContainer } from './styles';
import getValidationErrors from '../../utils/getValidationErrors';

interface Transaction {
  avatar: File;
  link: string;
  title: string;
  description: string;
}

const AlterarCurso: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const [course,] = useState<Transaction>();
  const { addToast } = useToast();

  const { id } = useParams<Record<string, string>>();
  const [isLoading, setIsLoading]= useState(false)

  useEffect(() => {
    async function loadCouse(): Promise<void> {
      await api.get(`/courses/find/${id}`).then(response => {
        formRef?.current?.setData(response.data);
      });
      // setLoading(false);
    }

    loadCouse();
  }, [id]);

  const handleSubmit = useCallback(
    async (data) => {
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

        await api.put(`/courses/${id}`, data);

        addToast({
          type: 'success',
          title: 'Curso Alterado',
          description: 'As informações do curso foram alteradas com sucesso',
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);
        }

        addToast({
          type: 'error',
          title: 'Erro Curso Alterado',
          description: 'Ocorreu um erro ao alterar as informações do curso',
        });
      }
    },
    [addToast, id],
  );

  const handleChangeAvatar = useCallback(async (event: React.ChangeEvent<HTMLInputElement>) =>{
    setIsLoading(true)
    if (event.target.files && event.target.files[0]) {
      try {
        const data = new FormData();

        data.append('avatar', event.target.files[0]);

        await api.patch(`/courses/avatar/${id}`, data);

        addToast({
          type: 'success',
          title: 'Alteração da foto',
          description: 'Imagem do associado foi alterada com sucesso !',
        });

        setIsLoading(false)
      } catch (e) {
        setIsLoading(false)
        addToast({
          type: 'error',
          title: 'Erro na alteração da imagem',
          description: 'Ocorreu um erro ao alterar imagem do curso.',
        });
      }
    }
  }
,[addToast,id])

  return (
    <Container>
      <Menu />
      <Content>
        <ContentContainer>

          <h1>Alterar Cursos</h1>

          <Form initialData={course} ref={formRef} onSubmit={handleSubmit}>
            <ImageInput name="avatar" onChangeCapture={handleChangeAvatar} />
            <Input name="title" placeholder="Digite o Titulo do curso" label="Titulo" />
            <Input name="link" placeholder="Digite o link do curso" label="Link" />
            <Textarea name="description" label="Descrição" placeholder="Digite o informações do curso" />

            <Button type="submit" color="#2A2A29">Criar</Button>
          </Form>
        </ContentContainer>

        {isLoading &&
          (
            <div style={{ position: 'absolute', width: '100vw', height: '100vh', background: 'rgba(0,0,0,0.2)', top: 0, left: 0}}>
              <Loading>
                <h1>
                  Carregando
                </h1>
                <FaSpinner size={25} />
              </Loading>
            </div>
          ) }
      </Content>
    </Container>
  );
};

export default AlterarCurso;
