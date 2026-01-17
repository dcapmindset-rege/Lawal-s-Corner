import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY=re_J9GoTnnp_Mj8byEnE13AAJUXsGfrF4rgi)

export async function POST(request) {
  try {
    const data = await request.json()
    
    await resend.emails.send({
      from: 'noreply@lawalscorner.com',
      to: 'your-email@domain.com', // Replace with your email
      subject: `New Blog Visit - ${data.url}`,
      html: `
        <h2>New visitor to Lawal&apos;s Corner</h2>
        <p><strong>URL:</strong> ${data.url}</p>
        <p><strong>Time:</strong> ${new Date(data.timestamp).toLocaleString()}</p>
        <p><strong>Referrer:</strong> ${data.referrer || 'Direct'}</p>
        <p><strong>User Agent:</strong> ${data.userAgent}</p>
      `
    })

    return Response.json({ success: true })
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 })
  }
}
