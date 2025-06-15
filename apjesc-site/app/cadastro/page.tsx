'use client'

import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

// Import your actual API service
import api from '@/services/api'; // Assuming api.ts is in src/services/

// Placeholder for MenuBar
const MenuBar = () => (
  <nav className="bg-gray-800 text-white p-4 mb-8">
    <div className="container mx-auto">APJESC</div>
  </nav>
);

// Import shadcn/ui components
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/components/ui/use-toast";
import { UploadCloud } from 'lucide-react'; // Icons
import { Label } from '@/components/ui/label';

// Zod schema (remains the same as it validates the user's file input)
const MAX_FILE_SIZE_MB = 5;
const MAX_FILE_SIZE_BYTES = MAX_FILE_SIZE_MB * 1024 * 1024;
const ACCEPTED_FILE_TYPES = [
  "image/jpeg", "image/jpg", "image/png", "image/webp", "application/pdf",
];

const fileListSchema = z
  .custom<FileList>((val) => val instanceof FileList, "É necessário anexar os documentos.")
  .refine((files) => files.length > 0, `É necessário anexar pelo menos um documento.`)
  .refine(
    (files) => Array.from(files).every((file) => file.size <= MAX_FILE_SIZE_BYTES),
    `Cada arquivo deve ter no máximo ${MAX_FILE_SIZE_MB}MB.`
  )
  .refine(
    (files) => Array.from(files).every((file) => ACCEPTED_FILE_TYPES.includes(file.type)),
    "Formatos aceitos: JPG, PNG, WEBP, PDF."
  );

const formSchema = z.object({
  name: z.string().min(1, "Nome completo é obrigatório"),
  rg: z.string().min(1, "RG é obrigatório"),
  emissor: z.string().min(1, "Órgão emissor é obrigatório"),
  rg_uf: z.string().min(1, "UF do RG é obrigatório").max(2, "UF deve ter 2 caracteres"),
  shipping_date: z.string().min(1, "Data de expedição é obrigatória"),
  birthDate: z.string().min(1, "Data de nascimento é obrigatória"),
  phone: z.string().min(1, "Telefone é obrigatório"),
  cpf: z.string().min(1, "CPF obrigatório"),
  naturalness: z.string().min(1, "Naturalidade é obrigatória"),
  naturalness_uf: z.string().min(1, "UF da naturalidade é obrigatória").max(2, "UF deve ter 2 caracteres"),
  email_data: z.string().min(1, "E-mail obrigatório").email("E-mail inválido"),
  city: z.string().min(1, "Cidade é obrigatória"),
  state: z.string().min(1, "Estado é obrigatório").max(2, "UF deve ter 2 caracteres"),
  address: z.string().min(1, "Endereço é obrigatório"),
  cep: z.string().min(1, "CEP é obrigatório"),
  profession: z.string().min(1, "Profissão é obrigatória"),
  acting: z.string().min(1, "Atuação é obrigatória"),
  oab: z.string().optional(),
  education: z.string().min(1, "Escolaridade é obrigatória"),
  email_profession: z.string().min(1, "E-mail profissional obrigatório").email("E-mail profissional inválido"),
  specialization: z.string().min(1, "Especialização é obrigatória"),
  documents: fileListSchema, // User still provides files, these will be uploaded to S3
});

type FormValues = z.infer<typeof formSchema>;

