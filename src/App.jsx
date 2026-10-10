import React, { useEffect, useMemo, useState } from 'react';
import { Link, NavLink, Route, Routes, useLocation } from 'react-router-dom';
import {
  ArrowDownRight, ArrowLeft, ArrowRight, ArrowUpRight, CalendarDays, Check,
  ChevronDown, Clock3, Flower2, HandHeart, Heart, Images, Info, Landmark,
  Languages, MapPin, Menu, Phone, PlayCircle, Search, ShieldCheck, Sparkles,
  Utensils, X, Youtube, Instagram, Facebook, Mail, BellRing, CalendarCheck,
  CircleHelp, BookOpen, ClipboardList, FileText, LayoutDashboard, ImagePlus,
  Settings2, Users, Wallet, ExternalLink, CheckCircle2, CircleArrowRight,
  Gift, Flame, Navigation, Download, MessageCircle, Sun, MoonStar, Building2
} from 'lucide-react';

const ASSET = '/images/';
const socials = {
  instagram: 'https://www.instagram.com/shirdi_sai_dham/',
  facebook: 'https://www.facebook.com/ShirdiSaiDhamDharmathsansthaPutligharBhopal/',
  youtube: 'https://www.youtube.com/@shirdisaidhambhopal'
};

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'मंदिर परिचय', to: '/about' },
  { label: 'दर्शन एवं आरती', to: '/darshan' },
  { label: 'पूजा बुकिंग', to: '/puja' },
  { label: 'उत्सव', to: '/festivals' },
  { label: 'नारायण सेवा', to: '/seva' },
  { label: 'गैलरी', to: '/gallery' },
  { label: 'संपर्क', to: '/contact' },
];

function usePageTop() {
  const location = useLocation();
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }); }, [location.pathname]);
}

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const location = useLocation();
  useEffect(() => setMobileOpen(false), [location.pathname]);
  return <>
    <div className="topbar">
      <div className="container topbar-inner">
        <div className="top-location"><MapPin size={14} /> <span>Putlighar, Bhopal, Madhya Pradesh</span></div>
        <div className="top-right">
          <span className="top-detail"><Phone size={13} /> Contact details to be confirmed</span>
          <a href={socials.instagram} aria-label="Instagram" target="_blank" rel="noreferrer"><Instagram size={15}/></a>
          <a href={socials.facebook} aria-label="Facebook" target="_blank" rel="noreferrer"><Facebook size={15}/></a>
          <a href={socials.youtube} aria-label="YouTube" target="_blank" rel="noreferrer"><Youtube size={16}/></a>
          <span className="om-chip">ॐ साईं राम</span>
        </div>
      </div>
    </div>
    <header className="site-header">
      <div className="container header-inner">
        <Link to="/" className="brand" aria-label="Shirdi Sai Dham home">
          <div className="brand-seal"><span>ॐ</span><small>साईं</small></div>
          <div className="brand-copy"><strong>SHIRDI SAI DHAM</strong><span>DHARMATH SANSTHA</span><small>PUTLIGHAR, BHOPAL</small></div>
        </Link>
        <nav className={`main-nav ${mobileOpen ? 'open' : ''}`} aria-label="Main navigation">
          {navItems.map((item) => <NavLink key={item.to} to={item.to} end={item.to === '/'} className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>{item.label}</NavLink>)}
          <NavLink to="/news" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>सूचनाएँ</NavLink>
        </nav>
        <div className="header-actions">
          <button className="icon-button search-trigger" aria-label="Search" onClick={() => setSearchOpen(v => !v)}><Search size={19}/></button>
          <Link className="btn btn-gold btn-small donate-header" to="/donation"><Heart size={16}/> दान करें</Link>
          <button className="icon-button mobile-menu-trigger" aria-label="Toggle menu" onClick={() => setMobileOpen(v => !v)}>{mobileOpen ? <X/> : <Menu/>}</button>
        </div>
      </div>
      {searchOpen && <div className="search-panel"><div className="container search-panel-inner"><Search size={18}/><input autoFocus placeholder="दर्शन, पूजा, उत्सव खोजें…" onKeyDown={(e) => { if (e.key === 'Enter') { const q=e.currentTarget.value.toLowerCase(); window.location.href=q.includes('पूजा')||q.includes('puja')?'/puja':q.includes('उत्सव')||q.includes('festival')?'/festivals':'/darshan'; }}}/><button className="btn btn-dark btn-small" onClick={() => window.location.href='/darshan'}>खोजें <ArrowRight size={15}/></button><button className="icon-button" onClick={() => setSearchOpen(false)} aria-label="Close search"><X size={17}/></button></div></div>}
    </header>
  </>;
}

function Footer() {
  return <>
    <section className="newsletter-band"><div className="container newsletter-inner"><div className="newsletter-icon"><BellRing size={22}/></div><div><p className="eyebrow eyebrow-light">साईं सेवा • साईं स्मरण</p><h2>मंदिर की नई सूचनाओं से जुड़े रहें</h2><p>उत्सव, आरती और महत्वपूर्ण घोषणाओं की जानकारी यहाँ देखें।</p></div><Link to="/news" className="btn btn-cream">सभी सूचनाएँ देखें <ArrowRight size={16}/></Link></div></section>
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand"><Link to="/" className="brand brand-footer"><div className="brand-seal"><span>ॐ</span><small>साईं</small></div><div className="brand-copy"><strong>SHIRDI SAI DHAM</strong><span>DHARMATH SANSTHA</span><small>PUTLIGHAR, BHOPAL</small></div></Link><p>श्रद्धा • सबूरी • सेवा</p><p className="footer-muted">साईं बाबा की कृपा से सेवा, शांति और सद्भाव का संदेश।</p><div className="social-row"><a href={socials.instagram} aria-label="Instagram" target="_blank" rel="noreferrer"><Instagram size={17}/></a><a href={socials.facebook} aria-label="Facebook" target="_blank" rel="noreferrer"><Facebook size={17}/></a><a href={socials.youtube} aria-label="YouTube" target="_blank" rel="noreferrer"><Youtube size={18}/></a></div></div>
        <div><h3>त्वरित लिंक</h3><Link to="/darshan">दर्शन एवं आरती</Link><Link to="/puja">पूजा एवं बुकिंग</Link><Link to="/festivals">उत्सव एवं कार्यक्रम</Link><Link to="/seva">नारायण सेवा</Link><Link to="/gallery">फोटो गैलरी</Link></div>
        <div><h3>सेवा एवं सहयोग</h3><Link to="/donation">दान / सहयोग</Link><Link to="/news">सूचनाएँ</Link><Link to="/contact">मंदिर पहुँचें</Link><Link to="/admin-preview">Admin demo preview</Link><Link to="/faqs">सामान्य प्रश्न</Link></div>
        <div className="footer-contact"><h3>संपर्क करें</h3><p><MapPin size={16}/> Putlighar, Bhopal, Madhya Pradesh</p><p><Phone size={16}/> आधिकारिक नंबर की पुष्टि लंबित</p><p><Mail size={16}/> आधिकारिक ईमेल की पुष्टि लंबित</p><p className="footer-note">पता, संपर्क और ट्रस्ट विवरण प्रकाशन से पहले सत्यापित किए जाएँ।</p></div>
      </div>
      <div className="container footer-bottom"><span>© {new Date().getFullYear()} Shirdi Sai Dham · Demo Preview</span><div><Link to="/privacy">Privacy</Link><Link to="/terms">Terms</Link><Link to="/donation-policy">Donation Policy</Link></div></div>
      <div className="preview-disclaimer"><Info size={14}/> Demo website: content and timings require trust approval. No real donation or booking is processed.</div>
    </footer>
  </>;
}

function Layout({ children }) {
  usePageTop();
  return <><Header/><main>{children}</main><Footer/><div className="mobile-quickbar"><Link to="/darshan"><Clock3 size={17}/><span>आरती</span></Link><Link to="/puja"><CalendarCheck size={17}/><span>पूजा</span></Link><Link to="/donation"><Heart size={17}/><span>दान</span></Link><Link to="/contact"><MapPin size={17}/><span>रास्ता</span></Link></div></>;
}

