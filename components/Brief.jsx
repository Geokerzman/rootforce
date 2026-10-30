'use client';

import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

export default function Brief() {
  const dialog = useRef(null);
  const [status, setStatus] = useState('');
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  function downloadBrief(event) {
    event.preventDefault();
    const values = new FormData(event.currentTarget);
    const content = `ROOTFORCE.DEV — БРИФ\n\nПроект: ${values.get('project')}\n\nИдея:\n${values.get('idea')}\n`;
    const url = URL.createObjectURL(new Blob([content], { type: 'text/plain;charset=utf-8' }));
    const link = document.createElement('a');
    link.href = url;
    link.download = 'rootforce-brief.txt';
    link.click();
    setTimeout(() => URL.revokeObjectURL(url), 2000);
    setStatus('Бриф готов. Файл сохранён через загрузки браузера.');
  }

  function closeOnBackdrop(event) {
    if (event.target !== dialog.current) return;
    const rect = dialog.current.getBoundingClientRect();
    if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) {
      dialog.current.close();
    }
  }

  return <>
    <button className="button dark" id="brief-open" onClick={() => dialog.current.showModal()}>Посадить первую идею <span>↗</span></button>
    {mounted && createPortal(<dialog ref={dialog} id="brief" aria-labelledby="brief-title" onClick={closeOnBackdrop}>
      <form id="brief-form" onSubmit={downloadBrief}>
        <button type="button" id="brief-close" className="close" aria-label="Закрыть" onClick={() => dialog.current.close()}>×</button>
        <p className="mono">ПЕРВЫЙ ШАГ / ВАША ИДЕЯ</p>
        <h2 id="brief-title">С чего начнём?</h2>
        <p>Соберите короткий бриф и сохраните его себе. Данные никуда не отправляются.</p>
        <label>Как называется проект?<input name="project" placeholder="Название или рабочая идея" required maxLength={100} /></label>
        <label>Что хочется создать?<textarea name="idea" rows={4} placeholder="Для кого ваш продукт и какую задачу он решает?" required maxLength={3000} /></label>
        <button className="button dark" type="submit">Скачать бриф <span>↓</span></button>
        <p id="brief-status" aria-live="polite">{status}</p>
      </form>
    </dialog>, document.body)}
  </>;
}
