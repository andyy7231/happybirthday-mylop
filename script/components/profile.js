(function () {
  window.Components = window.Components || {};

  window.Components.profile = {
    render(container, section, config) {
      const div = document.createElement("div");
      div.className = "section section-profile";
      div.innerHTML = `
        <div class="profile-container">
          <div class="profile-wrapper">
            <img src="${config.photo}" alt="profile" class="profile-picture" />
          </div>
          <div class="wish">
            <h3 class="wish-hbd">${section.wishTitle || "Happy Birthday!"}</h3>
            <h5 class="wish-text">${section.wishText || ""}</h5>
          </div>
        </div>
      `;
      
      // Split wish title into words, and then characters to prevent word breaking
      const hbd = div.querySelector(".wish-hbd");
      const text = hbd.textContent;
      const words = text.split(" ");
      
      hbd.innerHTML = words.map(word => {
        const charSpans = word.split("")
          .map(ch => `<span>${ch}</span>`)
          .join("");
        return `<span class="wish-word" style="display: inline-block; white-space: nowrap;">${charSpans}</span>`;
      }).join(" ");

      container.appendChild(div);
      return div;
    },

    animate(tl, el) {
      // Photo appears with gentle scale
      tl.from(el.querySelector(".profile-picture"), {
        duration: 0.8, scale: 0.5, opacity: 0, ease: "back.out(1.4)",
      }, "-=2")
      // Wish title letters stagger in (only target the character spans, not the word containers)
      .from(el.querySelectorAll(".wish-hbd .wish-word > span"), {
        duration: 0.5, opacity: 0, y: -30,
        ease: "back.out(1.7)", stagger: 0.04,
      })
      // Color each letter
      .to(el.querySelectorAll(".wish-hbd .wish-word > span"), {
        color: "var(--primary)", duration: 0.4,
        stagger: 0.03, ease: "none",
      }, "-=0.3")
      // Wish text fades in
      .from(el.querySelector(".wish-text"), {
        duration: 0.5, opacity: 0, y: 10,
      }, "-=0.2")
      // Hold the screen for 10 seconds to allow the user to read the wishes
      .to({}, { duration: 10 });
    },

    exit(tl, el) {
      tl.to(el, {
        duration: 0.6, opacity: 0, y: 20,
      });
    },
  };
})();
