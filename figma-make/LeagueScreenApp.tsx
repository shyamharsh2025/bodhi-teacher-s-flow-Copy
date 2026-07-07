import * as React from "react";

const students = [
  { name: "Kabir Patel", status: "Completed today", streak: 17, karma: 125, done: true, tone: "violet" },
  { name: "Riya Shah", status: "Completed today", streak: 12, karma: 110, done: true, tone: "rose" },
  { name: "Aarav Mehta", status: "Yet to show up", streak: 4, karma: 85, done: false, tone: "blue" },
];

function Icon({ type, className = "" }: { type: string; className?: string }) {
  const paths: Record<string, React.ReactNode> = {
    back: <path d="M19 12H5m7 7-7-7 7-7" />,
    bell: <><path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 7h18s-3 0-3-7" /><path d="M13.73 21a2 2 0 0 1-3.46 0" /></>,
    user: <><circle cx="12" cy="7" r="4" /><path d="M4.5 21c1.2-4 4-6 7.5-6s6.3 2 7.5 6" /></>,
    users: <><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></>,
    check: <path d="m20 6-11 11-5-5" />,
    hourglass: <><path d="M5 22h14M5 2h14M17 22v-4.17a2 2 0 0 0-.59-1.42L12 12l-4.41 4.41A2 2 0 0 0 7 17.83V22M7 2v4.17a2 2 0 0 0 .59 1.42L12 12l4.41-4.41A2 2 0 0 0 17 6.17V2" /></>,
    flame: <><path d="M8.5 14.5A3.5 3.5 0 0 0 12 18a3.5 3.5 0 0 0 3.5-3.5c0-2.5-1.5-3.5-3.5-5.5-.3 2-1.8 3-3 4.1-.3.3-.5.8-.5 1.4Z" /><path d="M12 22a7 7 0 0 0 7-7c0-4-2.5-6.5-6-10-.5 2.5-2.2 4-4.1 5.8A6 6 0 0 0 5 15a7 7 0 0 0 7 7Z" /></>,
    pencil: <><path d="M12 20h9" /><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5Z" /></>,
    sparkles: <><path d="m12 2 1.7 6.3L20 10l-6.3 1.7L12 18l-1.7-6.3L4 10l6.3-1.7L12 2Z" /><path d="m19 17 .7 2.3L22 20l-2.3.7L19 23l-.7-2.3L16 20l2.3-.7L19 17Z" /></>,
    sun: <><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" /><circle cx="12" cy="12" r="4" /></>,
    compass: <><circle cx="12" cy="12" r="10" /><path d="m16 8-2.3 5.7L8 16l2.3-5.7L16 8Z" /></>,
    clock: <><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></>,
    trend: <path d="m3 17 6-6 4 4 8-8M15 7h6v6" />,
    chevron: <path d="m9 18 6-6-6-6" />,
  };
  return <svg className={`icon ${className}`} viewBox="0 0 24 24" fill="none">{paths[type]}</svg>;
}

function ProgressRing() {
  return (
    <div className="progress-ring">
      <svg viewBox="0 0 100 100">
        <defs>
          <linearGradient id="ringGradient" x1="10" y1="10" x2="90" y2="90">
            <stop offset="0%" stopColor="#fff" />
            <stop offset="45%" stopColor="#f8feff" />
            <stop offset="100%" stopColor="#a9f0ff" />
          </linearGradient>
          <filter id="ringGlow" x="-45%" y="-45%" width="190%" height="190%">
            <feDropShadow dx="0" dy="0" stdDeviation="3.4" floodColor="#fff" floodOpacity="0.98" />
            <feDropShadow dx="0" dy="0" stdDeviation="8" floodColor="#ddfbff" floodOpacity="0.58" />
          </filter>
        </defs>
        <circle cx="50" cy="50" r="39" fill="none" stroke="rgba(255,255,255,.28)" strokeWidth="12" />
        <circle cx="50" cy="50" r="39" fill="none" stroke="rgba(255,255,255,.9)" strokeWidth="13" strokeLinecap="round" strokeDasharray="245" strokeDashoffset="98" filter="url(#ringGlow)" transform="rotate(-90 50 50)" />
        <circle cx="50" cy="50" r="39" fill="none" stroke="url(#ringGradient)" strokeWidth="12" strokeLinecap="round" strokeDasharray="245" strokeDashoffset="98" transform="rotate(-90 50 50)" />
      </svg>
      <div className="ring-copy"><b>18/30</b><span>Completed</span></div>
    </div>
  );
}

