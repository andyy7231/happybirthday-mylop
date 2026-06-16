(function () {
  window.Components = window.Components || {};

  window.Components.countdown = {
    render(container, section) {
      const div = document.createElement("div");
      div.className = "section section-countdown";

      const numbers = [];
      const start = section.from || 3;
      for (let i = start; i >= 1; i--) numbers.push(i);

      div.innerHTML = `
        <div class="countdown-wrapper">
          ${numbers.map((n) => `
            <div class="countdown-item countdown-item-${n}" style="position: absolute; display: flex; flex-direction: column; align-items: center; justify-content: center; width: 100%; text-align: center;">
              <span class="countdown-num" style="position: static; opacity: 1; display: block; font-size: clamp(4rem, 15vw, 8rem); font-weight: 800; color: var(--accent);">${n}</span>
              ${section.texts && section.texts[n] ? `<p class="countdown-desc" style="font-size: clamp(0.95rem, 2.8vw, 1.35rem); margin-top: 1rem; font-weight: 300; opacity: 0.85; max-width: 80%; line-height: 1.5; text-shadow: 0 2px 10px rgba(0,0,0,0.3);">${section.texts[n]}</p>` : ""}
            </div>
          `).join("")}
          <div class="countdown-item countdown-go-item" style="position: absolute; display: flex; flex-direction: column; align-items: center; justify-content: center; width: 100%; text-align: center;">
            <span class="countdown-go" style="position: static; opacity: 1; display: block; font-size: clamp(3.5rem, 12vw, 7rem);">${section.goText || "🎉"}</span>
          </div>
        </div>
      `;
      container.appendChild(div);
      return div;
    },

    animate(tl, el) {
      const items = el.querySelectorAll(".countdown-item:not(.countdown-go-item)");
      const goItem = el.querySelector(".countdown-go-item");

      // Set initial states
      gsap.set(items, { display: "none", opacity: 0 });
      gsap.set(goItem, { display: "none", opacity: 0 });

      items.forEach((item) => {
        tl.set(item, { display: "flex" })
          .fromTo(item,
            { scale: 0, opacity: 0, rotation: -10 },
            { scale: 1, opacity: 1, rotation: 0, duration: 0.6, ease: "back.out(1.2)" }
          )
          .to(item, { scale: 1.4, opacity: 0, duration: 0.4 }, "+=1.8")
          .set(item, { display: "none" });
      });

      tl.set(goItem, { display: "flex" })
        .fromTo(goItem,
          { scale: 0, opacity: 0 },
          { scale: 1.2, opacity: 1, duration: 0.6, ease: "elastic.out(1, 0.5)" }
        )
        .to(goItem, { scale: 0.2, opacity: 0, duration: 0.5 }, "+=1.5")
        .set(goItem, { display: "none" });
    },
  };
})();
