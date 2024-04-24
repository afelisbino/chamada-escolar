import { Button } from '@/components/ui/button'
import { AlunosTurmaType } from '../../../schemas/SchemaAlunosTurma'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { ArrowRightLeft, MoreVertical, Pencil, Trash } from 'lucide-react'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'

interface MenuTabelaAlunoProps {
  dadosAluno: AlunosTurmaType
}

export function MenuTabelaAluno({ dadosAluno }: MenuTabelaAlunoProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button
          variant="ghost"
          className="flex h-8 w-8 p-0 data-[state=open]:bg-muted"
        >
          <MoreVertical className="h-4 w-4" />
          <span className="sr-only">Abrir menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[160px]">
        <Dialog>
          <DialogTrigger asChild>
            <DropdownMenuItem
              onSelect={(e) => {
                e.preventDefault()
              }}
              className="flex-1 justify-between gap-2"
            >
              <Pencil />
              Editar matrícula
            </DropdownMenuItem>
          </DialogTrigger>
        </Dialog>
        <Dialog>
          <DialogTrigger asChild>
            <DropdownMenuItem
              onSelect={(e) => {
                e.preventDefault()
              }}
              className="flex-1 justify-between gap-2"
            >
              <Trash />
              Excluir matrícula
            </DropdownMenuItem>
          </DialogTrigger>
        </Dialog>
        <Dialog>
          <DialogTrigger asChild>
            <DropdownMenuItem
              onSelect={(e) => {
                e.preventDefault()
              }}
              className="flex-1 justify-between gap-2"
            >
              <ArrowRightLeft />
              Tranferir aluno de turma
            </DropdownMenuItem>
          </DialogTrigger>
        </Dialog>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}