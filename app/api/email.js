import { SMTPClient } from 'emailjs'
import { NextResponse } from 'next/server'

export async function POST(request) {
  try {
    const body = await request.json()

    const {
      name,
      email,
      phone,
      enterprise,
      message
    } = body

    // Cliente SMTP
    const client = new SMTPClient({
      user: process.env.SMTP_USER,
      password: process.env.SMTP_PASSWORD,
      host: process.env.SMTP_HOST,
      ssl: true,
    })

    // Conteúdo do email
    const text = `
Novo contacto pelo site

Nome: ${name}
Email: ${email}
Telefone: ${phone}
Empresa: ${enterprise}

Mensagem:
${message}
    `

    // Envio
    await client.send({
      from: process.env.SMTP_USER,
      to: process.env.SMTP_TO,
      subject: 'Novo contacto - Site',
      text,
    })

    return NextResponse.json(
      { status: 'ok', message: 'Email enviado com sucesso' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Erro ao enviar email:', error)

    return NextResponse.json(
      { status: 'error', message: 'Erro ao enviar email' },
      { status: 500 }
    )
  }
}
