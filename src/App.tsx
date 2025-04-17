import React, { useState } from 'react';

const MOCK_ADS = [
  {
    id: 1,
    keyword: '제주도',
    text: '제주 렌터카 50% 할인 중이에요. 여행 전에 꼭 확인해보세요!',
    link: '#'
  },
  {
    id: 2,
    keyword: '운동',
    text: '홈트족을 위한 스마트 요가매트 출시! 자세 교정 기능 탑재.',
    link: '#'
  },
  {
    id: 3,
    keyword: '비',
    text: '초경량 방수 우산 1+1 행사 중 ☔ 지금 만나보세요!',
    link: '#'
  },
  {
    id: 4,
    keyword: '피곤',
    text: '직장인을 위한 5분 피로회복 음료, 무료 샘플 신청하세요.',
    link: '#'
  }
];

function App() {
  const [messages, setMessages] = useState([
    { from: 'ai', text: '안녕하세요! 무엇이든 물어보세요 😊' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { from: 'user', text: input };
    const matchedAd = MOCK_ADS.find(ad => input.includes(ad.keyword));

    const aiResponse = {
      from: 'ai',
      text: matchedAd
        ? `알겠습니다! 그리고 참고로... 👉 ${matchedAd.text}`
        : '좋은 질문이에요! 조금 더 자세히 설명해주실 수 있나요?'
    };

    setMessages(prev => [...prev, userMessage, aiResponse]);
    setInput('');
  };

  return (
    <div className="chat-box">
      <div className="messages">
        {messages.map((msg, idx) => (
          <div key={idx} className={`message ${msg.from}`}>
            {msg.text}
          </div>
        ))}
      </div>
      <div className="input-area">
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && handleSend()}
          placeholder="대화를 입력하세요..."
        />
        <button onClick={handleSend}>보내기</button>
      </div>
    </div>
  );
}

export default App;
