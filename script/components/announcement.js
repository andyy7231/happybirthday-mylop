(function () {
  window.Components = window.Components || {};

  window.Components.announcement = {
    render(container, section) {
      const div = document.createElement("div");
      div.className = "section section-announcement";

      if (section.texts && Array.isArray(section.texts) && section.texts.length >= 3) {
        div.innerHTML = `
          <div class="announcement-group-1" style="position: absolute; width: 85%; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center;">
            <p class="announcement-p-1" style="font-size: clamp(1.1rem, 3.5vw, 1.6rem); font-weight: 300; opacity: 0; line-height: 1.6; margin-bottom: 1rem;">${section.texts[0]}</p>
            <p class="announcement-p-2" style="font-size: clamp(1.1rem, 3.5vw, 1.6rem); font-weight: 300; opacity: 0; line-height: 1.6;">${section.texts[1]}</p>
          </div>
          <div class="announcement-group-2" style="position: absolute; width: 85%; opacity: 0; text-align: center; display: flex; align-items: center; justify-content: center;">
            <p class="announcement-p-last" style="font-size: clamp(1.6rem, 5vw, 2.5rem); font-weight: 700; color: var(--primary); text-shadow: 0 0 15px rgba(244,114,182,0.4); line-height: 1.5;">${section.texts[2]}</p>
          </div>
        `;
      } else {
        div.innerHTML = `<p class="announcement-p" style="position: static; opacity: 1; font-size: clamp(1.5rem, 5vw, 2.5rem); font-weight: 600;">${section.text || "It's your birthday!!"}</p>`;
      }
      container.appendChild(div);
      return div;
    },

    animate(tl, el) {
      const g1 = el.querySelector(".announcement-group-1");
      const p1 = el.querySelector(".announcement-p-1");
      const p2 = el.querySelector(".announcement-p-2");
      const g2 = el.querySelector(".announcement-group-2");

      if (g1 && g2) {
        // Initialize GSAP states
        gsap.set([g1, g2], { display: "none", opacity: 1 });
        gsap.set([p1, p2], { opacity: 0 });

        tl.set(g1, { display: "flex" })
          .fromTo(p1, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 })
          .fromTo(p2, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, "+=0.8")
          .to(g1, { opacity: 0, y: -20, duration: 0.6 }, "+=2.5")
          .set(g1, { display: "none" })
          .set(g2, { display: "flex" })
          .fromTo(g2, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 })
          .to(g2, { opacity: 0, y: -20, duration: 0.6 }, "+=3")
          .set(g2, { display: "none" });
      } else {
        const p = el.querySelector(".announcement-p");
        tl.from(p, { duration: 0.7, opacity: 0, y: 15 })
          .to(p, { duration: 0.7, opacity: 0, y: -15, opacity: 0 }, "+=3");
      }
    },
  };
})();
