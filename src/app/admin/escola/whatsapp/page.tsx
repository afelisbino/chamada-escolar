'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { Loader2 } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'

export const schemaFormularioApiWhatsApp = z.object({
  login: z
    .string({
      required_error: 'Necessario informar o login da API',
    })
    .email({
      message: 'Necessário informar um email válido',
    })
    .trim(),
  senha: z
    .string({
      required_error: 'Necessário criar uma senha inicial do usuário',
    })
    .min(8, {
      message: 'A senha precisa ter no mínimo 8 caractéres',
    }),
})

export default function PageConfigWhatsapp() {
  const formApiWhatsApp = useForm<z.infer<typeof schemaFormularioApiWhatsApp>>({
    resolver: zodResolver(schemaFormularioApiWhatsApp),
    defaultValues: {
      login: '',
      senha: '',
    },
    mode: 'onChange',
  })

  return (
    <Form {...formApiWhatsApp}>
      <form
        className="space-y-4"
        onSubmit={formApiWhatsApp.handleSubmit(() => {})}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <FormField
            control={formApiWhatsApp.control}
            name="login"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email do usuário</FormLabel>
                <FormControl>
                  <Input
                    autoComplete="off"
                    type="email"
                    placeholder="usuario@email.com.br"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={formApiWhatsApp.control}
            name="senha"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Senha</FormLabel>
                <FormControl>
                  <Input
                    autoComplete="new-password"
                    type="password"
                    placeholder="senha do usuario"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex flex-row gap-2 float-right">
          {formApiWhatsApp.formState.isSubmitting ? (
            <Button
              className="shadow-md text-sm leading-none rounded bg-app-green-500 hover:bg-app-green-600"
              disabled
            >
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Salvando...
            </Button>
          ) : (
            <Button
              className="shadow-md text-sm leading-none rounded bg-app-green-500 hover:bg-app-green-600"
              type="submit"
            >
              Salvar credenciais
            </Button>
          )}
        </div>
      </form>
    </Form>
  )
}