function Eyebrow({ children, light=false }) { return <div className={`eyebrow ${light?'eyebrow-light':''}`}><span className="eyebrow-dot"/>{children}<span className="eyebrow-dot"/></div>; }
function SectionHeading({ eyebrow, title, subtitle, centered=true, light=false }) {
  return <div className={`section-heading ${centered?'centered':''} ${light?'heading-light':''}`}>{eyebrow && <Eyebrow light={light}>{eyebrow}</Eyebrow>}<h2>{title}</h2>{subtitle && <p>{subtitle}</p>}<div className="heading-ornament"><span/><span className="ornament-star">✦</span><span/></div></div>;
}
function PageHero({ kicker, title, subtitle, image= 'temple.jpg' }) {
  return <section className="page-hero" style={{backgroundImage:`linear-gradient(90deg, rgba(43,17,9,.88), rgba(43,17,9,.34)), url(${ASSET+image})`}}><div className="container page-hero-content"><p className="breadcrumbs"><Link to="/">Home</Link><span>/</span>{kicker}</p><Eyebrow light>{kicker}</Eyebrow><h1>{title}</h1>{subtitle && <p className="page-hero-subtitle">{subtitle}</p>}</div><div className="page-hero-mandala">ॐ</div></section>;
}
function ServiceCard({ icon: Icon, title, subtitle, body, to, accent='gold' }) {
  return <article className="service-card"><div className={`service-icon ${accent}`}><Icon size={23}/></div><h3>{title}</h3>{subtitle && <p className="card-subtitle">{subtitle}</p>}<p>{body}</p><Link to={to} className="text-link">और जानें <ArrowRight size={15}/></Link></article>;
}
function ImageFeatureCard({ image, eyebrow, title, body, to, action='जानकारी देखें', tag }) {
  return <article className="image-feature-card"><div className="feature-image-wrap"><img src={ASSET+image} alt="" loading="lazy"/>{tag && <span className="image-tag">{tag}</span>}</div><div className="feature-card-body"><p className="eyebrow mini-eyebrow">{eyebrow}</p><h3>{title}</h3><p>{body}</p><Link to={to} className="btn btn-outline btn-small">{action}<ArrowRight size={15}/></Link></div></article>;
}

const thursdayAarti = [
  {name:'मंगला आरती', time:'सुबह 5:30 बजे', icon:Sun, hour:5, minute:30},
  {name:'मध्याह्न आरती', time:'दोपहर 12:00 बजे', icon:Sun, hour:12, minute:0},
  {name:'धूप आरती', time:'शाम 7:00 बजे', icon:Flame, hour:19, minute:0},
  {name:'सत्संग आरती', time:'रात 9:30 बजे', icon:BookOpen, hour:21, minute:30},
  {name:'शयन आरती', time:'रात 11:00 बजे', icon:MoonStar, hour:23, minute:0},
];
const regularAarti = [
  {name:'मंगला आरती', time:'सुबह 6:30 बजे', icon:Sun, hour:6, minute:30},
  {name:'मध्याह्न आरती', time:'दोपहर 12:00 बजे', icon:Sun, hour:12, minute:0},
  {name:'धूप आरती', time:'शाम 7:00 बजे', icon:Flame, hour:19, minute:0},
  {name:'शयन आरती', time:'रात 9:30 बजे', icon:MoonStar, hour:21, minute:30},
];
function AartiPanel({ full=false }) {
  const [dayMode, setDayMode] = useState('auto');
  const [now, setNow] = useState(new Date());
  useEffect(() => { const i=setInterval(()=>setNow(new Date()), 1000); return ()=>clearInterval(i); }, []);
  const isThursday = dayMode === 'thursday' || (dayMode === 'auto' && now.getDay() === 4);
  const rows = isThursday ? thursdayAarti : regularAarti;
  const next = useMemo(() => {
    const current = new Date(now);
    for (const row of rows) {
      const candidate = new Date(current);
      candidate.setHours(row.hour, row.minute, 0, 0);
      if (candidate > current) return {row, candidate};
    }
    const candidate = new Date(current); candidate.setDate(candidate.getDate()+1); candidate.setHours(rows[0].hour, rows[0].minute, 0, 0);
    return {row:rows[0],candidate};
  }, [now, isThursday]);
  const seconds = Math.max(0, Math.floor((next.candidate-now)/1000));
  const pad=(n)=>String(n).padStart(2,'0');
  return <div className={`aarti-panel ${full?'aarti-panel-full':''}`}>
    <div className="aarti-panel-head"><div><p className="eyebrow mini-eyebrow">DAILY PROGRAMME</p><h3>आज की आरती</h3></div><span className="date-pill"><CalendarDays size={14}/>{now.toLocaleDateString('hi-IN',{weekday:'short', day:'2-digit', month:'short'})}</span></div>
    <div className="aarti-tabs"><button onClick={()=>setDayMode('thursday')} className={dayMode==='thursday'?'selected':''}>गुरुवार का समय</button><button onClick={()=>setDayMode('regular')} className={dayMode==='regular'?'selected':''}>अन्य दिनों का समय</button></div>
    <div className="aarti-list">{rows.map((row)=>{const Icon=row.icon;return <div className="aarti-row" key={row.name}><span className="aarti-row-icon"><Icon size={17}/></span><span className="aarti-name">{row.name}</span><span className="aarti-time">{row.time}</span></div>})}</div>
    <div className="next-aarti-box"><div className="next-aarti-lamp"><Flame size={22}/></div><div className="next-aarti-label"><span>अगली आरती</span><strong>{next.row.name}</strong></div><div className="countdown"><strong>{pad(Math.floor(seconds/3600))}</strong><small>घंटे</small></div><div className="countdown"><strong>{pad(Math.floor((seconds%3600)/60))}</strong><small>मिनट</small></div><div className="countdown"><strong>{pad(seconds%60)}</strong><small>सेकंड</small></div></div>
    <p className="tiny-note"><Info size={13}/> Demo schedule — publication से पहले trust से पुष्टि आवश्यक।</p>
  </div>;
}

