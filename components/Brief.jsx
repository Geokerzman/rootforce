'use client';

import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

export default function Brief({ labels }) {
  const dialog = useRef(null);
  const [status, setStatus] = useState('');
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  function openEmail(event) {
    event.preventDefault();
    const values = new FormData(event.currentTarget);
    const project = String(values.get('project')).trim();
    const idea = String(values.get('idea')).trim();
    if (!project || !idea) {
      event.currentTarget.querySelector(`[name="${project ? 'idea' : 'project'}"]`).focus();
      return;
    }
    const subject = `${labels.emailSubject} — ${project}`;
    const body = `ROOTFORCE.DEV\r\n\r\n${labels.emailProject}: ${project}\r\n\r\n${labels.emailIdea}:\r\n${idea}\r\n`;
    const email = document.createElement('a');
    email.href = `mailto:lkam1hunt@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    email.click();
    setStatus(labels.status);
  }

  function closeOnBackdrop(event) {
    if (event.target !== dialog.current) return;
    const rect = dialog.current.getBoundingClientRect();
    if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) {
      dialog.current.close();
    }
  }

  return <>
    <button className="button dark" id="brief-open" onClick={() => { setStatus(''); dialog.current.showModal(); }}>{labels.open} <span>↗</span></button>
    {mounted && createPortal(<dialog ref={dialog} id="brief" aria-labelledby="brief-title" onClick={closeOnBackdrop}>
      <form id="brief-form" onSubmit={openEmail}>
        <button type="button" id="brief-close" className="close" aria-label={labels.close} onClick={() => dialog.current.close()}>×</button>
        <p className="mono">{labels.eyebrow}</p>
        <h2 id="brief-title">{labels.title}</h2>
        <p>{labels.description}</p>
        <label>{labels.project}<input name="project" placeholder={labels.projectPlaceholder} required maxLength={100} /></label>
        <label>{labels.idea}<textarea name="idea" rows={4} placeholder={labels.ideaPlaceholder} required maxLength={1500} /></label>
        <button className="button dark" type="submit">{labels.submit} <span>↗</span></button>
        <p id="brief-status" aria-live="polite">{status && <>{status} <a href="mailto:lkam1hunt@gmail.com">lkam1hunt@gmail.com</a>.</>}</p>
      </form>
    </dialog>, document.body)}
  </>;
}
