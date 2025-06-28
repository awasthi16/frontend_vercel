// components/AiPhoto.jsx
import React, { useState } from 'react';
import './AiPhoto.css';

const Ai = () => {
  const [prompt, setPrompt] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [loading, setLoading] = useState(false);

  const generatePhoto = async () => {
    if (!prompt.trim()) return;
    setLoading(true);
    try {
      // Fake image URL for demonstration. Replace this with real API call (e.g., OpenAI or DALL·E API)
      const fakeImage = `https://source.unsplash.com/800x600/?${encodeURIComponent(prompt)}`;
      setTimeout(() => {
        setImageUrl(fakeImage);
        setLoading(false);
      }, 1000);
    } catch (err) {
      console.error('Error generating image:', err);
      setLoading(false);
    }
  };

  return (
    <div className="ai-photo-container">
      <h2>🧠 AI Photo Generator</h2>
      <p>Enter a prompt and let AI imagine the image.</p>
      <div className="form-group">
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="e.g. futuristic city at sunset"
        />
        <button onClick={generatePhoto} disabled={loading}>
          {loading ? 'Generating...' : 'Generate'}
        </button>
      </div>
      {imageUrl && (
        <div className="image-preview">
          <img src={imageUrl} alt="AI Generated" />
        </div>
      )}
    </div>
  );
};

export default Ai;