function HomePage() {
  const quickLinks = [
    {icon:Landmark,title:'मंदिर दर्शन',sub:'समय व जानकारी',to:'/darshan'},
    {icon:CalendarCheck,title:'पूजा बुकिंग',sub:'पूजा हेतु आवेदन',to:'/puja'},
    {icon:HandHeart,title:'नारायण सेवा',sub:'भंडारा व सेवा',to:'/seva'},
    {icon:Gift,title:'उत्सव कार्यक्रम',sub:'आगामी उत्सव',to:'/festivals'},
    {icon:Heart,title:'दान / सहयोग',sub:'सेवा में योगदान',to:'/donation'},
    {icon:Images,title:'फोटो गैलरी',sub:'मंदिर की झलकियाँ',to:'/gallery'},
    {icon:PlayCircle,title:'वीडियो दर्शन',sub:'भक्ति व आरती',to:'/gallery'},
    {icon:Phone,title:'संपर्क करें',sub:'पता व मार्ग',to:'/contact'},
  ];
  return <>
    <section className="home-hero"><div className="hero-photo"/><div className="hero-overlay"/><div className="container hero-grid"><div className="hero-copy"><p className="hero-mantra">॥ ॐ साईं राम ॥ <span>श्रद्धा • सबूरी • सेवा</span></p><h1>शिर्डी साईं धाम</h1><p className="hero-trust">धर्मार्थ संस्था</p><p className="hero-location">पुतलीघर, भोपाल</p><div className="hero-divider"><span/><Sparkles size={15}/><span/></div><p className="hero-intro">साईं की कृपा से हर जीवन में शांति, सेवा<br className="desktop-only"/> और सद्भाव का प्रकाश फैले।</p><div className="hero-actions"><Link to="/darshan" className="btn btn-gold"><Landmark size={17}/> दर्शन समय देखें <ArrowRight size={16}/></Link><Link to="/puja" className="btn btn-hero-outline"><CalendarDays size={17}/> पूजा बुकिंग <ArrowRight size={16}/></Link></div><div className="hero-trust-points"><span><ShieldCheck size={15}/> जानकारी आधारित</span><span><Heart size={15}/> सेवा और सद्भाव</span></div></div><div className="hero-schedule"><AartiPanel/></div></div><div className="hero-bottom-pattern"/></section>
    <section className="quicklinks-wrap"><div className="container quicklinks">{quickLinks.map(({icon:Icon,title,sub,to})=><Link to={to} className="quicklink" key={title}><span className="quicklink-icon"><Icon size={22}/></span><strong>{title}</strong><small>{sub}</small></Link>)}</div></section>
    <section className="section section-services"><div className="container"><SectionHeading eyebrow="साईं सेवा" title="हमारी प्रमुख सेवाएँ" subtitle="दर्शन से लेकर सेवा और उत्सव तक — जरूरी जानकारी एक ही स्थान पर।"/><div className="service-grid"><ServiceCard icon={Landmark} title="मंदिर दर्शन एवं आरती" subtitle="Darshan & Aarti" body="दैनिक आरती समय, गुरुवार का विशेष कार्यक्रम और दर्शन से जुड़ी जानकारी।" to="/darshan"/><ServiceCard icon={Flower2} title="पूजा एवं अनुष्ठान" subtitle="Puja & Rituals" body="विभिन्न पूजाओं के विवरण और मंदिर से बुकिंग संबंधी जानकारी।" to="/puja" accent="maroon"/><ServiceCard icon={Utensils} title="नारायण सेवा (भंडारा)" subtitle="Seva & Bhandara" body="नारायण सेवा की जानकारी और सेवा में सहभागिता के तरीके।" to="/seva" accent="green"/><ServiceCard icon={CalendarDays} title="उत्सव एवं कार्यक्रम" subtitle="Festivals & Events" body="मंदिर के प्रमुख उत्सव, कार्यक्रम और नवीनतम घोषणाएँ।" to="/festivals" accent="purple"/></div></div></section>
    <section className="section section-warm"><div className="container intro-split"><div className="intro-copy"><Eyebrow>हमारा परिचय</Eyebrow><h2>श्रद्धा, सबूरी और सेवा का संगम</h2><p>शिर्डी साईं धाम, पुतलीघर, भोपाल के बारे में प्रमाणित जानकारी, दर्शन समय और सेवा से जुड़ी सूचनाएँ भक्तों तक सरलता से पहुँचाने का एक डिजिटल प्रयास।</p><p className="text-muted">मंदिर का विस्तृत इतिहास और ट्रस्ट का आधिकारिक परिचय स्वीकृत सामग्री मिलने पर जोड़ा जाएगा।</p><Link to="/about" className="btn btn-maroon">मंदिर परिचय <ArrowRight size={16}/></Link></div><Link to="/about" className="temple-image-card"><img src={ASSET+'temple.jpg'} alt="मंदिर का दृश्य — demo image" loading="lazy"/><span className="temple-image-caption"><Landmark size={16}/> मंदिर की झलक <ArrowUpRight size={16}/></span></Link></div></section>
    <section className="section"><div className="container"><div className="section-header-row"><div><SectionHeading centered={false} eyebrow="आस्था के उत्सव" title="उत्सव एवं कार्यक्रम" subtitle="मंदिर के प्रमुख उत्सवों से जुड़ी जानकारी।"/></div><Link to="/festivals" className="text-link">सभी उत्सव देखें <ArrowRight size={16}/></Link></div><div className="feature-grid three"><ImageFeatureCard image="festival-sai.jpg" eyebrow="प्रमुख उत्सव" title="श्री रामनवमी उत्सव" body="कार्यक्रम की तिथि एवं विवरण मंदिर द्वारा पुष्टि के बाद प्रकाशित होंगे।" to="/festivals" tag="EVENT"/><ImageFeatureCard image="festival-ganesh.jpg" eyebrow="उत्सव" title="गणेशोत्सव" body="उत्सव कार्यक्रम, आरती और घोषणाओं की जानकारी।" to="/festivals" tag="FESTIVAL"/><ImageFeatureCard image="festival-aarti.jpg" eyebrow="विशेष कार्यक्रम" title="विजयादशमी उत्सव" body="मंदिर के विशेष आयोजनों और पिछले उत्सवों की झलकियाँ।" to="/festivals" tag="EVENT"/></div></div></section>
    <section className="section section-donation"><div className="container donation-banner"><div className="donation-banner-art"><div className="donation-art-ring"><HandHeart size={65}/></div><span>ॐ साईं राम</span></div><div className="donation-banner-copy"><Eyebrow light>सेवा ही साधना</Eyebrow><h2>नारायण सेवा में सहभागिता करें</h2><p>भंडारा और सेवा गतिविधियों की जानकारी प्राप्त करें। Donation सुविधा वास्तविक trust approval और payment setup के बाद ही सक्रिय होगी।</p><div className="hero-actions"><Link to="/seva" className="btn btn-cream">सेवा के बारे में जानें <ArrowRight size={16}/></Link><Link to="/donation" className="btn btn-translucent">दान पेज देखें <Heart size={16}/></Link></div></div></div></section>
    <section className="section section-warm"><div className="container"><SectionHeading eyebrow="भक्ति की झलकियाँ" title="फोटो एवं वीडियो गैलरी" subtitle="मंदिर और उत्सवों की झलकियाँ एक ही जगह।"/><div className="gallery-preview-grid"><Link to="/gallery" className="gallery-preview large"><img src={ASSET+'hero-sai.jpg'} alt="साईं बाबा की झलक"/><span>साईं दर्शन <ArrowUpRight size={17}/></span></Link><Link to="/gallery" className="gallery-preview"><img src={ASSET+'aarti.jpg'} alt="आरती की झलक"/><span>आरती <ArrowUpRight size={17}/></span></Link><Link to="/gallery" className="gallery-preview"><img src={ASSET+'puja.jpg'} alt="पूजा की झलक"/><span>पूजा <ArrowUpRight size={17}/></span></Link><Link to="/gallery" className="gallery-preview"><img src={ASSET+'seva.jpg'} alt="सेवा की झलक"/><span>नारायण सेवा <ArrowUpRight size={17}/></span></Link></div><div className="center-action"><Link to="/gallery" className="btn btn-outline">पूरी गैलरी देखें <ArrowRight size={16}/></Link></div></div></section>
    <section className="section section-last"><div className="container visit-cta"><div className="visit-cta-icon"><MapPin size={28}/></div><div><h2>मंदिर आने की योजना बना रहे हैं?</h2><p>दर्शन समय और स्थान से जुड़ी जानकारी देखें। सटीक पता और संपर्क विवरण की पुष्टि प्रकाशन से पहले आवश्यक है।</p></div><Link to="/contact" className="btn btn-maroon">Visit मंदिर <ArrowRight size={16}/></Link></div></section>
  </>;
}

