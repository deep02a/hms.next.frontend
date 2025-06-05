'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

type Message = {
  id: string;
  senderName: string;
  title: string;
  avatar: string;
  isUnread: boolean;
};

export default function MessagesPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const router = useRouter();

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      const res = await axios.get('/messages'); // Your backend should return isUnread correctly
      const sorted = res.data.sort((a: Message, b: Message) => Number(b.isUnread) - Number(a.isUnread));
      setMessages(sorted);
    } catch {
      const dummyMessages: Message[] = [
        {
          id: 'emily-carter',
          senderName: 'Dr. Emily Carter',
          title: 'Follow up on your recent visit',
          avatar: '/avatar-female.png',
          isUnread: true,
        },
        {
          id: 'robert-harris',
          senderName: 'Dr. Robert Harris',
          title: 'Your lab results are ready',
          avatar: '/avatar-male.png',
          isUnread: false,
        },
        {
          id: 'olivia-bennett',
          senderName: 'Dr. Olivia Bennett',
          title: 'Check-in after your procedure',
          avatar: '/avatar-female.png',
          isUnread: true,
        },
        {
          id: 'ethan-clark',
          senderName: 'Dr. Ethan Clark',
          title: 'Reminder for your upcoming appointment',
          avatar: '/avatar-male.png',
          isUnread: false,
        },
      ];
      const sorted = dummyMessages.sort((a, b) => Number(b.isUnread) - Number(a.isUnread));
      setMessages(sorted);
    }
  };

  const handleRead = async (id: string) => {
    try {
      await axios.post(`/messages/${id}/read`); // API call to mark it as read in backend
      setMessages((prev) =>
        prev
          .map((msg) => (msg.id === id ? { ...msg, isUnread: false } : msg))
          .sort((a, b) => Number(b.isUnread) - Number(a.isUnread))
      );
      router.push(`/dashboard/messages/${id}`);
    } catch (error) {
      console.error('Failed to mark message as read:', error);
      router.push(`/dashboard/messages/${id}`); // Still go to chat even if API fails
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">Messages</h1>

      <div className="space-y-6">
        {messages.map((msg) => (
          <button
            key={msg.id}
            onClick={() => handleRead(msg.id)}
            className="w-full flex items-start space-x-4 hover:bg-gray-50 p-3 rounded-lg text-left transition"
          >
            <Image
              src={msg.avatar}
              alt={msg.senderName}
              width={48}
              height={48}
              className="rounded-full"
            />
            <div className="flex-1">
              <p className={`text-sm ${msg.isUnread ? 'text-black font-semibold' : 'text-gray-500'}`}>
                {msg.senderName}
              </p>
              <p className={`text-base ${msg.isUnread ? 'font-bold text-black' : 'text-gray-700'}`}>
                {msg.title}
              </p>
            </div>
            {msg.isUnread && <div className="w-2 h-2 bg-blue-500 rounded-full mt-2" />}
          </button>
        ))}
      </div>
    </div>
  );
}
