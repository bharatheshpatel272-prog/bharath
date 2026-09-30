'use server'

export type ContactField = 'name' | 'email' | 'subject' | 'message'

export type ContactFormState = {
  status: 'idle' | 'success' | 'error'
  submissionId?: number
  message?: string
  errors?: Partial<Record<ContactField, string>>
  values?: Partial<Record<ContactField, string>>
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const LIMITS: Record<ContactField, { min: number; max: number }> = {
  name: { min: 2, max: 100 },
  email: { min: 3, max: 254 },
  subject: { min: 3, max: 150 },
  message: { min: 10, max: 5000 },
}

const LABELS: Record<ContactField, string> = {
  name: 'Name',
  email: 'Email',
  subject: 'Subject',
  message: 'Message',
}

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const values = {
    name: String(formData.get('name') ?? '').trim(),
    email: String(formData.get('email') ?? '').trim(),
    subject: String(formData.get('subject') ?? '').trim(),
    message: String(formData.get('message') ?? '').trim(),
  }

  const errors: ContactFormState['errors'] = {}

  for (const field of Object.keys(LIMITS) as ContactField[]) {
    const value = values[field]
    const { min, max } = LIMITS[field]
    if (!value) {
      errors[field] = `${LABELS[field]} is required.`
    } else if (value.length < min) {
      errors[field] = `${LABELS[field]} must be at least ${min} characters.`
    } else if (value.length > max) {
      errors[field] = `${LABELS[field]} must be under ${max} characters.`
    }
  }

  if (!errors.email && !EMAIL_PATTERN.test(values.email)) {
    errors.email = 'Please enter a valid email address.'
  }

  if (Object.keys(errors).length > 0) {
    return {
      status: 'error',
      submissionId: Date.now(),
      message: 'Please fix the highlighted fields.',
      errors,
      values,
    }
  }

  // Hook up delivery here (e.g. Resend email or a database insert).
  await new Promise((resolve) => setTimeout(resolve, 600))

  return {
    status: 'success',
    message: `Thanks, ${values.name.split(' ')[0]}! We'll get back to you within one business day.`,
  }
}
