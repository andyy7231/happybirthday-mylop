(function () {
  window.Components = window.Components || {};

  window.Components.wishes_future = {
    render(container, section) {
      const div = document.createElement("div");
      div.className = "section section-wishes_future";
      div.style.opacity = "0"; // Hide section container initially

      const lines = section.lines || [];

      // Create floating background hearts
      const heartsContainer = document.createElement("div");
      heartsContainer.className = "hearts-bg-container";
      heartsContainer.style.position = "absolute";
      heartsContainer.style.inset = "0";
      heartsContainer.style.overflow = "hidden";
      heartsContainer.style.pointerEvents = "none";
      heartsContainer.style.zIndex = "1";
      div.appendChild(heartsContainer);

      const heartsCount = 15;
      for (let i = 0; i < heartsCount; i++) {
        const heart = document.createElement("div");
        heart.className = "floating-heart";
        heart.innerHTML = Math.random() > 0.5 ? "♡" : "♥";
        heart.style.left = `${Math.random() * 100}%`;
        heart.style.top = `${80 + Math.random() * 20}%`; // Start near bottom
        heart.style.fontSize = `${1 + Math.random() * 1.5}rem`;
        heartsContainer.appendChild(heart);
      }

      // Wishes text
      const wrapper = document.createElement("div");
      wrapper.className = "wishes-future-wrapper";
      wrapper.style.zIndex = "2";
      wrapper.innerHTML = lines
        .map((l) => `<p class="wishes-future-line">${l}</p>`)
        .join("");
      div.appendChild(wrapper);

      container.appendChild(div);
      return div;
    },

    animate(tl, el) {
      const lines = el.querySelectorAll(".wishes-future-line");
      const hearts = el.querySelectorAll(".floating-heart");

      // Animate background hearts gently floating up
      hearts.forEach((heart) => {
        gsap.to(heart, {
          y: "-=120vh",
          x: () => (Math.random() * 100 - 50),
          rotation: () => Math.random() * 360,
          opacity: () => 0.05 + Math.random() * 0.25,
          duration: () => 8 + Math.random() * 10,
          repeat: -1,
          ease: "none"
        });
      });

      // Fade in the section container at the start of its animation
      tl.to(el, { opacity: 1, duration: 0.8, ease: "power2.out" });

      // Sequential fade in of wishes lines
      lines.forEach((line, index) => {
        tl.fromTo(line,
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" },
          "-=0.4"
        );
        
        // Add slightly longer pause on the last line
        const delay = index === lines.length - 1 ? 2.5 : 1.2;
        tl.to({}, { duration: delay });
      });

      // Exit section
      tl.to(el, { duration: 0.8, opacity: 0, y: -30 }, "+=0.5");
    },
  };
})();