function AboutPage() {
  return <><PageHero kicker="मंदिर परिचय" title="श्रद्धा और सेवा का स्थान" subtitle="Shirdi Sai Dham, Dharmath Sanstha — Putlighar, Bhopal" image="temple.jpg"/><section className="section"><div className="container content-split"><div className="content-main"><Eyebrow>हमारे बारे में</Eyebrow><h2>साईं बाबा के संदेश से प्रेरित</h2><p>यह पेज शिर्डी साईं धाम, पुतलीघर, भोपाल के आधिकारिक परिचय के लिए तैयार किया गया है। मंदिर का सत्यापित इतिहास, स्थापना विवरण, ट्रस्ट का उद्देश्य और सेवा गतिविधियाँ, मंदिर प्रबंधन से स्वीकृत सामग्री मिलने पर यहाँ प्रकाशित की जाएँगी।</p><p>हमारा लक्ष्य है कि भक्तों को दर्शन, आरती, पूजा, उत्सव और सेवा संबंधी जानकारी स्पष्ट, सुलभ और भरोसेमंद तरीके से उपलब्ध हो।</p><div className="values-grid"><div className="value-card"><div><Heart/></div><h3>श्रद्धा</h3><p>भक्ति और विनम्रता।</p></div><div className="value-card"><div><Sun/></div><h3>सबूरी</h3><p>धैर्य और सद्भाव।</p></div><div className="value-card"><div><HandHeart/></div><h3>सेवा</h3><p>समाज के प्रति सहयोग।</p></div></div></div><aside className="content-aside"><img className="aside-image" src={ASSET+'temple.jpg'} alt="मंदिर की झलक — demo asset"/><div className="note-card"><ShieldCheck size={20}/><div><strong>Content verification</strong><p>स्थापना वर्ष, trust registration details और management names आधिकारिक approval के बाद ही जोड़े जाएँ।</p></div></div></aside></div></section><section className="section section-warm"><div className="container"><SectionHeading eyebrow="मंदिर से जुड़ें" title="भक्तों के लिए उपयोगी जानकारी"/><div className="service-grid three"><ServiceCard icon={Clock3} title="दर्शन एवं आरती" body="गुरुवार और अन्य दिनों की आरती का समय देखें।" to="/darshan"/><ServiceCard icon={CalendarDays} title="उत्सव कार्यक्रम" body="आगामी त्योहारों और विशेष आयोजनों की जानकारी।" to="/festivals"/><ServiceCard icon={MapPin} title="मंदिर पहुँचें" body="सत्यापित location और contact details देखें।" to="/contact"/></div></div></section></>;
}

function DarshanPage() {
  return <><PageHero kicker="दर्शन एवं आरती" title="दर्शन समय और दैनिक आरती" subtitle="गुरुवार एवं अन्य दिनों का कार्यक्रम — मंदिर से पुष्टि आवश्यक।" image="aarti.jpg"/><section className="section"><div className="container darshan-layout"><div><SectionHeading centered={false} eyebrow="Daily programme" title="आज की आरती का कार्यक्रम" subtitle="दिन चुनकर schedule देखें। अंतिम समय और किसी विशेष दिन के बदलाव की पुष्टि मंदिर से करें।"/><AartiPanel full/><div className="info-card inline-note"><Info size={19}/><div><strong>विशेष दिवस</strong><p>उत्सव, पर्व या मंदिर के विशेष कार्यक्रमों के कारण समय बदल सकता है। यात्रा से पहले मंदिर की आधिकारिक सूचना देखें।</p></div></div></div><aside className="darshan-aside"><div className="aside-gold-top"><Flame size={28}/><span>॥ ॐ साईं राम ॥</span></div><h3>दर्शन से पहले ध्यान दें</h3><ul className="check-list"><li><CheckCircle2/> नियमित समय की पुष्टि करें।</li><li><CheckCircle2/> विशेष उत्सव की सूचना देखें।</li><li><CheckCircle2/> पूजा संबंधी पूछताछ पहले करें।</li><li><CheckCircle2/> सम्मानजनक आचरण रखें।</li></ul><Link to="/contact" className="btn btn-maroon btn-full">मंदिर से संपर्क करें <ArrowRight size={16}/></Link></aside></div></section><section className="section section-warm"><div className="container"><SectionHeading eyebrow="दर्शन अनुभव" title="भक्ति के साथ जुड़ें"/><div className="service-grid three"><ServiceCard icon={BookOpen} title="साईं सतचरित्र पाठ" body="पाठ की उपलब्धता और प्रक्रिया के लिए enquiry करें।" to="/puja"/><ServiceCard icon={CalendarCheck} title="पूजा संबंधी जानकारी" body="मंदिर में उपलब्ध पूजाओं और अनुरोध की प्रक्रिया देखें।" to="/puja"/><ServiceCard icon={PlayCircle} title="वीडियो दर्शन" body="मंदिर के official channel पर उपलब्ध videos देखें।" to="/gallery"/></div></div></section></>;
}

const pujas = [
  {name:'श्री साईं सत्यनारायण पूजा',desc:'पूजा की उपलब्धता, आवश्यक सामग्री और बुकिंग प्रक्रिया जानने के लिए अनुरोध भेजें।',icon:Flower2},
  {name:'साईं सतचरित्र पाठ',desc:'पाठ संबंधी जानकारी और संभावित तिथि के लिए मंदिर प्रबंधन से पूछताछ करें।',icon:BookOpen},
  {name:'वाहन पूजा',desc:'वाहन पूजा की उपलब्धता और समय मंदिर से पुष्टि करके तय करें।',icon:Landmark},
  {name:'गृह प्रवेश पूजन',desc:'गृह प्रवेश पूजन की प्रक्रिया, तिथि और अन्य आवश्यक जानकारी प्राप्त करें।',icon:Building2},
];
function PujaPage() {
  const [selected,setSelected] = useState(pujas[0].name);
  const [submitted,setSubmitted] = useState(false);
  const [form,setForm] = useState({name:'',phone:'',date:'',notes:''});
  const onChange = e => setForm({...form,[e.target.name]:e.target.value});
  const submit = e => { e.preventDefault(); setSubmitted(true); };
  return <><PageHero kicker="पूजा एवं बुकिंग" title="पूजा हेतु पूछताछ करें" subtitle="उपलब्ध पूजा सेवाओं की जानकारी लें और मंदिर से संपर्क का अनुरोध भेजें।" image="puja.jpg"/><section className="section"><div className="container"><SectionHeading eyebrow="Puja & rituals" title="मंदिर में उपलब्ध पूजाएँ" subtitle="फीस, उपलब्धता, समय और booking confirmation मंदिर से सत्यापित किए जाएँगे।"/><div className="puja-cards">{pujas.map(({name,desc,icon:Icon})=><button key={name} className={`puja-card ${selected===name?'selected':''}`} onClick={()=>{setSelected(name);setSubmitted(false);}}><span className="service-icon"><Icon size={24}/></span><span className="puja-card-title">{name}</span><span className="puja-card-desc">{desc}</span><span className="puja-select">{selected===name?<><Check size={14}/> चुनी गई</>:'पूछताछ चुनें'}</span></button>)}</div></div></section><section className="section section-warm"><div className="container form-layout"><div><Eyebrow>Booking enquiry</Eyebrow><h2>पूजा संबंधी अनुरोध भेजें</h2><p>Demo form में details भरकर interaction देख सकते हैं। अभी कोई वास्तविक request सेव या भेजी नहीं जाती।</p><div className="form-benefits"><div><CheckCircle2/> पूजा विकल्प चुनें</div><div><CheckCircle2/> पसंदीदा तारीख बताएँ</div><div><CheckCircle2/> मंदिर से उपलब्धता confirm करें</div></div><div className="note-card"><ShieldCheck size={20}/><div><strong>स्पष्ट booking policy</strong><p>मंदिर द्वारा पुष्टि और payment terms तय किए बिना कोई booking confirmed नहीं मानी जाएगी।</p></div></div></div><div className="form-card"><div className="form-card-heading"><span className="service-icon"><CalendarCheck/></span><div><h3>पूजा enquiry form</h3><p>Fields marked * are required.</p></div></div>{submitted ? <div className="success-state"><span><CheckCircle2 size={32}/></span><h3>Demo request preview</h3><p>धन्यवाद, {form.name || 'भक्त'}। यह demo है; आपकी enquiry कहीं भेजी या सेव नहीं हुई।</p><div className="summary-list"><div><span>पूजा</span><strong>{selected}</strong></div><div><span>पसंदीदा तारीख</span><strong>{form.date || 'अभी तय नहीं'}</strong></div><div><span>मोबाइल</span><strong>{form.phone || '—'}</strong></div></div><button className="btn btn-maroon btn-full" onClick={()=>setSubmitted(false)}>फिर से भरें</button></div> : <form onSubmit={submit} className="form-stack"><label>चुनी गई पूजा<input value={selected} readOnly/></label><div className="field-row"><label>पूरा नाम *<input name="name" required value={form.name} onChange={onChange} placeholder="अपना नाम लिखें"/></label><label>मोबाइल नंबर *<input name="phone" type="tel" required minLength="10" maxLength="13" value={form.phone} onChange={onChange} placeholder="10 digit mobile"/></label></div><label>पसंदीदा तारीख<input name="date" type="date" value={form.date} onChange={onChange}/></label><label>अतिरिक्त जानकारी<textarea name="notes" rows="3" value={form.notes} onChange={onChange} placeholder="कोई विशेष अनुरोध (optional)"/></label><button className="btn btn-maroon btn-full" type="submit">Demo enquiry preview <ArrowRight size={16}/></button><p className="form-disclaimer"><ShieldCheck size={14}/> यह demo form है; अभी data submit/store नहीं होता।</p></form>}</div></div></section></>;
}

