export function getEmailComposeUrl(email: string) {
  const params = new URLSearchParams({
    view: "cm",
    fs: "1",
    to: email,
    su: "Portfolio enquiry",
  });

  return `https://mail.google.com/mail/?${params.toString()}`;
}
