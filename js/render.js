/* يبني أقسام الصفحة من data.js */
const G=id=>document.getElementById(id);
G('tr').innerHTML=WORKS.map(w=>`<div class="po"><img src="${IMG[w.img]}" alt="${w.t}" loading="lazy"><span class="d">${w.t}</span></div>`).join('');
G('pg2').innerHTML=PAINS.map((p,i)=>`<div class="pc rv"><i>!</i><h3 class="d">${p[0]}</h3><p>${p[1]}</p></div>`).join('');
G('al').innerHTML=SERVICES.map(s=>`<div><b class="lat">${s[0]}</b><h3 class="d">${s[1]}</h3><p>${s[2]}</p><ul>${s[3].map(x=>`<li>${x}</li>`).join('')}</ul></div>`).join('');
G('tl').innerHTML=TEACHERS.items.map(x=>`<li>${x}</li>`).join('');
G('tw').innerHTML=TEACHERS.who.map(x=>`<span>${x}</span>`).join('');
G('to').textContent=TEACHERS.old+' ج';G('tn').textContent=TEACHERS.now+' ج';G('tb').href=wa(TEACHERS.msg);
G('tk').innerHTML=OFFERS.map(o=>`<div class="tick ${o.hot?'h':''} rv">${o.hot?'<span class="hot">الأكثر طلباً</span>':''}<h3 class="d">${o.t}</h3><div class="dsc">${o.d}</div><ul>${o.list.map(x=>`<li>${x}</li>`).join('')}</ul><hr class="cut"><div class="pr"><div class="old lat">${o.old} ج</div><div class="n d">${o.now} ج</div></div><a class="btn" href="${wa('عايز أحجز: '+o.t+' بسعر '+o.now+' جنيه')}">احجز التذكرة</a></div>`).join('');
G('ind').innerHTML=INDUSTRIES.map(x=>`<span>${x}</span>`).join('');
G('cmp').innerHTML=`<div class="row hd"><div>مع A2Z</div><div>مع غيرنا</div></div>`+COMPARE.map(c=>`<div class="row"><div>${c[0]}</div><div>${c[1]}</div></div>`).join('');
G('stats').innerHTML=STATS.map(s=>`<div class="rv"><b class="lat" data-n="${s[0]}">0</b>${s[1]}</div>`).join('');
G('pr').innerHTML=STEPS.map((s,i)=>`<div class="pi rv"><b class="lat">0${i+1}</b><div><h3 class="d">${s[0]}</h3><p>${s[1]}</p></div></div>`).join('');
G('rg').innerHTML=PROMISES.map(r=>`<div class="rc rv"><h3 class="d">${r[0]}</h3><p>${r[1]}</p></div>`).join('');
G('fq').innerHTML=FAQ.map(f=>`<details class="rv"><summary class="d">${f[0]}</summary><p>${f[1]}</p></details>`).join('');
G('fs').innerHTML='<option value="">اختار الخدمة</option><option>باقة المدرسين</option>'+SERVICES.map(s=>`<option>${s[1]}</option>`).join('');
G('fm').onsubmit=e=>{e.preventDefault();open(wa(`أنا ${G('fn').value}\nالخدمة: ${G('fs').value}\n${G('ft').value}`),'_blank')};
G('cta').href=wa('أهلاً A2Z، عايز أبدأ مشروعي معاكم.');
/* عدّاد الأرقام */
const cio=new IntersectionObserver(es=>es.forEach(x=>{if(x.isIntersecting){const n=x.target,t=+n.dataset.n;let c=0;const i=setInterval(()=>{c=Math.min(t,c+Math.ceil(t/50));n.textContent=c+'+';if(c>=t)clearInterval(i)},30);cio.unobserve(n)}}));document.querySelectorAll('[data-n]').forEach(n=>cio.observe(n));
addEventListener('scroll',()=>{G('sp').style.width=scrollY/(document.body.scrollHeight-innerHeight)*100+'%'},{passive:true});
addEventListener('load',()=>dispatchEvent(new Event('resize')));

/* ويدجت واتساب: الرسالة المثبتة */
const wb=G('wbox'),wbtn=G('wa'),wd=G('wdot');
G('qs').innerHTML=QUICK.map(q=>`<a href="${wa(q[1])}" target="_blank" rel="noopener">${q[0]}</a>`).join('')+`<a href="https://wa.me/${PHONE}" target="_blank" rel="noopener" style="background:#fff">رسالة تانية</a>`;
const wopen=()=>{wb.hidden=false;wd.classList.add('off')};
wbtn.onclick=()=>{wb.hidden?wopen():wb.hidden=true};
G('wx').onclick=()=>wb.hidden=true;
setTimeout(()=>{let seen=false;try{seen=sessionStorage.getItem('wseen')}catch(e){}if(!seen&&innerWidth>800){try{sessionStorage.setItem('wseen','1')}catch(e){}wopen()}},8000);
