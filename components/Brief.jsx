'use client';

import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

export default function Brief({ labels, locale }) {
  const dialog = useRef(null);
  const sending = useRef(false);
  const lastAttempt = useRef(0);
  const [status, setStatus] = useState('');
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  async function sendRequest(event) {
    event.preventDefault();
    if (sending.current || status === 'success') return;
    const form = event.currentTarget;
    const values = new FormData(form);
    const project = String(values.get('project')).trim();
    const idea = String(values.get('idea')).trim();
    const email = String(values.get('email')).trim();
    if (!project || !idea) {
      form.querySelector(`[name="${project ? 'idea' : 'project'}"]`).focus();
      return;
    }
    if (!form.reportValidity()) return;
    if (Date.now() - lastAttempt.current < 5000) {
      setStatus('rateLimit');
      return;
    }
    sending.current = true;
    lastAttempt.current = Date.now();
    setStatus('sending');
    try {
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'omit',
        body: JSON.stringify({
          service_id: 'service_e1y3bdh',
          template_id: 'template_9u79a6f',
          user_id: 'ZgiFVkf8BJ6idSJcN',
          template_params: { project, email, idea, language: locale },
        }),
        signal: AbortSignal.timeout(20000),
      });
      if (!response.ok) {
        setStatus(response.status === 429 ? 'rateLimit' : 'error');
        return;
      }
      form.reset();
      setStatus('success');
    } catch {
      setStatus('error');
    } finally {
      sending.current = false;
    }
  }

  function closeOnBackdrop(event) {
    if (event.target !== dialog.current) return;
    const rect = dialog.current.getBoundingClientRect();
    if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) {
      dialog.current.close();
    }
  }

  return <>
    <button className="button dark" id="brief-open" onClick={() => { if (!sending.current) setStatus(''); dialog.current.showModal(); }}>{labels.open} <span>↗</span></button>
    {mounted && createPortal(<dialog ref={dialog} id="brief" aria-labelledby="brief-title" onClick={closeOnBackdrop}>
      <form id="brief-form" onSubmit={sendRequest} aria-busy={status === 'sending'}>
        <button type="button" id="brief-close" className="close" aria-label={labels.close} onClick={() => dialog.current.close()}>×</button>
        <p className="mono">{labels.eyebrow}</p>
        <h2 id="brief-title">{labels.title}</h2>
        <p>{labels.description}</p>
        <label>{labels.project}<input name="project" placeholder={labels.projectPlaceholder} required maxLength={100} disabled={status === 'sending' || status === 'success'} /></label>
        <label>{labels.email}<input name="email" type="email" autoComplete="email" placeholder="you@example.com" required maxLength={254} disabled={status === 'sending' || status === 'success'} /></label>
        <label>{labels.idea}<textarea name="idea" rows={4} placeholder={labels.ideaPlaceholder} required maxLength={1500} disabled={status === 'sending' || status === 'success'} /></label>
        <p className="brief-privacy">{labels.privacy} <a href={locale === 'en' ? '/datenschutz/' : `/${locale}/datenschutz/`}>{labels.privacyLink}</a></p>
        <button className="button dark" type="submit" disabled={status === 'sending' || status === 'success'}>{status === 'sending' ? labels.sending : status === 'success' ? labels.sent : labels.submit} <span>↗</span></button>
        <p id="brief-status" role="status" aria-live="polite">{status ? labels[status] : ''}</p>
      </form>
    </dialog>, document.body)}
  </>;
}
