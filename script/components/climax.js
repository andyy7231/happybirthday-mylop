(function () {
  window.Components = window.Components || {};

  window.Components.climax = {
    render(container, section) {
      const div = document.createElement("div");
      div.className = "section section-climax";
      div.style.opacity = "0"; // Hide section container initially

      // Deep starry sky overlay
      const sky = document.createElement("div");
      sky.className = "climax-sky";
      sky.style.position = "absolute";
      sky.style.inset = "0";
      sky.style.background = "radial-gradient(circle at center, #111827 0%, #030712 100%)";
      sky.style.zIndex = "1";
      div.appendChild(sky);

      // Twinkling stars
      const starsContainer = document.createElement("div");
      starsContainer.style.position = "absolute";
      starsContainer.style.inset = "0";
      starsContainer.style.zIndex = "2";
      div.appendChild(starsContainer);

      const starsCount = 60;
      for (let i = 0; i < starsCount; i++) {
        const star = document.createElement("div");
        star.className = "climax-star";
        star.style.position = "absolute";
        star.style.width = `${1 + Math.random() * 2}px`;
        star.style.height = star.style.width;
        star.style.background = "#fff";
        star.style.borderRadius = "50%";
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.opacity = Math.random();
        star.style.boxShadow = "0 0 4px #fff";
        starsContainer.appendChild(star);
      }

      // Text Groups Container
      const wrapper = document.createElement("div");
      wrapper.className = "climax-wrapper";
      wrapper.style.position = "relative";
      wrapper.style.zIndex = "3";
      wrapper.innerHTML = `
        <div class="climax-group climax-group-0" style="position: absolute; width: 100%; top: 50%; transform: translateY(-50%); opacity: 0; display: none; flex-direction: column; align-items: center; justify-content: center; text-align: center;">
          <p class="climax-line">Out of everyone I could have met...</p>
          <p class="climax-line" style="margin-top: 0.5rem;">I'm grateful that life brought me to you.</p>
        </div>
        <div class="climax-group climax-group-1" style="position: absolute; width: 100%; top: 50%; transform: translateY(-50%); opacity: 0; display: none; flex-direction: column; align-items: center; justify-content: center; text-align: center;">
          <p class="climax-line">Thank you for being part of my happiness.</p>
          <p class="climax-line" style="margin-top: 0.5rem;">Thank you for being you.</p>
        </div>
        <div class="climax-group climax-group-2" style="position: absolute; width: 100%; top: 50%; transform: translateY(-50%); opacity: 0; display: none; flex-direction: column; align-items: center; justify-content: center; text-align: center;">
          <p class="climax-line">And if I could make one wish today...</p>
          <p class="climax-line" style="margin-top: 0.5rem;">I wish that this won't be the last birthday I celebrate with you.</p>
        </div>
        <div class="climax-group climax-group-3" style="position: absolute; width: 100%; top: 50%; transform: translateY(-50%); opacity: 0; display: none; flex-direction: column; align-items: center; justify-content: center; text-align: center;">
          <p class="climax-line" style="font-weight: 600; font-size: clamp(1.3rem, 4.2vw, 1.8rem); color: var(--primary); text-shadow: 0 0 10px rgba(244,114,182,0.3);">Happy Birthday, My Love.</p>
          <p class="climax-line" style="margin-top: 0.5rem;">I love you.</p>
          <p class="climax-line" style="margin-top: 0.5rem;">More than words could ever explain.</p>
          <span class="climax-heart">♡</span>
        </div>
      `;
      div.appendChild(wrapper);

      container.appendChild(div);
      return div;
    },

    animate(tl, el) {
      const groups = el.querySelectorAll(".climax-group");
      const stars = el.querySelectorAll(".climax-star");

      // Twinkle stars randomly
      stars.forEach((star) => {
        gsap.to(star, {
          opacity: () => 0.1 + Math.random() * 0.9,
          scale: () => 0.5 + Math.random() * 0.8,
          duration: () => 1 + Math.random() * 2,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut"
        });
      });

      // Fade in the section container at the start of its animation
      tl.to(el, { opacity: 1, duration: 1.2, ease: "power2.out" });

      // Set groups to initial state
      gsap.set(groups, { display: "none", opacity: 0 });

      // Animate each group in sequence
      groups.forEach((group, index) => {
        const lines = group.querySelectorAll(".climax-line");
        const heart = group.querySelector(".climax-heart");

        tl.set(group, { display: "flex", opacity: 1 });

        lines.forEach((line, lineIdx) => {
          if (lineIdx === 0) {
            tl.fromTo(line, 
              { opacity: 0, y: 20 }, 
              { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
            );
          } else {
            tl.fromTo(line, 
              { opacity: 0, y: 20 }, 
              { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
              "-=0.4"
            );
          }
        });

        if (heart) {
          tl.fromTo(heart, { opacity: 0, scale: 0.3 }, { opacity: 1, scale: 1, duration: 1, ease: "back.out(1.5)" }, "+=0.3");
        }

        if (index < groups.length - 1) {
          // Keep text visible
          tl.to({}, { duration: 3.2 });
          // Fade out before next group
          tl.to(group, { opacity: 0, y: -20, duration: 0.6 })
            .set(group, { display: "none" });
        } else {
          // Last group stays for reading
          tl.to({}, { duration: 4.5 });
        }
      });

      // Exit whole section
      tl.to(el, { duration: 0.8, opacity: 0, y: -30 }, "+=0.5");
    },
  };
})();
