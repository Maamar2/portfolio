import React, { useState, useEffect, useRef } from 'react';
import { Terminal, Shield, Cpu, Globe, Server, Code, X, ChevronRight, Lock, MapPin, ExternalLink, Hash, User, Languages, Activity, Smartphone, MessageSquare, Send, Clock, DollarSign, FileText, Mail, Phone } from 'lucide-react';

const Portfolio = () => {
    const [showTerminal, setShowTerminal] = useState(false);
    const [terminalInput, setTerminalInput] = useState('');
    const [terminalOutput, setTerminalOutput] = useState([
        { type: 'system', text: 'Initializing Maamar_OS v2.0...' },
        { type: 'success', text: 'Identity Verified: Maamar Hafsaoui' },
        { type: 'info', text: 'Location: Chlef, DZ' },
        { type: 'info', text: 'Type "help" to see available commands.' }
    ]);
    const terminalEndRef = useRef(null);

    // Auto-scroll terminal
    useEffect(() => {
        terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [terminalOutput, showTerminal]);

    // Terminal Logic
    const handleCommand = (e) => {
        if (e.key === 'Enter') {
            const cmd = terminalInput.trim().toLowerCase();
            let response = [];

            response.push({ type: 'command', text: `maamar@chlef:~$ ${cmd}` });

            switch (cmd) {
                case 'help':
                    response.push({ type: 'info', text: 'Available commands: whoami, skills, exp, contact, clear' });
                    break;
                case 'whoami':
                    response.push({ type: 'success', text: 'Maamar Hafsaoui | DevSecOps & App Developer' });
                    response.push({ type: 'text', text: 'Base: Chlef, Algeria' });
                    response.push({ type: 'text', text: 'Langs: Arabic (Native), English (Professional)' });
                    break;
                case 'skills':
                    response.push({ type: 'info', text: '>> LOADING ARSENAL...' });
                    response.push({ type: 'text', text: '- Languages: Rust, Python, Kotlin/Java' });
                    response.push({ type: 'text', text: '- Mobile: Android Development (Native)' });
                    response.push({ type: 'text', text: '- Network: CCNA, CCNP, TCP/IP Analysis' });
                    response.push({ type: 'text', text: '- Security: CEH, Penetration Testing' });
                    response.push({ type: 'text', text: '- Infra: Linux+, Docker, K8s' });
                    break;
                case 'exp':
                    response.push({ type: 'text', text: '[2019-2022] Network Solutions (Dubai) - Sr. Network Eng.' });
                    response.push({ type: 'text', text: '[2017-2019] French Press Agency - IT Ops' });
                    response.push({ type: 'text', text: '[2017] The New York Times - DevOps Freelancer' });
                    break;
                case 'contact':
                    response.push({ type: 'warning', text: 'Initiating Secure Handshake...' });
                    response.push({ type: 'text', text: 'Email: maamarhafsaoui.official@gmail.com' });
                    response.push({ type: 'success', text: 'WhatsApp: +213 552 675 571' });
                    break;
                case 'clear':
                    setTerminalOutput([]);
                    setTerminalInput('');
                    return;
                default:
                    response.push({ type: 'error', text: `Command not found: ${cmd}` });
            }

            setTerminalOutput([...terminalOutput, ...response]);
            setTerminalInput('');
        }
    };

    const experiences = [
        {
            company: "Freelance (Elite)",
            role: "Security Consultant & Rust Developer",
            period: "2022 - الآن",
            location: "Remote / Global",
            desc: "بناء أدوات أمنية مخصصة باستخدام Rust، تقديم استشارات للبنية التحتية لشركات ناشئة.",
            tech: ["Rust", "WASM", "SecOps"]
        },
        {
            company: "Network Solutions",
            role: "Senior Network Engineer",
            period: "2019 - 2022",
            location: "Dubai, UAE",
            desc: "إدارة البنية التحتية للشبكات الكبرى، دمج الحلول السحابية مع بروتوكولات الأمان الصارمة.",
            tech: ["Cisco CCNP", "Azure", "Python Automation"]
        },
        {
            company: "French Press Agency",
            role: "IT Operations Specialist",
            period: "2017 - 2019",
            location: "France / Remote",
            desc: "ضمان استمرارية الخدمات الرقمية وحماية تدفق البيانات للأخبار العاجلة.",
            tech: ["Linux Admin", "SysAdmin", "Bash"]
        },
        {
            company: "The New York Times",
            role: "DevOps Contributor",
            period: "2017 (3 Months)",
            location: "USA (Remote)",
            desc: "المساهمة في تطوير أدوات CI/CD لتحسين نشر التحديثات على المنصات الرقمية.",
            tech: ["DevOps", "Docker", "AWS"]
        }
    ];

    const TechBadge = ({ icon: Icon, label, color }) => (
        <div className="flex items-center gap-2 bg-slate-800/50 border border-slate-700 px-4 py-2 rounded hover:border-emerald-500/50 transition-all cursor-crosshair group">
            <Icon size={18} className={`${color} group-hover:animate-pulse`} />
            <span className="font-mono text-sm text-slate-300">{label}</span>
        </div>
    );

    return (
        <div dir="rtl" className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-emerald-500/30">
            {/* Background Grid Effect */}
            <div className="fixed inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>

            {/* Navbar */}
            <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
                <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <Shield className="text-emerald-500" />
                        <span className="font-mono font-bold text-xl tracking-tighter">MAAMAR<span className="text-emerald-500">_SEC</span></span>
                    </div>
                    <button
                        onClick={() => setShowTerminal(!showTerminal)}
                        className="flex items-center gap-2 bg-slate-900 border border-emerald-500/30 px-4 py-2 rounded text-sm font-mono text-emerald-400 hover:bg-emerald-500/10 transition-colors"
                    >
                        <Terminal size={16} />
                        <span>{showTerminal ? 'CLOSE_TERMINAL' : 'OPEN_TERMINAL'}</span>
                    </button>
                </div>
            </nav>

            {/* Hero Section */}
            <header className="relative pt-32 pb-20 px-6 max-w-6xl mx-auto">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
                            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                            SYSTEM_STATUS: ONLINE
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                            أهندس <span className="text-emerald-500">الأنظمة</span>.<br />
                            أحمي <span className="text-blue-500">البيانات</span>.
                        </h1>
                        <p className="text-slate-400 text-lg max-w-xl leading-relaxed">
                            أنا <span className="text-slate-200 font-bold">معمر حفصاوي</span>. مهندس DevSecOps، باحث أمني، <span className="text-emerald-400 font-bold">ومطور تطبيقات</span>. أدمج بين قوة <span className="text-orange-400 font-mono">Rust</span> ومرونة <span className="text-yellow-400 font-mono">Python</span> لبناء بنية تحتية رقمية وتطبيقات جوال آمنة وعالية الأداء.
                        </p>
                        <div className="flex flex-wrap gap-4 pt-4">
                            <button onClick={() => setShowTerminal(true)} className="px-8 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded flex items-center gap-2 transition-all">
                                <Terminal size={18} />
                                تشغيل الواجهة
                            </button>
                            <a
                                href="https://github.com/Maamar2"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-8 py-3 border border-slate-700 hover:border-slate-500 text-slate-300 rounded flex items-center gap-2 transition-all"
                            >
                                <Server size={18} />
                                المشاريع
                            </a>
                        </div>
                    </div>

                    {/* Identity Card Section */}
                    <div className="relative hidden md:block">
                        <div className="absolute inset-0 bg-emerald-500/10 blur-[80px] rounded-full"></div>

                        <div className="relative group perspective-1000">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-blue-600 rounded-xl blur opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-200"></div>
                            <div className="relative bg-slate-900/90 backdrop-blur-xl border border-slate-700/50 p-6 rounded-xl shadow-2xl overflow-hidden">

                                <div className="flex justify-between items-center mb-6 border-b border-slate-800 pb-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded bg-slate-800 flex items-center justify-center border border-slate-700 text-emerald-500">
                                            <User size={20} />
                                        </div>
                                        <div>
                                            <h3 className="text-sm text-slate-400 font-mono uppercase tracking-widest">Operator_ID</h3>
                                            <p className="text-white font-bold tracking-wide">MAAMAR HAFSAOUI</p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-mono mb-1">
                                            <Activity size={10} className="animate-pulse" /> VERIFIED
                                        </div>
                                        <p className="text-[10px] text-slate-500 font-mono">S/N: 893-DZ-24</p>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 gap-4 font-mono text-sm">
                                    <div className="flex items-center gap-3 p-3 rounded bg-slate-800/50 border border-slate-800 hover:border-slate-700 transition-colors">
                                        <MapPin className="text-blue-400" size={16} />
                                        <div>
                                            <span className="block text-[10px] text-slate-500 uppercase">Base Location</span>
                                            <span className="text-slate-200">Chlef, Algeria (DZ)</span>
                                        </div>
                                    </div>

                                    <div className="p-3 rounded bg-slate-800/50 border border-slate-800 hover:border-slate-700 transition-colors">
                                        <div className="flex items-center gap-2 mb-2">
                                            <Globe className="text-purple-400" size={16} />
                                            <span className="text-[10px] text-slate-500 uppercase">Communication Protocols</span>
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            <span className="px-2 py-1 bg-slate-800 border border-slate-700 rounded text-xs text-emerald-400 flex items-center gap-1">
                                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> العربية (Native)
                                            </span>
                                            <span className="px-2 py-1 bg-slate-800 border border-slate-700 rounded text-xs text-blue-400 flex items-center gap-1">
                                                <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> English (V.Good)
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-6 pt-4 border-t border-slate-800 flex justify-between items-end opacity-60">
                                    <div className="h-2 w-32 bg-slate-800 rounded overflow-hidden">
                                        <div className="h-full bg-emerald-500/50 w-2/3 animate-pulse"></div>
                                    </div>
                                    <Code size={14} className="text-slate-600" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Skills Matrix */}
            <section className="py-20 bg-slate-900/50 border-y border-slate-800">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="flex items-center gap-4 mb-12">
                        <Hash className="text-emerald-500" />
                        <h2 className="text-2xl font-bold font-mono">CORE_ARSENAL</h2>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <TechBadge icon={Code} label="Rust (Systems)" color="text-orange-500" />
                        <TechBadge icon={Smartphone} label="Android Dev" color="text-green-500" />
                        <TechBadge icon={Code} label="Python" color="text-yellow-400" />
                        <TechBadge icon={Server} label="DevOps/Docker" color="text-blue-400" />
                        <TechBadge icon={Shield} label="CEH (Hacking)" color="text-red-500" />
                        <TechBadge icon={Globe} label="CCNA/CCNP" color="text-cyan-400" />
                        <TechBadge icon={Cpu} label="Linux+" color="text-slate-200" />
                        <TechBadge icon={Lock} label="Cryptography" color="text-purple-400" />
                    </div>
                </div>
            </section>

            {/* Experience Timeline */}
            <section className="py-20 max-w-6xl mx-auto px-6">
                <div className="flex items-center gap-4 mb-12">
                    <Server className="text-emerald-500" />
                    <h2 className="text-2xl font-bold font-mono">SYSTEM_LOGS (EXPERIENCE)</h2>
                </div>

                <div className="space-y-8 relative before:absolute before:inset-0 before:mr-4 before:h-full before:w-px before:bg-slate-800 md:before:mr-0 md:before:ml-8">
                    {experiences.map((exp, index) => (
                        <div key={index} className="relative pr-8 md:pl-20 md:pr-0">
                            {/* Timeline Dot */}
                            <div className="absolute top-0 right-0 w-8 h-8 rounded-full bg-slate-900 border border-emerald-500 flex items-center justify-center md:left-4 md:right-auto z-10">
                                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                            </div>

                            <div className="bg-slate-900 border border-slate-800 p-6 rounded hover:border-emerald-500/30 transition-colors group">
                                <div className="flex flex-col md:flex-row justify-between mb-4 items-start md:items-center">
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-100 group-hover:text-emerald-400 transition-colors">{exp.role}</h3>
                                        <div className="flex items-center gap-2 text-slate-400 text-sm mt-1">
                                            <Server size={14} />
                                            <span>{exp.company}</span>
                                        </div>
                                    </div>
                                    <div className="text-right mt-2 md:mt-0">
                                        <span className="block text-emerald-500 font-mono text-sm">{exp.period}</span>
                                        <div className="flex items-center gap-1 text-slate-500 text-xs justify-end">
                                            <MapPin size={12} />
                                            {exp.location}
                                        </div>
                                    </div>
                                </div>
                                <p className="text-slate-400 leading-relaxed mb-4">{exp.desc}</p>
                                <div className="flex flex-wrap gap-2">
                                    {exp.tech.map((t, i) => (
                                        <span key={i} className="px-2 py-1 bg-slate-800 text-xs text-emerald-400/80 rounded font-mono border border-slate-700">{t}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Contact Project Form */}
            <section id="contact" className="py-24 bg-slate-900/30 border-t border-slate-800">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="flex items-center gap-4 mb-12">
                        <MessageSquare className="text-emerald-500" />
                        <h2 className="text-2xl font-bold font-mono">ENCRYPTED_TRANSMISSION</h2>
                    </div>

                    <div className="bg-slate-900 border border-slate-800 p-8 rounded-lg shadow-2xl relative overflow-hidden group">
                        {/* Decorative background elements */}
                        <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
                            <Lock size={120} />
                        </div>
                        <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none"></div>

                        <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="flex items-center gap-2 text-xs font-mono text-emerald-500 uppercase tracking-wider">
                                        <User size={12} /> هوية العميل
                                    </label>
                                    <input type="text" className="w-full bg-slate-950 border border-slate-700 rounded p-3 text-slate-300 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition-all placeholder:text-slate-700 font-mono text-sm" placeholder="الاسم الكامل / الشركة" />
                                </div>
                                <div className="space-y-2">
                                    <label className="flex items-center gap-2 text-xs font-mono text-emerald-500 uppercase tracking-wider">
                                        <Globe size={12} /> بريد التواصل
                                    </label>
                                    <input type="email" className="w-full bg-slate-950 border border-slate-700 rounded p-3 text-slate-300 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition-all placeholder:text-slate-700 font-mono text-sm" placeholder="contact@company.com" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="flex items-center gap-2 text-xs font-mono text-emerald-500 uppercase tracking-wider">
                                    <Activity size={12} /> نوع المهمة
                                </label>
                                <select className="w-full bg-slate-950 border border-slate-700 rounded p-3 text-slate-300 focus:border-emerald-500 outline-none font-mono text-sm">
                                    <option>بناء بنية تحتية آمنة (DevSecOps Infrastructure)</option>
                                    <option>اختبار اختراق & تدقيق أمني (Pentesting)</option>
                                    <option>تطوير تطبيق جوال (Android Development)</option>
                                    <option>برمجة عالية الأداء (Rust/Python System)</option>
                                    <option>استشارة تقنية شاملة</option>
                                </select>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="flex items-center gap-2 text-xs font-mono text-emerald-500 uppercase tracking-wider">
                                        <DollarSign size={12} /> تخصيص الموارد (الميزانية)
                                    </label>
                                    <input type="text" className="w-full bg-slate-950 border border-slate-700 rounded p-3 text-slate-300 focus:border-emerald-500 outline-none transition-all placeholder:text-slate-700 font-mono text-sm" placeholder="مثال: $2000 - $5000" />
                                </div>
                                <div className="space-y-2">
                                    <label className="flex items-center gap-2 text-xs font-mono text-emerald-500 uppercase tracking-wider">
                                        <Clock size={12} /> الإطار الزمني للتنفيذ
                                    </label>
                                    <input type="text" className="w-full bg-slate-950 border border-slate-700 rounded p-3 text-slate-300 focus:border-emerald-500 outline-none transition-all placeholder:text-slate-700 font-mono text-sm" placeholder="مثال: شهرين" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="flex items-center gap-2 text-xs font-mono text-emerald-500 uppercase tracking-wider">
                                    <FileText size={12} /> تفاصيل المهمة
                                </label>
                                <textarea rows={4} className="w-full bg-slate-950 border border-slate-700 rounded p-3 text-slate-300 focus:border-emerald-500 outline-none transition-all placeholder:text-slate-700 font-mono text-sm" placeholder="صف متطلبات المشروع، التقنيات المطلوبة، والأهداف المرجوة..."></textarea>
                            </div>

                            <div className="flex flex-col gap-4 mt-6">
                                <button className="w-full py-4 bg-emerald-600/20 border border-emerald-500 text-emerald-400 font-mono font-bold hover:bg-emerald-600 hover:text-white transition-all flex justify-center items-center gap-3 group-hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] rounded">
                                    <Send size={18} />
                                    INITIALIZE_PROJECT_SEQUENCE()
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-slate-950 border-t border-slate-800 py-12">
                <div className="max-w-6xl mx-auto px-6 text-center">
                    <h3 className="text-2xl font-bold mb-6">هل نظامك آمن بما يكفي؟</h3>
                    <p className="text-slate-400 mb-8 max-w-lg mx-auto">لدي المفاتيح لبناء وتأمين بنيتك التحتية القادمة. دعنا نتحدث عن الأمان، الأداء، والكود النظيف.</p>

                    <div className="flex flex-wrap justify-center gap-6 mb-8">
                        <a
                            href="mailto:maamarhafsaoui.official@gmail.com"
                            className="flex items-center gap-2 bg-slate-900 border border-slate-800 px-6 py-3 rounded hover:border-emerald-500/50 hover:text-emerald-400 transition-all group"
                        >
                            <Mail size={18} className="text-slate-400 group-hover:text-emerald-500" />
                            <span>maamarhafsaoui.official@gmail.com</span>
                        </a>
                        <a
                            href="https://wa.me/213552675571"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 bg-slate-900 border border-slate-800 px-6 py-3 rounded hover:border-green-500/50 hover:text-green-400 transition-all group"
                        >
                            <Phone size={18} className="text-slate-400 group-hover:text-green-500" />
                            <span>WhatsApp: +213 552 675 571</span>
                        </a>
                    </div>

                    <div className="mt-12 pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center text-slate-600 text-sm font-mono">
                        <p>&copy; 2024 Maamar Hafsaoui. All Systems Operational.</p>
                        <div className="flex gap-4 mt-4 md:mt-0">
                            <span className="flex items-center gap-2"><Lock size={12} /> PGP KEY: 0x4A2...</span>
                        </div>
                    </div>
                </div>
            </footer>

            {/* TERMINAL OVERLAY */}
            {showTerminal && (
                <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
                    <div className="w-full max-w-3xl bg-slate-950 border border-slate-700 rounded shadow-2xl overflow-hidden flex flex-col max-h-[80vh]">
                        {/* Terminal Header */}
                        <div className="bg-slate-900 px-4 py-2 flex justify-between items-center border-b border-slate-800">
                            <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                            </div>
                            <span className="text-xs text-slate-400 font-mono">bash -- maamar@chlef:~</span>
                            <button onClick={() => setShowTerminal(false)} className="text-slate-400 hover:text-white"><X size={16} /></button>
                        </div>

                        {/* Terminal Body */}
                        <div className="flex-1 p-6 font-mono text-sm overflow-y-auto text-left" dir="ltr" onClick={() => document.getElementById('term-input').focus()}>
                            {terminalOutput.map((line, i) => (
                                <div key={i} className={`mb-1 ${line.type === 'command' ? 'text-slate-300' :
                                        line.type === 'error' ? 'text-red-400' :
                                            line.type === 'success' ? 'text-emerald-400' :
                                                line.type === 'warning' ? 'text-yellow-400' :
                                                    'text-slate-400'
                                    }`}>
                                    {line.text}
                                </div>
                            ))}
                            <div ref={terminalEndRef} />

                            <div className="flex items-center text-emerald-500 mt-2">
                                <span className="mr-2">maamar@chlef:~$</span>
                                <input
                                    id="term-input"
                                    type="text"
                                    value={terminalInput}
                                    onChange={(e) => setTerminalInput(e.target.value)}
                                    onKeyDown={handleCommand}
                                    className="bg-transparent border-none outline-none text-slate-200 w-full focus:ring-0"
                                    autoFocus
                                    autoComplete="off"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Portfolio;
