'use client'
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/oCrpT4OIWOk
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useForm, ValidationError } from '@formspree/react'

export default function Home() {
  const [state, handleSubmit] = useForm('manwyyae')

  return (
    <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-background px-4 py-12 md:px-6">
      <div className="mx-auto space-y-4 text-center">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-8">
          شيء مميز جايكم قريباً
        </h1>
        <p className="text-muted-foreground md:text-xl">
          شغالين بجد على شيء مميز، اشتركوا بالنشرة عشان تكونوا أول الناس اللي
          تعرفوا عنه
        </p>
        {state.succeeded ? (
          <p className="text-muted-foreground">شكراً على اشتراكك، سنتواصل لك قريباً</p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex w-full justify-center max-w-sm mx-auto gap-2"
          >
            <Input
              type="email"
              id="email"
              name='email'
              placeholder="ايميلك الشخصي هنا"
              className="flex-1"
              required
            />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
            <Button  type="submit" disabled={state.submitting}>إرسال</Button>
          </form>
        )}
      </div>
    </div>
  )
}
