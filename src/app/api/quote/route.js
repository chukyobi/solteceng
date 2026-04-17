import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const formData = await request.formData();
    const project_document = formData.get('project_document');
    const project_description = formData.get('project_description');
    const project_category = formData.get('project_category');
    const phone_number = formData.get('phone_number');
    const email = formData.get('email');

    // Setup nodemailer transport
    const transporter = nodemailer.createTransport({
      service: 'gmail', // Standard setup for Google Workspace or regular Gmail
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_APP_PASSWORD,
      },
    });

    let attachments = [];
    
    // Convert file to buffer for attachment
    if (project_document && project_document.name) {
      const bytes = await project_document.arrayBuffer();
      const buffer = Buffer.from(bytes);
      attachments.push({
        filename: project_document.name,
        content: buffer,
        contentType: project_document.type,
      });
    }

    const mailOptions = {
        from: process.env.EMAIL_USER, // Authenticated sender
        to: 'admin@soltec.ng', // The destination inbox for company admins
        replyTo: email, // If you click "reply" in your email, it goes back to the user
        subject: `New Project Quotation Request - ${project_category ? project_category.replace(/_/g, ' ') : 'General'}`,
        html: `
            <div style="font-family: 'Helvetica Neue', Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff; padding: 30px; border: 1px solid #eaeaea; border-radius: 12px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);">
                <!-- Header / Logo -->
                <div style="text-align: center; padding-bottom: 20px; border-bottom: 2px solid #f3f4f6;">
                    <!-- Uncomment the line below and add your image link if you have a public PNG/JPG URL of your logo -->
                    <!-- <img src="https://yourwebsite.com/logo.png" alt="Soltec Engineering" style="max-height: 50px; margin-bottom: 10px;" /> -->
                    <h1 style="color: #d69e2e; margin: 0; font-size: 28px; font-weight: 800; letter-spacing: -0.5px;">SOLTEC</h1>
                    <h4 style="color: #4a5568; margin: 5px 0 0 0; font-size: 14px; letter-spacing: 3px; font-weight: 600;">ENGINEERING</h4>
                </div>
                
                <div style="padding-top: 20px;">
                    <h2 style="color: #2d3748; margin-top: 0;">New Quote Request</h2>
                    
                    <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
                        <tr>
                            <td style="padding: 10px 0; border-bottom: 1px solid #edf2f7; color: #718096; width: 130px;"><strong>Category</strong></td>
                            <td style="padding: 10px 0; border-bottom: 1px solid #edf2f7; color: #1a202c; font-weight: 500;">${project_category ? project_category.replace(/_/g, ' ') : 'N/A'}</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px 0; border-bottom: 1px solid #edf2f7; color: #718096;"><strong>Email</strong></td>
                            <td style="padding: 10px 0; border-bottom: 1px solid #edf2f7;"><a href="mailto:${email}" style="color: #3182ce; text-decoration: none; font-weight: 500;">${email}</a></td>
                        </tr>
                        <tr>
                            <td style="padding: 10px 0; border-bottom: 1px solid #edf2f7; color: #718096;"><strong>Phone Number</strong></td>
                            <td style="padding: 10px 0; border-bottom: 1px solid #edf2f7; color: #1a202c; font-weight: 500;">${phone_number}</td>
                        </tr>
                    </table>
                    
                    <h3 style="color: #4a5568; margin-top: 30px; font-size: 16px; text-transform: uppercase; letter-spacing: 1px;">Project Description</h3>
                    <div style="background-color: #f7fafc; padding: 20px; border-radius: 8px; font-size: 15px; line-height: 1.6; color: #2d3748; white-space: pre-wrap; border: 1px solid #edf2f7;">${project_description}</div>
                    
                    <p style="margin-top: 30px; font-size: 13px; color: #a0aec0; text-align: center; border-top: 1px solid #edf2f7; padding-top: 20px;">*Any uploaded documents have been attached to this email.</p>
                </div>
            </div>
        `,
        attachments: attachments,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Quotation sent successfully!' });
  } catch (error) {
    console.error('Error sending quote email:', error);
    return NextResponse.json(
      { error: 'Failed to send quotation request' },
      { status: 500 }
    );
  }
}
