const pieces = {
  featured: {
    meta: "01 / Reflection",
    title: "Secerca sesal di sore hari.",
    body: `
      <p>Andai seluruh kekalahan itu dapat ku terima dengan lapang dada, mungkin saja kini aku sedang jongjon dengan aneka ragam keselarasan dan variasi sudut pandang.</p>
      <p>Yang mana berdampak langsung terhadap ketersinambungan antara apa dan seberapa sedikit yang mampu aku tawarkan, dengan mana dan seberapa banyak yang dibutuhkan.</p>
    `
  },
  growing: {
    meta: "02 / Notes",
    title: "Growing up, apparently.",
    body: `
      <p>To me, growing up is kinda like… time-wasting kinda type shit.</p>
      <p>Something I could only see by deeply analysing it — truly deep diving to the point where I realise that it is kinda shitty, throwing me back to the past, reminiscing memories.</p>
      <p>Some people might tell me about how it went for them, taking me for granted, and assume that I’ll end up just like them.</p>
      <p>But I’m getting better at looking at it.</p>
    `
  }
};

const modal = document.querySelector("#modal");
const title = document.querySelector("#modal-title");
const meta = document.querySelector("#modal-meta");
const body = document.querySelector("#modal-body");

function openPiece(id) {
  const piece = pieces[id];
  if (!piece) return;
  meta.textContent = piece.meta;
  title.textContent = piece.title;
  body.innerHTML = piece.body;
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closePiece() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

document.querySelectorAll("[data-piece]").forEach(el => {
  el.addEventListener("click", () => openPiece(el.dataset.piece));
});
document.querySelector("#close").addEventListener("click", closePiece);
modal.addEventListener("click", e => { if (e.target === modal) closePiece(); });
document.addEventListener("keydown", e => { if (e.key === "Escape") closePiece(); });
