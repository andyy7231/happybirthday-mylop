(function () {
  window.Components = window.Components || {};

  window.Components.song_reflection = {
    render(container, section) {
      const div = document.createElement("div");
      div.className = "section section-song_reflection";
      div.style.opacity = "0"; // Hide container initially

      // Text Groups Container
      const wrapper = document.createElement("div");
      wrapper.className = "reflection-wrapper";
      wrapper.style.position = "relative";
      wrapper.style.zIndex = "3";
      wrapper.innerHTML = `
        <div class="reflection-group reflection-group-0" style="position: absolute; width: 100%; top: 50%; transform: translateY(-50%); opacity: 0; display: none; flex-direction: column; align-items: center; justify-content: center; text-align: center;">
          <p class="reflection-line">Some people hear Half a Heart and think it's a sad song.</p>
          <p class="reflection-line" style="margin-top: 0.5rem;">But whenever I listen to it,</p>
          <p class="reflection-line" style="margin-top: 0.5rem;">it reminds me of how lucky I am.</p>
        </div>
        <div class="reflection-group reflection-group-1" style="position: absolute; width: 100%; top: 50%; transform: translateY(-50%); opacity: 0; display: none; flex-direction: column; align-items: center; justify-content: center; text-align: center;">
          <p class="reflection-line">Because I don't wake up to half a blue sky.</p>
          <p class="reflection-line" style="margin-top: 0.5rem;">I don't walk around with half a heart.</p>
          <p class="reflection-line" style="margin-top: 0.5rem;">I get to love someone as beautiful as you.</p>
        </div>
        <div class="reflection-group reflection-group-2" style="position: absolute; width: 100%; top: 50%; transform: translateY(-50%); opacity: 0; display: none; flex-direction: column; align-items: center; justify-content: center; text-align: center;">
          <p class="reflection-line">And that's one of the greatest gifts life has ever given me.</p>
          <p class="reflection-line" style="margin-top: 0.5rem; font-weight: 600; color: var(--primary); text-shadow: 0 0 10px rgba(244,114,182,0.3);">Happy Birthday, my favorite person.</p>
          <p class="reflection-line" style="margin-top: 0.5rem;">Thank you for making my world feel whole.</p>
          <span class="reflection-heart">♡</span>
        </div>
      `;
      div.appendChild(wrapper);

      container.appendChild(div);
      return div;
    },

    animate(tl, el) {
      const groups = el.querySelectorAll(".reflection-group");

      // Fade in the section container at the start of its animation
      tl.to(el, { opacity: 1, duration: 1.0, ease: "power2.out" });

      // Set groups to initial state
      gsap.set(groups, { display: "none", opacity: 0 });

      // Animate each group in sequence
      groups.forEach((group, index) => {
        const lines = group.querySelectorAll(".reflection-line");
        const heart = group.querySelector(".reflection-heart");

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
          tl.to({}, { duration: 3.5 });
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
