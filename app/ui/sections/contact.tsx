'use client'

import { useState } from 'react'
import emailjs from '@emailjs/browser'

export default function ContactSection() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [enterprise, setEnterprise] = useState('')
  const [message, setMessage] = useState('')

  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError(false)
    setSuccess(false)

    try {
      await emailjs.send(
        'service_6s9eble', // Service ID
        'template_eendcra', // Template ID
        {
          name,
          email,
          phone,
          enterprise,
          message,
        },
        'LM2329tOx-K-Y424b' // Public Key
      )

      setSuccess(true)
      setName('')
      setEmail('')
      setPhone('')
      setEnterprise('')
      setMessage('')
    } catch (err: any) {
      console.error('Erro EmailJS:', err?.text || err)
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  return (
   <section
  id="contato"
  className="scroll-mt-20 py-24 px-4 bg-cover bg-center"
  style={{ backgroundImage: "url('/img/apoio/bg-contact.png')" }}
>
      <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-16 rounded-2xl bg-white p-14 shadow-xl">

        {/* Texto */}
        <div className="flex flex-col justify-top">
          <h2 className="text-4xl font-semibold text-purple-800 mb-6">
            Transforme seus <br></br>espaços conosco!
          </h2>
          <p className="text-gray-500 max-w-md">
            Preencha o formulário com suas informações e entraremos em contacto.
          </p>
        </div>

        {/* Formulário */}
        <form onSubmit={sendEmail} className="flex flex-col gap-5">

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-purple-800">
              Nome completo
            </label>
            <input
              type="text"
              placeholder="Escreva"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="h-12 rounded-md border border-gray-300 px-4 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-800"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-purple-800">
              E-mail corporativo
            </label>
            <input
              type="email"
              placeholder="example@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="h-12 rounded-md border border-gray-300 px-4 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-800"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-purple-800">
              Telefone
            </label>
            <input
              type="tel"
              placeholder="(xx) xxxxx-xxxx"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="h-12 rounded-md border border-gray-300 px-4 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-800"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-purple-800">
              Nome da empresa
            </label>
            <input
              type="text"
              placeholder="Escreva"
              value={enterprise}
              onChange={(e) => setEnterprise(e.target.value)}
              className="h-12 rounded-md border border-gray-300 px-4 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-800"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-purple-800">
              Mensagem
            </label>
            <textarea
              placeholder="Escreva"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="min-h-[120px] rounded-md border border-gray-300 px-4 py-3 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-800"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="mx-auto mt-6 h-12 w-64 rounded-full bg-green-500 font-semibold text-white transition hover:bg-green-600 disabled:opacity-50"
          >
            {loading ? 'Enviando...' : 'ENVIAR MENSAGEM'}
          </button>

          {success && (
            <p className="text-start text-sm text-green-600">
              Mensagem enviada com sucesso!
            </p>
          )}

          {error && (
            <p className="text-start text-sm text-red-600">
              Erro ao enviar mensagem.
            </p>
          )}
        </form>
      </div>
    </section>

  )
}
