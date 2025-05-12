export const emailConfig = {
  recipient: 'footman_talcum428@simplelogin.com',
  subject: 'Nueva solicitud de contacto - atomicflow'
} as const;

export type EmailConfig = typeof emailConfig;