export default function AssociateRegistrationPage() {
  const [formComplete, setFormComplete] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedFileNames, setSelectedFileNames] = useState<string[]>([]);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
    defaultValues: { /* ... seu defaultValues ... */ },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    toast({ title: "Processando...", description: "Enviando seus dados e documentos." });

    try {
      const formData = new FormData();

      const { documents, ...restOfData } = data;
      Object.entries(restOfData).forEach(([key, value]) => {
        if (value !== null && value !== undefined) {
          formData.append(key, String(value));
        }
      });

      if (documents && documents.length > 0) {
        Array.from(documents).forEach((file) => {
          formData.append("documents", file);
        });
      }

      toast({ title: "Enviando para o servidor...", description: "Fazendo upload dos dados e documentos em um único passo." });

      await api.post("/free/associate", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setFormComplete(true);
      toast({
        title: "Cadastro enviado!",
        description: "Seus dados e documentos foram enviados com sucesso para análise.",
        className: "bg-green-100 border-green-400 text-green-700",
      });
    } catch (error: any) {
      console.error("Erro no processo de envio:", error);

      let errorMessage = "Ocorreu um erro. Verifique os arquivos ou tente novamente.";
      // Se o backend retornar mensagem específica:
      if (error.response && error.response.data && error.response.data.message) {
        errorMessage = error.response.data.message;
      } else if (error.message) {
        errorMessage = error.message;
      }

      toast({
        title: "Erro no Envio",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className="container mx-auto px-4 py-16 md:px-6">
        <Card >
          <CardHeader>
            <CardTitle className="text-2xl font-semibold">Associe-se à APJESC</CardTitle>
            <CardDescription>
              Preencha os dados e anexe os documentos. Eles serão enviados de forma segura.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <h3 className="text-xl font-semibold mb-4 border-b pb-2">Dados Pessoais</h3>
                <div className="space-y-4">
                  <FormField control={form.control} name="name" render={({ field }) => (<FormItem> <FormLabel>Nome Completo</FormLabel><FormControl><Input placeholder="Seu nome completo" {...field} /></FormControl><FormMessage /></FormItem>)} />
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <FormField control={form.control} name="rg" render={({ field }) => (<FormItem> <FormLabel>RG</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>)} />
                    <FormField control={form.control} name="emissor" render={({ field }) => (<FormItem> <FormLabel>Órgão Emissor</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>)} />
                    <FormField control={form.control} name="rg_uf" render={({ field }) => (<FormItem> <FormLabel>UF (RG)</FormLabel><FormControl><Input maxLength={2} {...field} /></FormControl><FormMessage /></FormItem>)} />
                    <FormField control={form.control} name="shipping_date" render={({ field }) => (<FormItem> <FormLabel>Data de Expedição</FormLabel><FormControl><Input type="date" {...field} /></FormControl><FormMessage /></FormItem>)} />
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <FormField control={form.control} name="birthDate" render={({ field }) => (<FormItem> <FormLabel>Data de Nascimento</FormLabel><FormControl><Input type="date" {...field} /></FormControl><FormMessage /></FormItem>)} />
                    <FormField control={form.control} name="phone" render={({ field }) => (<FormItem> <FormLabel>Telefone</FormLabel><FormControl><Input placeholder="(00) 00000-0000" {...field} /></FormControl><FormMessage /></FormItem>)} />
                  </div>
                  <div className="grid md:grid-cols-3 gap-4">
                    <FormField control={form.control} name="cpf" render={({ field }) => (<FormItem> <FormLabel>CPF</FormLabel><FormControl><Input placeholder="000.000.000-00" {...field} /></FormControl><FormMessage /></FormItem>)} />
                    <FormField control={form.control} name="naturalness" render={({ field }) => (<FormItem> <FormLabel>Naturalidade</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>)} />
                    <FormField control={form.control} name="naturalness_uf" render={({ field }) => (<FormItem> <FormLabel>UF (Naturalidade)</FormLabel><FormControl><Input maxLength={2} {...field} /></FormControl><FormMessage /></FormItem>)} />
                  </div>
                  <FormField control={form.control} name="email_data" render={({ field }) => (<FormItem> <FormLabel>Email Pessoal</FormLabel><FormControl><Input type="email" placeholder="seu@email.com" {...field} /></FormControl><FormMessage /></FormItem>)} />
                  <div className="grid md:grid-cols-3 gap-4">
                    <FormField control={form.control} name="address" render={({ field }) => (<FormItem className="md:col-span-2"> <FormLabel>Endereço (Rua, Nº, Complemento)</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>)} />
                    <FormField control={form.control} name="cep" render={({ field }) => (<FormItem> <FormLabel>CEP</FormLabel><FormControl><Input placeholder="00000-000" {...field} /></FormControl><FormMessage /></FormItem>)} />
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <FormField control={form.control} name="city" render={({ field }) => (<FormItem> <FormLabel>Cidade</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>)} />
                    <FormField control={form.control} name="state" render={({ field }) => (<FormItem> <FormLabel>Estado (UF)</FormLabel><FormControl><Input maxLength={2} {...field} /></FormControl><FormMessage /></FormItem>)} />
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-4 border-b pb-2">Dados Profissionais</h3>
                <div className="space-y-4">
                  <FormField control={form.control} name="profession" render={({ field }) => (<FormItem> <FormLabel>Profissão</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>)} />
                  <FormField control={form.control} name="acting" render={({ field }) => (<FormItem> <FormLabel>Área de Atuação Principal</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>)} />
                  <FormField control={form.control} name="oab" render={({ field }) => (<FormItem> <FormLabel>Nº de Registro Profissional (Opcional)</FormLabel><FormControl><Input placeholder="Ex: OAB, CREA, CRM" {...field} /></FormControl><FormDescription>Caso possua, informe o número do seu conselho profissional.</FormDescription><FormMessage /></FormItem>)} />
                  <div className="grid md:grid-cols-2 gap-4">
                    <FormField control={form.control} name="education" render={({ field }) => (<FormItem> <FormLabel>Escolaridade</FormLabel><FormControl><Input placeholder="Ex: Superior Completo em Direito" {...field} /></FormControl><FormMessage /></FormItem>)} />
                    <FormField control={form.control} name="email_profession" render={({ field }) => (<FormItem> <FormLabel>Email Profissional</FormLabel><FormControl><Input type="email" placeholder="profissional@email.com" {...field} /></FormControl><FormMessage /></FormItem>)} />
                  </div>
                  <FormField control={form.control} name="specialization" render={({ field }) => (<FormItem> <FormLabel>Descreva suas Especializações e Cursos Relevantes</FormLabel><FormControl><Textarea placeholder="Liste suas especializações, pós-graduações, cursos livres na área pericial, etc." className="resize-y min-h-[100px]" {...field} /></FormControl><FormMessage /></FormItem>)} />
                </div>

                <h3 className="text-xl font-semibold mb-4 border-b pb-2">Anexo de Documentos</h3>
                <FormField
                  control={form.control}
                  name="documents"
                  render={({ field: { onChange, onBlur, name, ref } }) => (
                    <FormItem>
                      <FormLabel>Documentos Obrigatórios</FormLabel>
                      <FormControl>
                        <div className="flex flex-col items-start space-y-2 sm:flex-row sm:items-center sm:space-y-0 sm:space-x-3">
                          <Input
                            type="file"
                            multiple
                            id="documents-input"
                            ref={ref}
                            name={name}
                            onBlur={onBlur}
                            onChange={(e) => {
                              const files = e.target.files;
                              onChange(files);
                              setSelectedFileNames(files ? Array.from(files).map(f => f.name) : []);
                            }}
                            className="sr-only w-auto"
                          />
                          <Button asChild variant="outline" size="sm">
                            <Label htmlFor="documents-input" className="cursor-pointer">
                              <UploadCloud className="mr-2 h-4 w-4" />
                              Escolher Arquivos
                            </Label>
                          </Button>
                          {selectedFileNames.length === 0 && (
                            <span className="text-sm text-muted-foreground">
                              Nenhum arquivo selecionado
                            </span>
                          )}
                        </div>
                      </FormControl>
                      <FormDescription>
                        Anexe: RG/CPF ou CNH; Comprovante de Domicílio Profissional em SC; Comprovante de Escolaridade; Comprovante de Especialidade/Curso Livre na área pericial; Foto 3x4. Max {MAX_FILE_SIZE_MB}MB por arquivo. Formatos: PDF, JPG, PNG, WEBP.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {selectedFileNames.length > 0 && (
                  <div className="mt-3 text-sm">
                    <p className="font-medium">Arquivos Selecionados:</p>
                    <ul className="list-disc list-inside pl-5 text-muted-foreground">
                      {selectedFileNames.map((name, index) => (
                        <li key={index}>{name}</li>
                      ))}
                    </ul>
                  </div>
                )}

                <Button type="submit" className="w-full bg-yellow-400 hover:bg-yellow-300" disabled={isSubmitting || (!form.formState.isValid && form.formState.isSubmitted)}>
                  {isSubmitting ? 'Enviando Cadastro...' : 'Cadastrar e Enviar Documentos'}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </>
  );
}