const festivalItems = [
  {title:'श्री रामनवमी उत्सव',image:'festival-sai.jpg',category:'प्रमुख उत्सव',desc:'कार्यक्रम की तिथि, आरती और अन्य विवरण मंदिर की पुष्टि के बाद प्रकाशित होंगे।'},
  {title:'गणेशोत्सव',image:'festival-ganesh.jpg',category:'वार्षिक उत्सव',desc:'विशेष पूजा, आरती और उत्सव संबंधी सूचनाएँ यहाँ उपलब्ध होंगी।'},
  {title:'विजयादशमी उत्सव',image:'festival-aarti.jpg',category:'प्रमुख उत्सव',desc:'उत्सव कार्यक्रम और श्रद्धालुओं के लिए जरूरी सूचनाएँ।'},
  {title:'गोपाल काला उत्सव',image:'seva.jpg',category:'धार्मिक कार्यक्रम',desc:'आयोजन, सेवा और कार्यक्रम के समय का विवरण।'},
  {title:'पुष्पोत्सव',image:'gallery-sai.jpg',category:'विशेष सजावट',desc:'फूलों की सजावट और उत्सव की फोटो गैलरी।'},
];
function FestivalsPage() {
  const [filter,setFilter] = useState('सभी');
  const filtered = festivalItems.filter(e=>filter==='सभी'||e.category===filter);
  const categories = ['सभी','प्रमुख उत्सव','वार्षिक उत्सव','धार्मिक कार्यक्रम','विशेष सजावट'];
  return <><PageHero kicker="उत्सव एवं कार्यक्रम" title="आस्था के रंग, उत्सव के संग" subtitle="मंदिर के प्रमुख त्योहारों और कार्यक्रमों की जानकारी।" image="festival-aarti.jpg"/><section className="section"><div className="container"><SectionHeading eyebrow="Temple calendar" title="प्रमुख उत्सव" subtitle="नीचे दिए गए उत्सव client द्वारा साझा की गई शुरुआती सूची पर आधारित हैं। तारीखें और कार्यक्रम confirm होने पर जोड़े जाएँगे।"/><div className="filter-tabs">{categories.map(c=><button key={c} className={filter===c?'active':''} onClick={()=>setFilter(c)}>{c}</button>)}</div><div className="feature-grid three">{filtered.map((e,i)=><article className="event-card" key={e.title}><div className="event-image"><img src={ASSET+e.image} alt="" loading="lazy"/><span className="event-number">{String(i+1).padStart(2,'0')}</span></div><div className="event-body"><span className="event-category">{e.category}</span><h3>{e.title}</h3><p>{e.desc}</p><div className="event-footer"><span><CalendarDays size={14}/> तिथि की पुष्टि लंबित</span><Link to="/contact" aria-label="उत्सव के बारे में पूछें"><ArrowUpRight size={18}/></Link></div></div></article>)}</div></div></section><section className="section section-warm"><div className="container event-notice"><div className="notice-icon"><BellRing size={25}/></div><div><h3>उत्सव संबंधी नई सूचना</h3><p>विशेष आयोजन की जानकारी के लिए मंदिर की आधिकारिक सूचनाएँ और social media देखें।</p></div><Link to="/news" className="btn btn-maroon">सूचनाएँ देखें <ArrowRight size={16}/></Link></div></section></>;
}

function SevaPage() {
  return <><PageHero kicker="नारायण सेवा" title="सेवा ही सच्ची साधना" subtitle="नारायण सेवा और भंडारे से जुड़ी जानकारी एवं सहभागिता।" image="seva.jpg"/><section className="section"><div className="container content-split"><div className="content-main"><Eyebrow>सेवा एवं भंडारा</Eyebrow><h2>नारायण सेवा (भंडारा)</h2><p>भंडारा और नारायण सेवा से जुड़ी जानकारी भक्तों तक स्पष्ट रूप से पहुँचाने के लिए यह पेज तैयार किया गया है। सेवा के दिन, समय, भागीदारी और contact process को मंदिर प्रबंधन से पुष्टि के बाद प्रकाशित किया जाएगा।</p><p>यदि आप भोजन सेवा या अन्य गतिविधि में सहभागिता करना चाहते हैं, तो मंदिर से आधिकारिक संपर्क के माध्यम से विवरण प्राप्त करें।</p><Link to="/contact" className="btn btn-maroon">सेवा के बारे में पूछें <ArrowRight size={16}/></Link></div><aside className="seva-photo-card"><img src={ASSET+'seva.jpg'} alt="सेवा की झलक — demo image"/><div className="seva-photo-caption"><HandHeart size={25}/><div><strong>सेवा • सहयोग • सद्भाव</strong><span>वास्तविक फोटो और जानकारी approval के बाद जोड़ी जाएँगी।</span></div></div></aside></div></section><section className="section section-warm"><div className="container"><SectionHeading eyebrow="Seva information" title="सेवा में सहभागिता के तरीके"/><div className="service-grid three"><ServiceCard icon={Utensils} title="भंडारा सेवा" body="समय, व्यवस्था और सहभागिता के लिए मंदिर से संपर्क करें।" to="/contact" accent="green"/><ServiceCard icon={HandHeart} title="सेवा में सहयोग" body="मंदिर की स्वीकृत सेवा गतिविधियों के बारे में जानकारी लें।" to="/donation"/><ServiceCard icon={Heart} title="सामान्य सहयोग" body="Donation प्रक्रिया और अधिकृत विवरण की जानकारी देखें।" to="/donation" accent="maroon"/></div></div></section><section className="section"><div className="container info-card inline-note"><Info size={20}/><div><strong>समय की पुष्टि आवश्यक</strong><p>शेयर किए गए प्रारंभिक संदेश में Narayan Seva के कुछ अलग-अलग समय दिए गए हैं। इन्हें वेबसाइट पर final करने से पहले मंदिर से स्पष्ट लिखित confirmation लेना आवश्यक है।</p></div></div></section></>;
}

