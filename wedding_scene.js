/**
 * Wedding ceremony - ENHANCED with professional venue graphics
 */
function drawWeddingScene(progress) {
    // Gorgeous garden/ceremony background with sunset
    const skyGrad = ctx.createLinearGradient(0, 0, 0, 150);
    skyGrad.addColorStop(0, '#FF8C42');
    skyGrad.addColorStop(0.3, '#FFB347');
    skyGrad.addColorStop(0.7, '#87CEEB');
    skyGrad.addColorStop(1, '#B0E0E6');
    ctx.fillStyle = skyGrad;
    ctx.fillRect(0, 0, 800, 150);
    
    // Golden sun glow
    const sunGrad = ctx.createRadialGradient(750, 50, 0, 750, 50, 80);
    sunGrad.addColorStop(0, 'rgba(255, 200, 0, 0.4)');
    sunGrad.addColorStop(1, 'rgba(255, 200, 0, 0)');
    ctx.fillStyle = sunGrad;
    ctx.fillRect(670, -30, 160, 160);
    
    // Garden grass
    const grassGrad = ctx.createLinearGradient(0, 150, 0, 400);
    grassGrad.addColorStop(0, '#90EE90');
    grassGrad.addColorStop(0.5, '#7CB342');
    grassGrad.addColorStop(1, '#558B2F');
    ctx.fillStyle = grassGrad;
    ctx.fillRect(0, 150, 800, 250);
    
    // Decorative shrubbery background
    ctx.fillStyle = '#2D5016';
    ctx.beginPath();
    ctx.moveTo(0, 200);
    ctx.quadraticCurveTo(100, 150, 200, 180);
    ctx.quadraticCurveTo(300, 140, 400, 170);
    ctx.quadraticCurveTo(500, 140, 600, 180);
    ctx.quadraticCurveTo(700, 150, 800, 200);
    ctx.lineTo(800, 250);
    ctx.lineTo(0, 250);
    ctx.closePath();
    ctx.fill();
    
    // Beautiful arch structure - white marble columns
    ctx.fillStyle = '#F5F5F5';
    ctx.shadowColor = 'rgba(0, 0, 0, 0.3)';
    ctx.shadowBlur = 8;
    ctx.fillRect(280, 80, 30, 280);
    ctx.fillRect(490, 80, 30, 280);
    ctx.shadowColor = 'transparent';
    
    // Column capitals (decorative tops)
    ctx.fillStyle = '#FFD700';
    ctx.fillRect(275, 75, 40, 12);
    ctx.fillRect(485, 75, 40, 12);
    
    // Column bases
    ctx.fillRect(275, 355, 40, 12);
    ctx.fillRect(485, 355, 40, 12);
    
    // Column fluting (vertical grooves)
    ctx.strokeStyle = '#E8E8E8';
    ctx.lineWidth = 2;
    for (let i = 0; i < 6; i++) {
        ctx.beginPath();
        ctx.moveTo(285 + i * 5, 90);
        ctx.lineTo(285 + i * 5, 355);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(495 + i * 5, 90);
        ctx.lineTo(495 + i * 5, 355);
        ctx.stroke();
    }
    
    // Magnificent arch curve (gold)
    const archGrad = ctx.createLinearGradient(310, 60, 310, 130);
    archGrad.addColorStop(0, '#FFE066');
    archGrad.addColorStop(0.5, '#FFD700');
    archGrad.addColorStop(1, '#FFA500');
    ctx.fillStyle = archGrad;
    ctx.beginPath();
    ctx.arc(400, 80, 120, Math.PI, 0);
    ctx.lineTo(400, 60);
    ctx.arc(400, 80, 100, 0, Math.PI);
    ctx.closePath();
    ctx.fill();
    
    // Arch shadow depth
    ctx.fillStyle = 'rgba(0, 0, 0, 0.2)';
    ctx.beginPath();
    ctx.arc(400, 85, 110, Math.PI, 0);
    ctx.lineTo(400, 75);
    ctx.arc(400, 85, 90, 0, Math.PI);
    ctx.closePath();
    ctx.fill();
    
    // Abundant lush flowers and greenery
    const flowerGroups = [
        {x: 300, y: 95, color: '#FF69B4'}, {x: 350, y: 70, color: '#FF1493'},
        {x: 400, y: 60, color: '#FF006E'}, {x: 450, y: 70, color: '#FF1493'},
        {x: 500, y: 95, color: '#FF69B4'},
        {x: 290, y: 340, color: '#FFD700'}, {x: 510, y: 340, color: '#FFD700'},
        {x: 270, y: 200, color: '#FF69B4'}, {x: 530, y: 200, color: '#FFB6C1'}
    ];
    
    flowerGroups.forEach(group => {
        // Flower petals (5 petals)
        for (let i = 0; i < 5; i++) {
            const angle = (i / 5) * Math.PI * 2;
            const petalX = group.x + Math.cos(angle) * 10;
            const petalY = group.y + Math.sin(angle) * 10;
            ctx.fillStyle = group.color;
            ctx.beginPath();
            ctx.ellipse(petalX, petalY, 5, 8, angle, 0, Math.PI * 2);
            ctx.fill();
        }
        
        // Flower center
        ctx.fillStyle = '#FFD700';
        ctx.beginPath();
        ctx.arc(group.x, group.y, 6, 0, Math.PI * 2);
        ctx.fill();
    });
    
    // Green foliage
    ctx.fillStyle = '#2D5016';
    ctx.beginPath();
    ctx.moveTo(240, 140);
    ctx.quadraticCurveTo(200, 180, 250, 250);
    ctx.quadraticCurveTo(290, 220, 270, 280);
    ctx.closePath();
    ctx.fill();
    
    ctx.beginPath();
    ctx.moveTo(560, 140);
    ctx.quadraticCurveTo(600, 180, 550, 250);
    ctx.quadraticCurveTo(510, 220, 530, 280);
    ctx.closePath();
    ctx.fill();
    
    // GROOM - Youssef in elegant formal suit (left side)
    const groomX = 320 + Math.max(0, progress - 0.3) * 25;
    const groomY = 250;
    
    // Suit jacket with premium gradient
    const suitGrad = ctx.createLinearGradient(groomX - 24, groomY, groomX + 24, groomY);
    suitGrad.addColorStop(0, '#0a0a0a');
    suitGrad.addColorStop(0.5, '#1a1a1a');
    suitGrad.addColorStop(1, '#0a0a0a');
    ctx.fillStyle = suitGrad;
    ctx.beginPath();
    ctx.moveTo(groomX - 24, groomY + 6);
    ctx.lineTo(groomX - 28, groomY + 48);
    ctx.lineTo(groomX - 10, groomY + 52);
    ctx.lineTo(groomX - 8, groomY + 10);
    ctx.arc(groomX, groomY + 8, 8, Math.PI, 0);
    ctx.lineTo(groomX + 8, groomY + 10);
    ctx.lineTo(groomX + 10, groomY + 52);
    ctx.lineTo(groomX + 28, groomY + 48);
    ctx.lineTo(groomX + 24, groomY + 6);
    ctx.closePath();
    ctx.fill();
    
    // Jacket button
    ctx.fillStyle = '#FFD700';
    ctx.beginPath();
    ctx.arc(groomX, groomY + 22, 1.5, 0, Math.PI * 2);
    ctx.fill();
    
    // White dress shirt
    ctx.fillStyle = '#FFF';
    ctx.fillRect(groomX - 10, groomY + 8, 20, 20);
    
    // Black bow tie
    ctx.fillStyle = '#000';
    ctx.fillRect(groomX - 9, groomY + 6, 5, 5);
    ctx.fillRect(groomX + 4, groomY + 6, 5, 5);
    ctx.fillRect(groomX - 4, groomY + 6.5, 8, 4);
    
    // Groom's head
    const groomHeadGrad = ctx.createRadialGradient(groomX - 2, groomY - 8, 3, groomX, groomY - 5, 20);
    groomHeadGrad.addColorStop(0, '#FFEBD6');
    groomHeadGrad.addColorStop(1, '#FFCBA4');
    ctx.fillStyle = groomHeadGrad;
    ctx.beginPath();
    ctx.arc(groomX, groomY - 10, 18, 0, Math.PI * 2);
    ctx.fill();
    
    // Dark hair
    ctx.fillStyle = '#3E2723';
    ctx.beginPath();
    ctx.arc(groomX, groomY - 22, 19, 0, Math.PI);
    ctx.fill();
    
    // Eyes
    ctx.fillStyle = '#8B6F47';
    ctx.beginPath();
    ctx.ellipse(groomX - 6, groomY - 12, 4.5, 5.5, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.ellipse(groomX + 6, groomY - 12, 4.5, 5.5, 0, 0, Math.PI * 2);
    ctx.fill();
    
    // Pupils
    ctx.fillStyle = '#000';
    ctx.beginPath();
    ctx.arc(groomX - 5, groomY - 12, 2, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(groomX + 7, groomY - 12, 2, 0, Math.PI * 2);
    ctx.fill();
    
    // Eye shine
    ctx.fillStyle = '#FFF';
    ctx.beginPath();
    ctx.arc(groomX - 4, groomY - 13.5, 1.5, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(groomX + 8, groomY - 13.5, 1.5, 0, Math.PI * 2);
    ctx.fill();
    
    // Smile
    ctx.strokeStyle = '#D4A574';
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    ctx.arc(groomX, groomY + 1, 7, 0, Math.PI);
    ctx.stroke();
    
    // Cheeks
    ctx.fillStyle = 'rgba(255, 120, 100, 0.35)';
    ctx.beginPath();
    ctx.ellipse(groomX - 13, groomY - 8, 5, 4, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.ellipse(groomX + 13, groomY - 8, 5, 4, 0, 0, Math.PI * 2);
    ctx.fill();
    
    // Arms and hands
    ctx.fillStyle = '#0a0a0a';
    ctx.fillRect(groomX - 26, groomY + 12, 8, 32);
    ctx.fillRect(groomX + 18, groomY + 12, 8, 32);
    
    ctx.fillStyle = '#FFCBA4';
    ctx.beginPath();
    ctx.arc(groomX - 22, groomY + 45, 6, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(groomX + 22, groomY + 45, 6, 0, Math.PI * 2);
    ctx.fill();
    
    // BRIDE - Vladislava in stunning white dress (right side)
    const brideX = 480 - Math.max(0, progress - 0.3) * 25;
    const brideY = 240;
    
    // Luxurious wedding dress
    const dressGrad = ctx.createLinearGradient(brideX, brideY, brideX, brideY + 80);
    dressGrad.addColorStop(0, '#FFFFFF');
    dressGrad.addColorStop(0.2, '#FFFBF5');
    dressGrad.addColorStop(0.5, '#FFF8F0');
    dressGrad.addColorStop(1, '#FFE4E1');
    ctx.fillStyle = dressGrad;
    
    // Dress bodice
    ctx.beginPath();
    ctx.moveTo(brideX, brideY + 6);
    ctx.bezierCurveTo(brideX - 20, brideY + 10, brideX - 26, brideY + 30, brideX - 28, brideY + 65);
    ctx.lineTo(brideX + 28, brideY + 65);
    ctx.bezierCurveTo(brideX + 26, brideY + 30, brideX + 20, brideY + 10, brideX, brideY + 6);
    ctx.closePath();
    ctx.fill();
    
    // Dress train
    if (progress > 0.2) {
        ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
        ctx.beginPath();
        ctx.moveTo(brideX - 28, brideY + 60);
        ctx.bezierCurveTo(brideX - 50, brideY + 80, brideX - 70 - (progress - 0.2) * 40, brideY + 100, brideX - 60 - (progress - 0.2) * 30, brideY + 140);
        ctx.bezierCurveTo(brideX - 40, brideY + 120, brideX - 30, brideY + 90, brideX - 28, brideY + 65);
        ctx.closePath();
        ctx.fill();
    }
    
    // Pearl details
    ctx.fillStyle = '#FFFACD';
    for (let i = 0; i < 10; i++) {
        ctx.beginPath();
        ctx.arc(brideX - 20 + i * 5, brideY + 18, 1, 0, Math.PI * 2);
        ctx.fill();
    }
    
    // Bride's head
    const brideHeadGrad = ctx.createRadialGradient(brideX - 3, brideY - 12, 3, brideX, brideY - 8, 19);
    brideHeadGrad.addColorStop(0, '#FFEBD6');
    brideHeadGrad.addColorStop(1, '#FFCAB9');
    ctx.fillStyle = brideHeadGrad;
    ctx.beginPath();
    ctx.arc(brideX, brideY - 10, 17, 0, Math.PI * 2);
    ctx.fill();
    
    // Flowing blonde hair
    ctx.fillStyle = '#D4A574';
    ctx.beginPath();
    ctx.arc(brideX, brideY - 23, 18, 0, Math.PI);
    ctx.fill();
    
    // Hair curls
    ctx.beginPath();
    ctx.moveTo(brideX - 16, brideY - 12);
    ctx.bezierCurveTo(brideX - 35, brideY, brideX - 40, brideY + 25, brideX - 28, brideY + 40);
    ctx.lineWidth = 6;
    ctx.strokeStyle = '#D4A574';
    ctx.stroke();
    
    ctx.beginPath();
    ctx.moveTo(brideX + 16, brideY - 12);
    ctx.bezierCurveTo(brideX + 35, brideY, brideX + 40, brideY + 25, brideX + 28, brideY + 40);
    ctx.stroke();
    
    // Veil
    ctx.fillStyle = 'rgba(255, 255, 255, 0.75)';
    ctx.beginPath();
    ctx.moveTo(brideX - 1, brideY - 24);
    ctx.bezierCurveTo(brideX - 50, brideY - 10, brideX - 55, brideY + 40, brideX - 40, brideY + 75);
    ctx.bezierCurveTo(brideX - 15, brideY + 55, brideX, brideY - 24, brideX + 1, brideY - 24);
    ctx.fill();
    
    ctx.beginPath();
    ctx.moveTo(brideX + 1, brideY - 24);
    ctx.bezierCurveTo(brideX + 50, brideY - 10, brideX + 55, brideY + 40, brideX + 40, brideY + 75);
    ctx.bezierCurveTo(brideX + 15, brideY + 55, brideX, brideY - 24, brideX - 1, brideY - 24);
    ctx.fill();
    
    // Tiara
    ctx.fillStyle = 'rgba(255, 215, 0, 0.5)';
    ctx.beginPath();
    ctx.arc(brideX, brideY - 27, 22, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.fillStyle = '#FFD700';
    for (let i = 0; i < 9; i++) {
        const angle = (i / 9) * Math.PI;
        const tipX = brideX + Math.cos(angle - Math.PI * 0.5) * 14;
        const tipY = brideY - 27 + Math.sin(angle - Math.PI * 0.5) * 14;
        ctx.beginPath();
        ctx.arc(tipX, tipY, 3, 0, Math.PI * 2);
        ctx.fill();
    }
    
    // Bride's eyes
    ctx.fillStyle = '#4A90E2';
    ctx.beginPath();
    ctx.ellipse(brideX - 6, brideY - 13, 5, 6, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.ellipse(brideX + 6, brideY - 13, 5, 6, 0, 0, Math.PI * 2);
    ctx.fill();
    
    // Pupils
    ctx.fillStyle = '#000';
    ctx.beginPath();
    ctx.arc(brideX - 5, brideY - 13, 2, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(brideX + 7, brideY - 13, 2, 0, Math.PI * 2);
    ctx.fill();
    
    // Eye shine
    ctx.fillStyle = '#FFF';
    ctx.beginPath();
    ctx.arc(brideX - 4, brideY - 14.5, 2, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(brideX + 8, brideY - 14.5, 2, 0, Math.PI * 2);
    ctx.fill();
    
    // Smile
    ctx.strokeStyle = '#D4A574';
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    ctx.arc(brideX, brideY + 1, 7, 0, Math.PI);
    ctx.stroke();
    
    // Cheeks
    ctx.fillStyle = 'rgba(255, 150, 160, 0.4)';
    ctx.beginPath();
    ctx.ellipse(brideX - 13, brideY - 7, 6, 5, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.ellipse(brideX + 13, brideY - 7, 6, 5, 0, 0, Math.PI * 2);
    ctx.fill();
    
    // Beautiful bouquet
    ctx.fillStyle = '#FF1493';
    ctx.beginPath();
    ctx.ellipse(brideX + 24, brideY + 38, 15, 20, 0.25, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.fillStyle = '#FF69B4';
    ctx.beginPath();
    ctx.ellipse(brideX + 20, brideY + 32, 12, 18, 0.25, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.fillStyle = '#FFD700';
    for (let i = 0; i < 5; i++) {
        ctx.beginPath();
        ctx.arc(brideX + 18 + i * 3, brideY + 28, 2, 0, Math.PI * 2);
        ctx.fill();
    }
    
    ctx.fillStyle = '#FFB6D9';
    for (let i = 0; i < 3; i++) {
        ctx.beginPath();
        ctx.arc(brideX + 22 + i * 2, brideY + 40, 1.5, 0, Math.PI * 2);
        ctx.fill();
    }
    
    // Falling confetti
    if (progress > 0.3) {
        for (let i = 0; i < 30; i++) {
            const confettiX = 400 + Math.sin((progress + i * 0.05) * Math.PI * 3) * 300;
            const confettiY = (progress - 0.3) / 0.7 * 300 + 80;
            
            if (confettiY < 400) {
                ctx.fillStyle = i % 3 === 0 ? '#FFD700' : i % 3 === 1 ? '#FF69B4' : '#87CEEB';
                ctx.save();
                ctx.translate(confettiX, confettiY);
                ctx.rotate((progress + i) * Math.PI * 2);
                ctx.fillRect(-2, -2, 4, 4);
                ctx.restore();
            }
        }
    }
    
    // Falling hearts
    if (progress > 0.2) {
        ctx.font = '48px Arial';
        for (let i = 0; i < 6; i++) {
            const heartX = 200 + Math.sin(progress * Math.PI + i * 0.5) * 250;
            const heartY = 60 + progress * 300;
            const heartAlpha = Math.max(0, 1 - (progress - 0.2) / 0.5);
            ctx.globalAlpha = heartAlpha * 0.8;
            ctx.fillText('💕', heartX - 15, heartY);
        }
        ctx.globalAlpha = 1;
    }
    
    // Main text message
    ctx.fillStyle = '#8B4513';
    ctx.font = 'italic bold 32px Arial';
    ctx.textAlign = 'center';
    ctx.shadowColor = 'rgba(255, 255, 255, 0.8)';
    ctx.shadowBlur = 6;
    ctx.fillText("💍 Forever starts now! 💍", 400, 380);
    ctx.shadowColor = 'transparent';
    ctx.textAlign = 'left';
}
