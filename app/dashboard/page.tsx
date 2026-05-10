'use client';

import { useState } from 'react';
import ChatInterface from '@/components/ChatInterface';
import GoalsTracker from '@/components/GoalsTracker';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState<'chat' | 'goals'>('chat');

  return (
    <div className="space-y-8">
      {/* Welcome */}
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-8 rounded-lg">
        <h1 className="text-4xl font-bold mb-2">Welcome to Your AI Coach</h1>
        <p className="text-indigo-100">Get personalized coaching and track your progress towards your goals</p>
      </div>

      {/* Tabs */}
      <div className="flex space-x-4 border-b border-gray-200">
        <button
          onClick={() => setActiveTab('chat')}
          className={`px-6 py-3 font-semibold border-b-2 transition ${
            activeTab === 'chat'
              ? 'border-indigo-600 text-indigo-600'
              : 'border-transparent text-gray-600 hover:text-gray-900'
          }`}
        >
          💬 AI Coaching Chat
        </button>
        <button
          onClick={() => setActiveTab('goals')}
          className={`px-6 py-3 font-semibold border-b-2 transition ${
            activeTab === 'goals'
              ? 'border-indigo-600 text-indigo-600'
              : 'border-transparent text-gray-600 hover:text-gray-900'
          }`}
        >
          🎯 My Goals
        </button>
      </div>

      {/* Content */}
      <div>
        {activeTab === 'chat' && <ChatInterface />}
        {activeTab === 'goals' && <GoalsTracker />}
      </div>
    </div>
  );
}