function DonationPage() {
  const [amount,setAmount] = useState('501');
  const [custom,setCustom] = useState('');
  const [purpose,setPurpose] = useState('सामान्य सहयोग');
  const [attempted,setAttempted] = useState(false);
  const displayAmount = amount==='custom' ? custom : amount;
  return <><PageHero kicker="दान एवं सहयोग" title="सेवा में सहभागी बनें" subtitle="ट्रस्ट की अधिकृत donation प्रक्रिया से जुड़ी जानकारी।" image="seva.jpg"/><section className="section"><div className="container donation-layout"><div className="donation-content"><Eyebrow>सेवा एवं सहयोग</Eyebrow><h2>आपका सहयोग, सेवा के संकल्प के साथ</h2><p>इस demo में donation selection का interface दिखाया गया है। वास्तविक payment collection, official trust details, authorised bank account और receipt process सत्यापित होने के बाद ही सक्रिय किए जाएँगे।</p><div className="donation-purpose-list"><div><span className="purpose-icon"><HandHeart/></span><div><strong>नारायण सेवा</strong><p>भोजन सेवा से जुड़ी गतिविधियाँ।</p></div></div><div><span className="purpose-icon"><Flower2/></span><div><strong>उत्सव सहयोग</strong><p>मंदिर के स्वीकृत उत्सव कार्यक्रम।</p></div></div><div><span className="purpose-icon"><Landmark/></span><div><strong>सामान्य सहयोग</strong><p>ट्रस्ट द्वारा निर्धारित सामान्य सेवा उद्देश्य।</p></div></div></div><div className="note-card warning-note"><ShieldCheck size={20}/><div><strong>भरोसेमंद donation process</strong><p>किसी भी payment से पहले trust की official identity, payment details और receipt policy की पुष्टि करें।</p></div></div></div><div className="donation-card"><div className="donation-card-top"><div className="donation-symbol"><HandHeart size={31}/></div><div><span className="eyebrow mini-eyebrow">DEMO ONLY</span><h3>दान / सहयोग</h3></div></div><p>सहयोग की राशि चुनें</p><div className="amount-options">{['101','501','1001','2100'].map(v=><button key={v} className={amount===v?'active':''} onClick={()=>{setAmount(v);setCustom('');setAttempted(false);}}>₹{v}</button>)}<button className={amount==='custom'?'active':''} onClick={()=>setAmount('custom')}>अन्य राशि</button></div>{amount==='custom'&&<label className="custom-amount">अपनी राशि (₹)<input type="number" min="1" value={custom} onChange={e=>setCustom(e.target.value)} placeholder="जैसे 1500"/></label>}<label className="select-label">दान का उद्देश्य<select value={purpose} onChange={e=>setPurpose(e.target.value)}><option>सामान्य सहयोग</option><option>नारायण सेवा</option><option>भंडारा सेवा</option><option>उत्सव सहयोग</option></select></label><div className="donation-recap"><span>चुनी गई राशि</span><strong>₹{displayAmount||'0'}</strong></div><button className="btn btn-gold btn-full" onClick={()=>setAttempted(true)}>Demo payment preview <ArrowRight size={16}/></button>{attempted&&<div className="demo-alert"><Info size={17}/><span>यह केवल UI demo है। कोई payment शुरू नहीं हुई और कोई राशि collect नहीं की गई।</span></div>}<p className="secure-note"><ShieldCheck size={14}/> Real payment gateway अभी configured नहीं है।</p></div></div></section><section className="section section-warm"><div className="container"><SectionHeading eyebrow="Transparency" title="Donation system में क्या शामिल होगा?" subtitle="Production phase में trust approval और gateway verification के बाद।"/><div className="service-grid three"><ServiceCard icon={ShieldCheck} title="Verified payment" body="Authorised payment gateway और server-side payment verification." to="/donation-policy"/><ServiceCard icon={FileText} title="Receipt & records" body="Transaction reference, receipt status और admin reconciliation." to="/donation-policy" accent="maroon"/><ServiceCard icon={Users} title="Trust-managed account" body="Settlement account और access authorised trust representatives के नियंत्रण में." to="/donation-policy" accent="green"/></div></div></section></>;
}

const galleryItems = [
  {title:'साईं बाबा के दर्शन',image:'hero-sai.jpg',category:'साईं दर्शन'},
  {title:'आरती की झलक',image:'aarti.jpg',category:'आरती'},
  {title:'पूजा एवं अनुष्ठान',image:'puja.jpg',category:'पूजा'},
  {title:'नारायण सेवा',image:'seva.jpg',category:'सेवा'},
  {title:'मंदिर की झलक',image:'temple.jpg',category:'मंदिर'},
  {title:'श्री रामनवमी उत्सव',image:'festival-sai.jpg',category:'उत्सव'},
  {title:'गणेशोत्सव',image:'festival-ganesh.jpg',category:'उत्सव'},
  {title:'उत्सव की आरती',image:'festival-aarti.jpg',category:'आरती'},
  {title:'साईं सजावट',image:'gallery-sai.jpg',category:'मंदिर'},
  {title:'सामूहिक आरती',image:'gallery-aarti.jpg',category:'आरती'},
];
function GalleryPage() {
  const [filter,setFilter] = useState('सभी');
  const [selected,setSelected] = useState(null);
  const categories=['सभी','साईं दर्शन','आरती','पूजा','सेवा','मंदिर','उत्सव'];
  const list=galleryItems.filter(item=>filter==='सभी'||item.category===filter);
  useEffect(()=>{ const key=e=>{if(e.key==='Escape')setSelected(null);};window.addEventListener('keydown',key);return()=>window.removeEventListener('keydown',key);},[]);
  return <><PageHero kicker="फोटो एवं वीडियो" title="भक्ति की झलकियाँ" subtitle="मंदिर, आरती, सेवा और उत्सवों की फोटो गैलरी।" image="hero-sai.jpg"/><section className="section"><div className="container"><SectionHeading eyebrow="Photo gallery" title="साईं धाम गैलरी" subtitle="यह demo gallery imagery है। Final website में मंदिर से approved original photos इस्तेमाल होंगी।"/><div className="filter-tabs">{categories.map(c=><button key={c} className={filter===c?'active':''} onClick={()=>setFilter(c)}>{c}</button>)}</div><div className="gallery-grid">{list.map(item=><button className="gallery-tile" key={item.title} onClick={()=>setSelected(item)}><img src={ASSET+item.image} alt={item.title} loading="lazy"/><span className="gallery-tile-overlay"><span>{item.title}</span><span className="gallery-open"><ArrowUpRight size={18}/></span></span></button>)}</div><div className="video-feature"><div className="video-play"><PlayCircle size={40}/></div><div><span className="eyebrow">Official channel</span><h3>भक्ति वीडियो और आरती</h3><p>मंदिर के YouTube channel से उपलब्ध recordings और updates embed की जा सकती हैं।</p></div><a href={socials.youtube} target="_blank" rel="noreferrer" className="btn btn-maroon">YouTube देखें <ExternalLink size={15}/></a></div></div></section>{selected&&<div className="lightbox" role="dialog" aria-modal="true" aria-label={selected.title} onClick={()=>setSelected(null)}><button className="lightbox-close" aria-label="Close" onClick={()=>setSelected(null)}><X/></button><div className="lightbox-content" onClick={e=>e.stopPropagation()}><img src={ASSET+selected.image} alt={selected.title}/><div><span className="eyebrow">{selected.category}</span><h3>{selected.title}</h3><p>Demo imagery — replace with approved temple photographs.</p></div></div></div>}</>;
}

function NewsPage() {
  const notices=[
    {tag:'IMPORTANT',title:'मंदिर समय एवं कार्यक्रम',date:'तिथि की पुष्टि लंबित',desc:'दैनिक आरती का कार्यक्रम ऊपर दिए गए schedule में देखें। किसी विशेष बदलाव के लिए मंदिर की पुष्टि आवश्यक है।'},
    {tag:'FESTIVAL',title:'आगामी उत्सवों की जानकारी',date:'कार्यक्रम घोषित होने पर',desc:'श्री रामनवमी, गणेशोत्सव, विजयादशमी, गोपाल काला और पुष्पोत्सव से संबंधित सूचनाएँ यहाँ प्रकाशित होंगी।'},
    {tag:'SEVA',title:'नारायण सेवा / भंडारा',date:'नियमित सूचना',desc:'भंडारे के समय और सहभागिता की जानकारी मंदिर प्रबंधन से पुष्टि होने पर अपडेट की जाएगी।'},
  ];
  return <><PageHero kicker="समाचार एवं सूचनाएँ" title="मंदिर की नवीनतम सूचनाएँ" subtitle="आरती, उत्सव और सेवा से जुड़े महत्वपूर्ण अपडेट।" image="festival-aarti.jpg"/><section className="section"><div className="container narrow-container"><SectionHeading eyebrow="Temple updates" title="सूचनाएँ और घोषणाएँ" subtitle="यह preview content है। आधिकारिक announcements admin approval के बाद प्रकाशित होंगी।"/>{notices.map((n,i)=><article className="notice-row" key={n.title}><div className="notice-date"><BellRing size={20}/><span>{String(i+1).padStart(2,'0')}</span></div><div className="notice-main"><span className="notice-tag">{n.tag}</span><h3>{n.title}</h3><p>{n.desc}</p><span className="notice-meta"><CalendarDays size={14}/>{n.date}</span></div><Link to={i===1?'/festivals':i===2?'/seva':'/darshan'} aria-label="Read more"><ArrowUpRight size={20}/></Link></article>)}</div></section></>;
}

