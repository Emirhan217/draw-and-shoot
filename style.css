:root {
  --ink: #10231b;
  --green: #42a95a;
  --cream: #f8f5e8;
  --yellow: #ffd75c;
}

* { box-sizing: border-box; }
html { scroll-behavior: smooth; }

body {
  margin: 0;
  color: var(--ink);
  background: var(--cream);
  font-family: Arial, Helvetica, sans-serif;
}

.header {
  width: min(1160px, 92%);
  min-height: 76px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  color: var(--ink);
  font-size: 1.25rem;
  font-weight: 900;
  text-decoration: none;
}

.menu { display: flex; gap: 24px; }

.menu a {
  color: var(--ink);
  font-weight: bold;
  text-decoration: none;
}

.menu-button {
  display: none;
  border: 0;
  background: transparent;
  font-size: 1.6rem;
}

.hero {
  width: min(1160px, 92%);
  margin: 38px auto 90px;
  display: grid;
  grid-template-columns: 1.05fr .95fr;
  gap: 58px;
  align-items: center;
}

.eyebrow {
  color: #158243;
  font-weight: 900;
  letter-spacing: .12em;
  font-size: .76rem;
}

h1 {
  margin: 12px 0 24px;
  font-size: clamp(3.2rem, 7vw, 6.3rem);
  line-height: .9;
  letter-spacing: -.07em;
}

h1 span { color: #ed5d43; }

h2 {
  font-size: clamp(2rem, 4vw, 3.5rem);
  letter-spacing: -.05em;
}

.lead {
  max-width: 560px;
  color: #466052;
  line-height: 1.65;
  font-size: 1.1rem;
}

.actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 28px;
}

.button {
  padding: 14px 20px;
  border-radius: 12px;
  font-weight: 900;
  text-decoration: none;
}

.primary {
  color: var(--ink);
  background: var(--yellow);
  box-shadow: 0 5px 0 #d6a922;
}

.secondary {
  color: white;
  background: #244f38;
}

.stats {
  display: flex;
  gap: 34px;
  margin-top: 42px;
}

.stats div { display: grid; }
.stats strong { font-size: 1.75rem; }
.stats span { color: #557164; font-size: .85rem; }

.game-card {
  position: relative;
  height: 440px;
  overflow: hidden;
  border: 9px solid #eaf2df;
  border-radius: 28px;
  background: repeating-linear-gradient(
    90deg,
    #4caf63 0 52px,
    #3d9d55 52px 104px
  );
  box-shadow: 0 22px 45px #193c2b44;
}

.goal {
  position: absolute;
  left: 50%;
  top: 28px;
  width: 190px;
  height: 72px;
  transform: translateX(-50%);
  border: 6px solid white;
  background: repeating-linear-gradient(
    90deg,
    transparent 0 17px,
    #dce8df 18px 19px
  );
}

.route {
  position: absolute;
  left: 42%;
  top: 175px;
  width: 170px;
  height: 210px;
  border-left: 9px solid var(--yellow);
  border-bottom: 9px solid var(--yellow);
  border-radius: 0 0 0 100%;
  transform: rotate(25deg);
}

.ball {
  position: absolute;
  left: 41%;
  bottom: 49px;
  font-size: 3.3rem;
  filter: drop-shadow(4px 7px 2px #173e28aa);
}

.defender {
  position: absolute;
  width: 50px;
  height: 50px;
  padding-top: 12px;
  border: 4px solid #292822;
  border-radius: 50%;
  color: white;
  background: #ef594d;
  text-align: center;
  font-weight: bold;
}

.d1 { top: 220px; left: 22%; }
.d2 { top: 145px; right: 18%; }

.game-card p {
  position: absolute;
  bottom: 8px;
  left: 22px;
  color: white;
  font-weight: 900;
}

.worlds, .how {
  padding: 82px max(4%, calc((100% - 1160px) / 2));
}

.worlds { background: #e1f2dd; }

.world-grid, .steps {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
}

.world {
  min-height: 260px;
  padding: 24px;
  overflow: hidden;
  border-radius: 20px;
  color: white;
  box-shadow: inset 0 -90px 90px #0003;
}

.world h3 {
  margin: 52px 0 8px;
  font-size: 2rem;
}

.world p { line-height: 1.5; }

.valley { background: linear-gradient(145deg, #55b45d, #18783d); }
.desert { background: linear-gradient(145deg, #ebad46, #c2672f); }
.ice { background: linear-gradient(145deg, #62bddd, #1a678d); }

.how { background: #fffdf6; }

.steps article {
  padding: 18px 0;
  border-top: 4px solid var(--green);
}

.steps em {
  color: #e35d42;
  font-style: normal;
  font-weight: 900;
}

.steps p {
  color: #587065;
  line-height: 1.6;
}

.download {
  padding: 100px 20px;
  color: white;
  background: #174631;
  text-align: center;
}

.download h2 {
  max-width: 650px;
  margin: 8px auto;
  font-size: clamp(2.3rem, 5vw, 4.6rem);
  line-height: .95;
  letter-spacing: -.06em;
}

.download .actions { justify-content: center; }

footer {
  padding: 26px;
  color: #d9eadd;
  background: #102d20;
  text-align: center;
}

@media (max-width: 720px) {
  .menu-button { display: block; }

  .menu {
    display: none;
    position: absolute;
    top: 58px;
    right: 4%;
    padding: 16px;
    flex-direction: column;
    background: white;
    border-radius: 12px;
    box-shadow: 0 8px 25px #0003;
  }

  .menu.open { display: flex; }

  .hero {
    grid-template-columns: 1fr;
    gap: 35px;
  }

  .game-card { height: 360px; }
  .world-grid, .steps { grid-template-columns: 1fr; }
}