function StatStrip() {
  const stats = [
    { icon: "users", value: "30", label: "Students", tone: "violet" },
    { icon: "check", value: "18", label: "Completed", tone: "mint" },
    { icon: "hourglass", value: "12", label: "Pending", tone: "amber" },
    { icon: "flame", value: "67%", label: "7-Day Avg", tone: "coral" },
  ];
  return (
    <div className="stat-strip">
      {stats.map((s, i) => (
        <div className={`stat-tile stat-${i}`} key={s.label}>
          <div className={`stat-icon ${s.tone}`}><Icon type={s.icon} /></div>
          <strong>{s.value}</strong>
          <span>{s.label}</span>
        </div>
      ))}
    </div>
  );
}

function StudentCard({ student }: { student: typeof students[number] }) {
  const initials = student.name.split(" ").map((p) => p[0]).join("");
  return (
    <button className="student-card">
      <div className={`avatar ${student.tone}`}><span>{initials}</span><i className={student.done ? "done" : "pending"} /></div>
      <div className="student-main">
        <b>{student.name}</b>
        <em className={student.done ? "complete" : "late"}>{student.status}</em>
        <div className="student-meta">
          <span className="streak"><Icon type="flame" />{student.streak}-day streak</span>
          <span className="karma"><Icon type="sparkles" />{student.karma} karma</span>
        </div>
      </div>
      <Icon type="chevron" className="chev" />
    </button>
  );
}

export default function App() {
  return (
    <div className="figma-make-root">
      <style>{css}</style>
      <div className="phone">
        <div className="status"><span>9:41</span><div className="status-icons"><i /><i /><i /></div></div>
        <header>
          <button className="round"><Icon type="back" /></button>
          <div><h1>League</h1><p>Grade 8A · 30 students</p></div>
          <div className="header-actions"><button className="round"><Icon type="bell" /></button><button className="profile"><Icon type="user" /></button></div>
        </header>

        <main>
          <section className="hero">
            <div className="pill"><Icon type="users" />TODAY&apos;S CLASS STATUS</div>
            <ProgressRing />
            <h2>18 of 30 students completed today&apos;s meditation.</h2>
            <p>60% of Grade 8A completed today</p>
            <StatStrip />
          </section>

          <section className="med-card">
            <span className="assigned"><Icon type="check" />Assigned</span>
            <div className="med-top">
              <div className="art"><div className="sun" /><div className="hills" /><div className="person" /></div>
              <div className="med-copy">
                <small>TODAY&apos;S CLASS MEDITATION</small>
                <h3>5-Min Calm<br />Reset</h3>
                <p>Ready for today&apos;s class practice</p>
              </div>
            </div>
            <div className="actions">
              <button className="primary"><Icon type="pencil" />Change Meditation</button>
              <button className="secondary"><Icon type="users" />Assign Individually</button>
            </div>
          </section>

          <section className="students">
            <h2>Students</h2>
            <div className="filters"><button>All Members (30)</button><button>Completed (18)</button><button>Yet to Show Up (12)</button></div>
            <div className="student-list">{students.map((s) => <StudentCard key={s.name} student={s} />)}</div>
          </section>
        </main>

        <nav>
          <button><Icon type="sun" />Today</button>
          <button><Icon type="compass" />Explore</button>
          <button className="center"><Icon type="sparkles" /></button>
          <button className="active"><Icon type="clock" />Sessions</button>
          <button><Icon type="trend" />Journey</button>
        </nav>
      </div>
    </div>
  );
}

