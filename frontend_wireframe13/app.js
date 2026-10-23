const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const KAT=['Tas','Kartu & Identitas','Barang Pribadi','Elektronik','Buku','Kunci','Dompet','Aksesori'];
const LOK=['Perpustakaan Pusat','Gedung Sains','Pusat Olahraga','Pusat Mahasiswa','Ruang Kuliah A','Kantin Utama'];
/* ---- Ilustrasi barang (SVG) ---- */

/* ---- Ilustrasi barang (SVG) sebagai cadangan ---- */
const S = (b) => `<svg viewBox="0 0 100 100" fill="none" stroke="#143c6e" stroke-width="3" stroke-linejoin="round" stroke-linecap="round">${b}</svg>`;

const SVG_IMG = {
  ransel: S('<path d="M35 25a15 15 0 0130 0"/><rect x="25" y="25" width="50" height="62" rx="16" fill="#2b4a73"/><rect x="34" y="55" width="32" height="22" rx="6" fill="#63b3f5"/><path d="M42 40h16"/>'),

  kartu: S('<rect x="12" y="26" width="76" height="50" rx="7" fill="#fff"/><rect x="12" y="26" width="76" height="12" fill="#63b3f5"/><circle cx="32" cy="55" r="8" fill="#d6e8fb"/><path d="M48 52h30M48 62h22"/>'),

  botol: S('<rect x="40" y="10" width="20" height="12" rx="3" fill="#143c6e"/><path d="M42 22h16l6 14v46a6 6 0 01-6 6H42a6 6 0 01-6-6V36z" fill="#63b3f5"/><path d="M38 50h24M38 64h24"/>'),

  earbuds: S('<rect x="20" y="40" width="60" height="42" rx="14" fill="#fff"/><path d="M20 58h60"/><circle cx="50" cy="58" r="3" fill="#63b3f5"/><path d="M34 40c-6-14 6-26 14-20M66 40c6-14-6-26-14-20"/>'),

  buku: S('<path d="M22 14h52a6 6 0 016 6v62a6 6 0 01-6 6H22z" fill="#63b3f5"/><path d="M22 14v74M32 14v74"/><rect x="42" y="28" width="26" height="16" rx="3" fill="#fff"/>'),

  payung: S('<path d="M10 52a40 36 0 0180 0c-7-8-14-8-20 0-7-8-13-8-20 0-7-8-13-8-20 0-7-8-14-8-20 0z" fill="#8a97a8"/><path d="M50 52v32a7 7 0 01-14 0"/>'),

  kunci: S('<circle cx="30" cy="40" r="18" fill="#63b3f5"/><circle cx="30" cy="40" r="6" fill="#fff"/><path d="M46 48l36 36M68 70l8-8M76 78l8-8" stroke-width="5"/>'),

  dompet: S('<rect x="12" y="26" width="76" height="52" rx="9" fill="#2b4a73"/><path d="M12 38h76"/><rect x="60" y="48" width="28" height="18" rx="6" fill="#63b3f5"/>'),

  jam: S('<path d="M38 8h24l4 22H34zM34 70h32l-4 22H38z" fill="#2b4a73"/><circle cx="50" cy="50" r="24" fill="#fff"/><path d="M50 36v14l9 6"/>'),

  laptop: S('<rect x="22" y="22" width="56" height="38" rx="4" fill="#d6e8fb"/><path d="M10 72h80l-6 8H16z" fill="#63b3f5"/>')
};

/* ---- Foto barang asli ---- */
function fotoBarang(namaFile, deskripsi, cadangan) {
  return `<img
    class="item-photo"-
    src="${namaFile}"
    alt="${deskripsi}"
    loading="lazy"
    onerror="this.onerror=null;this.outerHTML=SVG_IMG['${cadangan}']"
  >`;
}

const IMG = {
  ransel: '<img src="tas.jpg" alt="Tas hitam" class="item-photo">',
  kartu: '<img src="kartu.jpg" alt="Kartu mahasiswa" class="item-photo">',
  botol: '<img src="botol biru.jpg" alt="Botol minum biru" class="item-photo">',
  earbuds: '<img src="airpods.jpg" alt="Earbuds" class="item-photo">',
  buku: '<img src="buku.jpg" alt="Buku" class="item-photo">',
  payung: '<img src="payung.jpg" alt="Payung" class="item-photo">',
  kunci: '<img src="kunci.jpg" alt="Kunci" class="item-photo">',
  dompet: '<img src="dompet coklat.jpg" alt="Dompet cokelat" class="item-photo">',
  jam: '<img src="jam.jpg" alt="Jam tangan" class="item-photo">',
  laptop: '<img src="laptop.jpg" alt="Laptop" class="item-photo">'
};

