
const $=s=>document.querySelector(s);
// preloader A→Z
const pl=$('#pl');let ci=0;const iv=setInterval(()=>{ci+=2;pl.textContent=String.fromCharCode(65+Math.min(ci,25));if(ci>=25){clearInterval(iv);pl.textContent='Z';setTimeout(()=>$('#pre').classList.add('go'),350)}},55);
// cursor
const cur=$('#cur');addEventListener('pointermove',e=>{cur.style.left=e.clientX+'px';cur.style.top=e.clientY+'px'});
document.querySelectorAll('a,button,.po,.al div').forEach(e=>{e.onmouseenter=()=>cur.classList.add('big');e.onmouseleave=()=>cur.classList.remove('big')});
// marquee
const W=['براندك','فكرة','تصميم','فيديو','إعلان','هوية','مبيعات','انطلاقة','A2Z'];$('#mq').innerHTML=[...W,...W,...W,...W].map(x=>x+' <i>✺</i>').join(' ');
// reveal
const io=new IntersectionObserver(e=>e.forEach(x=>{if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}}),{threshold:.15});document.querySelectorAll('.rv').forEach(e=>io.observe(e));
// معرض الأعمال: سكرول يمين وشمال
const tr=$('#tr'),wpi=$('#wpi');
const step=()=>(tr.querySelector('.po')?.offsetWidth||380)+44;
$('#wn').onclick=()=>tr.scrollBy({left:-step(),behavior:'smooth'});
$('#wp').onclick=()=>tr.scrollBy({left:step(),behavior:'smooth'});
const prog=()=>{const mx=tr.scrollWidth-tr.clientWidth,p=mx>0?Math.min(1,Math.abs(tr.scrollLeft)/mx):0,w=Math.max(12,tr.clientWidth/tr.scrollWidth*100);wpi.style.width=w+'%';wpi.style.insetInlineStart=(p*(100-w))+'%'};
tr.addEventListener('scroll',prog,{passive:true});addEventListener('resize',prog);addEventListener('load',prog);prog();
let dn=false,sx=0,sl=0,mv=false;
tr.addEventListener('pointerdown',e=>{if(e.pointerType!=='mouse')return;dn=true;mv=false;sx=e.clientX;sl=tr.scrollLeft;tr.classList.add('drag');tr.setPointerCapture(e.pointerId)});
tr.addEventListener('pointermove',e=>{if(!dn)return;const dx=e.clientX-sx;if(Math.abs(dx)>4)mv=true;tr.scrollLeft=sl-dx});
const up=e=>{if(!dn)return;dn=false;tr.classList.remove('drag')};
tr.addEventListener('pointerup',up);tr.addEventListener('pointercancel',up);
tr.addEventListener('keydown',e=>{if(e.key==='ArrowLeft'){e.preventDefault();$('#wn').click()}if(e.key==='ArrowRight'){e.preventDefault();$('#wp').click()}});
// showreel (canvas "video")
const cv=$('#cv'),c=cv.getContext('2d'),W0=1280,H0=720,N='#041a4a',S='#f0b84a',D=5,T=[ 'الفكرة بتبدأ','بنبني براندك طوبة طوبة','وبنطلقه','طموحك ملوش حدود'];
const lg=new Image();lg.src=$('nav img').src;let t=0,play=true,last=performance.now();
const E=x=>x<.5?2*x*x:1-Math.pow(-2*x+2,2)/2;
function txt(s,y,u,col){c.save();c.globalAlpha=Math.min(1,u*4)*Math.min(1,(1-u)*6);c.fillStyle=col||'#f3ecda';c.font='110px Lalezar,Tajawal,sans-serif';c.textAlign='center';c.direction='rtl';c.fillText(s,W0/2,y+(1-Math.min(1,u*4))*50);c.restore()}
function dunes(u,off){c.fillStyle='#c98f2e';c.beginPath();c.moveTo(0,H0);for(let x=0;x<=W0;x+=20)c.lineTo(x,560+Math.sin(x/190+off)*26);c.lineTo(W0,H0);c.fill()}
function pyr(x,y,s){c.fillStyle=S;c.beginPath();c.moveTo(x-s,y);c.lineTo(x,y-s*.9);c.lineTo(x+s,y);c.fill();c.fillStyle='#d99a2b';c.beginPath();c.moveTo(x,y-s*.9);c.lineTo(x+s,y);c.lineTo(x+s*.2,y);c.fill()}
function frame(){const k=Math.floor(t/D)%4,u=(t%D)/D;c.clearRect(0,0,W0,H0);
 const g=c.createLinearGradient(0,0,0,H0);g.addColorStop(0,N);g.addColorStop(1,k==0?'#8a4b2a':'#0c3a9a');c.fillStyle=g;c.fillRect(0,0,W0,H0);
 for(let i=0;i<60;i++){c.fillStyle='rgba(255,255,255,'+(.3+.4*Math.sin(t*2+i))+')';c.fillRect((i*197)%W0,(i*83)%380,2.5,2.5)}
 if(k==0){const sy=620-E(u)*330;c.fillStyle='#ffd98a';c.beginPath();c.arc(W0/2,sy,110,0,7);c.fill();dunes(u,0);pyr(300,590,180);pyr(980,590,120);txt(T[0],200,u)}
 if(k==1){dunes(u,1);const n=Math.floor(E(u)*28);const rows=[7,6,5,4,3,2,1];let q=0;rows.forEach((r,ri)=>{for(let j=0;j<r;j++){if(q++<n){c.fillStyle=(j+ri)%2?S:'#e0a53a';c.fillRect(W0/2-r*30+j*60,610-ri*40,58,38)}}});txt(T[1],170,u)}
 if(k==2){dunes(u,2);const ry=640-E(u)*760,rx=W0/2+Math.sin(u*6)*16;for(let i=0;i<30;i++){c.fillStyle='rgba(255,'+(150+i*3)+',60,'+(1-i/30)+')';c.beginPath();c.arc(rx+Math.sin(i+t*9)*10,ry+60+i*11,22-i*.6,0,7);c.fill()}
  c.fillStyle='#f3ecda';c.beginPath();c.moveTo(rx,ry-70);c.quadraticCurveTo(rx+40,ry,rx+30,ry+60);c.lineTo(rx-30,ry+60);c.quadraticCurveTo(rx-40,ry,rx,ry-70);c.fill();c.fillStyle='#2b6be0';c.beginPath();c.arc(rx,ry,13,0,7);c.fill();c.fillStyle=S;c.beginPath();c.moveTo(rx-30,ry+60);c.lineTo(rx-58,ry+90);c.lineTo(rx-20,ry+55);c.moveTo(rx+30,ry+60);c.lineTo(rx+58,ry+90);c.lineTo(rx+20,ry+55);c.fill();txt(T[2],160,u)}
 if(k==3){c.save();c.globalAlpha=Math.min(1,u*3);const s=.7+E(Math.min(1,u*2))*.3;c.translate(W0/2,300);c.scale(s,s);c.filter='invert(1)';c.globalCompositeOperation='screen';if(lg.complete)c.drawImage(lg,-300,-300,600,600);c.restore();txt(T[3],600,u,S)}
 $('#pg').style.width=(t/(D*4)*100)+'%';const s=Math.floor(t);$('#tm').textContent='0:0'+Math.min(9,s)+' / 0:20'}
(function L(n){const d=(n-last)/1000;last=n;if(play)t=(t+d)%(D*4);frame();requestAnimationFrame(L)})(last);
$('#pp').onclick=()=>{play=!play;$('#pp').textContent=play?'❚❚':'▶'};
$('.bar').onclick=e=>{const r=e.currentTarget.getBoundingClientRect();t=(1-(e.clientX-r.left)/r.width)*D*4};
