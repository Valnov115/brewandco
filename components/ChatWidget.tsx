'use client';

import { useEffect } from 'react';

export default function ChatWidget() {
  useEffect(() => {
    import('@n8n/chat').then(({ createChat }) => {
    createChat({
      webhookUrl: '/api/chat',
      mode: 'window',
      showWelcomeScreen: false,
      loadPreviousSession: false,
      initialMessages: [
        'Hi there! ☕',
        'Welcome to Brew & Co! I\'m your virtual barista. Ask me about our menu, opening hours, or book a table.',
      ],
      i18n: {
        en: {
          title: 'Brew & Co',
          subtitle: 'Your virtual barista — here 24/7.',
          footer: '',
          getStarted: 'Start Chatting',
          inputPlaceholder: 'Ask me anything…',
          closeButtonTooltip: 'Close chat',
        },
      },
    });
    });
  }, []);

  return null;
}