const css = `
*{box-sizing:border-box} .figma-make-root{min-height:100vh;display:grid;place-items:start center;background:#e8ecfe;font-family:Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;color:#101221}
.phone{position:relative;width:393px;height:852px;overflow:hidden;background:linear-gradient(135deg,#e8ecfe 0%,#eef2ff 54%,#e0e7ff 100%);padding-bottom:118px}
.phone:before{content:"";position:absolute;inset:0;background:radial-gradient(circle at 84px 160px,rgba(91,79,219,.06),transparent 190px),radial-gradient(circle at 310px 360px,rgba(59,130,246,.07),transparent 210px);pointer-events:none}
.icon{width:20px;height:20px;stroke:currentColor;stroke-width:2.35;stroke-linecap:round;stroke-linejoin:round;flex:none}
.status{height:44px;display:flex;align-items:center;justify-content:space-between;padding:14px 24px 0;font-size:14px;font-weight:700;color:#000}.status-icons{display:flex;gap:6px;align-items:center}.status-icons i:first-child{width:22px;height:14px;background:linear-gradient(90deg,#000 3px,transparent 3px 6px,#000 6px 9px,transparent 9px 12px,#000 12px 16px,transparent 16px 19px,#000 19px);border-radius:2px}.status-icons i:nth-child(2){width:18px;height:12px;border:3px solid #000;border-bottom:0;border-radius:14px 14px 0 0}.status-icons i:last-child{width:27px;height:13px;border:1px solid rgba(0,0,0,.35);border-radius:4px;position:relative}.status-icons i:last-child:before{content:"";position:absolute;left:2px;top:2px;width:20px;height:7px;border-radius:2px;background:#000}
header{position:relative;z-index:1;height:82px;padding:19px 20px 0;display:flex;align-items:flex-start;justify-content:space-between}.round,.profile{width:44px;height:44px;border:1px solid rgba(255,255,255,.8);border-radius:50%;display:grid;place-items:center;background:rgba(255,255,255,.82);box-shadow:0 10px 22px rgba(84,75,187,.1);color:#5840d4}.profile{background:linear-gradient(135deg,#5840d4,#704af5);color:white;box-shadow:0 12px 24px rgba(84,75,187,.22)}header h1{margin:0;text-align:center;font-size:31px;line-height:36px;font-weight:900;color:#5840d4;letter-spacing:0}header p{margin:0;text-align:center;font-size:15px;line-height:20px;font-weight:700;color:#5a5b62}.header-actions{display:flex;gap:8px}
main{position:relative;z-index:1;padding:0 20px 24px;display:grid;gap:16px}.hero{position:relative;height:260px;border-radius:24px;padding:14px;background:linear-gradient(126deg,#5840d4,#6751f3 45%,#39a2f4);box-shadow:0 18px 38px rgba(84,75,187,.24);overflow:hidden;color:white}.hero:before{content:"";position:absolute;inset:0;background:radial-gradient(circle at 30% 12%,rgba(255,255,255,.18),transparent 34%),linear-gradient(145deg,rgba(255,255,255,.08),transparent 52%,rgba(189,242,229,.16));pointer-events:none}.hero:after{content:"";position:absolute;right:-64px;top:-56px;width:160px;height:160px;border-radius:50%;background:rgba(255,255,255,.12);filter:blur(36px)}
.pill{position:relative;z-index:1;width:max-content;height:32px;display:flex;align-items:center;gap:8px;padding:0 16px;border-radius:999px;border:1px solid rgba(255,255,255,.24);background:rgba(255,255,255,.18);box-shadow:inset 0 1px 0 rgba(255,255,255,.3);backdrop-filter:blur(14px);font-size:11px;font-weight:900}.pill .icon{width:16px;height:16px;color:white}.hero h2{position:relative;z-index:1;margin:18px 116px 0 0;font-size:17px;line-height:22px;font-weight:900;letter-spacing:0}.hero>p{position:relative;z-index:1;margin:10px 110px 0 0;font-size:13px;line-height:18px;font-weight:700;color:rgba(255,255,255,.86)}
.progress-ring{position:absolute;z-index:2;right:12px;top:54px;width:108px;height:108px;display:grid;place-items:center}.progress-ring svg{position:absolute;inset:0;width:100%;height:100%}.ring-copy{position:relative;text-align:center;color:white}.ring-copy b{display:block;font-size:16.5px;line-height:20px;font-weight:900}.ring-copy span{display:block;font-size:8px;line-height:12px;font-weight:800;color:rgba(255,255,255,.92)}
.stat-strip{position:relative;z-index:1;margin-top:38px;height:78px;display:flex;align-items:stretch;overflow:hidden;border-radius:17px}.stat-tile{position:relative;width:calc((100% + 30px)/4);height:78px;flex:none;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:0 6px;background:linear-gradient(115deg,rgba(255,255,255,.30),rgba(255,255,255,.12) 55%,rgba(219,246,255,.18));backdrop-filter:blur(18px);box-shadow:inset 1px 1px 0 rgba(255,255,255,.34),0 8px 18px rgba(43,35,139,.08);border:1px solid rgba(255,255,255,.28)}.stat-tile:not(:first-child){margin-left:-10px}.stat-0{z-index:4;border-radius:17px 6px 6px 17px}.stat-1{z-index:3;border-radius:0 6px 6px 0}.stat-2{z-index:2;border-radius:0 6px 6px 0}.stat-3{z-index:1;border-radius:0 17px 17px 0}.stat-icon{width:30px;height:30px;border-radius:50%;display:grid;place-items:center;box-shadow:inset 0 1px 0 rgba(255,255,255,.72),0 6px 14px rgba(84,75,187,.08)}.stat-icon .icon{width:16px;height:16px}.violet{background:linear-gradient(135deg,#f6f3ff,#ddd8ff);color:#5840d4}.mint{background:linear-gradient(135deg,#e5fff3,#bdf2e5);color:#128263}.amber{background:linear-gradient(135deg,#fff6e3,#ffe2ab);color:#d98716}.coral{background:linear-gradient(135deg,#fff1ed,#ffd9ce);color:#f05a3b}.stat-tile strong{margin-top:2px;font-size:18px;line-height:22px;font-weight:900;color:#101221}.stat-tile span{font-size:9.5px;line-height:12px;font-weight:700;color:rgba(45,46,52,.74)}
.med-card{position:relative;height:208px;border:1px solid rgba(255,255,255,.82);border-radius:24px;background:rgba(255,255,255,.9);box-shadow:0 16px 36px rgba(84,75,187,.13);padding:17px;backdrop-filter:blur(18px)}.assigned{position:absolute;right:17px;top:17px;height:20px;padding:0 10px;border-radius:999px;background:rgba(18,130,99,.1);display:flex;align-items:center;gap:4px;font-size:10px;line-height:12px;font-weight:800;color:#126c55}.assigned .icon{width:12px;height:12px}.med-top{display:grid;grid-template-columns:70px 1fr;gap:14px}.art{position:relative;width:70px;height:70px;border-radius:50%;background:white;box-shadow:0 12px 26px rgba(84,75,187,.12);overflow:hidden}.art:before{content:"";position:absolute;inset:6px;border-radius:50%;background:linear-gradient(180deg,#9a927f 0%,#f5f6f2 52%,#d9e4ea 100%)}.sun{position:absolute;left:38px;top:16px;width:16px;height:16px;border-radius:50%;background:#fff4c7}.hills{position:absolute;left:11px;bottom:19px;width:48px;height:16px;border-radius:50%;border-top:4px solid rgba(40,39,36,.55)}.person{position:absolute;left:34px;bottom:19px;width:5px;height:12px;border-radius:4px;background:#2f2c35}.person:before{content:"";position:absolute;left:-1px;top:-5px;width:7px;height:7px;border-radius:50%;background:#2f2c35}.med-copy small{display:block;margin-top:1px;font-size:10px;line-height:16px;font-weight:900;color:#6d5bff}.med-copy h3{margin:4px 0 0;font-size:20px;line-height:23px;font-weight:900;color:#101221}.med-copy p{margin:9px 0 0;font-size:13.5px;line-height:18px;font-weight:700;color:#5a5b62}.actions{position:absolute;left:17px;right:17px;bottom:17px;display:grid;grid-template-columns:1fr 1fr;gap:12px}.actions button{height:46px;border-radius:999px;border:0;display:flex;align-items:center;justify-content:center;gap:8px;font-size:12.5px;line-height:16px;font-weight:900;white-space:nowrap}.primary{color:white;background:linear-gradient(135deg,#7457ff,#5840d4 52%,#4f7cf7);box-shadow:0 12px 24px rgba(84,75,187,.24),inset 0 1px 0 rgba(255,255,255,.22)}.secondary{color:#5840d4;background:linear-gradient(135deg,#fff,#f5f1ff);border:1px solid #e0dcf4!important;box-shadow:0 10px 20px rgba(84,75,187,.09),inset 0 1px 0 rgba(255,255,255,.9)}.actions .icon{width:16px;height:16px}
.students h2{margin:0 0 12px 4px;font-size:22px;line-height:32px;font-weight:900}.filters{display:flex;gap:8px;overflow:hidden;margin:0 -20px 20px;padding:0 20px}.filters button{height:40px;flex:none;border-radius:999px;border:1px solid #dcd8f2;background:rgba(255,255,255,.62);padding:0 18px;font-size:13px;font-weight:800;color:#5a5b62}.filters button:first-child{border-color:#5840d4;background:white;color:#5840d4;box-shadow:0 8px 18px rgba(84,75,187,.1)}.student-list{display:grid;gap:12px}.student-card{height:106px;width:100%;border:1px solid rgba(255,255,255,.84);border-radius:22px;background:rgba(255,255,255,.84);box-shadow:0 10px 24px rgba(84,75,187,.1);display:flex;align-items:center;gap:13px;padding:13px;text-align:left;backdrop-filter:blur(18px)}.avatar{position:relative;width:50px;height:50px;border:1px solid #dcd8f2;border-radius:50%;display:grid;place-items:center;background:white;box-shadow:0 7px 16px rgba(84,75,187,.1)}.avatar:before{content:"";position:absolute;inset:4px;border-radius:50%;background:linear-gradient(135deg,#6d5bff,#a29bff,#ddd9ff)}.avatar.rose:before{background:linear-gradient(135deg,#f49ab8,#ffd2dc,#fff0f2)}.avatar.blue:before{background:linear-gradient(135deg,#58a8f5,#c9e7ff,#eef7ff)}.avatar span{position:relative;font-size:13px;font-weight:900}.avatar i{position:absolute;right:1px;bottom:1px;width:12px;height:12px;border:2px solid white;border-radius:50%;background:#23b06d}.avatar i.pending{background:#f3a545}.student-main{min-width:0;flex:1}.student-main>b{display:block;font-size:15px;line-height:20px;font-weight:900}.student-main em{display:inline-flex;margin-top:4px;border-radius:999px;padding:4px 10px 3px;font-style:normal;font-size:11px;line-height:13px;font-weight:800}.complete{background:rgba(35,176,109,.13);color:#128263}.late{background:rgba(255,207,138,.24);color:#d85319}.student-meta{margin-top:8px;display:flex;gap:8px}.student-meta span{height:24px;border-radius:999px;display:flex;align-items:center;gap:4px;padding:0 10px;font-size:11.5px;font-weight:900;white-space:nowrap}.student-meta .icon{width:14px;height:14px}.streak{background:#fff4e4;color:#a36b12}.karma{background:#eee8ff;color:#5840d4}.chev{width:20px;height:20px;color:rgba(90,91,98,.55)}
nav{position:absolute;z-index:10;left:17px;right:17px;bottom:16px;height:84px;border-radius:32px;border:1px solid rgba(255,255,255,.8);background:rgba(255,255,255,.86);box-shadow:0 12px 32px rgba(84,75,187,.12);backdrop-filter:blur(18px);display:flex;align-items:center;justify-content:space-around;padding:12px 14px}nav button{border:0;background:transparent;min-width:56px;height:60px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;color:#6b7280;font-size:12px;font-weight:800}.active{color:#5840d4}nav .icon{width:24px;height:24px}.center{margin-top:-32px!important;width:64px!important;height:64px!important;min-width:64px!important;border-radius:50%;background:linear-gradient(135deg,#5b4fdb,#7c3aed)!important;color:white!important;box-shadow:0 12px 28px rgba(84,75,187,.22)}.center .icon{width:28px;height:28px}
`;
