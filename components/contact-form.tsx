'use client'

import { useActionState, useState } from 'react'
import { ArrowRight, CheckCircle2, Loader2 } from 'lucide-react'
import {
  submitContactForm,
  type ContactField,
  type ContactFormState,
} from '@/app/actions'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

const MESSAGE_MAX = 5000
const initialState: ContactFormState = { status: 'idle' }

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(
    submitContactForm,
    initialState,
  )
  const [formKey, setFormKey] = useState(0)
  const [dismissedState, setDismissedState] =
    useState<ContactFormState | null>(null)

  if (state.status === 'success' && state !== dismissedState) {
    return (
      <div
        role="status"
        className="flex flex-col items-center gap-4 py-12 text-center"
      >
        <div className="flex size-14 items-center justify-center rounded-full bg-primary/10 text-primary">
          <CheckCircle2 className="size-7" aria-hidden="true" />
        </div>
        <h2 className="text-xl font-semibold text-balance">Message sent</h2>
        <p className="max-w-sm text-muted-foreground text-pretty">
          {state.message}
        </p>
        <Button
          variant="outline"
          className="mt-2"
          onClick={() => {
            setDismissedState(state)
            setFormKey((k) => k + 1)
          }}
        >
          Send another message
        </Button>
      </div>
    )
  }

  return (
    <FormFields
      key={`${formKey}-${state.submissionId ?? 0}`}
      state={state}
      formAction={formAction}
      isPending={isPending}
    />
  )
}

function FormFields({
  state,
  formAction,
  isPending,
}: {
  state: ContactFormState
  formAction: (payload: FormData) => void
  isPending: boolean
}) {
  const [messageLength, setMessageLength] = useState(
    state.values?.message?.length ?? 0,
  )

  return (
    <form action={formAction} noValidate className="flex flex-col gap-5">
      {state.status === 'error' && state.message ? (
        <p
          role="alert"
          className="rounded-lg border border-destructive/30 bg-destructive/5 px-3 py-2 text-sm text-destructive"
        >
          {state.message}
        </p>
      ) : null}

      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          name="name"
          label="Name"
          state={state}
          input={(props) => (
            <Input
              {...props}
              autoComplete="name"
              placeholder="Jane Cooper"
              maxLength={100}
            />
          )}
        />
        <Field
          name="email"
          label="Email"
          state={state}
          input={(props) => (
            <Input
              {...props}
              type="email"
              autoComplete="email"
              inputMode="email"
              placeholder="jane@company.com"
              maxLength={254}
            />
          )}
        />
      </div>

      <Field
        name="subject"
        label="Subject"
        state={state}
        input={(props) => (
          <Input {...props} placeholder="How can we help?" maxLength={150} />
        )}
      />

      <Field
        name="message"
        label="Message"
        state={state}
        hint={
          <span className="tabular-nums">
            {messageLength}/{MESSAGE_MAX}
          </span>
        }
        input={(props) => (
          <Textarea
            {...props}
            rows={6}
            maxLength={MESSAGE_MAX}
            placeholder="Tell us a bit about your project, timeline, and goals..."
            className="min-h-36 resize-y"
            onChange={(e) => setMessageLength(e.target.value.length)}
          />
        )}
      />

      <div className="flex flex-col-reverse items-start gap-4 pt-1 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-muted-foreground">
          We&apos;ll never share your details with anyone.
        </p>
        <Button
          type="submit"
          size="lg"
          disabled={isPending}
          className="w-full sm:w-auto"
        >
          {isPending ? (
            <>
              <Loader2 className="animate-spin" aria-hidden="true" />
              Sending...
            </>
          ) : (
            <>
              Send message
              <ArrowRight aria-hidden="true" />
            </>
          )}
        </Button>
      </div>
    </form>
  )
}

type FieldInputProps = {
  id: string
  name: ContactField
  required: true
  defaultValue?: string
  'aria-invalid'?: true
  'aria-describedby'?: string
  className?: string
}

function Field({
  name,
  label,
  state,
  hint,
  input,
}: {
  name: ContactField
  label: string
  state: ContactFormState
  hint?: React.ReactNode
  input: (props: FieldInputProps) => React.ReactNode
}) {
  const id = `contact-${name}`
  const errorId = `${id}-error`
  const error = state.errors?.[name]

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <Label htmlFor={id}>{label}</Label>
        {hint ? (
          <span className="text-xs text-muted-foreground">{hint}</span>
        ) : null}
      </div>
      {input({
        id,
        name,
        required: true,
        defaultValue: state.values?.[name],
        'aria-invalid': error ? true : undefined,
        'aria-describedby': error ? errorId : undefined,
        className: name === 'message' ? undefined : 'h-10 px-3',
      })}
      {error ? (
        <p id={errorId} className="text-sm text-destructive">
          {error}
        </p>
      ) : null}
    </div>
  )
}
