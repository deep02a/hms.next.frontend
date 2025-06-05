'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import axios from 'axios';

type Message = {
  from: 'doctor' | 'user';
  content: string;
  timestamp: string;
};

const dummyConversation: Message[] = [
  { from: 'doctor', content: 'Hello, how are you feeling today?', timestamp: '10:00 AM' },
  { from: 'user', content: 'Better than yesterday, but still tired.', timestamp: '10:01 AM' },
  { from: 'doctor', content: 'That’s a good sign. Keep resting.', timestamp: '10:02 AM' },
];

export default function ChatPage() {
  const { chatId } = useParams();
  const [conversation, setConversation] = useState<Message[]>([]);

  useEffect(() => {
    axios
      .get(`/messages/${chatId}`)
      .then((res) => setConversation(res.data))
      .catch(() => setConversation(dummyConversation));
  }, [chatId]);

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-xl font-semibold mb-4 capitalize">Chat with {chatId?.toString().replace('-', ' ')}</h1>
      <div className="space-y-2">
        {conversation.map((msg, idx) => (
          <div
            key={idx}
            className={`max-w-sm p-3 rounded-lg ${
              msg.from === 'user' ? 'bg-blue-100 self-end ml-auto' : 'bg-gray-100'
            }`}
          >
            <p className="text-sm">{msg.content}</p>
            <p className="text-xs text-gray-400 mt-1">{msg.timestamp}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
