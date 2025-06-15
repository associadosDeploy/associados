import React, { useRef, useCallback, useState, ChangeEvent } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import * as Yup from 'yup';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';

import MenuBar from '../components/MenuBar';
import Textarea from '../components/Textarea'; // Seu componente Unform Textarea
import Input from '../components/Input'; // Seu componente Unform Input
import { MaxContent, FormContent } from '../styles/styled/Cadastro/styles'; // Seus estilos
import getValidationErrors from '../utils/getValidationErrors';
import api from '../services/api';

// Interface para os dados do formulário (apenas campos Unform)
interface FormData {
  city: string;
  state: string;
  cep: string;
  oab?: string;
  cpf: string;
  birthDate: string;
  name: string;
  rg: string;
  rg_uf: string;
  emissor: string;
  shipping_date: string;
  naturalness: string;
  naturalness_uf: string;
  address: string;
  email_data: string;
  email_profession: string;
  profession: string;
  education: string;
  specialization: string;
  phone: string;
  acting: string;
}

function AssociateRegistrationPage() { // Renomeado para maior clareza
  const formRef = useRef<FormHandles>(null);
  const [formComplete, setFormComplete] = useState(false);
  // Estado para os arquivos selecionados
  const [selectedFiles, setSelectedFiles] = useState<FileList | null>(null);

  const handleFileChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setSelectedFiles(event.target.files);
      // Limpa erros de documento se o usuário selecionar arquivos
      if (formRef.current?.getFieldError('documents')) {
        formRef.current?.setFieldError('documents', '');
      }
    } else {
      setSelectedFiles(null);
    }
  }, []);

  const handleSubmit = useCallback(
    async (data: FormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          city: Yup.string().required('Cidade é obrigatório'),
          state: Yup.string().required('Estado é obrigatório'),
          cep: Yup.string().required('CEP é obrigatório'),
          oab: Yup.string(),
          cpf: Yup.string().required('CPF obrigatório'),
          birthDate: Yup.string().required('Data de nascimento obrigatória'),
          name: Yup.string().required('Nome completo é obrigatório'), // Corrigido: obrigatório
          rg: Yup.string().required('RG é obrigatório'), // Corrigido: obrigatório
          rg_uf: Yup.string().required('UF RG é obrigatório'), // Corrigido: obrigatório
          emissor: Yup.string().required('Órgão emissor é obrigatório'), // Corrigido: obrigatório
          shipping_date: Yup.string().required('Data de expedição é obrigatório'), // Corrigido: expedição, obrigatório
          naturalness: Yup.string().required('Naturalidade é obrigatório'), // Corrigido: obrigatório
          naturalness_uf: Yup.string().required('Estado de naturalidade é obrigatório'), // Corrigido: obrigatório
          address: Yup.string().required('Endereço é obrigatório'), // Corrigido: obrigatório
          email_data: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um e-mail válido'),
          email_profession: Yup.string()
            .required('E-mail Profissional obrigatório')
            .email('Digite um e-mail válido'),
          profession: Yup.string().required('Profissão é obrigatório'), // Corrigido: obrigatório
          education: Yup.string().required('Escolaridade é obrigatório'), // Corrigido: obrigatório
          specialization: Yup.string().required('Especialização é obrigatório'), // Corrigido: obrigatório
          phone: Yup.string().required('Telefone é obrigatório'), // Corrigido: obrigatório
          acting: Yup.string().required('Atuação é obrigatório'), // Corrigido: obrigatório
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        // Validação manual para os arquivos
        if (!selectedFiles || selectedFiles.length === 0) {
          formRef.current?.setErrors({
            documents: 'É necessário anexar os documentos obrigatórios.',
          });
          // Você pode querer rolar para o campo de erro ou mostrar um toast
          alert('Por favor, anexe os documentos necessários.');
          return;
        }

        const formData = new FormData();

        // Adiciona dados do formulário Unform
        (Object.keys(data) as Array<keyof FormData>).forEach((key) => {
          formData.append(key, data[key] as string);
        });

        // Adiciona arquivos
        if (selectedFiles) {
          for (let i = 0; i < selectedFiles.length; i++) {
            formData.append('documents', selectedFiles[i]); // O backend deve esperar um campo 'documents'
          }
        }

        // Para depuração:
        // for (let pair of formData.entries()) {
        //   console.log(pair[0]+ ', '+ pair[1]); 
        // }

        await api.post('/free/associate', formData, {
          headers: {
            'Content-Type': 'multipart/form-data', // Essencial para upload de arquivos
          },
        });

        setFormComplete(true);
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);
          return;
        }
        // Tratar outros erros da API, etc.
        console.error("Erro no envio:", err);
        alert("Ocorreu um erro ao enviar o formulário. Verifique os dados ou tente novamente mais tarde.");
        // Poderia definir um erro genérico no formulário
        // formRef.current?.setErrors({ form: 'Erro ao enviar. Tente novamente.' });
      }
    },
    [selectedFiles], // Adicionar selectedFiles como dependência do useCallback
  );

  return (
    <>
      <Head>
        <title>APJESC - Cadastro de Associados</title>
        <meta name="description" content="APJESC - Cadastro de Associados" />
        <meta property="og:title" content="APJESC - Cadastro de Associados" />
      </Head>
      <MenuBar />

      <MaxContent>
        <p style={{ textAlign: 'center', margin: '20px', padding: '10px', backgroundColor: '#f9f9f9', border: '1px solid #eee', borderRadius: '5px' }}>
          Inscrição R$ 200,00 e Anuidade R$ 400,00 proporcional ao mês de ingresso parcelado na quantidade de meses restantes do ano.
        </p>
        <FormContent>
          {formComplete && (
            <div className="div_congratulations" style={{ textAlign: 'center', padding: '20px' }}>
              {/* Idealmente, use um componente Image do Next.js se a imagem estiver em /public */}
              <img src="/congratulations.svg" alt="Congratulations" style={{ width: '100px', marginBottom: '20px' }} />
              <h2>Seu cadastro e documentos foram enviados para análise!</h2>
              <p style={{ marginTop: '10px', color: '#555' }}>
                Acompanhe as atualizações sobre sua solicitação por e-mail.
              </p>
              <div style={{ marginTop: '20px', textAlign: 'left', display: 'inline-block' }}>
                <p><strong>Documentos que deveriam ter sido anexados:</strong></p>
                <ul style={{ listStyleType: 'disc', marginLeft: '20px' }}>
                  <li>RG e CPF, ou CNH;</li>
                  <li>Comprovante de Domicílio Profissional em Santa Catarina;</li>
                  <li>Comprovante de Escolaridade;</li>
                  <li>Comprovante de Especialidade ou Curso Livre na área de atuação pericial;</li>
                  <li>Foto em formato 3x4, recente, fundo branco e iluminação uniforme.</li>
                </ul>
              </div>
              <br />
              <Link href="/" passHref>
                <button type="button" style={{ marginTop: '30px', padding: '10px 20px', cursor: 'pointer' }}>
                  Voltar para a Página Inicial
                </button>
              </Link>
            </div>
          )}

          {!formComplete && (
            <Form ref={formRef} onSubmit={handleSubmit}>
              <h1>Cadastro de Associado</h1>
              <h3>Dados Pessoais</h3>

              <Input name="name" label="Nome Completo" />

              <div className="div_agroup">
                <Input name="rg" label="RG" />
                <Input name="emissor" label="Órgão Emissor" />
                <Input name="rg_uf" label="UF" />
                <Input name="shipping_date" label="Data de Expedição" type="date" /> {/* Adicionado type="date" */}
              </div>

              <div className="div_agroup">
                <Input name="birthDate" label="Data de Nascimento" type="date" /> {/* Adicionado type="date" */}
                <Input name="phone" label="Telefone" placeholder="(00) 00000-0000" />
              </div>

              <div className="div_agroup">
                <Input name="cpf" label="CPF" placeholder="000.000.000-00" />
                <Input name="naturalness" label="Naturalidade" />
                <Input name="naturalness_uf" label="UF" />
              </div>

              <Input name="email_data" label="Email" type="email" />

              <div className="div_agroup">
                <Input name="city" label="Cidade" />
                <Input name="state" label="Estado" />
              </div>

              <div className="div_agroup">
                <Input name="address" label="Endereço (Rua, n°, Complemento)" />
                <Input name="cep" label="CEP" placeholder="00000-000" />
              </div>

              <h3>Dados Profissionais</h3>

              <Input name="profession" label="Profissão" />
              <Input name="acting" label="Atuação" />
              <Input name="oab" label="Nº de Registro Profissional (Ex: OAB, CREA, CRM, etc. Não Obrigatório)" />

              <div className="div_agroup">
                <Input name="education" label="Escolaridade" />
                <Input name="email_profession" label="Email Profissional" type="email" />
              </div>

              <Textarea name="specialization" label="Descreva suas especializações" />

              <h3 style={{ marginTop: '20px', borderTop: '1px solid #eee', paddingTop: '20px' }}>Anexo de Documentos</h3>
              <div style={{ marginBottom: '15px' }}>
                <label htmlFor="documents" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
                  Documentos Obrigatórios:
                </label>
                <ul style={{ listStyle: 'disc', marginLeft: '20px', marginBottom: '10px', fontSize: '0.9em' }}>
                  <li>RG e CPF (ou CNH);</li>
                  <li>Comprovante de Domicílio Profissional em SC;</li>
                  <li>Comprovante de Escolaridade;</li>
                  <li>Comprovante de Especialidade ou Curso Livre na área pericial;</li>
                  <li>Foto 3x4 (recente, fundo branco).</li>
                </ul>
                <input
                  type="file"
                  id="documents"
                  name="documents" // O 'name' aqui é para o input HTML, não para Unform
                  multiple
                  onChange={handleFileChange}
                  style={{ padding: '8px', border: '1px solid #ccc', borderRadius: '4px', width: '100%' }}
                />

                {selectedFiles && selectedFiles.length > 0 && (
                  <div style={{ marginTop: '10px', fontSize: '0.9em' }}>
                    <strong>Arquivos Selecionados:</strong>
                    <ul style={{ listStyleType: 'none', paddingLeft: '0' }}>
                      {Array.from(selectedFiles).map((file, index) => (
                        <li key={index}>- {file.name} ({(file.size / 1024).toFixed(2)} KB)</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <button type="submit" style={{ padding: '12px 20px', cursor: 'pointer', width: '100%', marginTop: '10px' }}>
                Cadastrar e Enviar Documentos
              </button>
            </Form>
          )}
        </FormContent>
      </MaxContent>
    </>
  );
}

export default AssociateRegistrationPage;