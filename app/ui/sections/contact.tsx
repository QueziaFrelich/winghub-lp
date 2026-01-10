'use client'

import { useState } from 'react'

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
      const res = await fetch('/api/email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          enterprise,
          message,
        }),
      })

      if (!res.ok) throw new Error('Erro ao enviar')

      setSuccess(true)

      // limpar campos
      setName('')
      setEmail('')
      setPhone('')
      setEnterprise('')
      setMessage('')
    } catch (err) {
      console.error(err)
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contato" className="py-20 px-4 bg-cover bg-center"
     style={{
      backgroundImage: "url('/img/apoio/bg-contact.png')",
    }}>
      <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10 rounded-xl bg-white p-10"
      >

        {/* Texto */}
        <div>
          <h2 className="text-3xl font-semibold mb-4">
            Transforme seus espaços conosco!
          </h2>
          <p className="text-gray-600">
            Preencha o formulário com suas informações e entraremos em contacto.
          </p>
        </div>

        {/* Formulário */}
        <form
          onSubmit={sendEmail}
          className="flex flex-col gap-4"
        >
          <div>
            <label className="block text-sm font-medium mb-1">
              Nome completo
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              E-mail corporativo
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Telefone
            </label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Nome da empresa
            </label>
            <input
              type="text"
              value={enterprise}
              onChange={(e) => setEnterprise(e.target.value)}
              className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Mensagem
            </label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full min-h-[120px] rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black resize-none"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="mt-2 rounded-md bg-black px-6 py-3 text-white font-medium transition hover:bg-gray-800 disabled:opacity-50"
          >
            {loading ? 'Enviando...' : 'Enviar'}
          </button>

          {success && (
            <p className="text-green-600 text-sm mt-2">
              Mensagem enviada com sucesso!
            </p>
          )}

          {error && (
            <p className="text-red-600 text-sm mt-2">
              Ocorreu um erro. Tente novamente.
            </p>
          )}
        </form>
      </div>
    </section>
  )
}
