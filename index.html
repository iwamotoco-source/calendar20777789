<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>THE CALENDAR</title>
  <style>
    :root{
      --bg:#0a0a0f;
      --bg-2:#12121a;
      --bg-3:#181824;
      --panel:#111118;
      --card:#171722;
      --line:#2a2b3a;
      --text:#f6f7fb;
      --muted:#a5abc0;
      --sub:#7b8199;
      --danger:#ff6b81;
      --success:#37d39a;
      --warn:#f6c34d;
      --shadow:0 18px 50px rgba(0,0,0,.35);
      --radius:18px;
      --radius-sm:12px;
      --accent:#4f8ef7;
      --accent-2:#7b5ff8;
      --accent-soft:rgba(79,142,247,.16);
      --accent-grad:linear-gradient(135deg,#4f8ef7,#7b5ff8);
      --sidebar-w:248px;
      --font:'Segoe UI','Hiragino Sans','Yu Gothic UI',system-ui,sans-serif;
    }
    *{box-sizing:border-box}
    html,body{margin:0;padding:0;background:var(--bg);color:var(--text);font-family:var(--font)}
    body{min-height:100vh;overflow-x:hidden}
    button,input,select,textarea{font:inherit}
    img{display:block;max-width:100%}
    a{text-decoration:none;color:inherit}

    body.user-conan{
      --accent:#4f8ef7;
      --accent-2:#7b5ff8;
      --accent-soft:rgba(79,142,247,.16);
      --accent-grad:linear-gradient(135deg,#4f8ef7,#7b5ff8);
    }
    body.user-kaori{
      --accent:#f472b6;
      --accent-2:#fb7185;
      --accent-soft:rgba(244,114,182,.16);
      --accent-grad:linear-gradient(135deg,#f472b6,#fb7185);
    }

    ::-webkit-scrollbar{width:8px;height:8px}
    ::-webkit-scrollbar-thumb{background:#36384c;border-radius:999px}
    ::-webkit-scrollbar-track{background:#12121a}

    .wallpaper{
      position:fixed; inset:0; z-index:0;
      background-size:cover; background-position:center;
      opacity:.22; pointer-events:none;
      filter:saturate(1.05);
    }
    .wallpaper::after{
      content:""; position:absolute; inset:0;
      background:
        radial-gradient(circle at top right, rgba(255,255,255,.06), transparent 26%),
        linear-gradient(180deg, rgba(10,10,15,.48), rgba(10,10,15,.84));
    }

    .app{
      position:relative; z-index:1; display:flex; min-height:100vh;
    }

    .sidebar{
      width:var(--sidebar-w);
      min-width:var(--sidebar-w);
      background:rgba(13,13,19,.9);
      backdrop-filter:blur(16px);
      border-right:1px solid rgba(255,255,255,.05);
      position:fixed; inset:0 auto 0 0;
      overflow:auto; z-index:40;
      transition:transform .25s ease;
    }
    .sidebar-header{
      padding:18px 16px 14px;
      border-bottom:1px solid rgba(255,255,255,.06);
    }
    .brand-mark{
      font-size:1.1rem;
      font-weight:900;
      letter-spacing:.14em;
      color:#e50914;
      text-transform:uppercase;
    }
    .brand-sub{
      margin-top:6px;
      font-size:.75rem;
      letter-spacing:.2em;
      color:var(--muted);
      text-transform:uppercase;
    }
    .brand-mini{
      margin-top:4px;
      font-size:.64rem;
      letter-spacing:.18em;
      color:var(--sub);
      text-transform:uppercase;
    }

    .user-switcher{
      padding:12px;
      display:grid;
      gap:8px;
      border-bottom:1px solid rgba(255,255,255,.06);
    }
    .user-pill{
      width:100%;
      border:1px solid #313346;
      background:rgba(255,255,255,.03);
      color:var(--text);
      padding:10px;
      border-radius:14px;
      display:flex;
      align-items:center;
      gap:10px;
      cursor:pointer;
      transition:.18s ease;
    }
    .user-pill:hover{
      transform:translateY(-1px);
      border-color:var(--accent);
      background:var(--accent-soft);
    }
    .user-pill.active{
      border-color:var(--accent);
      background:var(--accent-soft);
      box-shadow:0 0 0 1px rgba(255,255,255,.03) inset;
    }
    .avatar{
      width:42px;height:42px;border-radius:14px;
      object-fit:cover;flex:0 0 auto;
      background:var(--accent-grad);
      display:grid;place-items:center;
      color:#fff;font-weight:900;
    }
    .avatar.round{border-radius:50%}
    .avatar.lg{width:72px;height:72px;border-radius:20px;font-size:1.4rem}
    .avatar.xl{width:88px;height:88px;border-radius:24px;font-size:1.8rem}
    .avatar.sm{width:30px;height:30px;border-radius:10px;font-size:.85rem}
    .avatar.xs{width:22px;height:22px;border-radius:7px;font-size:.72rem}
    .user-pill-title{font-size:.86rem;font-weight:800}
    .user-pill-sub{font-size:.68rem;color:var(--sub);margin-top:2px}

    .sidebar-sec{
      padding:10px 0;
      border-bottom:1px solid rgba(255,255,255,.06);
    }
    .sidebar-label{
      padding:0 16px 8px;
      font-size:.66rem;
      font-weight:800;
      letter-spacing:.16em;
      color:var(--sub);
      text-transform:uppercase;
    }
    .nav-item{
      display:flex;align-items:center;gap:10px;
      padding:11px 16px;
      cursor:pointer;
      font-size:.9rem;
      color:var(--muted);
      position:relative;
      transition:.15s ease;
    }
    .nav-item:hover{background:rgba(255,255,255,.04);color:var(--text)}
    .nav-item.active{
      color:var(--text);
      background:linear-gradient(90deg,var(--accent-soft),transparent);
    }
    .nav-item.active::before{
      content:""; position:absolute; left:0; top:6px; bottom:6px; width:3px;
      border-radius:0 999px 999px 0; background:var(--accent-grad);
    }

    .toggle-row{
      display:flex;align-items:center;justify-content:space-between;
      gap:12px;padding:0 16px;
    }
    .toggle-label{font-size:.82rem;color:var(--muted);font-weight:700}
    .switch{
      position:relative;width:44px;height:24px;display:inline-block;
    }
    .switch input{display:none}
    .slider{
      position:absolute;inset:0;border-radius:999px;background:#34374a;cursor:pointer;transition:.2s
    }
    .slider::before{
      content:"";position:absolute;width:18px;height:18px;left:3px;top:3px;border-radius:50%;
      background:#fff;transition:.2s;
    }
    .switch input:checked + .slider{background:var(--accent)}
    .switch input:checked + .slider::before{transform:translateX(20px)}

    .mini-cal{padding:0 12px 12px}
    .mini-head{display:flex;align-items:center;justify-content:space-between;margin-bottom:8px}
    .mini-title{font-size:.82rem;font-weight:800}
    .mini-btn{
      border:none;background:none;color:var(--muted);cursor:pointer;
      width:28px;height:28px;border-radius:8px;
    }
    .mini-btn:hover{background:rgba(255,255,255,.06);color:var(--text)}
    .mini-grid{display:grid;grid-template-columns:repeat(7,1fr);gap:2px}
    .mini-dow,.mini-day{
      text-align:center;font-size:.68rem;padding:5px 0;
    }
    .mini-dow{color:var(--sub);font-weight:800}
    .mini-day{
      color:var(--muted); border-radius:999px; cursor:pointer; position:relative;
      aspect-ratio:1; display:grid; place-items:center;
    }
    .mini-day:hover{background:rgba(255,255,255,.05)}
    .mini-day.today{background:var(--accent-grad);color:#fff;font-weight:900}
    .mini-day.selected{outline:2px solid var(--accent);color:var(--accent)}
    .mini-day.has::after{
      content:""; position:absolute; bottom:3px; width:4px;height:4px;border-radius:50%; background:var(--accent);
    }

    .main{
      margin-left:var(--sidebar-w);
      flex:1; min-width:0;
      display:flex; flex-direction:column;
    }
    .topbar{
      position:sticky; top:0; z-index:25;
      display:flex; align-items:center; gap:8px; flex-wrap:wrap;
      padding:12px 18px;
      background:linear-gradient(180deg,rgba(10,10,15,.94),rgba(10,10,15,.72));
      backdrop-filter:blur(14px);
      border-bottom:1px solid rgba(255,255,255,.05);
    }
    .menu-btn{
      display:none;
      border:none;background:none;color:var(--text);font-size:1.2rem;cursor:pointer;
      width:34px;height:34px;border-radius:10px;
    }
    .menu-btn:hover{background:rgba(255,255,255,.05)}
    .title{
      flex:1; min-width:140px;
      font-size:1.02rem; font-weight:900;
    }
    .month-nav{
      display:flex;align-items:center;gap:6px;
    }
    .icon-btn{
      border:1px solid rgba(255,255,255,.07);
      background:rgba(255,255,255,.04);
      color:var(--muted);
      border-radius:12px;
      padding:8px 11px;
      cursor:pointer;
      font-size:.8rem;
      font-weight:800;
      transition:.15s ease;
    }
    .icon-btn:hover{color:var(--text);background:rgba(255,255,255,.07)}
    .month-text{
      min-width:120px;text-align:center;font-size:.95rem;font-weight:900;
    }

    .content{
      padding:18px 20px 28px;
    }

    .hero{
      position:relative;
      min-height:225px;
      overflow:hidden;
      border-radius:24px;
      margin-bottom:16px;
      border:1px solid rgba(255,255,255,.08);
      background:
        linear-gradient(90deg, rgba(0,0,0,.82), rgba(0,0,0,.28)),
        radial-gradient(circle at top right, rgba(255,255,255,.14), transparent 30%),
        var(--accent-grad);
      background-size:cover;
      background-position:center;
      box-shadow:var(--shadow);
    }
    .hero::after{
      content:""; position:absolute; inset:0;
      background:linear-gradient(180deg,transparent,rgba(0,0,0,.24));
    }
    .hero-inner{
      position:relative; z-index:1;
      min-height:225px;
      padding:24px;
      display:flex; flex-direction:column; justify-content:flex-end; gap:12px;
    }
    .hero-kicker{
      font-size:.7rem; letter-spacing:.22em; font-weight:900;
      text-transform:uppercase; color:rgba(255,255,255,.72);
    }
    .hero-head{display:flex;align-items:center;gap:14px}
    .hero-title{font-size:2rem;font-weight:950;line-height:1.03}
    .hero-sub{font-size:.9rem;color:rgba(255,255,255,.78)}
    .hero-badges{display:flex;gap:8px;flex-wrap:wrap}
    .hero-badge{
      display:inline-flex;align-items:center;gap:6px;
      padding:7px 11px;border-radius:999px;
      background:rgba(255,255,255,.1);
      border:1px solid rgba(255,255,255,.08);
      font-size:.74rem;font-weight:800;
    }

    .stats{
      display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin-bottom:16px;
    }
    .stat{
      background:linear-gradient(180deg,rgba(255,255,255,.03),rgba(255,255,255,.015));
      border:1px solid rgba(255,255,255,.06);
      border-radius:18px;padding:12px 14px;
      display:flex;align-items:center;gap:10px;
    }
    .stat-icon{
      width:38px;height:38px;border-radius:12px;display:grid;place-items:center;flex:0 0 auto;
      background:rgba(255,255,255,.06);
    }
    .stat-value{font-size:1.22rem;font-weight:900;line-height:1}
    .stat-label{font-size:.66rem;color:var(--sub);margin-top:3px;font-weight:800}

    .grid-head,.calendar{
      display:grid;grid-template-columns:repeat(7,1fr);gap:4px;
    }
    .grid-head{margin-bottom:5px}
    .dow{
      text-align:center;padding:5px 0;font-size:.7rem;font-weight:900;color:var(--sub);
    }
    .cell{
      min-height:112px;max-height:162px;
      background:linear-gradient(180deg,rgba(255,255,255,.03),rgba(255,255,255,.015));
      border:1px solid rgba(255,255,255,.06);
      border-radius:16px;padding:5px;
      display:flex;flex-direction:column;gap:4px;
      position:relative;cursor:pointer;transition:.15s ease;
      overflow:hidden;
    }
    .cell:hover{
      background:rgba(255,255,255,.045);
      border-color:rgba(255,255,255,.14);
      transform:translateY(-1px);
    }
    .cell.other{opacity:.36}
    .cell.today{border-color:var(--accent)}
    .cell.selected{background:var(--accent-soft);border-color:var(--accent)}
    .cell-top{
      display:flex;align-items:center;justify-content:space-between;
      padding:0 2px;
    }
    .date-num{
      width:22px;height:22px;border-radius:999px;display:grid;place-items:center;
      font-size:.74rem;font-weight:900;
    }
    .cell.today .date-num{background:var(--accent-grad);color:#fff}
    .goal-chip{
      font-size:.55rem;font-weight:900;
      padding:2px 6px;border-radius:999px;background:var(--accent-soft);color:var(--accent)
    }
    .chips{
      display:flex;flex-direction:column;gap:3px;overflow:auto;
    }
    .chip{
      font-size:.62rem;font-weight:800;padding:3px 6px;border-radius:8px;
      white-space:nowrap;overflow:hidden;text-overflow:ellipsis;
    }
    .chip.work{background:rgba(79,142,247,.18);color:#9ec9ff;border-left:3px solid #4f8ef7}
    .chip.private{background:rgba(52,211,153,.18);color:#74eac0;border-left:3px solid #34d399}
    .chip.body{background:rgba(251,146,60,.18);color:#ffc08b;border-left:3px solid #fb923c}
    .chip.study{background:rgba(155,93,229,.18);color:#ddbfff;border-left:3px solid #9b5de5}
    .chip.shared{outline:1px dashed rgba(255,255,255,.14)}
    .add-mini{
      position:absolute; right:5px; bottom:5px;
      width:20px;height:20px;border:none;border-radius:50%;
      background:var(--accent-grad);color:#fff;display:none;cursor:pointer;
      font-weight:900;
    }
    .cell:hover .add-mini{display:block}

    .feed-wrap{max-width:760px;margin:0 auto}
    .filters{
      background:linear-gradient(180deg,rgba(255,255,255,.03),rgba(255,255,255,.015));
      border:1px solid rgba(255,255,255,.06);
      border-radius:18px;padding:14px;margin-bottom:14px;
    }
    .filter-row{
      display:flex;align-items:center;gap:8px;flex-wrap:wrap;margin-bottom:9px;
    }
    .filter-row:last-child{margin-bottom:0}
    .filter-label{
      min-width:52px;font-size:.68rem;font-weight:900;letter-spacing:.12em;
      color:var(--sub);text-transform:uppercase;
    }
    .filter-chip{
      border:1px solid #3a3d53;background:#1b1d29;color:var(--muted);
      padding:5px 10px;border-radius:999px;cursor:pointer;font-size:.72rem;font-weight:800;
    }
    .filter-chip.active{border-color:var(--accent);background:var(--accent-soft);color:var(--accent)}
    .feed-day-head{
      display:flex;align-items:center;gap:10px;
      position:sticky; top:69px; z-index:5;
      padding:4px 0;
    }
    .feed-line{flex:1;height:1px;background:rgba(255,255,255,.08)}
    .feed-date{
      font-size:.76rem;font-weight:900;color:var(--sub);
      padding:0 6px;background:var(--bg);border-radius:999px;
    }
    .feed-card{
      background:linear-gradient(180deg,rgba(255,255,255,.03),rgba(255,255,255,.015));
      border:1px solid rgba(255,255,255,.06);
      border-radius:20px;padding:14px;margin-bottom:12px;
      box-shadow:0 12px 34px rgba(0,0,0,.18);
      cursor:pointer;transition:.16s ease;
    }
    .feed-card:hover{
      transform:translateY(-1px);
      border-color:rgba(255,255,255,.14);
      box-shadow:0 0 0 3px var(--accent-soft);
    }
    .feed-top{display:flex;gap:10px;align-items:flex-start}
    .feed-title{font-size:.84rem;font-weight:900}
    .feed-sub{font-size:.71rem;color:var(--sub);margin-top:3px}
    .feed-note{font-size:.8rem;color:var(--muted);margin-top:8px;line-height:1.6}
    .feed-tags{display:flex;gap:6px;flex-wrap:wrap;margin-top:10px}
    .tag{
      font-size:.65rem;font-weight:800;padding:3px 8px;border-radius:999px;
      border:1px solid rgba(255,255,255,.08);color:var(--muted);background:#1c1d2a;
    }

    .fab{
      position:fixed; right:22px; bottom:22px; z-index:35;
      width:58px;height:58px;border:none;border-radius:50%;
      background:var(--accent-grad);color:#fff;font-size:1.5rem;font-weight:900;
      cursor:pointer; box-shadow:0 14px 34px rgba(0,0,0,.34);
    }

    .sheet{
      position:fixed; inset:0; z-index:80;
      display:none; align-items:center; justify-content:center;
      background:rgba(0,0,0,.62); backdrop-filter:blur(6px);
      padding:14px;
    }
    .sheet.open{display:flex}
    .modal{
      width:100%; max-width:560px; max-height:92vh; overflow:auto;
      background:var(--panel);
      border:1px solid rgba(255,255,255,.08);
      border-radius:22px;
      box-shadow:var(--shadow);
    }
    .modal-head{
      display:flex; align-items:center; gap:10px;
      padding:16px 18px 0;
    }
    .modal-title{font-size:1rem;font-weight:900;flex:1}
    .close{
      border:none;background:#202230;color:var(--muted);width:30px;height:30px;border-radius:10px;cursor:pointer;
    }
    .close:hover{color:var(--text);background:#2a2d3e}
    .modal-body{padding:14px 18px 18px}
    .badge-date{
      display:inline-block; margin-top:10px;
      padding:4px 10px;border-radius:999px;
      background:var(--accent-grad);color:#fff;font-size:.76rem;font-weight:900;
    }
    .row{margin-bottom:11px}
    .label{display:block;font-size:.72rem;font-weight:900;color:var(--muted);margin-bottom:5px}
    .input,.textarea,.select{
      width:100%; background:var(--bg-3); color:var(--text);
      border:1px solid #313346; border-radius:12px;
      padding:9px 10px;
    }
    .input:focus,.textarea:focus,.select:focus{outline:none;border-color:var(--accent);box-shadow:0 0 0 2px var(--accent-soft)}
    .textarea{min-height:80px;resize:vertical}
    .row-2{display:grid;grid-template-columns:1fr 1fr;gap:10px}
    .check-line{
      display:flex;align-items:center;gap:8px;
      background:rgba(255,255,255,.03);
      border:1px solid rgba(255,255,255,.07);
      border-radius:14px;padding:12px;
      margin:12px 0;
    }
    .check-line input{accent-color:var(--accent)}
    .check-sub{font-size:.68rem;color:var(--sub);margin-top:3px}
    .actions{
      display:flex;gap:8px;justify-content:flex-end;align-items:center;
      padding-top:8px;
    }
    .btn{
      border:none;border-radius:12px;padding:10px 14px;cursor:pointer;font-weight:900;
    }
    .btn.ghost{
      background:#202230;color:var(--muted);border:1px solid #313346;
    }
    .btn.primary{
      background:var(--accent-grad);color:#fff;
    }
    .btn.danger{
      background:rgba(255,107,129,.14);color:var(--danger);border:1px solid rgba(255,107,129,.24);
      margin-right:auto;
    }

    .tabs{
      display:flex;gap:6px;flex-wrap:wrap;margin:12px 0 14px;
    }
    .tab{
      border:1px solid #34374a;background:#1b1d29;color:var(--muted);
      border-radius:999px;padding:7px 11px;cursor:pointer;font-size:.76rem;font-weight:900;
    }
    .tab.active{border-color:var(--accent);background:var(--accent-soft);color:var(--accent)}

    .profile-gate{
      position:fixed; inset:0; z-index:100;
      display:none;
    }
    .profile-gate.open{display:block}
    .gate-bg{
      position:absolute; inset:0;
      background:
        radial-gradient(circle at top, rgba(255,255,255,.08), transparent 30%),
        linear-gradient(180deg,#050507,#0b0b10 45%, #12121a);
    }
    .gate-inner{
      position:relative; z-index:1;
      min-height:100vh; display:flex; flex-direction:column;
      align-items:center; justify-content:center; text-align:center;
      padding:24px;
    }
    .gate-brand{
      color:#e50914; font-size:.86rem; font-weight:900; letter-spacing:.28em;
      text-transform:uppercase; margin-bottom:10px;
    }
    .gate-copy{
      color:rgba(255,255,255,.54); font-size:.72rem; letter-spacing:.22em;
      text-transform:uppercase; font-weight:800; margin-bottom:10px;
    }
    .gate-title{font-size:2rem;font-weight:950;margin:0 0 8px}
    .gate-sub{color:var(--muted);margin:0 0 26px}
    .gate-grid{
      display:grid;grid-template-columns:repeat(2,minmax(150px,190px));gap:18px;
    }
    .profile-card{
      background:rgba(255,255,255,.04);
      border:1px solid rgba(255,255,255,.08);
      border-radius:24px;
      padding:20px 16px 16px;
      cursor:pointer;
      transition:.2s ease;
      box-shadow:0 20px 46px rgba(0,0,0,.24);
    }
    .profile-card:hover{
      transform:translateY(-4px) scale(1.02);
      background:rgba(255,255,255,.06);
      border-color:rgba(255,255,255,.18);
    }
    .profile-name{margin-top:12px;font-size:1rem;font-weight:900}
    .profile-edit{
      margin-top:10px;border:none;border-radius:999px;
      background:rgba(255,255,255,.08);color:#fff;
      padding:7px 12px;font-size:.72rem;font-weight:800;cursor:pointer;
    }
    .profile-edit:hover{background:rgba(255,255,255,.14)}

    .splash{
      position:fixed; inset:0; z-index:120;
      background:
        radial-gradient(circle at center, rgba(255,255,255,.04), transparent 28%),
        linear-gradient(180deg,#000 0%, #090909 45%, #111 100%);
      display:grid; place-items:center;
      overflow:hidden;
      transition:opacity .6s ease, visibility .6s ease;
    }
    .splash.hide{opacity:0;visibility:hidden;pointer-events:none}
    .s-glow{
      position:absolute;width:460px;height:460px;border-radius:50%;
      background:radial-gradient(circle, rgba(229,9,20,.22) 0%, rgba(229,9,20,.1) 38%, transparent 70%);
      filter:blur(22px); animation:glowPulse 1.85s ease-in-out forwards;
    }
    .s-light{
      position:absolute;top:0;bottom:0;width:120px;
      background:linear-gradient(90deg,transparent 0%,rgba(255,255,255,.03) 20%,rgba(255,255,255,.16) 45%,rgba(229,9,20,.58) 50%,rgba(255,255,255,.14) 55%,rgba(255,255,255,.02) 80%,transparent 100%);
      transform:translateX(-180vw) skewX(-16deg);
      filter:blur(2px); animation:lightSweep 1.35s cubic-bezier(.22,.8,.2,1) .15s forwards;
    }
    .s-center{
      position:relative;z-index:1;text-align:center;
      animation:centerPop 1.8s ease forwards;
    }
    .s-logo{
      font-size:clamp(48px,8vw,96px);line-height:1;
      font-weight:950;letter-spacing:.05em;color:#e50914;
      text-shadow:0 0 10px rgba(229,9,20,.3),0 0 26px rgba(229,9,20,.18),0 10px 30px rgba(0,0,0,.45);
      opacity:0; transform:scale(.82); animation:logoReveal 1s cubic-bezier(.2,.8,.2,1) .2s forwards;
      text-transform:uppercase;
    }
    .s-name,.s-sub{
      opacity:0; transform:translateY(10px); text-transform:uppercase;
    }
    .s-name{
      margin-top:10px;color:rgba(255,255,255,.84);
      font-size:.86rem;letter-spacing:.3em;font-weight:900;padding-left:.3em;
      animation:nameReveal .7s ease .78s forwards;
    }
    .s-sub{
      margin-top:8px;color:rgba(255,255,255,.5);
      font-size:.72rem;letter-spacing:.22em;font-weight:800;padding-left:.22em;
      animation:nameReveal .7s ease .96s forwards;
    }
    @keyframes logoReveal{
      0%{opacity:0;transform:scale(.68);filter:blur(14px)}
      55%{opacity:1;transform:scale(1.04);filter:blur(0)}
      100%{opacity:1;transform:scale(1);filter:blur(0)}
    }
    @keyframes nameReveal{to{opacity:1;transform:translateY(0)}}
    @keyframes lightSweep{
      0%{transform:translateX(-180vw) skewX(-16deg);opacity:0}
      15%{opacity:1}
      100%{transform:translateX(180vw) skewX(-16deg);opacity:.85}
    }
    @keyframes glowPulse{
      0%{transform:scale(.7);opacity:0}
      30%{opacity:1}
      100%{transform:scale(1.25);opacity:.55}
    }
    @keyframes centerPop{
      0%{transform:scale(.98)}
      70%{transform:scale(1)}
      100%{transform:scale(1.03)}
    }

    .toast-wrap{
      position:fixed; right:18px; bottom:88px; z-index:90;
      display:flex; flex-direction:column; gap:8px;
    }
    .toast{
      background:#161723;border:1px solid rgba(255,255,255,.08);
      color:var(--text);padding:10px 12px;border-radius:14px;
      box-shadow:var(--shadow);font-size:.82rem;max-width:300px;
    }

    .bottom-nav{
      display:none;
      position:fixed; left:10px; right:10px; bottom:10px; z-index:50;
      height:72px; border-radius:22px;
      background:rgba(10,10,15,.9); backdrop-filter:blur(18px);
      border:1px solid rgba(255,255,255,.08);
      box-shadow:0 18px 45px rgba(0,0,0,.38);
      padding:8px 10px;
      align-items:center; justify-content:space-between;
    }
    .bottom-item{
      flex:1;height:100%;background:none;border:none;color:var(--sub);
      display:flex;flex-direction:column;align-items:center;justify-content:center;gap:3px;cursor:pointer;
    }
    .bottom-item.active{color:#fff}
    .bottom-icon{font-size:1.1rem;line-height:1;display:grid;place-items:center}
    .bottom-label{font-size:.65rem;font-weight:900}
    .bottom-add{flex:0 0 58px}
    .bottom-plus{
      width:44px;height:44px;border-radius:50%;display:grid;place-items:center;
      background:var(--accent-grad);color:#fff;font-size:1.5rem;font-weight:900;
    }

    .hidden{display:none !important}

    @media (max-width:980px){
      .stats{grid-template-columns:repeat(2,1fr)}
    }
    @media (max-width:900px){
      .sidebar{transform:translateX(-100%)}
      .sidebar.open{transform:translateX(0)}
      .menu-btn{display:block}
      .main{margin-left:0}
      .content{padding:12px 10px 96px}
      .bottom-nav{display:flex}
      .fab{bottom:94px;right:18px}
      .hero{min-height:190px}
      .hero-inner{min-height:190px;padding:18px}
      .hero-title{font-size:1.55rem}
      .feed-day-head{top:65px}
    }
    @media (max-width:640px){
      .grid-head,.calendar{gap:3px}
      .cell{min-height:62px;max-height:106px;padding:3px}
      .chip{font-size:.56rem;padding:2px 5px}
      .stats{grid-template-columns:1fr 1fr}
      .row-2{grid-template-columns:1fr}
      .month-text{min-width:auto}
      .gate-grid{grid-template-columns:repeat(2,minmax(120px,1fr));width:min(100%,380px)}
      .profile-name{font-size:.94rem}
      .gate-title{font-size:1.62rem}
      .hero-head{align-items:flex-end}
      .hero-avatar{width:58px;height:58px;border-radius:18px}
    }
  </style>
</head>
<body class="user-conan">
  <div class="wallpaper" id="wallpaper"></div>

  <div class="splash" id="splash">
    <div class="s-glow"></div>
    <div class="s-light"></div>
    <div class="s-center">
      <div class="s-logo">THE CALENDAR</div>
      <div class="s-name">THE CALENDAR</div>
      <div class="s-sub">conan&amp;kaori</div>
    </div>
  </div>

  <div class="profile-gate" id="profileGate">
    <div class="gate-bg"></div>
    <div class="gate-inner">
      <div class="gate-brand">THE CALENDAR</div>
      <div class="gate-copy">conan&amp;kaori</div>
      <h1 class="gate-title">プロフィールを選択</h1>
      <p class="gate-sub">今日はどちらのカレンダーで入る？</p>
      <div class="gate-grid" id="profileGateGrid"></div>
    </div>
  </div>

  <div class="app">
    <aside class="sidebar" id="sidebar">
      <div class="sidebar-header">
        <div class="brand-mark">THE CALENDAR</div>
        <div class="brand-sub">conan&amp;kaori</div>
        <div class="brand-mini">private shared schedule</div>
      </div>

      <div class="user-switcher" id="userSwitcher"></div>

      <div class="sidebar-sec">
        <div class="sidebar-label">View</div>
        <div class="nav-item active" data-view-btn="month" onclick="setView('month')">🏠 ホーム</div>
        <div class="nav-item" data-view-btn="list" onclick="setView('list')">📋 一覧</div>
      </div>

      <div class="sidebar-sec">
        <div class="sidebar-label">Shared</div>
        <div class="toggle-row">
          <div class="toggle-label">相手の予定を表示</div>
          <label class="switch">
            <input type="checkbox" id="sharedToggle" onchange="toggleShared(this.checked)">
            <span class="slider"></span>
          </label>
        </div>
        <div style="padding:8px 16px 0;font-size:.68rem;color:var(--sub)">ONにすると両者の予定をまとめて表示</div>
      </div>

      <div class="sidebar-sec">
        <div class="sidebar-label">Mini Calendar</div>
        <div class="mini-cal">
          <div class="mini-head">
            <button class="mini-btn" onclick="miniMove(-1)">‹</button>
            <div class="mini-title" id="miniTitle"></div>
            <button class="mini-btn" onclick="miniMove(1)">›</button>
          </div>
          <div class="mini-grid" id="miniGrid"></div>
        </div>
      </div>

      <div class="sidebar-sec">
        <div class="sidebar-label">Profile</div>
        <div class="nav-item" onclick="openProfileGate()">👤 プロフィール選択</div>
        <div class="nav-item" onclick="openProfileEditor(state.currentUser)">🖼 プロフィール編集</div>
      </div>
    </aside>

    <main class="main">
      <div class="topbar">
        <button class="menu-btn" onclick="toggleSidebar()">☰</button>
        <div class="title" id="topTitle">Conan のカレンダー</div>

        <div class="month-nav">
          <button class="icon-btn" onclick="moveMonth(-1)">‹</button>
          <div class="month-text" id="monthText"></div>
          <button class="icon-btn" onclick="moveMonth(1)">›</button>
          <button class="icon-btn" onclick="goToday()">今日</button>
        </div>

        <button class="icon-btn" onclick="openProfileGate()">プロフィール</button>
      </div>

      <div class="content" id="content"></div>
    </main>
  </div>

  <button class="fab" onclick="openEntryModal()">＋</button>

  <div class="bottom-nav">
    <button class="bottom-item active" data-bottom-view="month" onclick="setView('month')">
      <div class="bottom-icon">🏠</div>
      <div class="bottom-label">ホーム</div>
    </button>
    <button class="bottom-item" data-bottom-view="list" onclick="setView('list')">
      <div class="bottom-icon">📋</div>
      <div class="bottom-label">一覧</div>
    </button>
    <button class="bottom-item bottom-add" onclick="openEntryModal()">
      <div class="bottom-plus">＋</div>
    </button>
    <button class="bottom-item" onclick="openProfileEditor(state.currentUser)">
      <div class="bottom-icon">🖼</div>
      <div class="bottom-label">編集</div>
    </button>
    <button class="bottom-item" onclick="openProfileGate()">
      <div class="bottom-icon" id="bottomProfileIcon">👤</div>
      <div class="bottom-label">プロフィール</div>
    </button>
  </div>

  <div class="sheet" id="entrySheet" onclick="onSheetBg(event,'entrySheet')">
    <div class="modal">
      <div class="modal-head">
        <div class="modal-title" id="entryModalTitle">予定を追加</div>
        <button class="close" onclick="closeEntryModal()">✕</button>
      </div>
      <div class="modal-body">
        <div class="badge-date" id="entryDateBadge"></div>

        <div class="row">
          <label class="label">日付</label>
          <input class="input" type="date" id="entryDate" />
        </div>

        <div class="tabs" id="catTabs"></div>

        <div class="row">
          <label class="label">タイトル</label>
          <input class="input" id="entryTitle" placeholder="例：夜ごはん / MTG / ジム" />
        </div>

        <div class="row-2">
          <div class="row">
            <label class="label">開始</label>
            <input class="input" type="time" id="entryFrom" />
          </div>
          <div class="row">
            <label class="label">終了</label>
            <input class="input" type="time" id="entryTo" />
          </div>
        </div>

        <div class="row">
          <label class="label">メモ</label>
          <textarea class="textarea" id="entryNote" placeholder="自由メモ"></textarea>
        </div>

        <div class="check-line">
          <input type="checkbox" id="entryShared" />
          <div>
            <div style="font-size:.84rem;font-weight:900">相手にも表示する</div>
            <div class="check-sub">共通予定として両方の画面に表示</div>
          </div>
        </div>

        <div class="actions">
          <button class="btn danger hidden" id="deleteBtn" onclick="deleteEntry()">削除</button>
          <button class="btn ghost" onclick="closeEntryModal()">キャンセル</button>
          <button class="btn primary" onclick="saveEntry()">保存</button>
        </div>
      </div>
    </div>
  </div>

  <div class="sheet" id="profileSheet" onclick="onSheetBg(event,'profileSheet')">
    <div class="modal" style="max-width:420px">
      <div class="modal-head">
        <div class="modal-title">プロフィール編集</div>
        <button class="close" onclick="closeProfileEditor()">✕</button>
      </div>
      <div class="modal-body">
        <div style="display:flex;justify-content:center;margin-bottom:14px" id="profilePreview"></div>

        <div class="row">
          <label class="label">表示名</label>
          <input class="input" id="profileNameInput" maxlength="18" />
        </div>

        <div class="row">
          <label class="label">プロフィール画像</label>
          <input class="input" type="file" id="profileFileInput" accept="image/*" onchange="onProfileImageChange(event)" />
        </div>

        <div class="actions">
          <button class="btn danger" style="margin-right:auto" onclick="removeProfileImage()">画像削除</button>
          <button class="btn ghost" onclick="closeProfileEditor()">キャンセル</button>
          <button class="btn primary" onclick="saveProfile()">保存</button>
        </div>
      </div>
    </div>
  </div>

  <div class="toast-wrap" id="toastWrap"></div>

  <script>
    const STORAGE_KEY = "the_calendar_v1";
    const CATS = {
      work: { label:"仕事", icon:"💼", cls:"work" },
      private: { label:"プライベート", icon:"🏠", cls:"private" },
      body: { label:"ボディビル", icon:"💪", cls:"body" },
      study: { label:"資格勉強", icon:"📚", cls:"study" }
    };

    const state = {
      currentUser: "conan",
      view: "month",
      monthDate: new Date(new Date().getFullYear(), new Date().getMonth(), 1),
      selectedDate: dateStr(new Date()),
      miniDate: new Date(new Date().getFullYear(), new Date().getMonth(), 1),
      showShared: true,
      profiles: {
        conan: { name:"Conan", image:"", wallpaper:"" },
        kaori: { name:"Kaori", image:"", wallpaper:"" }
      },
      entries: {
        conan: [],
        kaori: []
      },
      filters: {
        users: ["conan","kaori"],
        cats: ["work","private","body","study"]
      }
    };

    let entryDraft = {
      id: null,
      cat: "private",
      date: "",
      title: "",
      from: "",
      to: "",
      note: "",
      shared: false
    };

    let editingProfileUser = "conan";

    function uid(){
      return Date.now().toString(36) + Math.random().toString(36).slice(2,7);
    }

    function dateStr(d){
      const y = d.getFullYear();
      const m = String(d.getMonth()+1).padStart(2,"0");
      const day = String(d.getDate()).padStart(2,"0");
      return `${y}-${m}-${day}`;
    }

    function sameMonth(a,b){
      return a.getFullYear()===b.getFullYear() && a.getMonth()===b.getMonth();
    }

    function esc(s){
      return String(s ?? "")
        .replace(/&/g,"&amp;")
        .replace(/</g,"&lt;")
        .replace(/>/g,"&gt;")
        .replace(/"/g,"&quot;");
    }

    function saveLocal(){
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    }

    function loadLocal(){
      const raw = localStorage.getItem(STORAGE_KEY);
      if(!raw) return;
      try{
        const data = JSON.parse(raw);
        if(data.currentUser) state.currentUser = data.currentUser;
        if(data.view) state.view = data.view;
        if(data.selectedDate) state.selectedDate = data.selectedDate;
        if(typeof data.showShared === "boolean") state.showShared = data.showShared;
        if(data.filters) state.filters = { ...state.filters, ...data.filters };
        if(data.profiles){
          state.profiles.conan = { ...state.profiles.conan, ...data.profiles.conan };
          state.profiles.kaori = { ...state.profiles.kaori, ...data.profiles.kaori };
        }
        if(data.entries){
          state.entries.conan = Array.isArray(data.entries.conan) ? data.entries.conan : [];
          state.entries.kaori = Array.isArray(data.entries.kaori) ? data.entries.kaori : [];
        }
      }catch(e){
        console.error(e);
      }
    }

    function profileOf(user){
      return state.profiles[user];
    }

    function avatarHTML(user, cls="avatar"){
      const p = profileOf(user);
      const first = (p.name || user).trim().charAt(0).toUpperCase() || "?";
      if(p.image){
        return `<img src="${p.image}" class="${cls}" alt="${esc(p.name)}">`;
      }
      const extra = user === "kaori" ? " style='background:linear-gradient(135deg,#f472b6,#fb7185)'" : "";
      return `<div class="${cls}"${extra}>${esc(first)}</div>`;
    }

    function currentName(){
      return profileOf(state.currentUser).name;
    }

    function setBodyTheme(){
      document.body.classList.toggle("user-conan", state.currentUser === "conan");
      document.body.classList.toggle("user-kaori", state.currentUser === "kaori");

      const wall = profileOf(state.currentUser).wallpaper;
      const wp = document.getElementById("wallpaper");
      wp.style.backgroundImage = wall ? `url(${wall})` : "none";
    }

    function renderUserSwitcher(){
      const el = document.getElementById("userSwitcher");
      el.innerHTML = ["conan","kaori"].map(user => `
        <button class="user-pill ${state.currentUser===user ? "active":""}" onclick="switchUser('${user}')">
          ${avatarHTML(user,"avatar")}
          <div style="text-align:left">
            <div class="user-pill-title">${esc(profileOf(user).name)}</div>
            <div class="user-pill-sub">${user==="conan" ? "あなた" : "パートナー"}</div>
          </div>
        </button>
      `).join("");
    }

    function renderProfileGate(){
      const el = document.getElementById("profileGateGrid");
      el.innerHTML = ["conan","kaori"].map(user => `
        <div class="profile-card" onclick="chooseProfile('${user}')">
          <div style="display:flex;justify-content:center">${avatarHTML(user,"avatar xl")}</div>
          <div class="profile-name">${esc(profileOf(user).name)}</div>
          <button class="profile-edit" onclick="event.stopPropagation(); openProfileEditor('${user}')">編集</button>
        </div>
      `).join("");
    }

    function renderTop(){
      document.getElementById("topTitle").textContent =
        state.view === "month"
          ? `${currentName()} のカレンダー`
          : `${currentName()} の一覧`;

      const d = state.monthDate;
      document.getElementById("monthText").textContent = `${d.getFullYear()}年 ${d.getMonth()+1}月`;

      document.querySelectorAll("[data-view-btn]").forEach(btn => {
        btn.classList.toggle("active", btn.dataset.viewBtn === state.view);
      });
      document.querySelectorAll("[data-bottom-view]").forEach(btn => {
        btn.classList.toggle("active", btn.dataset.bottomView === state.view);
      });

      document.getElementById("sharedToggle").checked = state.showShared;
      document.getElementById("bottomProfileIcon").innerHTML = avatarHTML(state.currentUser,"avatar xs");
    }

    function getVisibleEntriesByDate(dt){
      const mine = state.entries[state.currentUser].filter(e => e.date === dt);
      const otherUser = state.currentUser === "conan" ? "kaori" : "conan";
      const other = state.entries[otherUser].filter(e => e.date === dt);
      const visibleOther = state.showShared ? other : other.filter(e => e.shared);
      return [...mine, ...visibleOther];
    }

    function renderHero(){
      const p = profileOf(state.currentUser);
      const currentMonthEntries = state.entries[state.currentUser].filter(e => {
        const d = new Date(e.date);
        return d.getFullYear() === state.monthDate.getFullYear() && d.getMonth() === state.monthDate.getMonth();
      });
      const todayCount = getVisibleEntriesByDate(dateStr(new Date())).length;
      const heroBg = p.wallpaper
        ? `style="background-image:linear-gradient(90deg, rgba(0,0,0,.82), rgba(0,0,0,.28)), url('${p.wallpaper}')"`
        : "";

      return `
        <section class="hero" ${heroBg}>
          <div class="hero-inner">
            <div class="hero-kicker">THE CALENDAR ORIGINAL</div>
            <div class="hero-head">
              ${avatarHTML(state.currentUser,"avatar lg hero-avatar")}
              <div>
                <div class="hero-title">${esc(p.name)}</div>
                <div class="hero-sub">ふたりの予定を、Netflixライクな空気感で。</div>
              </div>
            </div>
            <div class="hero-badges">
              <span class="hero-badge">📅 ${state.monthDate.getFullYear()}年 ${state.monthDate.getMonth()+1}月</span>
              <span class="hero-badge">📝 今月 ${currentMonthEntries.length}件</span>
              <span class="hero-badge">🔔 今日 ${todayCount}件</span>
            </div>
          </div>
        </section>
      `;
    }

    function renderStats(){
      const monthEntries = state.entries[state.currentUser].filter(e => {
        const d = new Date(e.date);
        return d.getFullYear() === state.monthDate.getFullYear() && d.getMonth() === state.monthDate.getMonth();
      });

      const work = monthEntries.filter(e => e.cat === "work").length;
      const priv = monthEntries.filter(e => e.cat === "private").length;
      const body = monthEntries.filter(e => e.cat === "body").length;
      const study = monthEntries.filter(e => e.cat === "study").length;

      return `
        <section class="stats">
          <div class="stat"><div class="stat-icon">💼</div><div><div class="stat-value">${work}</div><div class="stat-label">仕事</div></div></div>
          <div class="stat"><div class="stat-icon">🏠</div><div><div class="stat-value">${priv}</div><div class="stat-label">プライベート</div></div></div>
          <div class="stat"><div class="stat-icon">💪</div><div><div class="stat-value">${body}</div><div class="stat-label">ボディビル</div></div></div>
          <div class="stat"><div class="stat-icon">📚</div><div><div class="stat-value">${study}</div><div class="stat-label">資格勉強</div></div></div>
        </section>
      `;
    }

    function renderMonthView(){
      const d = state.monthDate;
      const year = d.getFullYear();
      const month = d.getMonth();
      const firstDay = new Date(year, month, 1).getDay();
      const daysInMonth = new Date(year, month+1, 0).getDate();
      const prevMonthDays = new Date(year, month, 0).getDate();
      const today = dateStr(new Date());
      const dows = ["日","月","火","水","木","金","土"];

      let head = `<div class="grid-head">${dows.map((w,i)=>`<div class="dow" style="${i===0?'color:#ff8f99':i===6?'color:#7cb6ff':''}">${w}</div>`).join("")}</div>`;
      let cells = "";

      for(let i=firstDay-1;i>=0;i--){
        const day = prevMonthDays - i;
        const dt = dateStr(new Date(year, month-1, day));
        cells += renderCell(dt, day, true, today);
      }
      for(let day=1; day<=daysInMonth; day++){
        const dt = dateStr(new Date(year, month, day));
        cells += renderCell(dt, day, false, today);
      }
      const total = firstDay + daysInMonth;
      const next = total % 7 === 0 ? 0 : 7 - (total % 7);
      for(let day=1; day<=next; day++){
        const dt = dateStr(new Date(year, month+1, day));
        cells += renderCell(dt, day, true, today);
      }

      document.getElementById("content").innerHTML = `
        ${renderHero()}
        ${renderStats()}
        ${head}
        <section class="calendar">${cells}</section>
      `;
    }

    function renderCell(dt, day, other, today){
      const items = getVisibleEntriesByDate(dt).sort((a,b)=>(a.from||"99:99").localeCompare(b.from||"99:99"));
      const isToday = dt === today;
      const selected = dt === state.selectedDate;

      return `
        <div class="cell ${other ? "other":""} ${isToday ? "today":""} ${selected ? "selected":""}" onclick="openEntryModal(null,'${dt}')">
          <div class="cell-top">
            <div class="date-num">${day}</div>
            ${items.length ? `<div class="goal-chip">${items.length}件</div>` : ``}
          </div>
          <div class="chips">
            ${items.map(e=>{
              const cat = CATS[e.cat];
              const time = e.from ? `${e.from}${e.to ? "〜"+e.to : ""} ` : "";
              return `<div class="chip ${cat.cls} ${e.shared ? "shared":""}" onclick="event.stopPropagation();openEntryModal('${e.id}')">${cat.icon} ${esc(time + e.title)}</div>`;
            }).join("")}
          </div>
          <button class="add-mini" onclick="event.stopPropagation();openEntryModal(null,'${dt}')">＋</button>
        </div>
      `;
    }

    function renderListView(){
      const datesSet = new Set();

      state.filters.users.forEach(user => {
        state.entries[user].forEach(e => {
          if(state.filters.cats.includes(e.cat)) datesSet.add(e.date);
        });
      });

      const dates = [...datesSet].sort();

      const html = `
        ${renderHero()}
        ${renderStats()}
        ${renderFilters()}
        <section class="feed-wrap">
          ${dates.length ? dates.map(dt => renderFeedDay(dt)).join("") : `<div style="text-align:center;color:var(--sub);padding:50px 0">表示できる予定がありません</div>`}
        </section>
      `;

      document.getElementById("content").innerHTML = html;
    }

    function renderFilters(){
      const userChip = (u,label)=>`
        <button class="filter-chip ${state.filters.users.includes(u) ? "active":""}" onclick="toggleFilterUser('${u}')">${label}</button>
      `;
      const catChip = key => `
        <button class="filter-chip ${state.filters.cats.includes(key) ? "active":""}" onclick="toggleFilterCat('${key}')">${CATS[key].icon} ${CATS[key].label}</button>
      `;

      return `
        <div class="filters">
          <div class="filter-row">
            <div class="filter-label">User</div>
            ${userChip("conan","Conan")}
            ${userChip("kaori","Kaori")}
          </div>
          <div class="filter-row">
            <div class="filter-label">Category</div>
            ${Object.keys(CATS).map(catChip).join("")}
          </div>
        </div>
      `;
    }

    function renderFeedDay(dt){
      const d = new Date(dt);
      const dows = ["日","月","火","水","木","金","土"];

      const items = [];
      state.filters.users.forEach(u => {
        state.entries[u]
          .filter(e => e.date === dt && state.filters.cats.includes(e.cat))
          .forEach(e => {
            if(u === state.currentUser || state.showShared || e.shared){
              items.push(e);
            }
          });
      });

      items.sort((a,b)=>(a.from||"99:99").localeCompare(b.from||"99:99"));
      if(!items.length) return "";

      return `
        <div class="feed-day-head">
          <div class="feed-line"></div>
          <div class="feed-date">${d.getMonth()+1}月${d.getDate()}日(${dows[d.getDay()]})</div>
          <div class="feed-line"></div>
        </div>
        ${items.map(renderFeedCard).join("")}
      `;
    }

    function renderFeedCard(e){
      const owner = profileOf(e.user);
      const cat = CATS[e.cat];
      const time = e.from ? `${e.from}${e.to ? "〜"+e.to : ""}` : "時刻未設定";
      return `
        <div class="feed-card" onclick="openEntryModal('${e.id}')">
          <div class="feed-top">
            ${avatarHTML(e.user,"avatar round")}
            <div style="flex:1">
              <div class="feed-title">${cat.icon} ${esc(e.title)} <span style="font-size:.72rem;color:var(--accent);font-weight:900">${esc(time)}</span></div>
              <div class="feed-sub">${esc(owner.name)} ・ ${esc(cat.label)} ${e.shared ? "・ 共通" : ""}</div>
              ${e.note ? `<div class="feed-note">${esc(e.note)}</div>` : ``}
              <div class="feed-tags">
                <span class="tag">${cat.label}</span>
                ${e.shared ? `<span class="tag">共通</span>` : ``}
              </div>
            </div>
          </div>
        </div>
      `;
    }

    function renderMiniCal(){
      const d = state.miniDate;
      const y = d.getFullYear();
      const m = d.getMonth();
      document.getElementById("miniTitle").textContent = `${y}年 ${m+1}月`;

      const dows = ["日","月","火","水","木","金","土"];
      const first = new Date(y,m,1).getDay();
      const last = new Date(y,m+1,0).getDate();
      let html = dows.map(w=>`<div class="mini-dow">${w}</div>`).join("");
      for(let i=0;i<first;i++) html += `<div></div>`;
      for(let day=1;day<=last;day++){
        const dt = dateStr(new Date(y,m,day));
        const has = state.entries.conan.some(e=>e.date===dt) || state.entries.kaori.some(e=>e.date===dt);
        const cls = [
          "mini-day",
          dt===dateStr(new Date()) ? "today":"",
          dt===state.selectedDate ? "selected":"",
          has ? "has":""
        ].join(" ").trim();
        html += `<div class="${cls}" onclick="pickMiniDate('${dt}')">${day}</div>`;
      }
      document.getElementById("miniGrid").innerHTML = html;
    }

    function renderCatTabs(){
      const el = document.getElementById("catTabs");
      el.innerHTML = Object.entries(CATS).map(([key,val]) => `
        <button class="tab ${entryDraft.cat===key ? "active":""}" onclick="setDraftCat('${key}')">${val.icon} ${val.label}</button>
      `).join("");
    }

    function setDraftCat(cat){
      entryDraft.cat = cat;
      renderCatTabs();
    }

    function openEntryModal(id=null, dateOverride=null){
      if(id){
        const found = [...state.entries.conan, ...state.entries.kaori].find(e => e.id === id);
        if(!found) return;
        entryDraft = { ...found };
        document.getElementById("entryModalTitle").textContent = "予定を編集";
        document.getElementById("deleteBtn").classList.toggle("hidden", found.user !== state.currentUser);
      }else{
        entryDraft = {
          id: null,
          user: state.currentUser,
          cat: "private",
          date: dateOverride || state.selectedDate || dateStr(new Date()),
          title: "",
          from: "",
          to: "",
          note: "",
          shared: false
        };
        document.getElementById("entryModalTitle").textContent = "予定を追加";
        document.getElementById("deleteBtn").classList.add("hidden");
      }

      fillEntryForm();
      document.getElementById("entrySheet").classList.add("open");
    }

    function fillEntryForm(){
      document.getElementById("entryDate").value = entryDraft.date || dateStr(new Date());
      document.getElementById("entryTitle").value = entryDraft.title || "";
      document.getElementById("entryFrom").value = entryDraft.from || "";
      document.getElementById("entryTo").value = entryDraft.to || "";
      document.getElementById("entryNote").value = entryDraft.note || "";
      document.getElementById("entryShared").checked = !!entryDraft.shared;
      document.getElementById("entryDateBadge").textContent = formatDateBadge(entryDraft.date || dateStr(new Date()));
      renderCatTabs();
    }

    function closeEntryModal(){
      document.getElementById("entrySheet").classList.remove("open");
    }

    function saveEntry(){
      const date = document.getElementById("entryDate").value;
      const title = document.getElementById("entryTitle").value.trim();
      const from = document.getElementById("entryFrom").value;
      const to = document.getElementById("entryTo").value;
      const note = document.getElementById("entryNote").value.trim();
      const shared = document.getElementById("entryShared").checked;

      if(!date){
        toast("日付を入力してね");
        return;
      }
      if(!title){
        toast("タイトルを入力してね");
        return;
      }

      const payload = {
        ...entryDraft,
        user: entryDraft.user || state.currentUser,
        date, title, from, to, note, shared, cat: entryDraft.cat
      };

      if(payload.id){
        const owner = payload.user;
        const idx = state.entries[owner].findIndex(e => e.id === payload.id);
        if(idx >= 0){
          state.entries[owner][idx] = payload;
        }
      }else{
        payload.id = uid();
        state.entries[state.currentUser].push(payload);
      }

      state.selectedDate = date;
      saveLocal();
      closeEntryModal();
      renderAll();
      toast("保存したよ");
    }

    function deleteEntry(){
      if(!entryDraft.id) return;
      if(entryDraft.user !== state.currentUser){
        toast("相手の予定は削除できないよ");
        return;
      }
      state.entries[state.currentUser] = state.entries[state.currentUser].filter(e => e.id !== entryDraft.id);
      saveLocal();
      closeEntryModal();
      renderAll();
      toast("削除したよ");
    }

    function formatDateBadge(dt){
      const d = new Date(dt);
      const w = ["日","月","火","水","木","金","土"][d.getDay()];
      return `${d.getMonth()+1}/${d.getDate()} (${w})`;
    }

    function openProfileGate(){
      document.getElementById("profileGate").classList.add("open");
      renderProfileGate();
    }

    function closeProfileGate(){
      document.getElementById("profileGate").classList.remove("open");
    }

    function chooseProfile(user){
      switchUser(user);
      closeProfileGate();
    }

    function switchUser(user){
      state.currentUser = user;
      saveLocal();
      setBodyTheme();
      renderAll();
      closeSidebar();
    }

    function openProfileEditor(user){
      editingProfileUser = user;
      const p = profileOf(user);
      document.getElementById("profileNameInput").value = p.name || "";
      document.getElementById("profilePreview").innerHTML = avatarHTML(user,"avatar xl");
      document.getElementById("profileSheet").classList.add("open");
    }

    function closeProfileEditor(){
      document.getElementById("profileSheet").classList.remove("open");
      document.getElementById("profileFileInput").value = "";
    }

    function onProfileImageChange(event){
      const file = event.target.files && event.target.files[0];
      if(!file) return;
      if(file.size > 4 * 1024 * 1024){
        toast("画像は4MB以下にしてね");
        event.target.value = "";
        return;
      }
      const reader = new FileReader();
      reader.onload = e => {
        state.profiles[editingProfileUser].image = e.target.result;
        if(!state.profiles[editingProfileUser].wallpaper){
          state.profiles[editingProfileUser].wallpaper = e.target.result;
        }
        document.getElementById("profilePreview").innerHTML = avatarHTML(editingProfileUser,"avatar xl");
      };
      reader.readAsDataURL(file);
    }

    function removeProfileImage(){
      state.profiles[editingProfileUser].image = "";
      document.getElementById("profilePreview").innerHTML = avatarHTML(editingProfileUser,"avatar xl");
    }

    function saveProfile(){
      const name = document.getElementById("profileNameInput").value.trim();
      if(!name){
        toast("表示名を入力してね");
        return;
      }
      state.profiles[editingProfileUser].name = name;
      saveLocal();
      closeProfileEditor();
      setBodyTheme();
      renderAll();
      toast("プロフィールを更新したよ");
    }

    function setView(view){
      state.view = view;
      saveLocal();
      renderAll();
    }

    function moveMonth(diff){
      state.monthDate = new Date(state.monthDate.getFullYear(), state.monthDate.getMonth() + diff, 1);
      renderAll();
    }

    function goToday(){
      const now = new Date();
      state.monthDate = new Date(now.getFullYear(), now.getMonth(), 1);
      state.selectedDate = dateStr(now);
      state.miniDate = new Date(now.getFullYear(), now.getMonth(), 1);
      renderAll();
    }

    function miniMove(diff){
      state.miniDate = new Date(state.miniDate.getFullYear(), state.miniDate.getMonth()+diff, 1);
      renderMiniCal();
    }

    function pickMiniDate(dt){
      state.selectedDate = dt;
      const d = new Date(dt);
      state.monthDate = new Date(d.getFullYear(), d.getMonth(), 1);
      state.miniDate = new Date(d.getFullYear(), d.getMonth(), 1);
      renderAll();
      openEntryModal(null, dt);
    }

    function toggleShared(v){
      state.showShared = v;
      saveLocal();
      renderAll();
    }

    function toggleFilterUser(user){
      const arr = state.filters.users;
      const idx = arr.indexOf(user);
      if(idx >= 0){
        if(arr.length > 1) arr.splice(idx,1);
      }else{
        arr.push(user);
      }
      saveLocal();
      renderListView();
    }

    function toggleFilterCat(cat){
      const arr = state.filters.cats;
      const idx = arr.indexOf(cat);
      if(idx >= 0){
        if(arr.length > 1) arr.splice(idx,1);
      }else{
        arr.push(cat);
      }
      saveLocal();
      renderListView();
    }

    function toggleSidebar(){
      document.getElementById("sidebar").classList.toggle("open");
    }

    function closeSidebar(){
      document.getElementById("sidebar").classList.remove("open");
    }

    function onSheetBg(e,id){
      if(e.target.id === id){
        document.getElementById(id).classList.remove("open");
      }
    }

    function toast(msg){      const wrap = document.getElementById("toastWrap");
      const el = document.createElement("div");
      el.className = "toast";
      el.textContent = msg;
      wrap.appendChild(el);
      setTimeout(() => {
        el.style.transition = "opacity .25s ease, transform .25s ease";
        el.style.opacity = "0";
        el.style.transform = "translateY(6px)";
        setTimeout(() => el.remove(), 260);
      }, 2400);
    }

    function renderAll(){
      setBodyTheme();
      renderUserSwitcher();
      renderProfileGate();
      renderTop();
      renderMiniCal();

      if(state.view === "month"){
        renderMonthView();
      }else{
        renderListView();
      }
    }

    function seedDemoIfEmpty(){
      const total = state.entries.conan.length + state.entries.kaori.length;
      if(total > 0) return;

      const now = new Date();
      const y = now.getFullYear();
      const m = now.getMonth();

      const d1 = dateStr(new Date(y, m, Math.min(3, new Date(y, m + 1, 0).getDate())));
      const d2 = dateStr(new Date(y, m, Math.min(7, new Date(y, m + 1, 0).getDate())));
      const d3 = dateStr(new Date(y, m, Math.min(12, new Date(y, m + 1, 0).getDate())));
      const d4 = dateStr(new Date(y, m, Math.min(18, new Date(y, m + 1, 0).getDate())));
      const d5 = dateStr(new Date(y, m, Math.min(22, new Date(y, m + 1, 0).getDate())));

      state.entries.conan.push(
        {
          id: uid(),
          user: "conan",
          cat: "work",
          date: d1,
          title: "企画MTG",
          from: "10:00",
          to: "11:00",
          note: "資料最終確認",
          shared: false
        },
        {
          id: uid(),
          user: "conan",
          cat: "body",
          date: d3,
          title: "胸・肩トレ",
          from: "19:30",
          to: "21:00",
          note: "ベンチ中心",
          shared: false
        },
        {
          id: uid(),
          user: "conan",
          cat: "private",
          date: d4,
          title: "夜ごはんデート",
          from: "19:00",
          to: "21:30",
          note: "共通予定",
          shared: true
        }
      );

      state.entries.kaori.push(
        {
          id: uid(),
          user: "kaori",
          cat: "study",
          date: d2,
          title: "資格勉強",
          from: "21:00",
          to: "22:30",
          note: "問題集2章",
          shared: false
        },
        {
          id: uid(),
          user: "kaori",
          cat: "private",
          date: d5,
          title: "美容院",
          from: "14:00",
          to: "16:00",
          note: "",
          shared: false
        },
        {
          id: uid(),
          user: "kaori",
          cat: "private",
          date: d4,
          title: "夜ごはんデート",
          from: "19:00",
          to: "21:30",
          note: "共通予定",
          shared: true
        }
      );
    }

    function setupEntryFormEvents(){
      const dateInput = document.getElementById("entryDate");
      if(dateInput){
        dateInput.addEventListener("change", e => {
          document.getElementById("entryDateBadge").textContent = formatDateBadge(e.target.value || dateStr(new Date()));
        });
      }
    }

    function setupGlobalEvents(){
      document.addEventListener("keydown", e => {
        if(e.key === "Escape"){
          closeEntryModal();
          closeProfileEditor();
          closeProfileGate();
          closeSidebar();
        }

        if((e.metaKey || e.ctrlKey) && e.key === "Enter"){
          if(document.getElementById("entrySheet").classList.contains("open")){
            saveEntry();
          }
        }
      });

      document.addEventListener("click", e => {
        const sidebar = document.getElementById("sidebar");
        const menuBtn = document.querySelector(".menu-btn");
        const isMobile = window.innerWidth <= 900;

        if(!isMobile) return;
        if(!sidebar.classList.contains("open")) return;

        const clickedInsideSidebar = sidebar.contains(e.target);
        const clickedMenuBtn = menuBtn && menuBtn.contains(e.target);

        if(!clickedInsideSidebar && !clickedMenuBtn){
          closeSidebar();
        }
      });

      window.addEventListener("resize", () => {
        if(window.innerWidth > 900){
          closeSidebar();
        }
      });
    }

    function playSplash(){
      const splash = document.getElementById("splash");
      if(!splash) return;

      setTimeout(() => {
        splash.classList.add("hide");
      }, 1800);

      setTimeout(() => {
        splash.remove();
        openProfileGate();
      }, 2450);
    }

    function init(){
      loadLocal();
      seedDemoIfEmpty();
      setBodyTheme();
      setupEntryFormEvents();
      setupGlobalEvents();
      renderAll();
      playSplash();
    }

    init();
  </script>
</body>
</html>

