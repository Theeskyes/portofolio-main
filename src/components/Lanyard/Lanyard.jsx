import { useEffect, useRef } from 'react';
import './Lanyard.css';

export default function Lanyard() {
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -12;
      const rotateY = ((x - centerX) / centerX) * 12;
      card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.04)`;
    };

    const handleMouseLeave = () => {
      card.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)';
    };

    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div className="lanyard-wrapper">
      <div className="profile-card" ref={cardRef}>
        <div className="glow-ring" />
        <div className="card-img-wrap">
          <img src="/assets/najwa1.png" alt="Najwa Aulia Syakila" />
          <div className="card-img-overlay" />
        </div>
        <div className="card-body">
          <p className="card-name">Najwa Aulia Syakila</p>
          <span className="card-badge">Ketua Osis</span>
          <p className="card-role">Network Engineering</p>
        </div>
      </div>
    </div>
  );
}