function ContactPage() {
  const [name,setName]=useState(''); const [phone,setPhone]=useState(''); const [query,setQuery]=useState('दर्शन समय'); const [sent,setSent]=useState(false);
  return <><PageHero kicker="संपर्क एवं दिशा" title="मंदिर पहुँचें और संपर्क करें" subtitle="दर्शन, पूजा एवं सेवा संबंधी जानकारी के लिए।" image="temple.jpg"/><section className="section"><div className="container contact-grid"><div className="contact-main"><Eyebrow>Visit Shirdi Sai Dham</Eyebrow><h2>आपका स्वागत है</h2><p>Putlighar, Bhopal, Madhya Pradesh. Exact postal address, official contact number और opening hours को trust से verify करके final website पर जोड़ा जाएगा।</p><div className="contact-info-cards"><div className="contact-info-card"><span><MapPin/></span><div><strong>मंदिर का स्थान</strong><p>Putlighar, Bhopal, Madhya Pradesh</p><small>Exact address confirmation pending</small></div></div><div className="contact-info-card"><span><Phone/></span><div><strong>फोन से संपर्क</strong><p>Official phone number pending</p><small>Trust द्वारा उपलब्ध कराया जाएगा</small></div></div><div className="contact-info-card"><span><Clock3/></span><div><strong>दर्शन एवं आरती</strong><p>Schedule देखें</p><Link to="/darshan">आरती का समय <ArrowRight size={14}/></Link></div></div></div><a className="btn btn-outline" href="https://www.google.com/maps/search/?api=1&query=Putlighar+Bhopal+Shirdi+Sai+Dham" target="_blank" rel="noreferrer"><Navigation size={16}/> Google Maps में खोजें <ExternalLink size={15}/></a><div className="map-placeholder"><MapPin size={32}/><h3>Find us in Bhopal</h3><p>Exact pin to be confirmed by the temple trust.</p><a href="https://www.google.com/maps/search/?api=1&query=Shirdi+Sai+Dham+Putlighar+Bhopal" target="_blank" rel="noreferrer">Maps खोलें <ArrowUpRight size={15}/></a></div></div><div className="contact-form-card"><div className="form-card-heading"><span className="service-icon"><MessageCircle/></span><div><h3>पूछताछ भेजें</h3><p>यह form demo preview है।</p></div></div>{sent?<div className="success-state"><span><CheckCircle2 size={32}/></span><h3>Request preview</h3><p>धन्यवाद{name?`, ${name}`:''}. Demo में कोई जानकारी भेजी या सेव नहीं हुई।</p><button className="btn btn-maroon btn-full" onClick={()=>setSent(false)}>नई enquiry</button></div>:<form className="form-stack" onSubmit={e=>{e.preventDefault();setSent(true);}}><label>आपका नाम<input value={name} onChange={e=>setName(e.target.value)} required placeholder="पूरा नाम"/></label><label>मोबाइल नंबर<input type="tel" value={phone} onChange={e=>setPhone(e.target.value)} required minLength="10" placeholder="मोबाइल नंबर"/></label><label>किस बारे में पूछना है?<select value={query} onChange={e=>setQuery(e.target.value)}><option>दर्शन समय</option><option>पूजा बुकिंग</option><option>नारायण सेवा</option><option>उत्सव कार्यक्रम</option><option>दान / सहयोग</option><option>अन्य</option></select></label><button type="submit" className="btn btn-maroon btn-full">Demo enquiry preview <ArrowRight size={16}/></button><p className="form-disclaimer"><ShieldCheck size={14}/> Submit करने पर कोई वास्तविक data transfer नहीं होगा।</p></form>}</div></div></section><section className="section section-warm"><div className="container"><SectionHeading eyebrow="Follow temple updates" title="आधिकारिक सोशल मीडिया"/><div className="social-cards"><a href={socials.instagram} target="_blank" rel="noreferrer"><span className="social-card-icon"><Instagram/></span><strong>Instagram</strong><span>@shirdi_sai_dham</span><ArrowUpRight/></a><a href={socials.facebook} target="_blank" rel="noreferrer"><span className="social-card-icon"><Facebook/></span><strong>Facebook</strong><span>Shirdi Sai Dham</span><ArrowUpRight/></a><a href={socials.youtube} target="_blank" rel="noreferrer"><span className="social-card-icon"><Youtube/></span><strong>YouTube</strong><span>@shirdisaidhambhopal</span><ArrowUpRight/></a></div></div></section></>;
}

function AdminPreviewPage() {
  const [tab,setTab]=useState('Dashboard');
  const [sidebarOpen,setSidebarOpen]=useState(false);
  const menu=[['Dashboard',LayoutDashboard],['Aarti Timings',Clock3],['Puja Enquiries',ClipboardList],['Festivals & Notices',CalendarDays],['Gallery Manager',Images],['Donation Records',Wallet],['Team & Access',Users],['Settings',Settings2]];
  const content = {
    'Dashboard':{title:'Dashboard overview',desc:'Welcome back. Here is a sample overview of temple website activity.',stats:[['Puja enquiries','12','this month'],['Upcoming events','05','draft / planned'],['Gallery items','28','sample content'],['Donation records','—','not connected']],rows:[['Aarti schedule','Draft content','Needs approval'],['Ram Navami notice','Draft','Unpublished'],['Puja enquiry form','Demo only','Not connected']]},
    'Aarti Timings':{title:'Aarti timings',desc:'Edit schedule after authorised temple staff login.',stats:[['Schedule groups','02','Thursday / other days'],['Aarti entries','09','sample timetable']],rows:[['Thursday schedule','5 entries','Pending trust approval'],['Other days','4 entries','Pending trust approval']]},
    'Puja Enquiries':{title:'Puja enquiries',desc:'Sample records only. No real visitor data is stored.',stats:[['New enquiries','03','sample records'],['In review','02','sample records'],['Confirmed','00','no live booking']],rows:[['Sample Visitor A','Satyanarayan Puja','Demo only'],['Sample Visitor B','Vahan Puja','Demo only'],['Sample Visitor C','Satcharitra Paath','Demo only']]},
    'Festivals & Notices':{title:'Festivals & notices',desc:'Draft events require a date and programme approval.',stats:[['Draft events','05','content shared'],['Published notices','00','demo environment']],rows:[['Shri Ram Navami','Date pending','Draft'],['Ganeshotsav','Date pending','Draft'],['Vijayadashami','Date pending','Draft']]},
    'Gallery Manager':{title:'Gallery manager',desc:'Sample media gallery. Production version should include safe uploads and moderation.',stats:[['Sample photos','10','local demo assets'],['Video links','01','official YouTube']],rows:[['Sai Darshan','image asset','Sample'],['Narayan Seva','image asset','Sample']]},
    'Donation Records':{title:'Donation records',desc:'No gateway is configured. This page does not show real donations.',stats:[['Collected online','₹0','not connected'],['Pending settlement','—','not connected'],['Receipts issued','0','not connected']],rows:[['Payment gateway','Not configured','Disabled'],['Trust account','Not entered','Requires verification'],['Receipt workflow','Not configured','Disabled']]},
    'Team & Access':{title:'Team & access',desc:'Production dashboard should use role-based access.',stats:[['Admin users','01','demo role'],['Staff roles','03','planned']],rows:[['Trust Admin','Full approved permissions','Planned'],['Content Manager','Content only','Planned'],['Accounts','Donation reconciliation','Planned']]},
    'Settings':{title:'Website settings',desc:'Configuration for the approved production site.',stats:[['Public site','Preview','not launched'],['Backups','Not configured','deployment step']],rows:[['Contact details','Awaiting trust','Required'],['Privacy policy','Draft','Needs review'],['Payment keys','Not configured','Never store in frontend']]}
  };
  const data=content[tab];
  return <div className="admin-preview-page"><div className="admin-ribbon"><Info size={15}/> Admin Dashboard Concept — sample data only; no live records or payment connection.</div><div className="admin-shell"><aside className={`admin-sidebar ${sidebarOpen?'open':''}`}><Link to="/" className="admin-brand"><span className="admin-brand-icon">ॐ</span><span><strong>Sai Dham</strong><small>CONTROL PANEL · DEMO</small></span></Link><div className="admin-menu-label">WORKSPACE</div>{menu.map(([label,Icon])=><button key={label} onClick={()=>{setTab(label);setSidebarOpen(false)}} className={`admin-menu-item ${tab===label?'active':''}`}><Icon size={17}/><span>{label}</span>{label==='Puja Enquiries'&&<i>3</i>}</button>)}<div className="admin-sidebar-bottom"><ShieldCheck size={18}/><div><strong>Demo environment</strong><small>Production security not configured</small></div></div></aside><section className="admin-main"><header className="admin-topbar"><button className="icon-button admin-mobile-toggle" onClick={()=>setSidebarOpen(v=>!v)}><Menu/></button><div className="admin-breadcrumb">Workspace <span>/</span> <strong>{tab}</strong></div><div className="admin-top-user"><span className="admin-avatar">SD</span><span><strong>Temple Admin</strong><small>Demo preview</small></span><ChevronDown size={15}/></div></header><div className="admin-content"><div className="admin-page-heading"><div><span className="eyebrow mini-eyebrow">OVERVIEW</span><h1>{data.title}</h1><p>{data.desc}</p></div><span className="demo-status"><span/> DEMO MODE</span></div><div className={`admin-stats ${data.stats.length<4?'two-col':''}`}>{data.stats.map(([label,value,note])=><div className="admin-stat" key={label}><span>{label}</span><strong>{value}</strong><small>{note}</small></div>)}</div><div className="admin-table-card"><div className="admin-table-head"><div><h3>{tab==='Dashboard'?'Recent activity':tab}</h3><p>Sample content</p></div><button className="btn btn-outline btn-small" onClick={()=>alert('Demo only — create/edit actions are not connected.')}> <ArrowUpRight size={14}/> Preview action</button></div><div className="admin-table-scroll"><table><thead><tr><th>ITEM</th><th>DETAILS</th><th>STATUS</th></tr></thead><tbody>{data.rows.map((r,i)=><tr key={r[0]}><td><span className="table-record-icon">{i+1}</span><strong>{r[0]}</strong></td><td>{r[1]}</td><td><span className="table-status">{r[2]}</span></td></tr>)}</tbody></table></div></div><div className="admin-tip"><ShieldCheck size={19}/><div><strong>Production checklist</strong><p>Secure login, role permissions, database, audit logs, backups and payment-gateway verification must be configured before this panel manages live data.</p></div></div><Link to="/" className="text-link"><ArrowLeft size={15}/> Public demo website पर लौटें</Link></div></section></div></div>;
}

