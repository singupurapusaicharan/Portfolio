import React, { useEffect, useRef } from 'react';

const Particles: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const canvasEl = canvas;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvasEl.width = window.innerWidth;
      canvasEl.height = window.innerHeight;
    };

    setCanvasDimensions();
    window.addEventListener('resize', setCanvasDimensions);

    // Particle class
    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
      originalX: number;
      originalY: number;
      density: number;
      distance: number = 0;

      constructor() {
        this.x = Math.random() * canvasEl.width;
        this.y = Math.random() * canvasEl.height;
        this.originalX = this.x;
        this.originalY = this.y;
        this.size = Math.random() * 3 + 0.5;
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = (Math.random() - 0.5) * 0.5;
        this.density = (Math.random() * 30) + 1;
        
        // Blue to purple gradient colors
        const colors = ['rgba(14, 165, 233, 0.6)', 'rgba(168, 85, 247, 0.6)', 'rgba(59, 130, 246, 0.6)'];
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      update(mouseX: number | null, mouseY: number | null) {
        // Mouse interaction
        if (mouseX !== null && mouseY !== null) {
          const dx = mouseX - this.x;
          const dy = mouseY - this.y;
          let distance = Math.sqrt(dx * dx + dy * dy);
          this.distance = distance;
          
          // Avoid divide-by-zero when the cursor overlaps exactly.
          if (distance === 0) distance = 0.0001;
          const forceDirectionX = dx / distance;
          const forceDirectionY = dy / distance;
          const maxDistance = 100;
          const force = (maxDistance - distance) / maxDistance;
          
          if (distance < maxDistance) {
            this.x -= forceDirectionX * force * this.density;
            this.y -= forceDirectionY * force * this.density;
          } else {
            if (this.x !== this.originalX) {
              const dx = this.x - this.originalX;
              this.x -= dx / 20;
            }
            if (this.y !== this.originalY) {
              const dy = this.y - this.originalY;
              this.y -= dy / 20;
            }
          }
        } else {
          // Normal movement
          this.x += this.speedX;
          this.y += this.speedY;

          // Bounce off edges
          if (this.x > canvasEl.width || this.x < 0) {
            this.speedX = -this.speedX;
          }
          if (this.y > canvasEl.height || this.y < 0) {
            this.speedY = -this.speedY;
          }
        }
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
    }

    // Create particles
    const particlesArray: Particle[] = [];
    const particleCount = Math.min(150, window.innerWidth / 15); // Adjust based on screen size
    
    for (let i = 0; i < particleCount; i++) {
      particlesArray.push(new Particle());
    }

    // Mouse position
    let mouseX: number | null = null;
    let mouseY: number | null = null;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.x;
      mouseY = e.y;
    };

    const handleMouseOut = () => {
      mouseX = null;
      mouseY = null;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseout', handleMouseOut);

    // Connect particles with lines
    function connect() {
      if (!ctx) return;
      const maxDistance = 150;
      
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          const dx = particlesArray[a].x - particlesArray[b].x;
          const dy = particlesArray[a].y - particlesArray[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < maxDistance) {
            const opacity = 1 - (distance / maxDistance);
            const gradient = ctx.createLinearGradient(
              particlesArray[a].x, 
              particlesArray[a].y, 
              particlesArray[b].x, 
              particlesArray[b].y
            );
            
            gradient.addColorStop(0, `rgba(14, 165, 233, ${opacity * 0.3})`);
            gradient.addColorStop(1, `rgba(168, 85, 247, ${opacity * 0.3})`);
            
            ctx.strokeStyle = gradient;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
            ctx.stroke();
          }
        }
      }
    }

    // Animation loop
    function animate() {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvasEl.width, canvasEl.height);
      
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update(mouseX, mouseY);
        particlesArray[i].draw();
      }
      
      connect();
      requestAnimationFrame(animate);
    }

    animate();

    // Clean up
    return () => {
      window.removeEventListener('resize', setCanvasDimensions);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
    />
  );
};

export default Particles;