/* ---- Data contoh ---- */
let items=[
{id:1048,nama:'Ransel Hitam',kat:'Tas',lok:'Perpustakaan Pusat',tgl:'+026-10-18',jenis:'Hilang',st:'Aktif',img:'ransel'},
{id:1047,nama:'Kartu Tanda Mahasiswa',kat:'Kartu & Identitas',lok:'Gedung Sains',tgl:'2026-10-17',jenis:'Ditemukan',st:'Kemungkinan Cocok',img:'kartu'},
{id:1046,nama:'Botol Minum Biru',kat:'Barang Pribadi',lok:'Pusat Olahraga',tgl:'2026-10-16',jenis:'Ditemukan',st:'Aktif',img:'botol'},
{id:1045,nama:'Penyuara Telinga Nirkabel',kat:'Elektronik',lok:'Pusat Mahasiswa',tgl:'2026-10-15',jenis:'Hilang',st:'Kemungkinan Cocok',img:'earbuds'},
{id:1044,nama:'Buku Kalkulus',kat:'Buku',lok:'Ruang Kuliah A',tgl:'2026-10-14',jenis:'Hilang',st:'Dikembalikan',img:'buku'},
{id:1043,nama:'Payung Abu-abu',kat:'Barang Pribadi',lok:'Kantin Utama',tgl:'2026-10-13',jenis:'Ditemukan',st:'Aktif',img:'payung'},
{id:1042,nama:'Kunci Motor + Gantungan',kat:'Kunci',lok:'Pusat Olahraga',tgl:'2026-10-12',jenis:'Ditemukan',st:'Aktif',img:'kunci'},
{id:1041,nama:'Dompet Cokelat',kat:'Dompet',lok:'Kantin Utama',tgl:'2026-10-11',jenis:'Hilang',st:'Kemungkinan Cocok',img:'dompet'},
{id:1040,nama:'Jam Tangan Hitam',kat:'Aksesori',lok:'Gedung Sains',tgl:'2026-10-10',jenis:'Hilang',st:'Aktif',img:'jam'},
{id:1039,nama:'Laptop Abu-abu',kat:'Elektronik',lok:'Perpustakaan Pusat',tgl:'2026-10-09',jenis:'Ditemukan',st:'Dikembalikan',img:'laptop'}];
const fmt=d=>new Date(d).toLocaleDateString('id-ID',{day:'numeric',month:'short',year:'numeric'});
const bc=s=>s=='Dikembalikan'?'d':s=='Kemungkinan Cocok'?'k':'';
const kode=i=>'TT-'+i.id;
function toast(m){const t=$('#toast');t.textContent=m;t.hidden=false;clearTimeout(t._t);t._t=setTimeout(()=>t.hidden=true,2600)}
/* ---- Komponen kartu ---- */
const card=i=>`<article class="item"><div class="thumb"><span class="tag ${i.jenis=='Hilang'?'h':''}">${i.jenis.toUpperCase()}</span>${IMG[i.img]}</div>
<div class="ib"><span class="cat">${i.kat}</span><h4>${i.nama}</h4><div class="meta"><span>📍 ${i.lok}</span><span>📅 ${fmt(i.tgl)}</span></div>
<div class="ifoot"><span class="badge ${bc(i.st)}">● ${i.st}</span><button data-detail="${i.id}">Lihat detail ›</button></div></div></article>`;
/* ---- Beranda ---- */
function home(){
 $('#heroStats').innerHTML=[['248','Laporan bulan ini'],['164','Barang dikembalikan'],['42','Lokasi kampus'],['66%','Tingkat keberhasilan']].map(s=>`<div><b>${s[0]}</b><small>${s[1]}</small></div>`).join('');
 $('#latest').innerHTML=items.slice(0,3).map(card).join('');
}
/* ---- Cari ---- */
function opts(el,list,all){el.innerHTML=(all?`<option value="">${all}</option>`:'<option value="">Pilih</option>')+list.map(x=>`<option>${x}</option>`).join('')}
function cari(){
 const q=$('#fq').value.toLowerCase(),k=$('#fk').value,l=$('#fl').value,j=$('#fj').value,s=$('#fs').value;
 const r=items.filter(i=>(!q||(i.nama+i.lok+i.kat).toLowerCase().includes(q))&&(!k||i.kat==k)&&(!l||i.lok==l)&&(!j||i.jenis==j)&&(!s||i.st==s));
 $('#count').textContent=r.length+' laporan ditemukan';
 $('#results').innerHTML=r.length?r.map(card).join(''):'<p class="muted">Tidak ada laporan yang cocok.</p>';
}
/* ---- Buat laporan ---- */
let fotoURL=null;
function setupForm(){
 opts($('#bk'),KAT);opts($('#bl'),LOK);
 $('#foto').onchange=e=>{const f=e.target.files[0];if(!f)return;if(f.size>5e6)return toast('Ukuran foto maksimal 5 MB');fotoURL=URL.createObjectURL(f);$('#dropTxt').innerHTML=`<img src="${fotoURL}">`};
 $('#draft').onclick=()=>toast('Draf tersimpan');
 $('#form').onsubmit=e=>{e.preventDefault();const f=e.target,d=new FormData(f),k=d.get('kategori');
  const map={'Tas':'ransel','Kartu & Identitas':'kartu','Buku':'buku','Elektronik':'laptop','Kunci':'kunci','Dompet':'dompet','Aksesori':'jam'};
  items.unshift({id:items[0].id+1,nama:d.get('nama'),kat:k,lok:d.get('lokasi'),tgl:d.get('tgl'),jenis:d.get('jenis'),st:'Aktif',img:map[k]||'botol'});
  f.reset();$('#dropTxt').innerHTML='⬆<br><b>Pilih foto atau seret ke area ini</b><small>PNG atau JPG, maksimal 5 MB</small>';
  toast('Laporan berhasil dikirim!');location.hash='cari'};
}
/* ---- Pengelola ---- */
const stat=(t,v,s)=>`<div class="stat"><small>${t}</small><b>${v}</b><small class="blue">${s}</small></div>`;
function admin(){
 $('#today').textContent=new Date().toLocaleDateString('id-ID',{weekday:'long',day:'numeric',month:'long',year:'numeric'}).toUpperCase();
 $('#dStats').innerHTML=stat('Total Laporan',248,'+12 bulan ini')+stat('Menunggu Verifikasi',18,'Perlu ditinjau')+stat('Kemungkinan Cocok',34,'+8 minggu ini')+stat('Barang Dikembalikan',164,'66% dari total');
 const bl=[['Mei',29,17],['Jun',33,20],['Jul',25,28],['Agu',35,22],['Sep',43,30],['Okt',38,33]];
 $('#dChart').innerHTML=bl.map(b=>`<div class="g"><i style="height:${b[1]*2}%"></i><i style="height:${b[2]*2}%"></i><em>${b[0]}</em></div>`).join('');
 $('#dCat').innerHTML=[['Elektronik',78],['Kartu & Identitas',62],['Tas',48],['Barang Pribadi',35],['Buku',22]].map(c=>`<div class="cr"><div><span>${c[0]}</span><b>${c[1]}</b></div><div class="bar"><div style="width:${c[1]/78*100}%"></div></div></div>`).join('');
 $('#rStats').innerHTML=stat('Laporan Masuk',114,'+8,4% dari periode ini')+stat('Barang Hilang',61,'53,5% dari periode ini')+stat('Barang Ditemukan',53,'46,5% dari periode ini')+stat('Berhasil Dikembalikan',76,'66,7% dari periode ini');
 const bln=['Jan','Feb','Mar','Apr','Mei','Jun','Jul','Agu','Sep','Okt'],v=[35,45,38,53,41,56,48,59,50,63];
 $('#rChart').innerHTML=v.map((n,i)=>`<div class="g"><i style="height:${n/80*100}%"></i><em>${bln[i]}</em></div>`).join('');
 $('#rLok').innerHTML=[['Perpustakaan Pusat',18,15,24,'72,7%'],['Pusat Mahasiswa',14,12,18,'69,2%'],['Gedung Sains',11,10,13,'61,9%'],['Pusat Olahraga',9,8,10,'58,8%'],['Kantin Utama',6,7,8,'61,5%']].map(r=>`<tr>${r.map(c=>`<td>${c}</td>`).join('')}</tr>`).join('');
 kelola();
}
function kelola(){
 const q=($('#kq').value||$('#aq').value).toLowerCase(),s=$('#ks').value;
 const r=items.filter(i=>(!q||(kode(i)+i.nama).toLowerCase().includes(q))&&(!s||i.st==s));
 $('#kCount').textContent=`Menampilkan ${r.length} dari ${items.length} laporan`;
 $('#kBody').innerHTML=r.map(i=>`<tr><td><b>${kode(i)}</b></td><td><div class="tb">${IMG[i.img]}<span><b>${i.nama}</b><small>${i.kat}</small></span></div></td>
 <td><span class="tag" style="position:static">${i.jenis.toUpperCase()}</span></td><td><b>${i.lok}</b><small>${fmt(i.tgl)}</small></td><td><span class="badge ${bc(i.st)}">● ${i.st}</span></td>
 <td><select data-ubah="${i.id}">${['Aktif','Kemungkinan Cocok','Dikembalikan'].map(x=>`<option ${x==i.st?'selected':''}>${x}</option>`).join('')}</select></td></tr>`).join('');
}
/* ---- Routing ---- */
function route(){
 const h=(location.hash||'#beranda').slice(1),isA=['dasbor','kelola','rekap'].includes(h);
 $('#public').hidden=isA;$('#admin').hidden=!isA;
 $$('.page').forEach(p=>p.classList.toggle('on',p.id=='p-'+h));
 $$('[data-nav]').forEach(a=>a.classList.toggle('on',a.dataset.nav==h||(a.dataset.nav=='admin'&&isA)));
 if(h=='beranda')home();if(h=='cari')cari();if(isA)admin();scrollTo(0,0);
}
document.addEventListener('click',e=>{
 const d=e.target.closest('[data-detail]');
 if(d){const i=items.find(x=>x.id==d.dataset.detail);$('#mbox').innerHTML=`<div class="thumb"><span class="tag">${i.jenis.toUpperCase()}</span>${IMG[i.img]}</div><div class="ib"><span class="cat">${i.kat}</span><h4>${i.nama}</h4>
 <p>📍 ${i.lok}</p><p>📅 ${fmt(i.tgl)}</p><p>Status: <span class="badge ${bc(i.st)}">${i.st}</span></p><p>Kode laporan: <b>${kode(i)}</b></p>
 <div class="ifoot"><button class="btn outline" onclick="toast('Permintaan verifikasi dikirim ke petugas')">Ini barang saya</button><button class="btn primary" id="tutup">Tutup</button></div></div>`;$('#modal').hidden=false}
 if(e.target.id=='tutup'||e.target.id=='modal')$('#modal').hidden=true;
 const j=e.target.closest('[data-jenis]');if(j)setTimeout(()=>{$(`input[name=jenis][value=${j.dataset.jenis}]`).checked=true});
});
document.addEventListener('change',e=>{if(e.target.dataset.ubah){items.find(i=>i.id==e.target.dataset.ubah).st=e.target.value;toast('Status diperbarui');kelola()}});
document.addEventListener('DOMContentLoaded',()=>{
 opts($('#fk'),KAT,'Semua kategori');opts($('#fl'),LOK,'Semua lokasi');setupForm();
 ['fq','fk','fl','fj','fs'].forEach(id=>$('#'+id).addEventListener('input',cari));
 ['kq','ks','aq'].forEach(id=>$('#'+id).addEventListener('input',kelola));
 $('#heroSearch').onsubmit=e=>{e.preventDefault();$('#fq').value=$('#heroQ').value;location.hash='cari'};
 $('#unduh').onclick=()=>{const c='Nomor,Barang,Jenis,Lokasi,Tanggal,Status\n'+items.map(i=>[kode(i),i.nama,i.jenis,i.lok,i.tgl,i.st].join(',')).join('\n');
  const a=document.createElement('a');a.href=URL.createObjectURL(new Blob([c],{type:'text/csv'}));a.download='laporan-titiktemu.csv';a.click()};
 addEventListener('hashchange',route);route();
});
/* ---- Autentikasi (simulasi front end, data di localStorage) ---- */
const ST={g(k,d){try{return JSON.parse(localStorage.getItem(k))??d}catch(e){return d}},s(k,v){try{v==null?localStorage.removeItem(k):localStorage.setItem(k,JSON.stringify(v))}catch(e){}}};
let SES=ST.g('tt_ses',null),ROLE='user';
const ADMINS=[{nama:'Nafisa Husna',email:'admin.nafisa@polibatam.ac.id',pass:'admin123',role:'admin'},{nama:'Safira',email:'admin.safira@polibatam.ac.id',pass:'admin123',role:'admin'}];
const users=()=>[{nama:'Nafisa Husna',email:'nafisa@polibatam.ac.id',pass:'123456',role:'user'},{nama:'Safira',email:'safira@polibatam.ac.id',pass:'123456',role:'user'},...ST.g('tt_users',[])];
function masuk(u){SES={nama:u.nama,email:u.email,role:u.role};ST.s('tt_ses',SES);location.hash=u.role=='admin'?'dasbor':'beranda';route()}
function showHint(){const L=ROLE=='admin'?ADMINS:users().slice(0,2);$('#hint').innerHTML='Akun demo Polibatam (klik untuk mengisi otomatis):<br>'+L.map((u,i)=>`<a class="link" href="#" data-fill="${i}">${u.nama}</a> · ${u.email} / ${u.pass}`).join('<br>')}
function fillUser(){
 $('#gName').textContent=SES.nama.split(' ')[0];
 $('.user b').textContent=SES.nama;$('.user small').textContent=SES.role=='admin'?'Petugas':'Mahasiswa';
 $('.user .avatar').textContent=SES.nama.split(' ').map(x=>x[0]).join('').slice(0,2).toUpperCase();
 $('.petugas b').textContent=SES.nama;$('[data-nav=admin]').hidden=SES.role!='admin';
}
const _r=route;
route=function(){
 const h=(location.hash||'#beranda').slice(1),auth=h=='masuk'||h=='daftar';
 $('#auth').hidden=!auth;
 if(!SES&&!auth){location.hash='masuk';return}
 if(SES&&auth){location.hash=SES.role=='admin'?'dasbor':'beranda';return}
 if(SES&&SES.role!='admin'&&['dasbor','kelola','rekap'].includes(h)){location.hash='beranda';return}
 if(auth){$('#public').hidden=$('#admin').hidden=true;$('#authMasuk').hidden=h!='masuk';$('#authDaftar').hidden=h!='daftar';
  $('#sw').innerHTML=h=='masuk'?'Belum punya akun? <a href="#daftar">Daftar</a>':'Sudah punya akun? <a href="#masuk">Masuk</a>';scrollTo(0,0);return}
 fillUser();_r();
};
document.addEventListener('DOMContentLoaded',()=>{
 $$('.seg button').forEach(b=>b.onclick=()=>{ROLE=b.dataset.role;$$('.seg button').forEach(x=>x.classList.toggle('on',x==b));
  $('#aTitle').textContent=ROLE=='admin'?'Masuk sebagai Admin':'Masuk ke TitikTemu';
  showHint()});
 showHint();
 $('#hint').onclick=e=>{const a=e.target.closest('[data-fill]');if(!a)return;e.preventDefault();const u=(ROLE=='admin'?ADMINS:users().slice(0,2))[a.dataset.fill];$('#lEmail').value=u.email;$('#lPass').value=u.pass};
 $$('[data-eye]').forEach(b=>b.onclick=()=>{const i=b.previousElementSibling;i.type=i.type=='password'?'text':'password'});
 $('#authMasuk').onsubmit=e=>{e.preventDefault();const em=$('#lEmail').value.trim().toLowerCase(),pw=$('#lPass').value;
  const u=ROLE=='admin'?ADMINS.find(x=>x.email==em&&x.pass==pw):users().find(x=>x.email==em&&x.pass==pw);
  u?masuk(u):toast('Email atau kata sandi salah')};
 $('#authDaftar').onsubmit=e=>{e.preventDefault();const em=$('#rEmail').value.trim().toLowerCase();
  if($('#rPass').value!=$('#rPass2').value)return toast('Kata sandi tidak sama');
  if(users().some(x=>x.email==em))return toast('Email sudah terdaftar');
  ST.s('tt_users',[...ST.g('tt_users',[]),{nama:$('#rNama').value.trim(),email:em,pass:$('#rPass').value,role:'user'}]);
  e.target.reset();toast('Akun berhasil dibuat, silakan masuk');location.hash='masuk'};
 $('#google').onclick=()=>{toast('Simulasi: masuk dengan Google');masuk(users()[0])};
 $('#lupa').onclick=e=>{e.preventDefault();toast('Tautan reset dikirim ke email (simulasi)')};
 $$('#logout,#logoutA').forEach(b=>b.onclick=()=>{SES=null;ST.s('tt_ses',null)});
});