function FAQsPage() {
  const faqs=[['आरती का समय कहाँ देख सकते हैं?','Darshan & Aarti page पर गुरुवार और अन्य दिनों का अलग schedule उपलब्ध है। अंतिम समय मंदिर से confirm करें।'],['क्या पूजा ऑनलाइन बुक हो सकती है?','Demo में enquiry flow दिखाया गया है। वास्तविक booking process मंदिर प्रबंधन की approval के बाद सक्रिय होगी।'],['क्या website से donation किया जा सकता है?','अभी नहीं। Donation interface demo-only है। वास्तविक payment gateway trust verification और authorisation के बाद जोड़ा जाएगा।'],['मंदिर का सही पता कैसे मिलेगा?','Exact address और map pin trust से verify होने के बाद final website पर प्रकाशित होंगे।'],['क्या website पर live darshan है?','यदि मंदिर का official live stream उपलब्ध हो, तो final website में embed किया जा सकता है।']];
  const [open,setOpen]=useState(0);
  return <><PageHero kicker="सामान्य प्रश्न" title="आपके सवाल, सरल जवाब" subtitle="Darshan, puja, seva और website से जुड़ी जानकारी।" image="aarti.jpg"/><section className="section"><div className="container narrow-container"><SectionHeading eyebrow="FAQ" title="अक्सर पूछे जाने वाले प्रश्न"/>{faqs.map(([q,a],i)=><div className={`faq-item ${open===i?'open':''}`} key={q}><button onClick={()=>setOpen(open===i?-1:i)}><span><CircleHelp size={19}/>{q}</span><ChevronDown size={18}/></button>{open===i&&<p>{a}</p>}</div>)}</div></section></>;
}

function PolicyPage({type}) {
  const map={privacy:{title:'Privacy Policy',kicker:'Privacy & data',sub:'Visitors की जानकारी का जिम्मेदार उपयोग।',sections:[['Information collected','Production website पर contact या puja enquiry forms से केवल आवश्यक जानकारी ली जानी चाहिए। Final fields और retention period trust approval के बाद तय होंगे।'],['How information is used','Enquiry का जवाब देने, booking coordination और official communication के लिए, approved privacy notice के अनुसार।'],['Security and access','Access केवल authorised personnel तक सीमित रहेगा। Demo form अभी कोई data submit या store नहीं करता।']]},terms:{title:'Terms & Disclaimer',kicker:'Website terms',sub:'Website information और services के उपयोग की शर्तें।',sections:[['Information accuracy','Darshan times, festival notices और seva details मंदिर से verify किए जाने चाहिए। Special days पर schedule बदल सकता है।'],['Enquiries and bookings','Demo request कोई confirmed booking नहीं है। Actual booking तब ही confirm मानी जाएगी जब मंदिर की authorised team पुष्टि करे।'],['Website preview','यह preview है। Final content, legal terms और operational policies trust approval के बाद तय होंगी।']]},donation:{title:'Donation Policy',kicker:'Donation transparency',sub:'Trust-approved payment process और receipts के बारे में।',sections:[['Current demo status','Website पर donation selection interface केवल demonstration के लिए है। कोई payment collect नहीं किया जाता।'],['Authorised payment process','Production phase में trust के verified legal details, authorised settlement account और approved gateway का उपयोग होना चाहिए।'],['Receipts, refund and reconciliation','Receipt timing, applicable refund/cancellation terms, settlement and reconciliation process trust और payment provider द्वारा verify/approve होना चाहिए।'],['Tax statements','Tax exemption या receipt-related claims तभी publish हों जब applicable registrations, approvals और conditions verify हों।']]}};
  const item=map[type];
  return <><PageHero kicker={item.kicker} title={item.title} subtitle={item.sub} image="temple.jpg"/><section className="section"><div className="container policy-container"><div className="policy-stamp"><ShieldCheck size={26}/><div><strong>Draft for review</strong><span>Trust/legal review required before production.</span></div></div>{item.sections.map(([title,text],i)=><article className="policy-section" key={title}><span className="policy-index">{String(i+1).padStart(2,'0')}</span><div><h2>{title}</h2><p>{text}</p></div></article>)}</div></section></>;
}

function NotFound() { return <section className="not-found"><div className="not-found-mark">ॐ</div><h1>यह पेज नहीं मिला</h1><p>कृपया homepage पर वापस जाएँ।</p><Link to="/" className="btn btn-maroon">Home पर जाएँ <ArrowRight size={16}/></Link></section>; }

export default function App() {
  return <Layout><Routes>
    <Route path="/" element={<HomePage/>}/>
    <Route path="/about" element={<AboutPage/>}/>
    <Route path="/darshan" element={<DarshanPage/>}/>
    <Route path="/puja" element={<PujaPage/>}/>
    <Route path="/festivals" element={<FestivalsPage/>}/>
    <Route path="/seva" element={<SevaPage/>}/>
    <Route path="/donation" element={<DonationPage/>}/>
    <Route path="/gallery" element={<GalleryPage/>}/>
    <Route path="/news" element={<NewsPage/>}/>
    <Route path="/contact" element={<ContactPage/>}/>
    <Route path="/admin-preview" element={<AdminPreviewPage/>}/>
    <Route path="/faqs" element={<FAQsPage/>}/>
    <Route path="/privacy" element={<PolicyPage type="privacy"/>}/>
    <Route path="/terms" element={<PolicyPage type="terms"/>}/>
    <Route path="/donation-policy" element={<PolicyPage type="donation"/>}/>
    <Route path="*" element={<NotFound/>}/>
  </Routes></Layout>;
}
